import React, { useEffect, useMemo, useState } from 'react'
import './movie-page.css'
import MediumVideoContinerW720 from '../../Components/Containers/MediumVideoContinerW720/MediumVideoContinerW720'
import Footer from '../../Components/Footer/Footer'
import Retailers from '../../Components/Retailers/Retailers'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/cart'
import { addToWishlist } from '../../Redux/wishlist'
import HoverInfo from '../../Components/HoverInfo/HoverInfo'
import { addToCheckout } from '../../Redux/Checkout'

export default function MoviePage() {
  const[showRetailers,setShowRetailers]=useState(false)
  const[showInfo,setShowInfo]=useState({
    show:false,
    content:'more info',
    x:0,
    y:0,
  })
  const moviesSelector = useMemo(()=>(state)=>state.movies.array,[])
  const allMovies = useSelector(moviesSelector)
  const dispatch = useDispatch()
  const nav = useNavigate()
  const {name} = useParams()
  const[movie,setMovie]=useState({})
  const[reatilers]=useState([
    {
      name:'Netflix',
      link:'https://www.netflix.com/browse',
      img:'/icons/netflix.png',
      price:300
    }
  ])

  useEffect(()=>{
    const filter = allMovies.find(mov=> mov.name === name)
    setMovie(filter)
  },[])

  // handle show retailers
  const handleShowRetailers = (action)=>{
    if(action==='close'){
      setShowRetailers(prev=>prev = false)
    }else{
      setShowRetailers(prev=>prev = true)
    }
  }

  //handle more info in buttons
  const handleMouseOver = (action,e)=>{
    const r = e && e.currentTarget.getBoundingClientRect()
    if(action==='buy-mouse-over'){
      setShowInfo({
        ...showInfo,show:true,x:r.left-20,y:r.top+100,content:'Buy a physical DVD'
      })
    }else if(action==='wishlist-mouse-over'){
      setShowInfo({
        ...showInfo,show:true,x:r.left-20,y:r.top+100,content:'Save for Later'
      })
    }else if(action==='cart-mouse-over'){
      setShowInfo({
        ...showInfo,show:true,x:r.left-20,y:r.top+100,content:'Add to Cart'
      })
    }else{
      setShowInfo({
        ...showInfo,show:false
      })
    }
  }

  // adding items to checkout
  const handleCheckout = ()=>{
    dispatch(addToCheckout(movie))
    nav('/checkout')
  }
  return (
    <div className='movie-page'>

      {/* video container */}
       <div className="video_container">
        <MediumVideoContinerW720 
          playBtn={handleShowRetailers}
          poster={movie.portraitImg}
          video={movie.trailer}
          likes={movie.likes}/>
       </div>

       
        <div className="movie-details">

         {/* navigation buttons */}
          <div className="actions-btns">

            <div className='other_buttons flex items-center justify-between'>
              <button className='btn-bluegreen ' 
                onClick={()=>dispatch(addToCart(movie))}
                onMouseOver={(e)=>handleMouseOver('cart-mouse-over',e)}
                onMouseOut={()=>handleMouseOver('cart-mouse-out')}>
                  cart
              </button>
              <button className='btn-bluegreen ' 
                onClick={()=>dispatch(addToWishlist(movie))}
                onMouseOver={(e)=>handleMouseOver('wishlist-mouse-over',e)}
                onMouseOut={()=>handleMouseOver('wishlist-mouse-out')}>
                  Wishlist
              </button>
              <button className='btn-bluegreen '
                onMouseOver={(e)=>handleMouseOver('buy-mouse-over',e)}
                onMouseOut={()=>handleMouseOver('buy-mouse-out')}
                onClick={()=>handleCheckout()}
                >Buy Now
              </button>
            </div>
          </div>

        {/* movie cast and crew details */}
          <div className="name-description">
            <h2>{movie.name}</h2>
            <p>{movie.description}</p>

            <div className="cast-crew mt-5 flex flex-col gap-5">

              <div>
                <p className='font-bold'>Director:</p>
                <p>{movie.director}</p>
              </div>
              <div>
                <p className='font-bold'>Producer:</p>
                <p>Kenneth Branagh, Judy Hofflund, Ridley Scott, Simon Kinberg</p>
              </div>
              <div>
                <p className='font-bold'>Writer:</p>
                <p>Michael Green</p>
              </div>
              <div>
                <p className='font-bold'>Cast:</p>
                {movie.cast?.map(name=>(
                  <p>{name}</p>
                ))}
              </div>
              
            </div>

          </div>

        </div>

        <Footer/>
        {showRetailers && 
            <Retailers close={()=>handleShowRetailers('close')}
                       title={'Killers of The Flower Moon'}
                       img={"https://i.ytimg.com/vi/s-D8lcLEZpc/maxresdefault.jpg"}
                       retailers={reatilers}/>}

        {showInfo.show && <HoverInfo content={showInfo.content} top={showInfo.y} left={showInfo.x} />}               
    </div>
  )
}

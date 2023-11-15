import React, { useEffect, useMemo, useState } from 'react'
import './home-page.css'
import NavBarMain from '../../Components/NavBarMain/NavBarMain'
import MainVideoContainer from '../../Components/Containers/MainVideoContainer/MainVideoContainer'
import SmallCarousel from '../../Components/Carousel/SmallCarousel/SmallCarousel'
import Footer from '../../Components/Footer/Footer'
import { add,shift } from '../../Redux/movies'
import {useDispatch, useSelector } from 'react-redux'

export default function HomePage() {

  const dispatch = useDispatch()
  const movieSelector = useMemo(()=>(state)=>state.movies.array,[])
  const movies = useSelector(movieSelector)

  useEffect(()=>{
console.log('re-rendered');
console.log(movies);
  },[movies,movieSelector])
  
  return (
    <div>

     <div>
      <MainVideoContainer/>      
     </div>

     {/* <button onClick={()=>dispatch(shift())}>click me</button> */}

     <div className="small-carousel flex flex-col gap-5">
       <SmallCarousel heading={'Romance'}
                      array={movies}/>
 
        <SmallCarousel heading={'Drama'}
                      array={movies}/>  

        <SmallCarousel heading={'Action'}
                      array={movies}/>

         <SmallCarousel heading={'Adventure'}
                      array={movies}/>

        <SmallCarousel heading={'Sci-fi'}
                      array={movies}/> 

         <SmallCarousel heading={'Horror'}
                      array={movies}/>
                     
                                        
     </div>

    <div className='footer'>
      <Footer/>
    </div>

    </div>
  )
}

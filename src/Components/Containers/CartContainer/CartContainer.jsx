import React, { useEffect, useState } from 'react'
import cartContainerCss from './cart-container.module.css'
import ContainerH90px from '../ContainerH90px/ContainerH90px'
import { useDispatch } from 'react-redux'

export default function CartContainer(props) {
    const[movies,setMovies]=useState([])
    const[total,setTotal]=useState(0)
    const dispatch = useDispatch()

    useEffect(()=>{
      setMovies(movies=>movies=props.array)
      const cartTotal = props.array.reduce((tot, mov) => tot + mov.price, 0);
      setTotal(cartTotal);
    },[props])
    
  return (
    <div
     className={cartContainerCss.container + ' flex flex-col items-center justify-between'}>
        <div className={cartContainerCss.explore}>
           {movies.length>0 ? 
           movies.map(mov=>(
            <ContainerH90px key={mov.id} 
            img={mov.portraitImg}
            title={mov.name}
            category={mov.category}
            price={mov.price}
            date={mov.date}
            style={' flex items-center justify-between '}
            remove={()=>dispatch(props.remove(mov))}/> 
           ))
           
            :
            <p>Nothing to show here!</p>
        }             
        </div>
        <div className={cartContainerCss.total+ ' flex items-center justify-between'}>
            <p className='ml-10'>{props.title}</p>
           <div className='flex items-center justify-end'>
              <p className='mr-10'>₹{total}</p>
              <button className='btn-bluegreen mr-10'>{props.btnName}</button>
           </div>
        </div>
     </div>
  )
}

import React, { useEffect, useMemo, useRef, useState } from 'react'
import smallCarouselCss from './small-carousel.module.css'
// import { moviesLink } from '../../../DATA_BASE'
import ContainerW320 from '../../Containers/ContainerW320/ContainerW320'
import { useNavigate } from 'react-router-dom'

export default function SmallCarousel(props) {
  const nav = useNavigate()
  const[array,setArray]=useState([])

  useEffect(()=>{
    const a = props.array.filter(mov=>mov.category.includes(props.heading))
  console.log(a);
  setArray(a)
  },[])
    
  return (
    <div className={smallCarouselCss.main_container + ' flex flex-col items-start justify-between'}>
        
         <h3>{props.heading}</h3>

         <div className={smallCarouselCss.movie_list}>
         { 
          array.map(movie=>(
            <div key={movie.id}>
                <ContainerW320  
                        imgLink={movie.landscapeImg}
                        name={movie.name}
                        onClick={()=>nav(`/movies/${movie.name}`)}/>
            </div>
         ))}
         </div>
        
    </div>
  )
}

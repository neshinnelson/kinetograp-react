import React from 'react'
import './video-container-w-100.css'

export default function VideoContainerW100(props) {

  
  return (
    <div className='container-w-100 flex-center-sp-around'
         style={{flexDirection:props.flexDirection}}>
      <div>
        <h4>{props.heading}</h4>
        <p>{props.content}</p>
      </div>
      
        <img src={props.img} alt="movie" />


    </div>
  )
}

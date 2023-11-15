import React, { useEffect } from 'react'
import containerH90pxCss from './container-h90px.module.css'

export default function ContainerH90px(props) {
  useEffect(()=>{
    // console.log(props.title);
  },[props])
  return (
    <div className={containerH90pxCss.container + props.style}>
         <img src={props.img} alt="avatar" style={props.styleImg}/>
         <p>{props.title}</p>
         <p>{props.category}</p>
         <p>{props.date}</p>
         <p>{props.price}</p>
         <button className='btn-light-bluegreen' 
         onClick={props.remove}
         style={{display:props.displayBtn}}
         >Remove</button>
    </div>
  )
}

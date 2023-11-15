import React, { useState } from 'react'
import conatinerW320Css from'./container-w-320.module.css'
import play_icon from '/icons/play-button.png'
import info_icon from '/icons/info.png'
import like_icon from '/icons/like.png'

export default function ContainerW320(props) {

  const[showButtons,setShowButtons]=useState(false)
  // const[container]

  const handleMouseOver = (action)=>{
    if(action==='mouse-over'){
      setShowButtons(true)
    }else{
      setShowButtons(false)
    }
  }

  return (
    <div className={conatinerW320Css.container}
          onMouseOver={()=>handleMouseOver('mouse-over')}
          onMouseOut={handleMouseOver}
          style={{backgroundImage:`url(${props.imgLink})`}}>
      
      {/* <img src={props.imgLink} alt="movie poster"/> */}

      {/* movie name */}
      <p>{props.name}</p>
      
      {/* buttons */}
      {showButtons && 
        <div className={conatinerW320Css.btns + ' flex items-center justify-around'}>
          
          <button>
            <img src={play_icon} alt="play" onClick={props.onClick}/>
          </button>

          <button>
            <img src={info_icon} alt="more information" />
          </button>

          <button>
            <img src={like_icon} alt="like" />
          </button>

        </div>
      }
    </div>
  )
}

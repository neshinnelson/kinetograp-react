import React, { useEffect, useState } from 'react'
import hoverInfoCss from './HoverInfo.module.css'

export default function HoverInfo(props) {

  return (
    <div className={hoverInfoCss.container}
         style={{top:props.top,left:props.left}}>
            <p>{props.content}</p>
         </div>
  )
}

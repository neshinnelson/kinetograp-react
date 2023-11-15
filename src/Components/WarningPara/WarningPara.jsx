import React from 'react'
import './warning-para.css'

export default function WarningPara(props) {
  return (
    <div className='warning-para-container'>
        <p>{props.content}</p>
    </div>
  )
}

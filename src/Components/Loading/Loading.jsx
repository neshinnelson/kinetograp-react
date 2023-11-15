import React from 'react'
import './loading.css'

export default function Loading() {
  return (
    <div className='loading flex-center-column'>
        <div className="loading-circle"></div>
        <div className="loading-circle-2"></div>
        <h6>Loading...</h6>
    </div>
  )
}

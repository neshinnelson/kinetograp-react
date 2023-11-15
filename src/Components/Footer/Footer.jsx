import React, { useState } from 'react'
import './footer.css'

export default function Footer() {

    const[year]=useState(new Date().getFullYear())

  return (
    <div className='footer-container'>
        <div className="footer-copyright">
            <footer>Copyright @ {year}</footer>
        </div>

    </div>
  )
}

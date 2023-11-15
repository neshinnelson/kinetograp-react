import React from 'react'
import './navbar.css'
import site_logo from '/kinetograph.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar-comp flex-center-sp-around'>

        <Link to={'/browse'}>
        <img src={site_logo} alt="kinetograph site name" id='site-icon' />
        </Link>

        <div className="navbar-rightend">
            <button className='btn-bluegreen'>Sign In</button>
        </div>
    </div>
  )
}

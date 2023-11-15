import React, { useEffect, useState } from 'react'
import './navbar-main.css'
import site_logo from '/kinetograph.png'
import { Link } from 'react-router-dom'
import DropDown from '../TailWind Componenets/DropDown'
import cart_icon from '/icons/grocery-store.png'
import search_icon from '/icons/search.png'
import heart_icon from '/icons/heart.png'
import notification_icon from '/icons/notification.png'
import menu_icon from '/icons/menu stack.png'


export default function NavBarMain() {
   
  return (
    <div className='navbar-main'>

        {/* site icon */}
        <div className="site-icon flex items-center justify-center">
        <Link to={'/in'}>
            <img src={site_logo} alt="site logo" />
        </Link>    
        </div>

      {window.innerWidth > 540 ?
       <>
       {/* browse links */}
       <div className="navbar-main-browse-links 
                      flex items-center justify-between">
           <Link to={'/browse'}><p>Home</p></Link>
           <Link><p>TV Shows</p></Link>
           <Link to={'/browse'}><p>Movies</p></Link>
           {window.innerWidth > 912 &&
           <>
           <Link><p>News & Popular</p></Link>
           <Link><p>My List</p></Link>
           <Link><p>Browse by Language</p></Link>
           </>}
       </div>

       {/* right end */}
       <div className="navbar-main-rightend
                       flex items-center justify-end">
           <button><img src={search_icon} alt="cart" className='navbar-main-icons'/></button>
           <button><img src={cart_icon} alt="cart" className='navbar-main-icons'/></button>
           <Link to={'/profile'}><button><img src={heart_icon} alt="cart" className='navbar-main-icons'/></button></Link>
           <button><img src={notification_icon} alt="cart" className='navbar-main-icons'/></button>
           <DropDown name={sessionStorage.getItem('firstName')||'login'} itemArray={['Profile','Help','Sign Out']}/>
       </div> 

      </>
      :
       
        <DropDown name={<img src={menu_icon} alt={'menu icon'}style={{width:'20px'}}/>}
                 itemArray={['Profile','Help','Sign Out','Home','TV Shows','Movies','News & Popular','My List','Browse by Laguage']}/>} 
    
    </div>
  )
}
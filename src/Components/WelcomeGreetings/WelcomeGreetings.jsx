import React from 'react'
import './welcome-greetings.css'
import site_logo from '/kinetograph.png'
import poster from '/wandavision-poster.png'
import theater from '/images/theater.png'
import { Link, useNavigate } from 'react-router-dom'

export default function WelcomeGreetings() {
  const nav = useNavigate()


  return (
    <div className='welcome-greeting-signup'
    style={{backgroundImage:`url(${theater})`}}>

        <div className="middle-gradient"></div>

{/* displays site name & sigin btn      */}
        <div className="logo-signin flex-center-sp-around">
          <Link to={'/browse'}>
                <img src={site_logo} alt="kinetograph site name" id='site-icon' />
          </Link>      

            <div className="navbar-rightend">
                <button className='btn-bluegreen'
                        onClick={()=>nav('/login')}>Sign In</button>
            </div>
        </div>

       
{/* display quote and signup btn */}
        <div className="greeting-signup flex-center-column">
            <h5>Movies are like love affairs; some are fleeting and others mark us for a lifetime.</h5>
            <p>- François Truffaut.</p>
            <p>Browse our extensive library of movies, including new releases, classics, and everything in between.</p>
            <button className='btn-bluegreen padding-2'
                    onClick={()=>nav('/signup')}>Sign Up</button>
        </div>

    </div>
  )
}

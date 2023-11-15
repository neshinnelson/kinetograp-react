import React from 'react'
import './welcome-page.css'
import WelcomeGreetings from '../../Components/WelcomeGreetings/WelcomeGreetings'
import ContainerW100 from '../../Components/Containers/ContainerW100/VideoContainerW100'
import tv_img from '/images/tv-image.png'
import mobile_img from '/images/mobile.jpg'
import batman_img from '/images/batman.png'
import Footer from '../../Components/Footer/Footer'

export default function WelcomePage() {
  return (
    <div>
        <WelcomeGreetings/>
        
        <div className="welcome-page-features">
          <ContainerW100 
                heading={'Enjoy on your TV'}
                content={'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more'}
                img={tv_img}
                flexDirection={'row'}/>

          <ContainerW100 
                heading={'Download your shows to watch offline'}
                content={'Save your favourites easily and always have something to watch.'}
                img={mobile_img}
                flexDirection={'row-reverse'}/>   
          
          <ContainerW100 
                heading={'Let the Watchlist grow'}
                content={'Create and manage your own watchlist so you can easily keep track of the movies you want to watch.'}
                img={batman_img}
                flexDirection={'row'}/>     

          <Footer/>      
        </div>         
              
    </div>
  )
}

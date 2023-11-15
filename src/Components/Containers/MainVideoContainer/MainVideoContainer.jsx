import React, { useRef, useState } from 'react'
import MainVideoCSS from'./main-video-container.module.css'
import video from '/videos/Shouse.mp4'
import play_icon from '/icons/play-button.png'
import info_icon from '/icons/info.png'
import mute_icon from '/icons/mute.png'
import unmute_icon from '/icons/unmute.png'

export default function MainVideoContainer(props) {
  const[mute,setMute]=useState(true)
  const videoRef = useRef(null)

  // handle mute
  const handleMute = ()=>{
    videoRef.current.muted = !videoRef.current.muted
    setMute(!mute)
  }

  return (
    <div className={MainVideoCSS.main_container}>

        {/* video div */}
        <div className={MainVideoCSS.video_box + 'flex items-center justify-center'}>

            <video ref={videoRef} autoPlay  width={'100%'} height={'100%'} muted>
                <source src={video}/>
                Sorry No Video Available Now!
            </video>
      
        </div>

        {/* movie details */}
        <div className={MainVideoCSS.movie_details} style={{display:props.details || ''}}>
              
              <div className={MainVideoCSS.movie_name}>
                <h2>The Kick</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nesciunt quisquam. Ratione ea aspernatur maiores blanditiis a? Soluta, dicta quo. Et dicta sed cumque natus, accusantium eius quae perferendis aperiam!</p>
              </div>
              
              <div className='flex justify-between'>

                <div className={MainVideoCSS.play_button_box}>
                  <button className='btn-bluegreen flex gap-2 mr-10'>
                    <img src={play_icon} alt="play button" width={'25px'} />
                    Play
                  </button>

                  <button className='btn-bluegreen flex gap-2'>
                  <img src={info_icon} alt="play button" width={'25px'} />
                    More Info
                  </button>
                </div>

                {/* mute buttons */}
                <button className='btn-bluegreen mr-10'>
                {mute ?
                <img src={mute_icon} alt="mute icon" width={'25px'} onClick={handleMute}/>
                :
                <img src={unmute_icon} alt="unmute icon" width={'25px'} onClick={handleMute} />
                }
                </button>

              </div>

            </div>
        
    </div>
  )
}

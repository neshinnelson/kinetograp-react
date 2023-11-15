import React, { useRef, useState } from 'react'
import mediumVideoContainerCss from './video-container-720.module.css'
import video from '/videos/Coolio.mp4'
import mute_icon from '/icons/mute.png'
import unmute_icon from '/icons/unmute.png'
import play_icon from '/icons/play-button.png'
import info_icon from '/icons/info.png'
import like_icon from '/icons/like.png'
import HoverInfo from '../../HoverInfo/HoverInfo'

export default function MediumVideoContinerW720(props) {
    const muteRef = useRef(null)
    const[mute,setMute]=useState(true)
    const[showInfo,setShowInfo]=useState({
        show:false,
        event:{},
        content:'more info',
        x:0,
        y:0,

    })

    //handle video mute
    const handleMute = ()=>{
        muteRef.current.muted = !muteRef.current.muted
        setMute(prev=>prev = !prev)
    }

    //handle show info
    const handleMouseOver = (action,e)=>{
        const r = e && e.currentTarget.getBoundingClientRect()

        if(action==='likes-mouse-over'){
            setShowInfo({
                ...showInfo,show:true,x:r.left-35,y:r.top+50,content:props.likes+' likes'
            })
        }else if(action==='more-info-mouse-over'){
            setShowInfo({
                ...showInfo,show:true,x:r.left-35,y:r.top+50,content:'more info'
            })
        }else if(action==='play-mouse-over'){
            setShowInfo({
                ...showInfo,show:true,x:r.left-35,y:r.top+50,content:'show retailers'
            })
        }else if('mouse-out'){
            setShowInfo(false)
        }
    }
  return (
    <div className={mediumVideoContainerCss.container}>
        {/* video container */}
        <div className={mediumVideoContainerCss.video_box + ' flex items-center justify-center'}>
            <video ref={muteRef} autoPlay muted className={mediumVideoContainerCss.video}>
                <source src={video}/>
                Sorry No Video Available Now!
            </video>
        </div>

        {/* gradient layer */}
        <div className={mediumVideoContainerCss.gradient}></div>

        <button className={ mediumVideoContainerCss.mute_btn+' btn-bluegreen'}
                onClick={handleMute}>
           {mute ?
            <img src={mute_icon} alt="mute" />
            :
            <img src={unmute_icon} alt="unmute" />
           }
        </button>

        

        {/* image container */}
        <div className={mediumVideoContainerCss.portrait}>
            <img src={props.poster} alt="movie poster" />
            <div className={mediumVideoContainerCss.buttons+ " flex items-center justify-between"}>
                <button onClick={props.playBtn}>
                    <img src={play_icon} alt="play"
                        onMouseOver={(e)=>handleMouseOver('play-mouse-over',e)}
                        onMouseOut={()=>handleMouseOver('mouse-out')} />
                </button>

                <button>
                    <img src={info_icon} alt="more information" 
                        onMouseOver={(e)=>handleMouseOver('more-info-mouse-over',e)}
                        onMouseOut={()=>handleMouseOver('mouse-out')}/>
                </button>

                <button>
                    <img src={like_icon} alt="like" 
                        onMouseOver={(e)=>handleMouseOver('likes-mouse-over',e)}
                        onMouseOut={()=>handleMouseOver('mouse-out')}/>
                    {/* <p>89</p> */}
                </button>
            </div>
            {showInfo.show && <HoverInfo 
                                content={showInfo.content} 
                                top={showInfo.y} 
                                left={showInfo.x}/>}
        </div>

    </div>
  )
}

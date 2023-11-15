import React, { useState } from 'react'
import retailerCss from './retailers.module.css'

export default function Retailers(props) {
    const[retailers]=useState(props.retailers)

    // handle redirecting to retailer page
    const handleRedirect = (link)=>{
        alert('working')
        if(!link) return null
        window.open(link,'_blank')
    }
  return (
    <div className={retailerCss.container}>

        <img src="/icons/close.png" className={retailerCss.close} alt="close window" onClick={props.close}/>
       
        <div className={retailerCss.retailer_box + ''}>

            {/* movie image and title */}
            <div className={retailerCss.title_img} style={{backgroundImage:`url(${props.img})`}}>
                <h6>{props.title}</h6>
                <div className={retailerCss.gradient}></div>
            </div>

            {/* list of retailers available */}
            <div className={retailerCss.list}>
                {
                    retailers ?
                    retailers.map((retailer,ind)=>(
                        <div key={ind} className={retailerCss.retailer + ' flex items-center justify-between'}
                             onClick={()=>handleRedirect(retailer.link)}>
                            <img src={retailer.img} alt="retailer icon" />
                            <p>{retailer.name}</p>
                            <p>₹ {retailer.price}</p>
                        </div>
                    ))
                    :
                       <div className={retailerCss.retailer + ' flex items-center justify-between'}>
                           <p>No retailers available now!</p>
                       </div>
                }
               
            </div>
        </div>

    </div>
  )
}

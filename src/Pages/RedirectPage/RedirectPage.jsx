import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function RedirectPage() {
    const location = useLocation()
    const nav = useNavigate()

    useEffect(()=>{
        
    if(location.pathname==='/'){
        nav('/in')
    }
    })
  return (
    <div>you are redirected</div>
  )
}

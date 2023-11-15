import React, { useEffect, useState } from 'react'
import DropDown from '../../Components/TailWind Componenets/DropDown'
import menu_icon from '/icons/menu stack.png'

export const NavBarMain = () => {
  const [showDropdown, setShowDropdown] = useState(true)

  useEffect(() => {
    const getWidth = () => {
      setShowDropdown(window.innerWidth < 481)
    }

    window.addEventListener('resize', getWidth)

    return () => {
      window.removeEventListener('resize', getWidth)
    }
  }, [])

  return (
    <div className='navbar-main'>
      {window.innerWidth <481 ? (
        <DropDown name={<img src={menu_icon} alt={'menu icon'}style={{width:'20px'}}/>}
                  itemArray={['Profile','Help','Sign Out','Home','TV Shows','Movies','News & Popular','My List','Browse by Laguage']}/>
      ) : (
        <p>Hello developer</p>
      )}
    </div>
  )
}

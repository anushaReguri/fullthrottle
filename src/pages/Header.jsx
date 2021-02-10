import React from 'react';
import logo from '../assets/logo.png'
import profileIcon from '../assets/profileTop.png'

function Header(props) {
  return (
    <div className='card-div p-10 header'>
      <img
                      className="pointer m-l-10 float-left"
                        title="Menu"
                        src={logo}
                        alt={'menu-icon'}
                    ></img>
                    <div className='float-right profile-div m-r-10'>
<span className='m-10'>Smitha</span>
                    <img
                        className="pointer"
                        src={profileIcon}
                        alt={'profile-icon'}
                    ></img>
                    </div>
    </div>
  )
}

export default Header

import React from 'react'
import {BsFillCaretDownFill,BsFillHeartFill,BsJustify
} from 'react-icons/bs';
import adminIcon from '../../assets/adminIcon.jpg'

function Header({OpenSidebar}) {
  return (
   <header className='header'>
   <div className='menu-icon'>
   <BsJustify className='icon' onClick={OpenSidebar}/>
   </div>
   <div className='header-left'>
   <h1>Dashboard</h1>
   </div>
   <div className='header-right'>
    <BsFillHeartFill className='heart-icon'/>
    <div className='profile-item'>
    <select className='header-dropdown'>
     <BsFillCaretDownFill/>
  
           <option>Manda Arpita</option>
           <option>Person 1</option>
           <option>Person 2</option>
          </select>
        <img className='profile-img' src={adminIcon} />
    </div>
   </div>
   </header>
  )
}

export default Header

import React from 'react'
import {BsFillGridFill,BsFillSlashCircleFill, BsPersonCircle} from 'react-icons/bs';
import {MdQueueMusic} from 'react-icons/md';
import {IoMdNotifications,IoIosSettings, IoMdHelpCircle} from 'react-icons/io';

function Sidebar({openSidebarToggle , OpenSidebar}) {
  return (
  <aside id='sidebar' className={openSidebarToggle?"sidebar-responsive":""}>
  <div className='sidebar-title'>
    <div className='sidebar-brand'>
        <h1>MUNSOW</h1>
    </div>
    <span className='icon close_icon' onClick={OpenSidebar}>X</span>
  </div>
  <ul className='sidebar-list'>
    <li className='sidebar-list-item'>
        <a href=''>
        <BsFillGridFill/> 
        <p>Dashboard</p> 
        </a>
    </li>
    <li className='sidebar-list-item'>
        <a href=''>
        <BsFillSlashCircleFill/> 
        <p>Practice Now</p> 
        </a>
    </li>
    <li className='sidebar-list-item'>
        <a href=''>
        <MdQueueMusic/> 
        <p>My Reports</p>
        </a>
    </li>
    <li className='sidebar-list-item'>
        <a href=''>
        <IoMdNotifications/> 
        <p>Notification</p>
        </a>
    </li>
    <br/><br/><br/>
    <li className='sidebar-list-item'>
        <a href=''>
        <BsPersonCircle/> 
        <p>My Profile</p>
        </a>
    </li>
    <li className='sidebar-list-item'>
        <a href=''>
        <IoIosSettings/>  
        <p>Settings</p>
        </a>
    </li>
    <br/><br/><br/>
    <li className='sidebar-list-item'>
        <a href=''>
        <IoMdHelpCircle/> 
        <p>Help & Support</p>
        </a>
    </li>
  </ul>
  </aside>
  )
}

export default Sidebar;

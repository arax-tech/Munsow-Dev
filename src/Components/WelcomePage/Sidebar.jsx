import React from 'react';
import '../../App.css';

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
        {/* <BsFillGridFill/>  */}
        <p>Home</p> 
        </a>
    </li>
    <br/><br/>
    <li className='sidebar-list-item'>
        <a href=''>
        {/* <BsFillGridFill/>  */}
        <p>Deep Analysis</p> 
        </a>
    </li>
    </ul>
  </aside>
  )
}

export default Sidebar;

import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs';
 import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Cards() {
  return (
    <div class="container">
    <div class="user-card">
        <div class="main-content">
          <h2>Jason Walker</h2>
          <p><span>Email:</span> example@example.com</p>
          <p><span>Location:</span> London, United Kingdom</p>
          <p><span>Occupation:</span> Web Developer</p>
          <p><span>About me:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className='btn'>Sign In</button>
        </div>
        
        {/* <div class="user-card-img">
          <img src="img/1.jpg" alt=""/>
        </div> */}
    </div>
</div>
  
  )
}

export default Cards

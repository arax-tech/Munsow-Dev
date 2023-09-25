import { useState } from 'react';
import './App.css';

import Header from './Components/Layouts/Header';
import Sidebar from './Components/Layouts/Sidebar';
import Home from './Components/Pages/Home';
// import Cards from './Components/Pages/Cards';
// import Sidebar from './Components/WelcomePage/Sidebar';
// import Header from './Components/WelcomePage/Header';
import WelcomePage from './Components/WelcomePage/WelcomePage';


function App() {

  const [openSidebarToggle, setOpenSidebarToggle]=useState(false)

  const OpenSidebar =() =>{
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
   <div className='grid-container'>
  <Header OpenSidebar={OpenSidebar}/>
  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
  {/* <WelcomePage/> */}
  <Home/>
  {/* <Cards/> */}
   </div>
  )
}

export default App;

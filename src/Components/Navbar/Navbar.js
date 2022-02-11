import React, { useState } from 'react';
import './Navbar.css'
import icon from '../../assets/shared/logo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import Burger from '../../assets/shared/icon-hamburger.svg'
  import Close from '../../assets/shared/icon-close.svg'

function Navbar() {

  const [visibility,setVisibility]=useState(false)


  return (
  <div className='Navbar'> 
    <div className='Icon'>
      <img className='Nav-img' src={icon}/>
      </div>
      <div className='Line'></div>
      <div className='Blured'>
      <Link to ={"/"}className='Click'>00 HOME</Link>
      <Link to ={"/Destination"}className='Click'>01 DESTINATION</Link>
      <Link to ={"/Crew"}className='Click'>02 CREW</Link>
      <Link to ={"/Technology"}className='Click'>03 TECHNOLOGY</Link>
      </div>
    {
      !visibility && (<img onClick={()=>setVisibility(true)} className='Burger' src={Burger}/>)
    }
    {
      visibility && (<div className='Burger-menu'>
      <img onClick={() =>setVisibility(false)} className='Close' src={Close} />
      <div>
        <Link to ={'/'} className='Burger-items'>00 Home</Link>
        <Link to ={'Destination'}className='Burger-items'>01 Destination</Link>
        <Link to ={'/Crew'}className='Burger-items'>02 Crew</Link>
        <Link to ={'/Technology'}className='Burger-items'>03 Technology</Link>
      </div>
    </div>)

    }
  </div>);
}


export default Navbar;

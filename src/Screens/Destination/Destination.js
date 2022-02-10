import React, { useState,useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Destination.css'
import data from '../../data.json'
import Moon from '../../assets/destination/image-moon.png'
import Mars from '../../assets/destination/image-mars.png'
import Europa from '../../assets/destination/image-europa.png'
import Titan from '../../assets/destination/image-titan.png'
import {Redirect,
Link,
} from 'react-router-dom'


function Destination() {

  const [selected, setSelected] = useState(data.destinations[0]);
 

   const renderImage = (name) => {
     switch (name) {
       case "Moon":
         return Moon;
       case "Mars":
          return Mars;
       case "Titan":
          return Titan;
       case "Europa":
         return Europa       
       default: 
          return Moon;
     }
   }

  return ( 
  <div className='Destination'>
    <Navbar />
    <div className='Planets'>
      <div className='Images'>
        <div className='Title'>
          
          <Link to={"/"}>
          <span className='Title-head'>01 PICK YOUR DESTINATION</span>
          </Link>
          
        </div>
        <img src={renderImage(selected.name)} />
      </div>
      <div className='Details'>
      <div className='Details-title'>
        {
          data.destinations.map((item) =>
           (<span style={
             {borderBottom:item.name == selected.name? "1px solid white":null}}
           onClick={() => setSelected(item)}>{item.name}</span>))
        }
      </div>
      <span className='Details-name'>
        {selected.name }
      </span>
      <span className='Details-span'>
        {selected.description}
      </span>
      <div className='Details-line'></div>
      <div className='Details-end'>
        <div className='Details-end-1'>
          <a>AVG DISTANCE</a>
          <a>EST.TRAVEL TIME</a>
        </div>
        <div className='Details-end-2'>
          <a>{selected.distance}</a>
          <a>{selected.travel}</a>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
}

export default Destination;

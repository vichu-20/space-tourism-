import React ,{useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Technology.css'
import tech1 from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import tech2 from '../../assets/technology/image-spaceport-portrait.jpg'
import tech3 from '../../assets/technology/image-space-capsule-portrait.jpg'
import text from '../../data.json'

function Technology() {

const [first, setfirst] = useState(text.technology[0]);

const renderImage =(name) =>{
  switch(name){
    case "Launch vehicle":
      return tech1;
    case "Spaceport":
      return tech2;
    case "Space capsule":
      return tech3;
  }
}


  return( 
  <div className='Technology'>  
    <Navbar />
    <div className='Tech-title'>03 SPACE LAUNCH 101</div>
    <div className='Tech-main'>
      <div className='Tech-select'>
      {
        text.technology.map((content , index)=>
        <div style={{backgroundColor : content == first ? "white": "transparent"}} onClick={()=>setfirst(content)} 
        className='Select'>
        <span style={{color  : content == first ? "black": "white" , fontSize 
      : content ==first ? 30 : 10
      }} className='Index'>{index + 1}</span>
        </div>) 
      } 
      </div>  
      <div className='Tech-details'>
        <div className='Details-title'>THE TERMINOLOGY...</div>
        <div className='Details-heading'>{first.name}</div>
        <div className='Details'>{first.description}</div>
      </div>
      <div className='Tech-images'>
        <img src={renderImage(first.name)} />
      </div>
    </div>
  </div>);
}

export default Technology;

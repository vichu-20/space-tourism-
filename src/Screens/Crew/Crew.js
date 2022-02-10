import React , {useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Crew.css'
import file from '../../data.json'
import First from '../../assets/crew/image-douglas-hurley.png'
import Second from '../../assets/crew/image-mark-shuttleworth.png'
import Third from '../../assets/crew/image-anousheh-ansari.png'
import Fourth from '../../assets/crew/image-victor-glover.png'



function Crew() {

  const [selected, setSelected] = useState(file.crew[0]);
  const renderImage = (name) => {
    switch(name){
      case "Douglas Hurley":
        return First;
      case "Mark Shuttleworth":
        return Second;
      case "Anousheh Ansari":
        return Third;
      case "Victor Glover":
        return Fourth;
    }
  }

  return( <div className='Crew'>
      <Navbar />
      <div className='Crew-div'>
        <div className='Crew-details'>
          <div className='Div-title'>02 MEET YOUR CREW</div>
          <span className='Crew-post'>{selected.role}</span>
          <span className='Crew-name'>{selected.name}</span>
          <span className='Crew-des'>{selected.bio}</span>
          <div className='Scroll'>
            {
              file.crew.map((single)=>
              <div onClick={()=>setSelected(single)}
               className='Round'>{selected.details}</div>)
            }
          </div>
        </div>
        <div className='Crew-image'>
          <img src={renderImage(selected.name)}/>
        </div>
      </div>
  </div>);
}

export default Crew;

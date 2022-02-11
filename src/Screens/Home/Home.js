import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';

function Home() {
  return (<div className='Home'>
    <Navbar />
    <div className='Description'>
      <div className='Des-Home'>
        <span className='Des-head'>SO, YOU WANT TO TRAVEL TO</span>
        <span className='Des-mid'>SPACE</span>
        <a className='Des-note'>Let's face it:if you want to go to space,you might as well genuinely go to 
          outer space and not hover kind of on the edge of it.Well sit back,and relax 
          because we'll give you a truly out of this world experience.
        </a>
      </div>
      <div className='Explore'>
        <button className='Explore-btn'>
          <span className='Explore-text'>EXPLORE</span>
          </button>
      </div>
    </div>
  </div>);
}

export default Home;

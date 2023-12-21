import React from 'react'
import {images} from '../../constants';
import Subheading from '../../constants/Subheading';
import "./FindUs.css"
const FindUs = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
          <div className="app__wrapper_info">
              <Subheading title="Contact"/>
              <h1 className="headtext__cormorant" style={{marginbottom: '3rem'}}>Find Us</h1>
              <div className="app__wrapper-content">
                  <p className="p__opensans">Lane Ends, Whatcroft Mall lane, CW9 75DC</p>
                  <p className="p__opensans" style={{color:'#DCCA87' , margin:'2rem 0'}}>Opening Hours</p>
                  <p className="p__opensans">Mon - Fri 10:00 am - 12:00 am</p>
                  <p className="p__opensans">Sat - Sun 10:00 am - 12:00 am</p>
      
              </div>
              <button className="custom__button" style={{margin:'2rem 0'}}>Visit Us</button>
              
          </div>
          <div className="app__wrapper_img">
              <img src={images.findus} alt="" />
          </div>
    </div> 
  )
}

export default FindUs
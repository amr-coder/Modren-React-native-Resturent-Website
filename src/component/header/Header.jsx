import React from 'react'
import {images} from '../../constants';
import "./Header.css"
import Subheading from '../../constants/Subheading';
const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper_info">
        <Subheading title="Chase the new taste"/>
        <h1 className="app__header-h1 headtext__cormorant">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{margin:'2rem 0'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste vero cum odit dignissimos quidem ab consectetur, eum nisi accusamus itaque perferendis repudiandae ex autem dolorem in dolorum omnis, quibusdam magni.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
           <img src={images.welcome} alt="header_img" /> 
      </div>
    </div>
  )
}

export default Header
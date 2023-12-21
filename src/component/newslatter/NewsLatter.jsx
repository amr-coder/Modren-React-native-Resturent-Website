import React from 'react';
import Subheading from '../../constants/Subheading';
import './NewsLatter.css';
const NewsLatter = () => {
  return (
    <div className='app__newsLatter'>
       <div className="app__newsLatter-heading">
          <Subheading title="NewsLatter"/>
          <h1 className="headtext__cormorant"> Subscribe to Our NewsLatter</h1>
          <p className="p__opensans">And Never mis our Latest Updates</p>

       </div>
       <div className="app__newsLatter-input flex__center">
          <input type="email" placeholder='Enter youe email' />
          <button className="custom__button">Subscribe</button>
       </div>
    </div>
  )
}

export default NewsLatter
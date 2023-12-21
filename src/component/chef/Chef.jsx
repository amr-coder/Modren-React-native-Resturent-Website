import React from 'react'
import {images} from '../../constants'
import Subheading from '../../constants/Subheading'
import "./Chef.css"
const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
          <div className="app__wrapper_img app__wrapper_img-reverse">
              <img src={images.chef} alt="chef_img" />
            </div> 
            <div className="app__wrapper_info">
                <Subheading title="chef's word"/>
                <h1 className="headtext__cormorant">What We Belive in</h1>
                <div className="app__chef-content">
                    <div className="app__chef-qoute">
                        <img src={images.quote} alt="" />
            
                    </div>
                    <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptates obcaecati sunt minus, incidunt dolores officiis rem ab optio sapiente alias nesciunt maiores ullam earum sit inventore numquam maxime non?</p>
                </div>
                <div className="app__sign">
                   <p>Kevin Luo</p>
                   <p className="p__opensans">Chef & Founder</p>
                   <img src={images.sign} alt="" />
                </div>
            </div>    
    </div>
  )
}

export default Chef
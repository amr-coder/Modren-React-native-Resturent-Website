import React from 'react';
import { BsInstagram , BsArrowLeftShort , BsArrowRightShort } from 'react-icons/bs'
import {images} from '../../constants';
import Subheading from '../../constants/Subheading';
import "./Gallery.css"

const Galleryimgs =[images.gallery01 , images.gallery02 ,images.gallery03 ,images.gallery04 ]; 
const Gallery = () => {

  // const scrollRef = React.useRef(null);
  var container = document.getElementsByClassName('app__gallery_container'); 
  const scroll = (direction) => {
    // const {current} =  scrollRef ;
    
    if(direction === 'left'){
      container.scrollLeft -= 300;
    }else{
      container.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery flex__center">
        <div className="app__gallery-content">
          <Subheading title="Instagram"/>
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <p className="p__opensans" style={{color:'#AAA', marginTop:'2rem'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ab. Incidunt autem omnis, similique culpa ipsam, vel officia facilis enim fugiat, reiciendis voluptates nemo totam beatae quod.</p>
          <button type='button' className="custom__button">View More...</button>  
        </div>

        <div className="app__gallery-images">
          <div className="app__gallery_container">
               {Galleryimgs.map((image , index)=>(
                   <div className="app__gallery-images_card flex__center" key={`gallery_img-${index + 1}`}>
                     <img src={image} alt="gallery-images" />
                     <BsInstagram className='gallery_images-icon'/>
                  </div>
               )
                  
               )}
          </div>
          <div className="app__images_arrow">
            <BsArrowLeftShort className='app__gallery_images-icons' onClick={()=> scroll('left')} />
            <BsArrowRightShort className='app__gallery_images-icons'onClick={()=> scroll('right')} />
          </div>
        </div>
    </div>
  )
}

export default Gallery
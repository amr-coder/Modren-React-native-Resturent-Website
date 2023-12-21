import React from 'react'
import "./Specials.css"
import {images,data} from '../../constants'
import Subheading from '../../constants/Subheading'
import MenuItem from '../../constants/menuItem/MenuItem'




const Specials = () => {
  return (
    <div className='specialMenu flex__center' id='menu'>
        <div className="specialmenu-title">
        <Subheading title="Menu that fits you palatte"/>
        <h1 className="headtext__cormorant">Today's Special</h1>
        </div>
         <div className="special-menu">
            <div className="menu_wine flex__center">
              <p className='heading_left'>Win & Bear</p>
              <div className="menu-item">
                  {data.wines.map((wine, index)=>(
                    <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
                    
                  ))}
              </div>
            </div>

            <div className="menu_img">
               <img src={images.menu} alt="menu" />
            </div>
            <div className="menu_cocktails flex__center">
              <p className='heading_left'>Cocktails</p>
              <div className="menu-item">
                  {data.cocktails.map((cocktails, index)=>(
                    <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>

                  ))}
              </div>
            </div>
            
         </div>
             <div style={{marginTop:"15px"}}>
               <button className="custom__button" type='button'>View More</button>
             </div>
          
    </div>
  );
}

export default Specials
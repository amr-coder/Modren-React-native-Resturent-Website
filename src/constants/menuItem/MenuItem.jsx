import React from 'react'
import './MenuItem.css'
const MenuItem = ({title , price , tags}) => {
  return (
    <div className='menuitem'>
       <div className="menu_header">
           <div className="name">
              <p className="p__cormorant" style={{ color:'#DCCA87' }}>{title}</p>
           </div>
           <div className="menuitem-dash"></div>
           <div className="price">
              <p className="p__cormorant" >{price}</p>
           </div>
        </div>
        <div className="sub">
             <p className="p__opensans">{tags}</p>
        </div>    
    </div>
  )
}

export default MenuItem
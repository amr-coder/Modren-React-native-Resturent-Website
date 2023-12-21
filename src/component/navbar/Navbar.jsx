import React from 'react'
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineRestaurantMenu} from "react-icons/md"
 import images from "../../constants/images";
const Navbar = () => {
  //if don't use React.useState then we have to import it from react and the use as follows
  //const [toggleMenu, setToggleMnu]=useState(false)
  const [toggleMenu, setToggleMnu]= React.useState(false)
  return (
    <nav className='app__navbar'>
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#menu">Menu</a></li>
          <li className="p__opensans"><a href="#awards">Awards</a></li>
          <li className="p__opensans"><a href="#contact">Contact</a></li>          
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className='p__login'>Log In / Register</a>
          <a href="/" className="p__opensans">Book table</a>
        </div>
        
        <div className="app__navbar-smallscreen">
         <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggleMnu(true)}/>
          
          {toggleMenu && (
          <div className="app__smallscreen_overlay flex__center slide-bottom"  >
            <MdOutlineRestaurantMenu fontSize={27} color='var(--color-golden)' className="overlay__close" onClick={()=>setToggleMnu(false)}/>
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#menu">Menu</a></li>
              <li className="p__opensans"><a href="#awards">Awards</a></li>
              <li className="p__opensans"><a href="#contact">Contact</a></li>          
            </ul>
          </div>
          )}

        </div>
    </nav>

  )
}

export default Navbar
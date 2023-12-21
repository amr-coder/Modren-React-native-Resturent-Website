import React from 'react'
import {FiFacebook , FiTwitter , FiInstagram} from 'react-icons/fi'
import NewsLatter from '../../component/newslatter/NewsLatter'
import FooterOverlay from '../../component/footerOverlay/FooterOverlay'
import {images} from '../../constants'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='app__footer section__padding'>
       <FooterOverlay/>
       <NewsLatter/>

       <div className="app__footer-links">
            <div className="app__footer-links_content">
                <h1 className="app__footer-headtext">Contact us</h1>
                <p className="p__opensans">Gericht, NewYork, My 2019, USA</p>
                <p className="p__opensans">0347-7234-456</p>
                <p className="p__opensans">0347-7234-456</p>
            </div>
            <div className="app__footer-links_logo">
               <img src={images.gericht} alt="" />
               <p className="p__opensans">The Best Way to lose yourself is the</p>
               <img src={images.spoon} alt="spoon" />
               <div className="app__footer-links_icons">
                  <FiFacebook/>
                  <FiInstagram/>
                  <FiTwitter/>
               </div>
            </div>
            <div className="app__footer-links_work">
            <h1 className="app__footer-headtext">Working Hours</h1>
                <p className="p__opensans">Monday-Friday</p>
                <p className="p__opensans">10:00 AM - 12:00 PM</p>
                <p className="p__opensans">Saturday-Sunday</p>
                <p className="p__opensans">07:00 AM - 11:00 PM</p>
            </div>
       </div>
       <div className="footer__copyright">
          <p className="p__opensans">2011 Guritch, All right reserved @amer-coders</p>
       </div>
    </div>
  )
}

export default Footer
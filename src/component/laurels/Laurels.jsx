import React from 'react';
import {data, images} from '../../constants';
import Subheading from '../../constants/Subheading';
import "./Laurels.css";

const AwardCard=({award:{ imgUrl , title , subtitle}})=>{
 return(
  <div className="app__laurels_awards-card" id='awards'>
  <img src={imgUrl} alt="award" />
  <div className="app__laurels_content">
     <p className="p__cormorant" style={{color:'#DCCA87'}}>{title}</p>
     <p className="p__cormorant">{subtitle}</p>
</div>
</div>
 );
  
}


const Laurels = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
        <div className="app__wrapper_info">
          <Subheading title="Awards & Recognition" />
          <h1 className="headtext__cormorant">Our Lorrels</h1>
          <div className="app__laurels_awards">
              {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)};
          </div>
        </div>
        <div className="app__wrapper_img">
          <img src={images.laurels} alt="Laurels" />
        </div>
    </div>
  );
}

export default Laurels
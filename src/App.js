import React from 'react';
import './App.css';
// import {Navbar, Header, Gallery, Chef, FindUs, Footer, Intro, Laurels, Specials, About} from './component';
import Navbar from "./component/navbar/Navbar"
import Header from "./component/header/Header"
import About from "./component/about/AboutUs"
import Specials from "./component/specials/Specials"
import Chef from "./component/chef/Chef"
import Intro from "./component/intro/Intro"
import Laurels from "./component/laurels/Laurels"
import Gallery from "./component/gallery/Gallery"
import FindUs from "./component/findUs/FindUs"
import Footer from "./component/footer/Footer"



const App=()=> {
  return (
    <div className="App">
      <Navbar/>
       <Header/>
       <About/>
      <Specials/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>

    </div>
  );
}

export default App;

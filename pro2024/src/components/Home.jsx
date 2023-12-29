// Home.js
import React from 'react';
import ImageSlider from './ImageSlider';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <div>
    {/* <h1>Heelllo</h1> */}
    <AboutUs />
      <ImageSlider />
      
      {/* Other content goes here */}
    </div>
  );
};

export default Home;

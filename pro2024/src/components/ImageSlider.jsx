
import React from 'react';
import Slider from 'react-slick';
import img1 from '../images/p3.png';
import img2 from '../images/p4.png';
import img3 from '../images/p5.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Set speed to 1000ms (1 second) for a smooth transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3000ms (3 seconds)
  };

  return (
    <Slider {...settings} className="mx-auto max-w-screen-xl border border-gray-300 mt-6 w-full bg-gray-200">
      <div className="flex justify-center items-center h-80">
        <img src={img1} alt="Slider 1" className="w-full h-full object-contain" />
      </div>
      <div className="flex justify-center items-center h-80">
        <img src={img2} alt="Slider 2" className="w-full h-full object-contain" />
      </div>
      <div className="flex justify-center items-center h-80">
        <img src={img3} alt="Slider 34" className="w-full h-full object-contain" />
      </div>
    </Slider>
  );
};

export default ImageSlider;


import React from 'react';
import Slider from 'react-slick';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="mx-auto max-w-screen-xl border border-gray-300  w-full bg-gray-200">
      <div className="h-80">
        <img src={img1} alt="Slider 1" className="w-full h-full object-cover" />
      </div>
      <div className="h-80">
        <img src={img2} alt="Slider 2" className="w-full h-full object-cover" />
      </div>
      <div className="h-80">
        <img src={img3} alt="Slider 3" className="w-full h-full object-cover" />
      </div>
    </Slider>
  );
};

export default ImageSlider;


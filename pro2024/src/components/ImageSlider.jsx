import React from "react";
import Slider from "react-slick";
import img1 from "../images/Twitter header - 2.svg";
import img2 from "../images/Twitter header - 3.svg";
import img3 from "../images/Twitter header - 4.svg";
import img4 from "../images/Twitter header - 5.svg";

import Carousel from "react-multi-carousel";
import { styled } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Image = styled("img")({
    width: "100%",
    height: 650,
  });
  // };

  return (
    // <Slider {...settings} className="mx-auto max-w-screen border border-gray-300  w-full bg-gray-200 mt-3">
    //   <div className="h-80">
    //     <img src={img1} alt="Slider 1" className="w-full h-full object-cover" />
    //   </div>
    //   <div className="h-80">
    //     <img src={img2} alt="Slider 2" className="w-full h-full object-cover" />
    //   </div>
    //   <div className="h-80">
    //     <img src={img3} alt="Slider 3" className="w-full h-full object-cover" />
    //   </div>
    // </Slider>
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      slidesToSlide={1}
      keyBoardControl={true}
    >
      {/* Specify the direct image paths here */}
      <Image src={img1} alt="banner" />
      <Image src={img2} alt="banner" />
      <Image src={img3} alt="banner" />
      <Image src={img4} alt="banner" />
    </Carousel>
  );
};

export default ImageSlider;

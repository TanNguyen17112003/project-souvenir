import React from 'react';
import Slider from 'react-slick';
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import slider3 from './images/slider3.jpg';
const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={slider1} alt="Banner 1" />
      </div>
      <div>
        <img src={slider2} alt="Banner 2" />
      </div>
      <div>
        <img src={slider3} alt="Banner 3" />
      </div>
    </Slider>
  );
};

export default Slide;
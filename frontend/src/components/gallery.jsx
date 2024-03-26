import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import top1Image from './top1.png';
// import top2Image from './lefttop.png';
import Image1 from './images/top2.png';
import Image2 from './images/CHESS1.jpg';
import Image3 from './images/chess3.jpg';
import './GallerySlider.css';
const GallerySlider = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const images = [
     Image1,
     Image2,
     Image3,
    'https://example.com/image2.jpg',
   
    // Add more image URLs as needed
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Gallery Image ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default GallerySlider;
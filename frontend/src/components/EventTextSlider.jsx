import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './EventTextSlider.css';

const EventTextSlider = () => {
  // Event text data
  const eventTexts = [
    'Event Text 1',
    'Event Text 2',
    'Event Text 3',
    'Event Text 1',
    'Event Text 2',
    'Event Text 3',
    'Event Text 4',
    'Event Text 5',
    'Event Text 6',
    'Event Text 7',
    'Event Text 8',
    
    // Add more event texts as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:true,
  };

  return (
    <div className="event-text-slider">
      <Slider {...settings}>
        {eventTexts.map((text, index) => (
          <div key={index} className="event-text-slide">
            {text}
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default EventTextSlider;



// import React, { useRef, useEffect } from 'react';
// import './EventTextSlider.css';

// const EventTextSlider = () => {
//   const eventTexts = [
//     'Event Text 1',
//     'Event Text 2',
//     'Event Text 3',
//     'Event Text 4',
//     'Event Text 5',
//     'Event Text 6',
//     'Event Text 7',
//     'Event Text 8',
//     // Add more event texts as needed
//   ];

//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const texts = container.querySelectorAll('.event-text');
//     const containerHeight = container.offsetHeight;

//     let currentIndex = 0;
//     let scrollPosition = 0;

//     const scrollUpwards = () => {
//       scrollPosition += 1; // Adjust the scroll speed here
//       container.scrollTop = scrollPosition;

//       if (scrollPosition >= containerHeight) {
//         scrollPosition = 0;
//         currentIndex = (currentIndex + 1) % texts.length;
//         container.appendChild(texts[currentIndex]);
//       }

//       requestAnimationFrame(scrollUpwards);
//     };

//     scrollUpwards();
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     autoplay: true,
//     autoplaySpeed: 200,
//     arrows:false,
//   };
//   return (
//     <div className="event-text-slider" ref={containerRef}>
//       {eventTexts.map((text, index) => (
//         <div key={index} className="event-text">
//           {text}
//         </div>
//       ))}
//     </div>
//   );
// };


// export default EventTextSlider;
import React, { useState,useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

import 'react-alice-carousel/lib/alice-carousel.css'; // Make sure the CSS is imported

const HomeSectionCarousal = ({data,section}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carousel = useRef(null)


  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  // Button handlers with bounds checking
  const slideprev = () => {
    setActiveIndex(activeIndex-1)
    carousel.current?.slideTo(activeIndex)
  };

  const slidenext = () => {
    setActiveIndex(activeIndex+1);
    carousel.current?.slideTo(activeIndex)
  };
  // Sync active index when carousel slides
  const syncActiveIndex = ({item}) =>setActiveIndex(item) ;


  const items = data.map((item) => <HomeSectionCard mens_kurta={item} />);

  return (
    <div className="w-[90%] mx-auto relative">
      <h3>{section}</h3>
      <AliceCarousel
      ref={carousel}
        items={items}
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        activeIndex={activeIndex} // Ensure activeIndex prop is synchronized with state
      />
      
      {/* Next Button */}
      {activeIndex !== items.length-1 && 
        <Button
          variant="contained"
          className="z-50"
          onClick={slidenext}
          sx={{
            position: 'absolute',
            top: '8rem',
            right: '0rem',
            transform: 'translateX(50%) rotate(90deg)',
            background: 'white',
          }}
          aria-label="next"
          title="Go to next slide"
        >
          <KeyboardArrowLeftIcon
            sx={{
              transform: 'rotate(90deg)',
              color: 'black',
            }}
          />
        </Button>
      }
    
      {activeIndex > 0 && (
        <Button
          onClick={slideprev}
          variant="contained"
          className="z-50"
          sx={{
            position: 'absolute',
            top: '8rem',
            left: '0rem',
            transform: 'translateX(-50%) rotate(90deg)',
            background: 'white',
          }}
          aria-label="previous"
          title="Go to previous slide"
        >
          <KeyboardArrowLeftIcon
            sx={{
              transform: 'rotate(-90deg)',
              color: 'black',
            }}
          />
        </Button>
      )}
    </div>
  );
};

export default HomeSectionCarousal;

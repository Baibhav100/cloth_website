import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {carousal_data} from './MainCarousalData'

const items = carousal_data.map((item) => (
    <div className="relative">
        <img 
            className="w-full h-[500px] object-cover object-top rounded-lg shadow-lg" 
            src={item.image} 
            alt="carousel-item" 
        />

    </div>
));


const MainCarousal = () => (
    <div className=" mx-auto p-4">
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            disableDotsControls
        />
    </div>
);

export default MainCarousal;

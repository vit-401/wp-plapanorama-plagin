import React from 'react';
import Slider from 'react-slick';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PanoramaViewer from "./PanoramaViewer";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <h2> My React Panorama </h2>
      {/*<Slider {...settings}>*/}
      {/*  <div>*/}
      {/*    <img src="https://via.placeholder.com/800x300?text=Slide+1" alt="Slide 1" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <img src="https://via.placeholder.com/800x300?text=Slide+2" alt="Slide 2" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <img src="https://via.placeholder.com/800x300?text=Slide+3" alt="Slide 3" />*/}
      {/*  </div>*/}
      {/*</Slider>*/}
      <PanoramaViewer/>
    </div>
  );
}

export default App;

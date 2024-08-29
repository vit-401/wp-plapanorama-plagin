import React from "react";
import Slider from "react-slick";
import styles from './styles.module.scss';
import p1 from '../media/property/p1.jpg'
import p2 from '../media/property/p2.jpg'
import p3 from '../media/property/p3.jpg'


const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.sliderWrap}>
      <Slider className={styles.sliderWrap} {...settings}>
        <div className={styles.sliderWrap}>
          {/*<h3>1</h3>*/}
          <img src={p1} alt=""/>
        </div>
        <div className={styles.sliderWrap}>
          {/*<h3>1</h3>*/}
          <img src={p2} alt=""/>
        </div>
        <div className={styles.sliderWrap}>
          {/*<h3>1</h3>*/}
          <img src={p3} alt=""/>
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;

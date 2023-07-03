import React,{useEffect} from 'react';
import {features} from '../data'
import AOS from "aos";
import "aos/dist/aos.css";
const FeaturesSecond = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {title,subtitle,image} = features.feature2
  return (
    <section className='section' id='more'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:gap-x-[100px]' data-aos="zoom-in" data-aos-duration="1200">
      <div className='flex-1 flex flex-col justify-end'>
          <h2 className='title'>{title}</h2>
          <p className='subtitle'>{subtitle}</p>
        </div>
        <div className='flex-1 order-1 lg:-order-1' data-aos="zoom-in" data-aos-duration="1200">
          <img src={image.type} alt='/'/>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FeaturesSecond;

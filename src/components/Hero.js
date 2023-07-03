import React, {useEffect} from 'react';
import {hero} from '../data'
import Stats from '../components/Stats'
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {title,subtitle,buttonText} = hero
  return (
  <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28' id='home'>
    <div className='container mx-auto text-center' data-aos="fade-up" data-aos-duration="1200">
      <h1 className='text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>{title}</h1>
      <h2 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>{subtitle}</h2>
      <button className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]'>{buttonText}</button>
      <div>
        <Stats/>
      </div>
    </div>
    </section>
  );
};

export default Hero;

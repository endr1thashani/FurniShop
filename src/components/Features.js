import React, {useEffect} from 'react';
import {features} from '../data'
import AOS from "aos";
import "aos/dist/aos.css";
const Features = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {title,subtitle,image, items} = features

  return (
  <section className='section' id='features'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
        <div className='flex-1 order-1 lg:-order-1' data-aos="fade-down" data-aos-duration="1200">
          <img src={image.type} alt='/'/>
        </div>
        <div className='flex-1 flex flex-col justify-end' data-aos="fade-up" data-aos-duration="1200">
          <h2 className='title'>{title}</h2>
          <p className='subtitle'>{subtitle}</p>
          <div>
            {items.map((item,index)=>{
              const {title , subtitle , icon} = item
              return(
                <div className='flex mb-6 lg:last:mb-0'>
                  <div className='text-2xl mr-4 lg:text-3xl'>{icon}</div>
                  <div key={index}>
                    <h4 className='text-base lg:text-xl font-semibold mb-3'>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Features;

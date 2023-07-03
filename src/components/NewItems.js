import React, {useEffect} from 'react';
import {newInStore} from '../data'
import NewItemsSlider from './NewItemsSlider'
import AOS from "aos";
import "aos/dist/aos.css";
const NewItems = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {title , subtitle , link , icon} = newInStore
  return(
    <section className='section' id='new'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0' data-aos="fade-up" data-aos-duration="1200">
            <h2 className='title max-w-[245px] lg:mt-[30px] lg:mb-[90px]'>{title}</h2>
            <p className='max-w-[245px] lg:mb-12'>{subtitle}</p>
            <div className='hidden lg:flex items-center'>
              <a className='hover:border-b border-primary lg:items-center font-medium transition-all' href={link}>{link}</a>
              <div className='text-3xl'>{icon}</div>
            </div>
          </div>
          <div>
            <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:right-12' data-aos="fade-down" data-aos-duration="1200">
            <NewItemsSlider/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;

import React,{useEffect} from 'react';
import TestimonialSlider from './TestimonialSlider'
import { testimonial } from '../data';
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonial = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {image,title} = testimonial
  return(
    <section className='section' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
          <div className='lg:max-w-[50%]' data-aos="fade-up" data-aos-duration="1200">
            <h2 className='title mb-9'>{title}</h2>
            <TestimonialSlider/>
          </div>
          <div className='order-1' data-aos="fade-down"  data-aos-duration="1200">
            <img src={image.type} alt='/'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

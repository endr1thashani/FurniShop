import React, {useEffect} from 'react';
import {newsletter} from '../data'
import AOS from "aos";
import "aos/dist/aos.css";
const Newsletter = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {title , subtitle , placeholder , buttonText} = newsletter

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert('Thank You!')
  }
  return(
    <section className='section bg-newsletter min-h-[490px]' id='contact'>
      <div className='container mx-auto flex justify-center lg:justify-end'>
        <div className='w-full max-w-[558px] text-center text-white lg:text-left' data-aos="zoom-in-right" data-aos-duration="1200">
          <h2 className='text-4xl font-semibold max-w-[350px] mx-auto lg:mx-0 mb-5 leading-normal'>{title}</h2>
          <p className='text-xl font-light mb-10'>{subtitle}</p>
          <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row gap-[22px]'>
            <input className='h-[60px] px-6 outline-none placeholder:text-gray-400 text-gray-600 rounded-lg lg:flex-1' type='email' placeholder={placeholder} required/>
            <button type='submit' className='bg-primary h-[60px] hover:bg-slate-900 px-7 rounded-lg font-bold text-xl transition'>{buttonText}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

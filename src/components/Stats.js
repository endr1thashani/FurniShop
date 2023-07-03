import React,{useEffect} from 'react';

import {stats} from '../data'
import AOS from "aos";
import "aos/dist/aos.css";
const Stats = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
  <div className='bg-accent rounded-[10px] p-12'>
    <div className='flex flex-wrap gap-y-8' data-aos="fade-up" data-aos-duration="1200">
      {stats.map((item,index)=> {
        return(
          <div key={index} className='min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none'>
            <div className='text-2xl font-semibold lg:text-4xl'>{item.value}</div>
            <div className='text-base font-light max-w-[110px] mx-auto lg:text-xl'>{item.text}</div>
          </div>
        )
      })}
    </div>
  </div>
  );
};

export default Stats;

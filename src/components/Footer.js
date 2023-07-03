import React,{useEffect} from 'react';
import Logo from '../assets/img/logo.svg'
import {footer} from '../data'
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return(
    <footer className='section bg-primary text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14' data-aos="fade-down" data-aos-duration="1200">
          <a href='#home'>
            <img className='mb-6 lg:mb-0' src={Logo} alt='logo'/>
          </a>
          <div className='flex gap-x-4'>
            {footer.social.map((item,index)=>{
              return(
                <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition' key={index}>
                  <a href='/'>
                    {item.icon}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
            <p className='text-center'>
              &copy; FurniShop 2023 - All rights reserved.
            </p>
      </div>
    </footer>
  );
};

export default Footer;

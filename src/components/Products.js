import React, {useEffect} from 'react';
import {products} from '../data'
import ProductSlider from '../components/ProductSlider'
import AOS from "aos";
import "aos/dist/aos.css";
const Products = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {title,subtitle} = products
  return(
    <section className='section text-center' id='shop'>
      <div className='container mx-auto'>
        <div data-aos="fade-up" data-aos-duration="1200">
          <h2 className='title'>{title}</h2>
          <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
        </div>
        <ProductSlider/>
      </div>
    </section>
  );
};

export default Products;

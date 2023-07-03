import React from 'react';
import {navigation} from '../data'
const NavMobile = ({ closeMobileNav }) => {
  const handleClick = () => {
    closeMobileNav();
  };
  return(
    <div className='bg-white w-full h-full shadow-2xl'>
      <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
        {navigation.map((item,index)=>{
          return(
            <li key={index}>
              <a onClick={handleClick} className='text-xl text-gray-700 font-bold capitalize transition-all duration-1000 hover:text-gray-900' href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default NavMobile;

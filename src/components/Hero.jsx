import React from 'react';
import heroimage from '../assets/tess1.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>
      <div className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]'>
        <img
          src={heroimage}
          alt='hero image'
          className='w-full h-full object-cover rounded-full'
        />
      </div>
      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-bold'>
          <span className='primary-color'>
            I'm a
          </span> <br/>
          <TypeAnimation
            sequence={[
              "English education student",
              1000,
              "Member of the Student Executive Board",
              1000,
              "and I'm Ari's girlfriend <3",
              1000,
            ]}
            wrapper='span'
            speed={20}
            repeat={Infinity}
          />
        </h1>
      </div>
    </div>
  );
};

export default Hero;

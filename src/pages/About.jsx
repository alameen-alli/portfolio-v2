import React from 'react';
import myPic from '../image/myPic.png';
import MySkills from '../components/MySkills';

const About = () => {
  return (
    <div className='about-container' id='about'>
      <div className='text-white hidden'>About</div>
      <div className='about-header text-center sm:text-left mt-32'>
        <span className='text-gradient'>About Me</span>
      </div>
      <p className='about-text text-center sm:w-1/2 sm:text-left'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique et minus quo maxime! Esse ad iure animi asperiores, doloribus adipisci vitae velit tempore libero? Recusandae neque nam odio culpa similique. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla harum placeat, illo quasi, ut id minima fugiat atque corporis deserunt inventore, doloribus nesciunt eaque! Quae perspiciatis porro itaque molestias exercitationem?
      </p>
      <MySkills />
    </div>
  )
}

export default About
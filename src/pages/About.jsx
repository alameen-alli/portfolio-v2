import React from 'react';
import myPic from '../image/myPic.png';
import MySkills from '../components/MySkills';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-header'>
        About Me
      </div>
      <p className='about-text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique et minus quo maxime! Esse ad iure animi asperiores, doloribus adipisci vitae velit tempore libero? Recusandae neque nam odio culpa similique. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla harum placeat, illo quasi, ut id minima fugiat atque corporis deserunt inventore, doloribus nesciunt eaque! Quae perspiciatis porro itaque molestias exercitationem?
      </p>
      <MySkills />
    </div>
  )
}

export default About
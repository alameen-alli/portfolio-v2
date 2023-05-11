import React from 'react';
import MySkills from '../components/MySkills';

const About = () => {
  return (
    <div className='about-container' id='about'>
      <div className='text-white hidden'>About</div>
      <div className='about-header text-center sm:text-left mt-32'>
        <span className='text-gradient'>About Me</span>
      </div>
      <p className='about-text text-center sm:w-1/2 sm:text-left'>
        Hello👋, My name is Al-ameen Alli.
        I took an interest in coding💻 back in 2021 after watching a couple of videos from <a href='https://www.youtube.com/@jomaoppa' className='text-white underline cursor-pointer uppercase'>Joma Tech</a>, a famous software engineer on youtube who makes funny videos about life in silicon valley and big tech companies. He made coding fun and exciting, although I’ve realised it isn’t all that fun🙂.
      </p>
      <p className='about-text text-center sm:w-1/2 sm:text-left mt-6'>
        Fast forward to today, I've gained understanding of computer science and web development concepts. Since then, I've dedicated a lot of my free time to applying these concepts to real-world scenarios and applications.
      </p>
      <MySkills />
    </div>
  )
}

export default About
import React from 'react';
import moviehub from '../image/moviehub.png'

const ProjectThree = () => {
  return (
    <section className='mb-32'>
      <div className='project-grid'>
        <div className='project-preview'>
          <img className='project-three-img drop-shadow-xl' src={moviehub} />
        </div>

        <div className='project-summary'>
          <div className='project-index'>

          </div>
          <div className='min-w-0 font-bold text-sm sm:text-xl lg:text-2xl mb-4'>
            <h2 className='moviehub-anim inline-block'>MovieHub</h2>
          </div>
          <p className='text-xs lg:text-sm'>Discover your next favorite movie <br/> with MovieHub - the ultimate destination for <br /> movie lovers!</p>
          <div className='mt-4'>
            <a href="">
              <span className='text-white text-xs lg:text-base'>View Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectThree;
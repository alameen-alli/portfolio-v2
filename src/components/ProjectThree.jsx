import React from 'react';
import moviehub from '../image/moviehub.png'

const ProjectThree = () => {
  return (
    <section className='mb-32'>
      <div className='hidden sm:block project-grid-movie'>
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
            <a href="https://moviiehub.netlify.app/">
              <span className='text-white text-xs lg:text-base project-cta'>View Project</span>
            </a>
          </div>
        </div>
      </div>

      <div className='sm:hidden'>
        <div className='project-preview'>
          <img className='drop-shadow-xl' src={moviehub} />
        </div>

        <div>
          <div className='project-index'>

          </div>
          <div className='text-center font-bold text-lg  mt-4 mb-4'>
            <h2 className='moviehub-anim inline-block'>MovieHub</h2>
          </div>
          <p className='text-xs text-gray-400 text-center'>Discover your next favorite movie <br/> with MovieHub - the ultimate destination for <br /> movie lovers!</p>
          <div className='mt-4 text-center'>
            <a href="https://moviiehub.netlify.app/">
              <span className='text-white text-xs project-cta'>View Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectThree;
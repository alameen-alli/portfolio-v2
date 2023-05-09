import React from 'react';
import desktop from '../image/dashboard.png'
import { Link } from 'react-router-dom';

const ProjectOne = () => {
  return (
    <section className='mb-32'>
      <div className='hidden sm:block project-grid-shopmaster'>
        <div className='project-preview'>
          <img className='project-one-img drop-shadow-xl' src={desktop} />
        </div>

        <div className='project-summary'>
          <div className='project-index'>

          </div>
          <div className='shopmaster-anim font-bold text-sm sm:text-xl lg:text-2xl mb-4'>
            <h2>Shopmaster Admin Dashboard</h2>
          </div>
          <p className='text-xs lg:text-sm'>Provide a quick summary of key metrics <br /> or data points for your store, <br /> such as sales, orders, and traffic.</p>
          <div className='mt-4'>
            <Link to="/shopmaster" className='project-details' href="">
              <span className='text-white text-xs lg:text-base project-cta'>View Project Details</span>
            </Link>
          </div>
        </div>
      </div>

      <div className='sm:hidden'>
        <div className='project-preview'>
          <img className='drop-shadow-xl' src={desktop} /> 
        </div>
        {/* className='project-one-img drop-shadow-xl' */}

        <div>
          <div className='project-index'>

          </div>
          <div className='shopmaster-anim text-center font-bold text-lg  mt-4 mb-4'>
            <h2>Shopmaster Admin Dashboard</h2>
          </div>
          <p className='text-xs text-gray-400 text-center'>Provide a quick summary of key metrics <br /> or data points for your store, <br /> such as sales, orders, and traffic.</p>
          <div className='mt-4 text-center'>
            <Link to="/shopmaster" className='project-details' href="">
              <span className='text-white text-xs project-cta'>View Project Details</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectOne;
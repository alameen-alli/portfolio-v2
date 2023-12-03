import React from 'react';
import ecojob from '../../image/ecojobs.png'

const ProjectOne = () => {
  return (
    // <section className='mb-32'>
    //   {/* desktop */}
    //   <div className='hidden sm:block project-grid-shopmaster'>
    //     <div className='project-preview'>
    //       <img alt='' className='project-one-img drop-shadow-xl' src={desktop} />
    //     </div>

    //     <div className='project-summary'>
    //       <div className='project-index'>

    //       </div>
    //       <div className='shopmaster-anim font-bold text-sm sm:text-xl lg:text-2xl mb-4'>
    //         <h2>Shopmaster Admin Dashboard</h2>
    //       </div>
    //       <p className='text-xs lg:text-sm'>Provide a quick summary of key metrics <br /> or data points for your store, <br /> such as sales, orders, and traffic.</p>
    //       <div className='mt-4'>
    //         <Link to="/shopmaster" className='project-details' href="">
    //           <span className='text-white text-xs lg:text-base project-cta'>View Project Details</span>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    //   {/* mobile */}
    //   <div className='sm:hidden'>
    //     <div className='project-preview'>
    //       <img alt='' className='drop-shadow-xl' src={desktop} /> 
    //     </div>
    //     {/* className='project-one-img drop-shadow-xl' */}

    //     <div>
    //       <div className='project-index'>

    //       </div>
    //       <div className='shopmaster-anim text-center font-bold text-lg  mt-4 mb-4'>
    //         <h2>Shopmaster Admin Dashboard</h2>
    //       </div>
    //       <p className='text-xs text-gray-400 text-center'>Provide a quick summary of key metrics <br /> or data points for your store, <br /> such as sales, orders, and traffic.</p>
    //       <div className='mt-4 text-center'>
    //         <Link to="/shopmaster" className='project-details' href="">
    //           <span className='text-white text-xs project-cta'>View Project Details</span>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id='projects'>
      <article>
        <div class="text-project text-justify sm:text-right md:text-right transition duration-200 hover:border-accent md:hover:scale-[1.01]">
          {/* <h4>Latest Project</h4> */}
          <h3>EcoJobz</h3>
          <p class="blackbox">Ecojobz is a job-boarding web application, I collaborated with a team to design
            a visually appealing and responsive user interface using Reactjs and Tailwind CSS and also
            integrated APIs to fetch and display job listings and other relevant data.<br />
            <a className='link' href="https://ecojobz-jade.vercel.app/">ECOJOBZ</a>
          </p>
          <h4 className='text-right text-gray-500'>Technologies used include:</h4>
          <ul className='text-center'>
            {/* <li>HTML</li>
            <li>CSS</li> */}
            {/* <li>JavaScript</li> */}
            <li>Reactjs</li>
            <li>Next.js</li>
            <li>Sass</li>
            <li>Tailwind CSS</li>
            <li>Axios API</li>
          </ul>
        </div>
        <img src={ecojob} alt="Screenshot of the Wall of Wonder." />
      </article>
    </section>
  )
}

export default ProjectOne;
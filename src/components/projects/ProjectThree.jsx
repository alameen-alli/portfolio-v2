import React from "react";
import shopmaster from "../../image/screencapture-allishopifyhackathon-netlify-app-2023-12-03-12_43_53.png";

const ProjectThree = () => {
  return (
    // <section className='mb-32'>
    //   <div className='hidden sm:block project-grid-movie'>
    //     <div className='project-preview'>
    //       <img alt='' className='project-three-img drop-shadow-xl' src={moviehub} />
    //     </div>

    //     <div className='project-summary'>
    //       <div className='project-index'>

    //       </div>
    //       <div className='min-w-0 font-bold text-sm sm:text-xl lg:text-2xl mb-4'>
    //         <h2 className='moviehub-anim inline-block'>MovieHub</h2>
    //       </div>
    //       <p className='text-xs lg:text-sm'>Discover your next favorite movie <br/> with MovieHub - the ultimate destination for <br /> movie lovers!</p>
    //       <div className='mt-4'>
    //         <a href="https://moviiehub.netlify.app/">
    //           <span className='text-white text-xs lg:text-base project-cta'>View Project</span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   <div className='sm:hidden'>
    //     <div className='project-preview'>
    //       <img alt='' className='drop-shadow-xl' src={moviehub} />
    //     </div>

    //     <div>
    //       <div className='project-index'>

    //       </div>
    //       <div className='text-center font-bold text-lg  mt-4 mb-4'>
    //         <h2 className='moviehub-anim inline-block'>MovieHub</h2>
    //       </div>
    //       <p className='text-xs text-gray-400 text-center'>Discover your next favorite movie <br/> with MovieHub - the ultimate destination for <br /> movie lovers!</p>
    //       <div className='mt-4 text-center'>
    //         <a href="https://moviiehub.netlify.app/">
    //           <span className='text-white text-xs project-cta'>View Project</span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="projects">
      <article>
        <div class="text-project text-justify sm:text-right md:text-right transition duration-200 hover:border-accent md:hover:scale-[1.01]">
          {/* <h4>Latest Project</h4> */}
          <h3>Shopify Onboarding Page</h3>
          <p class="blackbox">
            The task was to reimagine and build the Shopify merchant onboarding
            experience based on a provided Figma design. The goal was to cater
            to the diverse needs of three primary user segments - mouse users,
            keyboard-only users, and screen reader users. Additionally, the
            challenge required the creation of a fully responsive design for
            both mobile phones and Desktop.
            <br />
            <a
              className="link"
              href="https://allishopifyhackathon.netlify.app/"
            >
              Shopify-onboard
            </a>
          </p>
          <h4 className="text-right text-gray-500">
            Technologies used include:
          </h4>
          <ul className="text-center">
            <li>HTML</li>
            <li>CSS Grid & Flex</li>
            <li>Vanilla Javascript</li>
          </ul>
        </div>
        <img src={shopmaster} alt="Screenshot of shopmaster" />
      </article>
    </section>
  );
};

export default ProjectThree;

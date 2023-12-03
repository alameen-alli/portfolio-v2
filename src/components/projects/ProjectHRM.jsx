import React from "react";
import finesse from "../../image/heasyresource png.png";

const ProjectTwo = () => {
  return (
    // <section className='mb-32'>
    //     <div className='hidden sm:block project-grid-techwow'>

    //         <div className='project-summary-techwow'>
    //             <div className='project-index'>

    //             </div>
    //             <div className='min-w-0 font-bold text-sm sm:text-xl lg:text-2xl mb-4'>
    //                 <h2 className='techwow-anim inline-block'>TechWow</h2>
    //             </div>
    //             <p className='text-xs lg:text-sm'>Go-to destination <br /> for tech enthusiasts and bloggers.</p>
    //             <div className='mt-4'>
    //                 <Link to="/techwow" className='project-details' href="">
    //                     <span className='text-white text-xs lg:text-base project-cta'>View Project Details</span>
    //                 </Link>
    //             </div>
    //         </div>

    //         <div className='project-preview'>
    //             <img alt='' className='project-one-img drop-shadow-xl' src={techwow} />
    //         </div>

    //     </div>

    //     <div className='sm:hidden'>

    //         <div className='project-preview'>
    //             <img alt='' className='drop-shadow-xl' src={techwow} />
    //         </div>

    //         <div>
    //             <div className='project-index'>

    //             </div>
    //             <div className='shopmaster-anim text-center font-bold text-lg  mt-8 mb-4'>
    //                 <h2 className='techwow-anim inline-block'>TechWow</h2>
    //             </div>
    //             <p className='text-xs text-gray-400 text-center'>Go-to destination <br /> for tech enthusiasts and bloggers.</p>
    //             <div className='mt-4 text-center'>
    //                 <Link to="/techwow" className='project-details' href="">
    //                     <span className='text-white text-xs project-cta'>View Project Details</span>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    // </section >
    <section id="projects">
      <article className="reverse">
        <div class="text-project text-justify sm:text-left transition duration-200 hover:border-accent md:hover:scale-[1.01]">
          {/* <h4>Latest Project</h4> */}
          <h3>Heasy Resource HR</h3>
          <p class="blackbox">
            In the dynamic creation of Heasy Resource HR, our team embraced the
            challenge of a one-month deadline with passion and determination.
            This limited timeframe fueled creativity, pushing us to efficiently
            plan, design, and implement features. It became a driving force for
            innovation, encouraging informed decision-making and prioritization.
            Despite the tight schedule, our collaborative efforts resulted in a
            functional and polished HR application. This time constraint
            showcased our team's resilience, adaptability, and ability to turn
            challenges into opportunities for growth. Heasy Resource HR stands
            as a testament to our dedication and achievement within the
            constraints of a one-month sprint.
            <br />
            <a className="link" href="https://heasyresource.com/">
              Heasy Resource HR
            </a>
          </p>
          <h4 className="text-right text-gray-500">Technologies used include:</h4>
          <ul className="text-center">
            {/* <li>HTML</li>
            <li>JavaScript</li> */}
            <li>Reactjs</li>
            <li>Next.js</li>
            <li>CSS Modules</li>
            <li>Mantine UI</li>
            <li>MySQL</li>
            <li>Axios API</li>
          </ul>
        </div>
        <img src={finesse} alt="Screenshot of the Wall of Wonder." />
      </article>
    </section>
  );
};

export default ProjectTwo;

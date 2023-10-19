import React from 'react'
import finesse from '../image/finnese.png'

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
        <section id='projects'>
            <article className='reverse'>
                <div class="text-project text-justify sm:text-left transition duration-200 hover:border-accent md:hover:scale-[1.01]">
                    {/* <h4>Latest Project</h4> */}
                    <h3>Finesse</h3>
                    <p class="blackbox">I participated in a hackathon alongside a team of four to construct Finesse, an e-commerce web
                        application focused on clothing. Within this project, my role involved crafting the user
                        interface through the utilization of Reactjs and Tailwind CSS. Additionally, I engaged with REST
                        APIs to facilitate seamless communication within the app.<br />
                        <a className='link' href="https://finesse-gamma.vercel.app/">FINESSE</a>
                    </p>
                    <h4 className='text-right'>Technologies used include:</h4>
                    <ul className='text-center'>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>Reactjs</li>
                        <li>Tailwind CSS</li>
                        <li>API</li>
                    </ul>
                </div>
                <img src={finesse} alt="Screenshot of the Wall of Wonder." />
            </article>
        </section>
    )
}

export default ProjectTwo;
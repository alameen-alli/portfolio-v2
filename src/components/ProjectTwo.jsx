import React from 'react'
import techwow from '../image/techwow.png'
import { Link } from 'react-router-dom';

const ProjectTwo = () => {
    return (
        <section className='mb-32'>
            <div className='hidden sm:block project-grid-techwow'>

                <div className='project-summary-techwow'>
                    <div className='project-index'>

                    </div>
                    <div className='min-w-0 font-bold text-sm sm:text-xl lg:text-2xl mb-4'>
                        <h2 className='techwow-anim inline-block'>TechWow</h2>
                    </div>
                    <p className='text-xs lg:text-sm'>Go-to destination <br /> for tech enthusiasts and bloggers.</p>
                    <div className='mt-4'>
                        <Link to="/techwow" className='project-details' href="">
                            <span className='text-white text-xs lg:text-base project-cta'>View Project Details</span>
                        </Link>
                    </div>
                </div>

                <div className='project-preview'>
                    <img alt='' className='project-one-img drop-shadow-xl' src={techwow} />
                </div>

            </div>

            <div className='sm:hidden'>

                <div className='project-preview'>
                    <img alt='' className='drop-shadow-xl' src={techwow} />
                </div>

                <div>
                    <div className='project-index'>

                    </div>
                    <div className='shopmaster-anim text-center font-bold text-lg  mt-8 mb-4'>
                        <h2 className='techwow-anim inline-block'>TechWow</h2>
                    </div>
                    <p className='text-xs text-gray-400 text-center'>Go-to destination <br /> for tech enthusiasts and bloggers.</p>
                    <div className='mt-4 text-center'>
                        <Link to="/techwow" className='project-details' href="">
                            <span className='text-white text-xs project-cta'>View Project Details</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ProjectTwo;
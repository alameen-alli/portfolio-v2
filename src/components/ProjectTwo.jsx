import React from 'react'
import techwow from '../image/techwow.png'
import { Link } from 'react-router-dom';

const ProjectTwo = () => {
    return (
        <section className='mb-32'>
            <div className='project-grid'>

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
                    <img className='project-one-img drop-shadow-xl' src={techwow} />
                </div>

            </div>
        </section >
    )
}

export default ProjectTwo;
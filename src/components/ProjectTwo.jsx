import React from 'react'
import techwow from '../image/techwow.png'

const ProjectTwo = () => {
    return (
        <section className='mb-12'>
            <div className='project-grid'>

                <div className='project-summary-techwow'>
                    <div className='project-index'>

                    </div>
                    <div className='min-w-0 font-bold text-sm sm:text-xl lg:text-2xl mb-4'>
                        <h2 className='techwow-anim inline-block'>TechWow</h2>
                    </div>
                    <p className='text-xs lg:text-sm'>Go-to destination <br /> for tech enthusiasts and bloggers.</p>
                    <div className='mt-4'>
                        <a href="">
                            <span className='text-white text-xs lg:text-base'>View Project Details</span>
                        </a>
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
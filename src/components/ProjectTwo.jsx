import React from 'react'
import techwow from '../image/techwow.png'

const ProjectTwo = () => {
    return (
        <section className='mb-12'>
            <div className='project-grid'>

                <div className='project-summary'>
                    <div className='project-index'>

                    </div>
                    <h2>Designing the future of education</h2>
                    <p>Designing a platform to help educators build better online coursewar</p>
                    <div>
                        <a href="">
                            <span>View Project</span>
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
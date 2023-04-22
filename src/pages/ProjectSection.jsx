import React from 'react'
import ProjectOne from '../components/ProjectOne';
import ProjectTwo from '../components/ProjectTwo';
import ProjectThree from '../components/ProjectThree';

const ProjectSection = () => {
    return (
        <div className='project-container mt-96'>

            <div className='project-header text-white'>
                <span className='text-gradient'>My Projects</span>
            </div>
            <ProjectOne />
            <ProjectTwo />
            <ProjectThree />
        </div>
    )
}

export default ProjectSection;
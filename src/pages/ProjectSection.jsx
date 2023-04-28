import React from 'react'
import ProjectOne from '../components/ProjectOne';
import ProjectTwo from '../components/ProjectTwo';
import ProjectThree from '../components/ProjectThree';

const ProjectSection = () => {
    return (
        <div className='project-container mt-96' id='projects'>
            <div className='text-white hidden'>Projects</div>
            <div className='project-header text-white text-center sm:text-right mt-32'>
                <span className='text-gradient'>My Projects</span>
            </div>
            <ProjectOne />
            <ProjectTwo />
            <ProjectThree />
        </div>
    )
}

export default ProjectSection;
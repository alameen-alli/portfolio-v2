import React from 'react'
import ProjectOne from '.././components/projects/ProjectOne';
import ProjectTwo from '.././components/projects/ProjectTwo';
import ProjectThree from '.././components/projects/ProjectThree';
import ProjectHRM from '../components/projects/ProjectHRM';

const ProjectSection = () => {
    return (
        <div className='project-container mt-96' id='projects'>
            <div className='text-white hidden'>Projects</div>
            <div className='mt-6'>
                <div className='project-header text-white text-center sm:text-right mt-32'>
                    <span className='text-gradient'>My Projects</span>
                </div>
                <ProjectHRM />
                <ProjectOne/>
                <ProjectTwo />
                <ProjectThree />
            </div>
        </div>
    )
}

export default ProjectSection;
import React from 'react'
import About from './About';
// import HeroSection from '../components/HeaderSection';
import HeaderSection from '../components/HeaderSection';
import ProjectSection from './ProjectSection';
import OtherProjects from './OtherProjects';
import ContactSection from './ContactSection';
import Socials from '../components/Socials';

const IndexPage = () => {
    return (
        // <main className='min-h-full'>
        //     <HeroSection />
        //     <About />
        // </main>
        <>
            <HeaderSection />
            <main>
                <About />
                <ProjectSection />
                <OtherProjects />
                <ContactSection />
                <Socials />
            </main>
        </>
    )
}

export default IndexPage;
import React from 'react'
import About from './About';
import HeroSection from '../components/HeaderSection';

const IndexPage = () => {
    return (
        <main className='min-h-full'>
            <HeroSection />
            <About />
        </main>
    )
}

export default IndexPage;
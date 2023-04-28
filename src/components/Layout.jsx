import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> 
    </div>
  )
}

export default Layout


{/* <div>
      <Navbar />
      <HeaderSection />
      <main>
        <About />
        <ProjectSection />
        <OtherProjects />
        <ContactSection />
        <Socials />
      </main>
    </div> */}
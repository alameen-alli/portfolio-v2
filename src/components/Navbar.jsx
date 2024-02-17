import React, { useState } from 'react';
import myLogo from '../image/b541711059847543.62750747823ad.png';
import resume from '../image/resume.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Transition } from 'react-transition-group';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {


    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }


    return (
        <div className={`${openMenu ? 'min-h-screen backdrop-blur-xl' : ''} fixed z-50 w-full text-base text-gray-300 bg-opacity-50 dark:bg-dark backdrop-filter backdrop-brightness-100 backdrop-blur-lg`}>
            <div className='flex items-center justify-between max-w-6xl px-4 py-3 mx-auto sm:px-6 md:space-x-10'>
                <div className='flex justify-start lg:w-0 lg:flex-1 lg:flex'>
                    <HashLink to="#home" smooth><img alt='' src={myLogo} className="w-8 h-8" /></HashLink>
                    {/* <div className='font-base logo-text'>Alli Al-ameen</div> */}
                </div>
                <div className='-my-2 -mr-2 md:hidden' onClick={toggleMenu} >
                    <div className='dark:bg-midnight text-gray-600 dark:text-gray-300 cursor-pointer rounded-full p-3.5 inline-flex items-center justify-center  focus:outline-none'>
                        {/* <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 5.75H19.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 18.25H19.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 12H19.25"></path></svg> */}
                        {/* {!openMenu ? <FaBars /> : <FaTimes />} */}
                        {openMenu ? <FaTimes /> : null}
                        {!openMenu ? <FaBars /> : null}
                        {/* <FaBars /> */}
                        <Transition
                            in={openMenu}
                            timeout={200}
                            mountOnEnter
                            unmountOnExit
                        >
                            {state => (
                                // <div className={`menu transition-opacity duration-200 ${state === 'entered' ? 'opacity-100' : 'opacity-0'} mobile-menu fixed  w-full sm:max-w-xs p-6 text-md text-gray-900 bg-gray-800 shadow-lg rounded-3xl top-12 right-4  dark:text-gray-400 dark:highlight-white/5`}>
                                //     {/* Your menu items here */}
                                //     {/* <div className='absolute flex items-center justify-center w-8 h-8 text-gray-500 top-5 right-5 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'>
                                //         <FaTimes />
                                //     </div> */}
                                //     <div className='mt-6'>
                                //         <nav className='flex flex-col space-y-6'>
                                //             <HashLink to="#about" smooth>About</HashLink>
                                //             <HashLink to="#projects" smooth>Projects</HashLink>
                                //             <HashLink to="#contact" smooth>Reach out</HashLink>
                                //         </nav>
                                //     </div>
                                // </div>

                                <div className={`menu transition-opacity duration-200  ${state === 'entered' ? 'opacity-100 ' : 'opacity-0'} nav-bg fixed  w-full max-w-full min-h-screen  text-md  shadow-lg top-12 right-0  dark:text-white   dark:highlight-white/5`}>
                                    {/* Your menu items here */}
                                    {/* <div className='absolute flex items-center justify-center w-8 h-8 text-gray-500 top-5 right-5 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'>
                                    <FaTimes />
                                </div> */}
                                    

                                    <div className='flex justify-start mt-12'>
                                        <nav className='flex flex-col space-y-10 ml-8'>
                                            <HashLink to="#about" smooth>About</HashLink>
                                            <HashLink to="#projects" smooth>Projects</HashLink>
                                            <HashLink to="#contact" smooth>Reach out</HashLink>
                                            <a href='https://www.linkedin.com/in/allialameen/' to="#contact" smooth><img alt="" className='w-7 h-7' src={resume} /></a>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </Transition>
                    </div>
                </div>
                <nav className='nav hidden md:flex space-x-12'>
                    <HashLink to="#about" className='nav-gradient' smooth>About</HashLink>
                    <HashLink to="#projects" className='nav-gradient' smooth>Projects</HashLink>
                    <HashLink to="#contact" className='nav-gradient' smooth>Contact</HashLink>
                    <a href="https://drive.google.com/file/d/1eZt9Y5ReCjv4022ZbMF83Hl5OEhdzAbg/view?usp=sharing" className='nav-gradient'>
                        <img alt='' src={resume} className='w-6 h-6' />
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

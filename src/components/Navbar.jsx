import React, { useState } from 'react';
import myLogo from '../image/b541711059847543.62750747823ad.png';
import linkedin from '../image/linkedin.png';
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
                                            <HashLink className='hover:bg-gray-50' to="#about" smooth>About</HashLink>
                                            <HashLink to="#projects" smooth>Projects</HashLink>
                                            <HashLink to="#contact" smooth>Reach out</HashLink>
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
                    <HashLink to="#contact" className='nav-gradient' smooth>Reach out</HashLink>
                    <a href="https://www.linkedin.com/in/allialameen/" className='nav-gradient'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#d1d5db">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg> */}
                        <img alt='' src={linkedin} className='w-7 h-7' />
                    </a>
                </nav>

                {/* <div className='items-center justify-end hidden md:flex md:flex-1 lg:w-0'>
                    <button>
                        <div className='text-gray-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#d1d5db">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </div>
                    </button>
                </div> */}

            </div>
        </div>
    )
}

export default Navbar
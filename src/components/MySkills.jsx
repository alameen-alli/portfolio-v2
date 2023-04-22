import React from 'react';
import htmlLogo from '../icons/cdnlogo.com_html.svg';
import cssLogo from '../icons/cdnlogo.com_css.svg';
import jsLogo from '../icons/cdnlogo.com_javascript.svg';
import tlLogo from '../icons/cdnlogo.com_tailwind-css.svg';
import reactLogo from '../icons/cdnlogo.com_react.svg';
import mongoLogo from '../icons/cdnlogo.com_mongodb-icon.svg';
import nodeLogo from '../icons/cdnlogo.com_nodejs-icon.svg';
import ReactLogo from '../icons/cdnlogo.com_react.svg'

const MySkills = () => {
    return (
        <div className='skill-container relative mt-32'>

            <div className='skill-header'>
                <span className='text-gradient'>My Skills</span>
            </div>

            <div className='skill-grid grid grid-cols-1 lg:grid-cols-3'>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>
                    <div className='w-5 h-5'>
                        <img src={htmlLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncate">Html</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>
                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-5 h-5'>
                        <img src={cssLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncate">Css</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>

                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-5 h-5'>
                        <img src={jsLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncate">Javascript</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>

                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-5 h-5'>
                        <img src={ReactLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncate">React.js</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>

                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>
                    <div className='w-5 h-5'>
                        <img src={tlLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncate">Tailwind Css</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>
                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-5 h-5'>
                        <img src={nodeLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncate">Node.js</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>

                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-5 h-5'>
                        <img src={mongoLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncate">MongoDb</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>

                </div>


            </div>
        </div>
    )
}

export default MySkills
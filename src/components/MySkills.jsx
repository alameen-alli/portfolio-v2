import React from 'react';
import htmlLogo from '../icons/cdnlogo.com_html.svg';
import cssLogo from '../icons/cdnlogo.com_css.svg';
import jsLogo from '../icons/cdnlogo.com_javascript.svg';
import tlLogo from '../icons/cdnlogo.com_tailwind-css.svg';
import mongoLogo from '../icons/cdnlogo.com_mongodb-icon.svg';
import nodeLogo from '../icons/cdnlogo.com_nodejs-icon.svg';
import ReactLogo from '../icons/cdnlogo.com_react.svg';
import NextLogo from '../icons/Next.js.png';
import redux from '../icons/redux.svg';

const MySkills = () => {
    return (
        <div className='skill-container relative mt-32'>

            <div className='skill-header text-center sm:text-right'>
                <span className='text-gradient'>My Technologies</span>
            </div>

            <div className='skill-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>
                    <div className='w-5 h-5'>
                        <img alt='' src={htmlLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncatee">Html</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>
                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-5 h-5'>
                        <img alt='' src={cssLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncatee">Css</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>

                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-5 h-5'>
                        <img alt='' src={jsLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncatee">Javascript</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>

                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-5 h-5'>
                        <img alt='' src={ReactLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncatee">React.js</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>

                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-11'>
                        <img alt='Next Logo' src={NextLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncatee">Next.js</p>
                    </div>

                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-5 h-5'>
                        <img alt='' src={redux} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncatee">Redux</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>

                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>
                    <div className='w-5 h-5'>
                        <img alt='' src={tlLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncatee">Tailwind Css</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>
                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-5 h-5'>
                        <img alt='' src={nodeLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncatee">Node.js</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>

                </div>

                <div className='skill-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 m-6'>

                    <div className='w-5 h-5'>
                        <img alt='' src={mongoLogo} />
                    </div>
                    <div class="min-w-0 flex-1 flex flex-col">
                        <p class="truncatee">MongoDb</p>
                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                    </div>

                </div>


            </div>
        </div>
    )
}

export default MySkills
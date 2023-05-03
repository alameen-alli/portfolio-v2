import React from 'react';
import frontPage from "../image/dashboard-frontpage.png";
import { Link } from 'react-router-dom';
import reactLogo from '../icons/cdnlogo.com_react.svg';
import tlLogo from '../icons/cdnlogo.com_tailwind-css.svg';
import fullpage from "../image/shopmasterFullpage.png";
import sidebar from '../image/shopmaster-sidebar.png';
import cart from '../image/shoppingcart.png';
import orderPage from '../image/ordersPage.png';
import customerPage from '../image/customerPage.png';
import employeePage from '../image/employeePage.png';
import backArrow from '../image/left-arrow-7360.svg';
import { HashLink } from 'react-router-hash-link';

const ProjectOneDetails = () => {

    const syncfusionUrl = "https://cdn.syncfusion.com/content/images/Logo/Logo_150dpi.png"

    return (
        <div>
            <div className='min-w-full text-gray-100 pl-6 pt-2'>
                <ol className='flex space-x-1'>
                    <li>
                        <Link to="/" className='text-lg'>~</Link>
                    </li>
                    <span>/</span>
                    <li className='jsx-8b75a9ccf5c40d44 transition duration-200 bg-gradient-to-br from-[#9ebd13] to-[#008552] bg-clip-text font-bold text-transparent hover:opacity-80'>shopmaster</li>
                </ol>
            </div>
            <main className='project-details'>
                <div className='details-container text-gray-100 mt-20'>
                    <div>
                        <div className='details-header-heading text-2xl text-center whitespace-nowraps mb-14 sm:text-5xl md:text-5xl sm:text-left font-bold'>
                            Shopmaster Admin Dashboard
                        </div>
                        <div className='mt-8 w-4/5'>
                            <p className='details-text'>
                                Shopmaster is an ecommerce management React app designed with a user-friendly interface for managing online stores. It's easy to navigate and customize, thanks to its range of tools and technologies. The app is fully mobile-responsive and has six beautiful theme colors to choose from. You can also toggle between dark and light mode. The dashboard includes three pages, three apps, and eight fully functional charts. It was built from scratch using React, Tailwind CSS, and Syncfusion.                            </p>
                        </div>
                        <div className='mt-12'>
                            <p className='uppercase font-bold'>stack</p>
                            <div className='w-2/3 grid grid-cols-3 details-text'>
                                <div className='skill-card pr-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 mr-6 my-6'><li>React Js</li></div>
                                <div className='skill-card pr-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 mr-6 my-6'><li>Tailwind Css</li></div>
                                <div className='skill-card pr-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 mr-6 my-6'><li>SyncFusion</li></div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-16 max-w-full'>
                        <img src={frontPage} className='rounded-md' />
                    </div>

                    {/* Project Purpose And Goal */}
                    <div>
                        <div className='mt-36 details-header-heading text-2xl text-center whitespace-nowraps mb-14 sm:text-5xl md:text-3xl sm:text-left font-bold'>
                            Project Purpose And Goal
                        </div>
                        <div className='details-text mt-8 w-4/5'>
                            <p className=''>
                                The React admin dashboard application  empowers ecommerce store owners to manage their online stores with ease. The goal is to provide a feature-rich platform that simplifies the complexities of running an ecommerce business, so users can focus on what really matters: growing their sales and revenue.
                            </p>
                            <div className='mt-5'>
                                Features of the app:
                                <div className='ml-3 mt-3'>
                                    <div className='flex'>
                                        <li></li>
                                        <p>A beautiful view of all important metrics such as earnings, recent transactions, and sales overview.</p>
                                    </div>
                                    <div className='flex'>
                                        <li></li>
                                        <p>The orders table includes a pagination system.</p>
                                    </div>
                                    <div className='flex'>
                                        <li></li>
                                        <p>The employees page has a fully functional search and filtering functionality..</p>
                                    </div>
                                    <div className='flex'>
                                        <li></li>
                                        <p>The customers page table is fully editable, allowing selection of multiple rows and deleting them, as well as editing each field individually.</p>
                                    </div>
                                    <div className='flex'>
                                        <li></li>
                                        <p>Four crucial apps that can be used for any app, including a fully functional calendar, a kanban board, a WYSIWYG editor, and a color picker app.</p>
                                    </div>
                                    <div className='flex'>
                                        <li></li>
                                        <p>Seven different kinds of charts, including line, area, bar, pie, financial candle, color mapping, and pyramid charts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Web Stack Explanation */}
                    <div className='flex mt-36'>

                        <div className='w-1/2'>

                            <div className='flex flex-col gap-6 justify-center h-full'>
                                <div className='stack-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                    <div className='w-5 h-5'>
                                        <img src={reactLogo} />
                                    </div>
                                    <div className="min-w-0 flex-1 flex flex-col">
                                        <p class="truncatee">React</p>
                                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                                    </div>
                                </div>

                                <div className='stack-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                    <div className='w-5 h-5'>
                                        <img src={tlLogo} />
                                    </div>
                                    <div className="min-w-0 flex-1 flex flex-col">
                                        <p class="truncatee">Tailwind CSS</p>
                                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                                    </div>
                                </div>

                                <div className='stack-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                    <div className=''>
                                        <img src={syncfusionUrl} />
                                    </div>
                                    {/* <div className="min-w-0 flex-1 flex flex-col">
                                        <p class="truncatee">Syncfusion</p>
                                    </div> */}
                                </div>
                            </div>

                        </div>

                        <div className='w-1/2'>
                            <div className='items-center'>
                                <div className=' details-header-heading text-2xl text-center whitespace-nowraps mb-14 sm:text-5xl md:text-3xl sm:text-left font-bold'>
                                    Web Stack And Explanation
                                </div>
                                <p className='details-text text-lefts'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio ratione et sint ab voluptate tempore corrupti ducimus, atque velit facere molestias repellendus placeat eos quam, saepe nostrum reprehenderit molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem totam rerum non culpa natus, temporibus nemo sed ab optio consequuntur nisi quo possimus magni laboriosam harum fugiat esse nihil corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem amet cumque corrupti voluptatem temporibus magni iusto nulla quo illum tenetur at distinctio aliquam, quas et. Incidunt quod id officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta, optio ipsam unde sint eum odio dignissimos at necessitatibus laborum, maxime possimus saepe, hic facilis debitis. Minus autem tenetur tempora!
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* Project Images And Pages */}
                    <div className='flex mt-36 space-x-10'>
                        <div className='pt-20'>
                            <img className='mb-6 rounded' src={sidebar} />
                            <img className='mb-6 rounded' src={cart} />
                        </div>
                        <div className='w-5/7'>
                            <img className='rounded-lg' src={fullpage} />
                        </div>
                    </div>


                    {/* Problems And Thought Process  */}
                    <div className='mt-36'>
                        <div className='w-4/5 mx-auto '>
                            <div className='text-center mt-36 details-header-heading text-2xl  whitespace-nowraps mb-14 sm:text-5xl md:text-3xl font-bold'>
                                Problems And Thought Process
                            </div>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora praesentium sunt mollitia consequuntur, error repellendus quibusdam recusandae et beatae, hic minima aliquam amet fugit pariatur quas eaque a! Atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam modi omnis aut libero, obcaecati quaerat quidem quia mollitia corporis accusantium aliquam qui blanditiis eos? Ea sed nisi omnis natus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam officiis illo soluta, animi iure consectetur recusandae modi doloremque, dolore accusantium doloribus neque ad quibusdam iste sequi ex voluptates maxime harum!
                            </p>
                        </div>
                    </div>


                    <div className='flex mt-36 space-x-10'>
                        <div className='w-1/2'>
                            <img className='my-14 h-full rounded-lg' src={employeePage} />
                        </div>
                        <div className='w-1/2'>
                            <img className='rounded-lg' src={orderPage} />
                        </div>
                    </div>

                    <div className='mt-36'>
                        <img className='rounded-lg' src={customerPage} />
                    </div>

                    <div className='mt-36'>
                        <div className='w-4/5'>
                            <div className='text-left mt-36 details-header-heading text-2xl  whitespace-nowraps mb-14 sm:text-5xl md:text-3xl font-bold'>
                                Lessons Learned
                            </div>
                            <p className='text-left'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora praesentium sunt mollitia consequuntur, error repellendus quibusdam recusandae et beatae, hic minima aliquam amet fugit pariatur quas eaque a! Atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam modi omnis aut libero, obcaecati quaerat quidem quia mollitia corporis accusantium aliquam qui blanditiis eos? Ea sed nisi omnis natus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam officiis illo soluta, animi iure consectetur recusandae modi doloremque, dolore accusantium doloribus neque ad quibusdam iste sequi ex voluptates maxime harum!
                            </p>
                        </div>
                    </div>

                    <div className='cta-container'>
                        <HashLink to="#projects" smooth>
                            <button className=' flex items-center justify-between space-x-2 project-cta'>
                                {/* <img src={backArrow} className='backArrow w-5 h-5' /> */}
                                <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                        <path d="M1168 3782 c-43 -20 -1104 -1062 -1140 -1120 -33 -52 -33 -152 0 -204 36 -58 1097 -1100 1140 -1120 113 -53 258 29 270 151 10 111 25 91 -381 498 l-371 373 2149 2 2150 3 38 24 c21 13 50 42 65 64 23 34 27 52 27 107 0 55 -4 73 -27 107 -15 22 -44 51 -65 64 l-38 24 -2150 3 -2149 2 371 373 c406 407 391 387 381 498 -12 122 -157 204 -270 151z" />
                                    </g>
                                </svg>
                                <div className='header-cta'>Back to Homepage</div>
                            </button>
                        </HashLink>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default ProjectOneDetails;
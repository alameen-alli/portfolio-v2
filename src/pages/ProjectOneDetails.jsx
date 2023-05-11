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
import netlify from '../image/netlify-seeklogo.com.svg';

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
                    <li className='jsx-8b75a9ccf5c40d44 transition duration-200 bg-gradient-to-br from-[#9ebd13] to-[#008552] bg-clip-text font-bold text-transparent hover:opacity-80'><a href="https://shopmaster-dashboard.netlify.app/">shopmaster</a></li>
                </ol>
            </div>
            <main className='project-details'>

                <div className='details-container text-gray-100 mt-20'>
                    <div>

                        <div className='details-header-heading text-2xl text-center whitespace-nowraps mb-14 sm:text-5xl md:text-5xl sm:text-left font-bold'>
                            Shopmaster Admin Dashboard
                        </div>

                        <div className='mt-8 mx-auto sm:mx-0 w-4/5'>
                            <p className='text-sm sm:text-base text-gray-400 text-center sm:text-left'>
                                Shopmaster is an ecommerce management React app designed with a user-friendly interface for managing online stores. It's easy to navigate and customize, thanks to its range of tools and technologies. The app is fully mobile-responsive and has six beautiful theme colors to choose from. You can also toggle between dark and light mode. The dashboard includes three pages, three apps, and eight fully functional charts. It was built from scratch using React, Tailwind CSS, and Syncfusion.
                            </p>
                        </div>

                        {/* <div className='mt-12'>
                            <p className='uppercase font-bold text-center sm:text-left'>stack</p>
                            <div className='text-xs text-center md:text-sm w-full sm:w-5/6 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 details-text'>
                                <div className='skill-card  py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded  items-center gap-4 transition-colors duration-700 hover:duration-100  my-6'><li>React Js</li></div>
                                <div className='skill-card  py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded  items-center gap-4 transition-colors duration-700 hover:duration-100  my-6'><li>Tailwind Css</li></div>
                                <div className='skill-card  py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded  items-center gap-4 transition-colors duration-700 hover:duration-100  my-6'><li>SyncFusion</li></div>
                                <div className='skill-card  py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded  items-center gap-4 transition-colors duration-700 hover:duration-100  my-6'><li>Netlify</li></div>
                            </div>
                        </div> */}

                    </div>

                    <div className='mt-16 max-w-full'>
                        <img alt='' src={frontPage} className='rounded-md' />
                    </div>

                    {/* Project Purpose And Goal */}
                    <div>
                        <div className='mt-36 details-header-heading text-2xl text-center whitespace-nowraps mb-14 sm:text-5xl md:text-3xl sm:text-left font-bold'>
                            Project Purpose And Goal
                        </div>
                        <div className='details-text mt-8 w-full sm:w-4/5'>
                            <p className='text-sm sm:text-base text-gray-400 text-center sm:text-left'>
                                The React admin dashboard application  empowers ecommerce store owners to manage their online stores with ease. The goal is to provide a feature-rich platform that simplifies the complexities of running an ecommerce business, so users can focus on what really matters: growing their sales and revenue.
                            </p>
                            <div className='mt-5'>
                                <div className='text-center font-bold sm:text-left'>Features of the app:</div>
                                <div className='text-sm sm:text-base text-gray-400 ml-3 mt-3'>
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
                    <div className='hidden sm:flex mt-36'>

                        <div className='w-1/2'>

                            <div className='flex flex-col gap-6 justify-center h-full'>
                                <div className='stack-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                    <div className='w-5 h-5'>
                                        <img alt='' src={reactLogo} />
                                    </div>
                                    <div className="min-w-0 flex-1 flex flex-col">
                                        <p class="truncatee">React</p>
                                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                                    </div>
                                </div>

                                <div className='stack-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                    <div className='w-5 h-5'>
                                        <img alt='' src={tlLogo} />
                                    </div>
                                    <div className="min-w-0 flex-1 flex flex-col">
                                        <p class="truncatee">Tailwind CSS</p>
                                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                                    </div>
                                </div>

                                <div className='stack-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                    <div className='w-5 h-5'>
                                        <img alt='' src={netlify} />
                                    </div>
                                    <div className="min-w-0 flex-1 flex flex-col">
                                        <p class="truncatee">Netlify</p>
                                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                                    </div>
                                </div>

                                <div className='stack-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                    <div className=''>
                                        <img alt='' src={syncfusionUrl} />
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
                                <p className='text-gray-400 text-lefts'>
                                    React made the most sense for application because of its component-based architecture which allowed for reusability, faster rendering and better performance. For styling, I used Tailwind CSS, which is a utility-first CSS framework. This helped me quickly create a custom and responsive design for the dashboard without having to write a lot of CSS code from scratch.
                                </p>
                                <p className='text-gray-400 mt-10  text-lefts'>
                                    Syncfusion was a great choice for implementing the data visualization and charting features of the dashboard. Their library provides a wide range of customizable and well-designed components, making it easy to create beautiful charts and graphs.

                                    Lastly, I deployed the application on Netlify, a cloud-based hosting service that offers a simple and efficient way to deploy web applications. With Netlify, I was able to easily set up continuous deployment.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Web Stack Explanation - mobile*/}
                    <div className='sm:hidden mt-36'>
                        <div>
                            <div className=' details-header-heading text-2xl text-center whitespace-nowraps mb-14 sm:text-5xl md:text-3xl sm:text-left font-bold'>
                                Web Stack And Explanation
                            </div>

                            <p className='text-sm sm:text-base text-gray-400  text-center sm:text-left'>
                                React made the most sense for application because of its component-based architecture which allowed for reusability, faster rendering and better performance. For styling, I used Tailwind CSS, which is a utility-first CSS framework. This helped me quickly create a custom and responsive design for the dashboard without having to write a lot of CSS code from scratch.
                            </p>

                            <div className='w-full'>

                                <div className='mt-12 flex flex-col gap-6 justify-center h-full'>
                                    <div className='stack-card-mobile px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                        <div className='w-5 h-5'>
                                            <img alt='' src={reactLogo} />
                                        </div>
                                        <div className="min-w-0 flex-1 flex flex-col">
                                            <p class="truncatee">React</p>
                                            {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                                        </div>
                                    </div>

                                    <div className='stack-card-mobile px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                        <div className='w-5 h-5'>
                                            <img alt='' src={tlLogo} />
                                        </div>
                                        <div className="min-w-0 flex-1 flex flex-col">
                                            <p class="truncatee">Tailwind CSS</p>
                                            {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                                        </div>
                                    </div>

                                    <div className='stack-card-mobile px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                        <div className='w-5 h-5'>
                                            <img alt='' src={netlify} />
                                        </div>
                                        <div className="min-w-0 flex-1 flex flex-col">
                                            <p class="truncatee">Netlify</p>
                                            {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                                        </div>
                                    </div>

                                    <div className='stack-card-mobile px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                        <div className=''>
                                            <img alt='' src={syncfusionUrl} />
                                        </div>
                                        {/* <div className="min-w-0 flex-1 flex flex-col">
                                        <p class="truncatee">Syncfusion</p>
                                    </div> */}
                                    </div>
                                </div>

                            </div>

                            <p className='text-sm sm:text-base mt-10 text-gray-400  text-center sm:text-left'>
                                Syncfusion was a great choice for implementing the data visualization and charting features of the dashboard. Their library provides a wide range of customizable and well-designed components, making it easy to create beautiful charts and graphs.

                                Lastly, I deployed the application on Netlify, a cloud-based hosting service that offers a simple and efficient way to deploy web applications. With Netlify, I was able to easily set up continuous deployment.
                            </p>

                        </div>
                    </div>


                    {/* Project Images And Pages */}
                    <div className='sm:flex mt-12 sm:mt-36 space-x-0 sm:space-x-10'>
                        <div className='pt-20'>
                            <img alt='' className='mb-6 mx-auto sm:mx-0 rounded' src={sidebar} />
                            <img alt='' className='mb-6 mx-auto sm:mx-0 rounded' src={cart} />
                        </div>
                        <div className='w-full sm:w-5/7'>
                            <img alt='' className='rounded-lg' src={fullpage} />
                        </div>
                    </div>


                    {/* Problems And Thought Process  */}
                    <div className='mt-36'>
                        <div className='w-4/5 mx-auto '>
                            <div className='text-center mt-36 details-header-heading text-2xl  whitespace-nowraps mb-14 sm:text-5xl md:text-3xl font-bold'>
                                Problems And Thought Process
                            </div>
                            <p className='text-sm sm:text-base text-gray-400 text-center'>
                                When I first started building the admin dashboard, I knew that I wanted it to be user-friendly, customizable, and easy to navigate. However, I quickly realized that creating such an app from scratch might come with a little challenge.
                            </p>
                            <p className='text-sm sm:text-base text-gray-400 mt-5 text-center'>
                                The challenge I encountered was deciding which technologies to use. I knew that I wanted to build the app with React, but I needed to find additional tools and packages that would allow me to create the features I had in mind. After some research, I settled on using Tailwind CSS for styling and Syncfusion for data visualization and charting.
                            </p>
                        </div>
                    </div>


                    <div className='sm:flex mt-36 sm:space-x-10'>
                        <div className='sm:w-1/2'>
                            <img alt='' className='my-14 rounded-lg' src={employeePage} />
                        </div>
                        <div className='sm:w-1/2'>
                            <img alt='' className='mx-auto sm:mx-0 rounded-lg' src={orderPage} />
                        </div>
                    </div>

                    <div className='mt-14 sm:mt-36'>
                        <img alt='' className='rounded-lg' src={customerPage} />
                    </div>

                    <div className='mt-36'>
                        <div className='w-full sm:w-4/5'>
                            <div className='text-center sm:text-left mt-36 details-header-heading text-2xl  whitespace-nowraps mb-14 sm:text-5xl md:text-3xl font-bold'>
                                Lessons Learned
                            </div>
                            <p className='text-sm sm:text-base text-gray-400 text-center sm:text-left'>
                                Overall, building the Shopmaster admin dashboard was a challenging but rewarding experience. It forced me to think deeply about the needs of users and how to design an app that would meet those needs while also being aesthetically pleasing and easy to use.
                            </p>
                        </div>
                    </div>

                    <div className='cta-container flex justify-between'>
                        {/* <div>
                            <Link to="/" smooth>
                                <button className=' flex items-center justify-between space-x-2 project-cta'>
                                    <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                            <path d="M1168 3782 c-43 -20 -1104 -1062 -1140 -1120 -33 -52 -33 -152 0 -204 36 -58 1097 -1100 1140 -1120 113 -53 258 29 270 151 10 111 25 91 -381 498 l-371 373 2149 2 2150 3 38 24 c21 13 50 42 65 64 23 34 27 52 27 107 0 55 -4 73 -27 107 -15 22 -44 51 -65 64 l-38 24 -2150 3 -2149 2 371 373 c406 407 391 387 381 498 -12 122 -157 204 -270 151z" />
                                        </g>
                                    </svg>
                                    <div className='header-cta'>Back to Homepage</div>
                                </button>
                            </Link>
                        </div> */}

                        <div>
                            <Link to="/techwow" smooth>
                                <button className=' flex items-center justify-between space-x-2 next-cta'>
                                    {/* <img src={backArrow} className='backArrow w-5 h-5' /> */}
                                    {/* <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                            <path d="M1168 3782 c-43 -20 -1104 -1062 -1140 -1120 -33 -52 -33 -152 0 -204 36 -58 1097 -1100 1140 -1120 113 -53 258 29 270 151 10 111 25 91 -381 498 l-371 373 2149 2 2150 3 38 24 c21 13 50 42 65 64 23 34 27 52 27 107 0 55 -4 73 -27 107 -15 22 -44 51 -65 64 l-38 24 -2150 3 -2149 2 371 373 c406 407 391 387 381 498 -12 122 -157 204 -270 151z" />
                                        </g>
                                    </svg> */}
                                    <div className='header-cta text-sm sm:text-base'>Next Project</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hover:animate-pulse h-5 w-5 transition duration-200 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default ProjectOneDetails;
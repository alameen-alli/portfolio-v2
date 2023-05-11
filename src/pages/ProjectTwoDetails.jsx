import React from 'react';
import frontPage from "../image/techwow-frontpage.png";
import { Link } from 'react-router-dom';
import reactLogo from '../icons/cdnlogo.com_react.svg';
import tlLogo from '../icons/cdnlogo.com_tailwind-css.svg';
import loginpage from '../image/techwow-login.png';
import registerpage from '../image/registerpage.png';
import postpage from '../image/postpage.png'
import createpost from '../image/createPost.png';
import editpost from '../image/updatepost.png'
import nodeJS from '../icons/cdnlogo.com_nodejs-icon.svg'
import mongoDB from '../icons/cdnlogo.com_mongodb-icon.svg';

const ProjectTwoDetails = () => {


    return (
        <div>
            <div className='min-w-full text-gray-100 pl-6 pt-2'>
                <ol className='flex space-x-1'>
                    <li>
                        <Link to="/" className='text-lg'>~</Link>
                    </li>
                    <span>/</span>
                    <li className='jsx-8b75a9ccf5c40d44 transition duration-200 bg-gradient-to-br from-[#9ebd13] to-[#008552] bg-clip-text font-bold text-transparent hover:opacity-80'>techwow</li>
                </ol>
            </div>
            <main className='project-details'>
                <div className='details-container text-gray-100 mt-20'>
                    <div>
                        <div className='details-header-heading text-2xl text-center whitespace-nowraps mb-14 sm:text-5xl md:text-5xl sm:text-left font-bold'>
                            TechWow
                        </div>
                        <div className='mt-8 mx-auto sm:mx-0 w-4/5'>
                            <p className='text-sm sm:text-base text-gray-400 text-center sm:text-left'>
                                TechWow is a full-stack web application designed for blogging. It allows users to create, edit, and publish blog posts, as well as view posts from other users. The app includes features such as user authentication and authorization, so that only authorized users can create or modify posts.
                            </p>
                            <p className='text-sm sm:text-base text-gray-400 text-center sm:text-left'>
                                Overall, the blog app provides an easy and intuitive platform for creating and sharing blog content, with robust security features to protect user data.
                            </p>
                        </div>

                        {/* <div className='mt-12'>
                            <p className='uppercase font-bold'>stack</p>
                            <div className='w-2/3 grid grid-cols-4 details-text'>
                                <div className='skill-card pr-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 mr-6 my-6'><li>React Js</li></div>
                                <div className='skill-card pr-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 mr-6 my-6'><li>Tailwind Css</li></div>
                                <div className='skill-card pr-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 mr-6 my-6'><li>Styled Components</li></div>
                                <div className='skill-card pr-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 mr-6 my-6'><li>Node js</li></div>
                                <div className='skill-card pr-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 mr-6 my-6'><li>Mongo DB</li></div>
                                <div className='skill-card pr-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100 mr-6 my-6'><li>Express JS</li></div>
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
                                During Phase 1, the project focused on building the core functionality of the blog app. The main objective was to allow users to read posts of other bloggers. The design included displaying an image with the post's title, author name, publish date, and a summary. Users could click on the post, which would then link them to the full post content.
                            </p>
                            <p className='mt-5 text-sm sm:text-base text-gray-400 text-center sm:text-left'>
                                In Phase 2, the project expanded to include more features such as the register page, login page, create Post page, and Edit Post page. Additionally, the backend logic was developed and implemented. The objective was to create a more interactive experience for users, allowing them to register, login, and create their own posts on the platform.
                            </p>
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
                                        <img alt='' src={nodeJS} />
                                    </div>
                                    <div className="min-w-0 flex-1 flex flex-col">
                                        <p class="truncatee">Node JS</p>
                                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                                    </div>
                                </div>

                                <div className='stack-card px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                    <div className='w-5 h-5'>
                                        <img alt='' src={mongoDB} />
                                    </div>
                                    <div className="min-w-0 flex-1 flex flex-col">
                                        <p class="truncatee">MongoDB</p>
                                        {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='w-1/2'>
                            <div className='items-center'>
                                <div className=' details-header-heading text-2xl text-center whitespace-nowraps mb-14 sm:text-5xl md:text-3xl sm:text-left font-bold'>
                                    Web Stack And Explanation
                                </div>
                                <p className='details-text text-lefts'>
                                    For my blog application, I chose to use the React framework due to its component-based architecture, which allowed for efficient reusability, faster rendering, and better performance. To quickly create a custom and responsive design, I used Tailwind CSS, a utility-first CSS framework. With Tailwind, I was able to avoid writing a lot of CSS code from scratch and instead focus on building the application's core functionality.
                                </p>
                                <p className='mt-10 details-text text-lefts'>
                                    To handle the backend and server-side of the application, I used Node.js, it provided a seamless way to create a RESTful API to communicate between the server and the client. For data storage, I chose to use MongoDB, which allowed for flexible schema design and seamless scalability.
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
                                For my blog application, I chose to use the React framework due to its component-based architecture, which allowed for efficient reusability, faster rendering, and better performance. To quickly create a custom and responsive design, I used Tailwind CSS, a utility-first CSS framework. With Tailwind, I was able to avoid writing a lot of CSS code from scratch and instead focus on building the application's core functionality.
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
                                            <img alt='' src={nodeJS} />
                                        </div>
                                        <div className="min-w-0 flex-1 flex flex-col">
                                            <p class="truncatee">Node JS</p>
                                            {/* <small class="truncate">(Dart, Flutter, Firebase)</small> */}
                                        </div>
                                    </div>

                                    <div className='stack-card-mobile px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100'>
                                        <div className='w-5 h-5'>
                                            <img alt='' src={mongoDB} />
                                        </div>
                                        <div className="min-w-0 flex-1 flex flex-col">
                                        <p class="truncatee">Mongo DB</p>
                                    </div>
                                    </div>
                                </div>

                            </div>

                            <p className='text-sm sm:text-base mt-10 text-gray-400  text-center sm:text-left'>
                                To handle the backend and server-side of the application, I used Node.js, it provided a seamless way to create a RESTful API to communicate between the server and the client. For data storage, I chose to use MongoDB, which allowed for flexible schema design and seamless scalability.
                            </p>

                        </div>
                    </div>




                    {/* Project Images And Pages */}
                    <div className='sm:flex mt-12 sm:mt-36 space-x-0 sm:space-x-10'>
                        <div className='pt-20'>
                            <img alt='' className='mb-6 mx-auto sm:mx-0 rounded' src={loginpage} />
                            <img alt='' className='mb-6 mx-auto sm:mx-0 rounded' src={registerpage} />
                        </div>
                        <div className='w-5/7'>
                            <img alt='' className='rounded-lg' src={postpage} />
                        </div>
                    </div>


                    {/* Problems And Thought Process  */}
                    <div className='mt-36'>
                        <div className='w-4/5 mx-auto '>
                            <div className='text-center mt-36 details-header-heading text-2xl  whitespace-nowraps mb-14 sm:text-5xl md:text-3xl font-bold'>
                                Problems And Thought Process
                            </div>
                            <p className='text-sm sm:text-base text-gray-400 text-center'>
                                While building the blog app, I faced a few challenges. One of the biggest was configuring CORS (Cross-Origin Resource Sharing) for the backend. I had to ensure that the frontend and backend servers were allowed to communicate with each other, and it took some time to figure out the correct configuration settings.
                            </p>
                            <p className='text-sm sm:text-base text-gray-400 mt-5 text-center'>
                                Another challenge was creating a middleware to verify the JWT token and extract user information from it. This was important for implementing user authentication and authorization features. I had to carefully follow the documentation for the JWT library I was using and test the middleware thoroughly to ensure it was working correctly.
                            </p>
                        </div>
                    </div>


                    <div className='mt-36'>
                        <div>
                            <img alt='' className='my-14 rounded-lg' src={createpost} />
                        </div>
                        <div>
                            <img alt='' className='mx-auto sm:mx-0 rounded-lg' src={editpost} />
                        </div>
                    </div>

                    {/* <div className='mt-36'>
                        <img className='rounded-lg' src={customerPage} />
                    </div> */}

                    <div className='mt-36'>
                        <div className='w-full sm:w-4/5'>
                            <div className='text-center sm:text-left mt-36 details-header-heading text-2xl  whitespace-nowraps mb-14 sm:text-5xl md:text-3xl font-bold'>
                                Lessons Learned
                            </div>
                            <p className='text-sm sm:text-base text-gray-400 text-center sm:text-left'>
                                During my experience working on this project, I gained a deeper understanding of React Hooks such as useEffect and useContext, as well as Git management and API integration. As a beginner in full stack development, I learned a lot about the importance of code structure and organization. These lessons have been invaluable to me and have helped me to improve my skills as a developer.
                            </p>
                        </div>
                    </div>

                    <div className='cta-container'>
                        {/* <div>
                            <HashLink to="#projects" smooth>
                                <button className=' flex items-center justify-between space-x-2 project-cta'>
                                    <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                            <path d="M1168 3782 c-43 -20 -1104 -1062 -1140 -1120 -33 -52 -33 -152 0 -204 36 -58 1097 -1100 1140 -1120 113 -53 258 29 270 151 10 111 25 91 -381 498 l-371 373 2149 2 2150 3 38 24 c21 13 50 42 65 64 23 34 27 52 27 107 0 55 -4 73 -27 107 -15 22 -44 51 -65 64 l-38 24 -2150 3 -2149 2 371 373 c406 407 391 387 381 498 -12 122 -157 204 -270 151z" />
                                        </g>
                                    </svg>
                                    <div className='header-cta'>Back to Homepage</div>
                                </button>
                            </HashLink>
                        </div> */}

                        <div className='mb-10'>
                            <Link to="/shopmaster" smooth>
                                <button className=' flex items-center justify-between space-x-2 next-cta'>
                                    <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                            <path d="M1168 3782 c-43 -20 -1104 -1062 -1140 -1120 -33 -52 -33 -152 0 -204 36 -58 1097 -1100 1140 -1120 113 -53 258 29 270 151 10 111 25 91 -381 498 l-371 373 2149 2 2150 3 38 24 c21 13 50 42 65 64 23 34 27 52 27 107 0 55 -4 73 -27 107 -15 22 -44 51 -65 64 l-38 24 -2150 3 -2149 2 371 373 c406 407 391 387 381 498 -12 122 -157 204 -270 151z" />
                                        </g>
                                    </svg>
                                    <div className='header-cta text-sm sm:text-base'>Previous Project</div>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default ProjectTwoDetails;
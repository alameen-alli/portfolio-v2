import React from 'react'
import nestfund from '../image/nestfund.png'
import nestfundBg from '../image/nestfundbg.png'

const OtherProjects = () => {
    return (
        <div className='other-project-container mt-32 mb-32'>

            <div className='other-project-header text-center sm:text-left text-white'>
                <span className='text-gradient'>COMING SOON</span>
            </div>

            <div className="other-project-card flex max-w-full flex-col-reverse rounded-3xl  py-16 px-16 transition duration-200 hover:border-accent md:hover:scale-[1.01]">



                <div className='jsx-8b75a9ccf5c40d44 mr-1 inline-flex items-center space-x-1 text-gray-300 transition duration-200'>
                    <div className='mt-8 flex-col space-y-4'>
                        <h2 className='nestfund-color text-lg font-semibold text-gray-400 transition duration-200 hover:opacity-60 text-center'>Empower aspiring techies with the tools they need to succeed!</h2>
                        <p className='text-center'>NestFund is a crowdfunding app that aims to support new techies who are looking to break into the industry by providing a platform for them to raise funds for the equipment and tools they need to pursue their tech dreams. 
                        </p>
                    </div>
                </div>



                <div className='jsx-8b75a9ccf5c40d44 mr-1 inline-flex items-center space-x-1 text-gray-300 transition duration-200 aspect-[16/9] overflow-hidden rounded-2xl drop-shadow-md'>
                    <img className='rounded-xl transition duration-200 hover:opacity-60' src={nestfund}/>
                </div>


            </div>



        </div>
    )
}

export default OtherProjects;

// className="flex max-w-full flex-col-reverse rounded-xl  py-4 px-6 transition duration-200 hover:border-accent md:hover:scale-[1.01]"











{/* <div className='group relative rounded-xl border-tertiary bg-secondary/50 p-4 transition duration-200 hover:border-accent md:hover:scale-[1.01]'>

                    <a class="jsx-8b75a9ccf5c40d44 transition duration-200 flex flex-col space-y-14 md:flex-row md:space-y-0 md:space-x-4" href="">
                        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl bg-tertiary p-1.5 shadow-md"><path d="M244.379 48.435L121.911 50.04l.754 2.614L2.476 469.189h122.479l58.949-204.299 58.511 202.779-.525 1.766h122.479L487 48.435H364.369l-59.555 209.449L245.37 51.87l.269-.933h-.538l-.722-2.502z" fill="url(#paint0_linear_6_6)"></path><defs><linearGradient id="paint0_linear_6_6" x1="421.5" y1="48" x2="69.0953" y2="468.661" gradientUnits="userSpaceOnUse"><stop stop-color="#1A3B8D"></stop><stop offset="1" stop-color="#206E86"></stop></linearGradient></defs></svg>

                        <div className='flex flex-col space-y-2'>
                            <h3 className='flex flex-row items-center space-x-2 text-lg text-gray-300 font-semibold'>
                                Notiger
                            </h3>
                            <p className='text-md text-gray-300'>
                                Get realtime notifications on events from your application
                            </p>
                        </div>
                    </a>

                </div>

                <div className='group relative rounded-xl border-tertiary bg-secondary/50 p-4 transition duration-200 hover:border-accent md:hover:scale-[1.01]'>
                    <a class="jsx-8b75a9ccf5c40d44 transition duration-200 flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4" href="">
                        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl bg-tertiary p-1.5 shadow-md"><g clip-path="url(#clip0_2_2)"><path fill="#000" d="M0 0H512V512H0z"></path><g filter="url(#filter0_dddd_2_2)"><rect x="55" y="168" width="401" height="141" rx="32" fill="#000"></rect></g><path d="M130 220.875l-.75 15.25 13-5.5 2.875 8.5-13.5 3.875 9.5 11.875-7.25 5.25-8.375-12.875-8.375 12.875-7.25-5.25 9.5-11.875-13.5-3.875 2.875-8.5 13 5.5-.75-15.25h9zM256 220.875l-.75 15.25 13-5.5 2.875 8.5-13.5 3.875 9.5 11.875-7.25 5.25-8.375-12.875-8.375 12.875-7.25-5.25 9.5-11.875-13.5-3.875 2.875-8.5 13 5.5-.75-15.25h9zM382 220.875l-.75 15.25 13-5.5 2.875 8.5-13.5 3.875 9.5 11.875-7.25 5.25-8.375-12.875-8.375 12.875-7.25-5.25 9.5-11.875-13.5-3.875 2.875-8.5 13 5.5-.75-15.25h9z" fill="#fff"></path></g><defs><filter id="filter0_dddd_2_2" x="-5" y="98" width="521" height="271" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="20"></feOffset><feGaussianBlur stdDeviation="20"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.852833 0 0 0 0 0 0 0 0 0 0.991667 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_2"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="-30"></feOffset><feGaussianBlur stdDeviation="20"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.852833 0 0 0 0 0 0 0 0 0 0.991667 0 0 0 0.25 0"></feColorMatrix><feBlend in2="effect1_dropShadow_2_2" result="effect2_dropShadow_2_2"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="20"></feOffset><feGaussianBlur stdDeviation="20"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.852833 0 0 0 0 0 0 0 0 0 0.991667 0 0 0 0.25 0"></feColorMatrix><feBlend in2="effect2_dropShadow_2_2" result="effect3_dropShadow_2_2"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-20"></feOffset><feGaussianBlur stdDeviation="20"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.852833 0 0 0 0 0 0 0 0 0 0.991667 0 0 0 0.25 0"></feColorMatrix><feBlend in2="effect3_dropShadow_2_2" result="effect4_dropShadow_2_2"></feBlend><feBlend in="SourceGraphic" in2="effect4_dropShadow_2_2" result="shape"></feBlend></filter><clipPath id="clip0_2_2"><path fill="#fff" d="M0 0H512V512H0z"></path></clipPath></defs></svg>
                        <div className='flex flex-col space-y-2'>
                            <h3 className='flex flex-row items-center space-x-2 text-lg text-gray-300 font-semibold'>
                                Notiger
                            </h3>
                            <p className='text-md text-gray-300'>
                                Get realtime notifications on events from your application
                            </p>
                        </div>
                    </a>
                </div>

                <div className='group relative rounded-xl border-tertiary bg-secondary/50 p-4 transition duration-200 hover:border-accent md:hover:scale-[1.01]'>
                    <a class="jsx-8b75a9ccf5c40d44 transition duration-200 flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4" href="">
                        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl bg-tertiary p-1.5 shadow-md"><path d="M244.379 48.435L121.911 50.04l.754 2.614L2.476 469.189h122.479l58.949-204.299 58.511 202.779-.525 1.766h122.479L487 48.435H364.369l-59.555 209.449L245.37 51.87l.269-.933h-.538l-.722-2.502z" fill="url(#paint0_linear_6_6)"></path><defs><linearGradient id="paint0_linear_6_6" x1="421.5" y1="48" x2="69.0953" y2="468.661" gradientUnits="userSpaceOnUse"><stop stop-color="#1A3B8D"></stop><stop offset="1" stop-color="#206E86"></stop></linearGradient></defs></svg>

                        <div className='flex flex-col space-y-2'>
                            <h3 className='flex flex-row items-center space-x-2 text-lg text-gray-300 font-semibold'>
                                Notiger
                            </h3>
                            <p className='text-md text-gray-300'>
                                Get realtime notifications on events from your application
                            </p>
                        </div>
                    </a>
                </div> */}
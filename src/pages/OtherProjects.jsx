import React from 'react'
import nestfund from '../image/nestfund.png'

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
                    <img className='rounded-xl transition duration-200 hover:opacity-60' src={nestfund} alt=''/>
                </div>


            </div>



        </div>
    )
}

export default OtherProjects;













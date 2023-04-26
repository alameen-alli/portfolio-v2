import React from 'react'

const ContactSection = () => {
    return (
        <div className='contact-container text-gray-300 relative'>

            <div className='contact-header mt-32 text-white'>
                <span className='text-gradient'>Contact Me</span>
            </div>
            <p class="font-normal">
                You can send me an email at
                <a href="mailto:allialameen8739@gmail.com" class=" ml-1 mr-1 inline-flex items-center space-x-1 transition duration-200 gradient-underline no-underline text-blue-400 hover:text-blue-300">
                    <span>allialameen8739@gmail.com</span>
                </a>
            </p>

            {/* <div class="absolute top-0 left-0 right-0">
                <div class="absolute c1 top-16 -z-10 overflow-visible opacity-20">
                    <div class="circle-1 -z-10 h-[400px] w-[700px] rounded-full bg-red-700 mix-blend-multiply blur-[128px]"></div>
                </div>
                <div class="absolute c2 left-10 top-32 -z-10 overflow-visible opacity-20">
                    <div class="circle-2 -z-10 h-[400px] w-[700px] rounded-full bg-green-700 mix-blend-multiply blur-[128px]"></div>
                </div>
                <div class="absolute c3 left-12 top-48 -z-10 overflow-visible opacity-20">
                    <div class="circle-3 -z-10 h-[600px] w-[500px] rounded-full bg-blue-700 mix-blend-multiply blur-[128px]"></div>
                </div>
            </div> */}

        </div>
    )
}

export default ContactSection
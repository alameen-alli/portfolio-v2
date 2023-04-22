import React from 'react'

const ContactSection = () => {
    return (
        <div className='contact-container text-gray-300 relative'>

            <div className='contact-header mt-32 text-white'>
                Contact Me
            </div>
            <p>
                You can send me over an e-mail on
                <a href="">
                    <span> allialameen8739@gmail.com</span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> */}
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
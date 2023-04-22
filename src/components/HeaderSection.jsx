import React from 'react'

const HeaderSection = () => {
    return (
        <div className='header-container relative'>
            <header className='header'>
                <div className='hero-header'>
                    <div className='hero-header-heading text-4xl text-center whitespace-nowraps sm:text-5xl md:text-5xl sm:text-left font-black sm:whitespace-nowrap'>
                        hello there, <span>I'm Al-ameen</span> <br /> a proactive front end <br /> developer.
                    </div>
                    <div className='hero-header-subheading text-center sm:text-left mx-auto sm:ml-0 w-full sm:w-1/2'>
                        Constantly seeking to <span>learn and grow</span>, I'm passionate about advancing my skills and knowledge in order to <span>excel in my field</span>.
                    </div>
                    <div className='cta-container'>
                        <button className=' flex items-center justify-between space-x-2 project-cta'>
                            <div className='header-cta'>View my projects</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="hover:animate-pulse h-5 w-5 transition duration-200 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </div>
                </div>
            </header>

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

export default HeaderSection;


// <section className='min-h-full'>
        //     <div className='mx-auto max-w-6xl justify-center px-4 pt-24 text-gray-300'>
        //         <div className='mt-16 flex flex-col items-center'>
        //             <div className="hero-text mb-2 text-center text-5xl">
        //                 <h1>Hello there, <em className='hero-name'>I'm Al-ameen</em>, a proactive Front End <em className='hero-name'>Developer</em>.</h1>
        //             </div>
        //             <div className="hero-subtext text-center">
        //                 <p>Constantly seeking to <span className='underline'>learn and grow</span>, I'm passionate about advancing my skills and knowledge in order to <span className='underline'>excel in my field</span>.</p>
        //             </div>
        //         </div>
        //     </div>
        // </section>
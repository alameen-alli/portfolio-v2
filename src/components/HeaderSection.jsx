import React from 'react'

const HeaderSection = () => {
    return (
        <div className='header-container'>
            <header className='header'>
                <div className='hero-header'>
                    <div className='hero-header-heading'>
                        hello there, I'm Al-ameen <br /> a proactive front end <br /> developer.
                    </div>
                    <div className='hero-header-subheading'>
                        Constantly seeking to <span>learn and grow</span>, I'm passionate about advancing my skills and knowledge in order to <span>excel in my field</span>.
                    </div>
                    <div className='cta-container'>
                        <button className='header-cta'>
                            View my projects
                        </button>
                    </div>
                </div>
            </header>
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
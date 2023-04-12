import React from 'react'

const ContactSection = () => {
    return (
        <div className='contact-container text-gray-300'>

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

        </div>
    )
}

export default ContactSection
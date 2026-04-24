import React from 'react'

const Footer = () => {
    return (
        <div className='mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center'>
            <p className='text-sm'>Copyright © {new Date().getFullYear()} All rights reserved</p>
            <div className='flex gap-7'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#sertifikat">Sertifikat</a>
                <a href="#proyek">Proyek</a>
            </div>
            <div className='flex items-center gap-4'>
                <a href="https://github.com/rifqisija123">
                    <i className='ri-github-fill ri-2x'></i>
                </a>
                <a href="https://www.instagram.com/rifqi_rahtar007">
                    <i className='ri-instagram-fill ri-2x'></i>
                </a>
                <a href="https://www.linkedin.com/in/rifqi-tarmono123">
                    <i className='ri-linkedin-fill ri-2x'></i>
                </a>
                <a href="https://www.youtube.com/@rifqigaming07">
                    <i className='ri-youtube-fill ri-2x'></i>
                </a>
            </div>
        </div>
    )
}

export default Footer

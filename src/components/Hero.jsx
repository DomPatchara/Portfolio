import React from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div className='w-11/12 max-w-3xl h-screen mx-auto flex flex-col  items-center justify-center text-center'>

        <div>
            <img src={assets.profile_img} className='w-32 rounded-full' />
        </div>

        <h3 className='flex gap-2 items-start text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Patchara Yakiaw <img src={assets.hand_icon} className='w-6'/>
        </h3>

        <h1 className='text-4xl sm:text-6xl lg:text-[66px] font-Ovo'>
            frontend web developer based in Thailand.
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo text-base/7'>
            I am beginner a frontend developer from Thailand, with 1 years of experience
            learning and hand-on many project, and I need to find first job.
        </p>

        <div className='flex flex-col md:flex-row items-center gap-2 mt-4'>

            <a 
                href="#contact"
                className='px-10 py-2 border border-white bg-black text-white rounded-full flex items-center gap-2'
            >
                contact me <img src={assets.right_arrow_white} className='w-4 mt-1'/>
            </a>

            <a 
                href="/sample-resume.pdf" 
                download 
                className='px-10 py-2 border border-gray-500 rounded-full flex items-center gap-2'
            >
                my resume <img src={assets.download_icon} className='w-4' />
            </a>

        </div>

        
    </div>
  )
}

export default Hero
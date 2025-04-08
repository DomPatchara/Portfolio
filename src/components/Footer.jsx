import React from 'react'
import { assets } from '../../assets/assets'


const Footer = ({isDarkMode}) => {

    
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <img src={isDarkMode? assets.logo_dark : assets.logo} alt="" className='w-40 mx-auto mb-5' />

            <div className='w-max flex gap-2 mx-auto items-center'>
                <img src={assets.mail_icon} alt="" className='w-6'/>
                <a href="mailto:Patcharayk@gmail.com" className="hover:underline hover:text-blue-500 text-gray-600">
                    Patcharayk@gmail.com
                </a>
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Patchara Dome. All rights reserved.</p>
            <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                <li><a target='_bank' href="https://github.com/DomPatchara">Github</a></li>
                <li><a target='_bank' href="https://www.linkedin.com/in/patchara-yakhaio-6ba785266/">LinkedIn</a></li>
                <li><a target='_bank' href="https://github.com/DomPatchara">Instagram</a></li>
            </ul>
        </div>
    </div>
        
  )
}

export default Footer
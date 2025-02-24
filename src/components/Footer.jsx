import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <img src={assets.logo} alt="" className='w-36 mx-auto mb-2' />

            <div className='w-max flex gap-2 mx-auto items-center'>
                <img src={assets.mail_icon} alt="" className='w-6'/>
                Patcharayk@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Patchara Dom. All rights reserved.</p>
            <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                <li><a target='_bank' href="https://github.com/DomPatchara">Github</a></li>
                <li><a target='_bank' href="https://github.com/DomPatchara">LinkedIn</a></li>
                <li><a target='_bank' href="https://github.com/DomPatchara">Instagram</a></li>
            </ul>
        </div>
    </div>
        
  )
}

export default Footer
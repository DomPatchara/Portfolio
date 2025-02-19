import React, { useRef } from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

  return (
    <>
        {/*------ Background Nav ---------- */}
        <div className='fixed top-0 right-0 w-11/12  translate-y-[-90%]'>
            <img src={assets.header_bg_color} className='w-full' />
        </div>

        {/* --------- Navbar ------------*/}
        <nav className='w-full fixed px-5 l:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50'>

            <a href="#top">
                <img src={assets.logo} className='w-28 cursor-pointer mr-14'/>
            </a>

            <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-lg '>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#about">About me</a></li>
                <li><a className='font-Ovo' href="#services">Services</a></li>
                <li><a className='font-Ovo' href="#work">My Work</a></li>
                <li><a className='font-Ovo' href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-4'>
                <button>
                    <img src={assets.moon_icon} alt="" className='w-6'/>
                </button>

                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-b-full rounded-tl-full ml-4 font-Ovo'>
                    Contact <img src={assets.arrow_icon} className='w-3'/>
                </a>

                {/**---- Menu Icon------ */}
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <img src={assets.menu_black} alt="" className='w-6 cursor-pointer'/>
                </button>
            </div>

            {/*-------------Moblie menu ------------- */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 fixed top-0 bottom-0  -right-[16rem] py-20 px-10 w-64 h-screen bg-rose-50 transition duration-500'>
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <img src={assets.close_black} alt="" className='w-5 cursor-pointer'/>
                </div>

                <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
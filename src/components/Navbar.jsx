import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50) {   // 50px
                setIsScroll(true)   
            } else {
                setIsScroll(false)
            }
        })
    }, [])

  return (
    <>
        {/*------ Background Nav ---------- */}
        <div className='fixed top-0 right-0 w-11/12  -z-10 translate-y-[-80%]'>
            <img src={assets.header_bg_color} className='w-full' />
        </div>

        {/* --------- Navbar ------------*/}
        <nav className={`w-full fixed px-5 l:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-DarkTheme dark:shadow-white/20" : ""}`}>

            <a href="#top">
                <img src={isDarkMode ? assets.logo_dark :assets.logo} className='w-28 cursor-pointer mr-14'/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-lg dark:border dark:border-white/50 dark:bg-transparent"} `}>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#about">About me</a></li>
                <li><a className='font-Ovo' href="#services">Services</a></li>
                <li><a className='font-Ovo' href="#work">My Work</a></li>
                <li><a className='font-Ovo' href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-4'>
                <button onClick={() => setIsDarkMode((prev) => (!prev))}>
                    <img src={isDarkMode ?  assets.sun_icon : assets.moon_icon} alt="" className='w-6 cursor-pointer'/>
                </button>

                <a 
                    href="#contact" 
                    className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-b-full rounded-tl-full ml-4 font-Ovo 
                               transition-all duration-500 hover:rounded-tr-full dark:border-white/50'
                >
                    Contact <img src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3'/>
                </a>

                {/**---- Menu Icon------ */}
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <img src={isDarkMode? assets.menu_white : assets.menu_black} alt="" className='w-6 cursor-pointer'/>
                </button>
            </div>

            {/*-------------Moblie menu ------------- */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 fixed top-0 bottom-0  -right-[16rem] py-20 px-10 w-64 h-screen bg-rose-50 transition duration-500 dark:bg-DarkHover dark:text-white'>
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <img src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-5 cursor-pointer'/>
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
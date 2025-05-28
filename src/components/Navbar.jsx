import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { ActiveContext } from "../context/active-section";
import clsx from "clsx";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  
  const { isActive, setIsActive, setIsClick } = useContext(ActiveContext);

  
  // Slide Animation -- Mobile Menu
  const sideMenuRef = useRef();
  
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  
  const closeMenu = () => {
    setTimeout(() => {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }, 500);
  };

  // Slide page down ---> make new effect
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        // 50px
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const NavLists = [
    {
      label: "Home",
      href: "#top",
    },
    {
      label: "About me",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact me",
      href: "#contact",
    }
  ];

  const handleClick = (name) => {
    setIsActive(name);
    setIsClick(true);
  };

  useEffect(() => {
    console.log("Current Active:", isActive);
  }, [isActive]);

  return (
    <div className="w-full max-w-screen overflow-x-hidden whitespace-nowrap">
      {/* --------- Navbar ------------*/}
      <nav
        className={`w-full fixed px-5 l:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-DarkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/**Logo */}
        <a href="#top">
          <img
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-30 cursor-pointer mr-14 "
          />
        </a>


        {/** Main nav */}  
        <ul
          className={`hidden md:flex items-center  gap-6 lg:gap-8 rounded-full px-6 lg:px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white/50 shadow-lg dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {NavLists.map((nav, index) => (
            <li key={index} onClick={() => handleClick(nav.label)}>
              <a
                href={nav.href}
                className={clsx(
                  "font-Ovo",
                  isActive === nav.label ? "active" : ""
                )}
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>


        {/** Toggle Theme + Contact */}  
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className={`p-2 ${
              isDarkMode ? "hover:bg-DarkHover/40" : "hover:bg-gray-200"
            } rounded-full cursor-pointer`}
          >
            <img
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-b-full rounded-tl-full ml-4 font-Ovo 
                               transition-all duration-500 hover:rounded-tr-full dark:border-white/50 active:bg-gray-500"
            onClick={() => setIsClick(true)}
          >
            Contact
            <img
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
            />
          </a>

          {/**---- Menu Icon------ */}
          <button className="block md:hidden  ml-3" onClick={openMenu}>
            <img
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/*-------------Moblie menu ------------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 fixed top-0 bottom-0 -right-[16rem] py-20 px-10 w-64 h-screen bg-gray-200 transition duration-500 dark:bg-DarkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          {NavLists.map((nav, index) => (
            <li key={index} onClick={() => {handleClick(nav.label); closeMenu();}}>
              <a
                href={nav.href}
                className={clsx(
                  "font-Ovo",
                  isActive === nav.label ? "active" : ""
                )}
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

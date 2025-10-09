import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

type props = {
  isDarkMode : boolean, 
  setDarkMode : Function
}

const Navbar = ({isDarkMode,setDarkMode} : props) => {

  const sideMenuRef = useRef<HTMLUListElement>(null)
  const [isScroll,setIsScroll] = useState(false)

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',() => {
      if(scrollY>50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image alt="" src={assets.header_bg_color} className='w-full'/>
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-[rgba(255,255,255,.2)] backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20" : ""}`}>
      
        <a href="#top">
          <h1 className={`font-bold ${isDarkMode ? "text-white" : "text-black"}`}>Manjunath K</h1>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-1 ${isScroll ? "" : "bg-[rgba(255,255,255,.8)] shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li><a href="#top" className='font-Ovo'>Home</a></li>
          <li><a href="#about" className='font-Ovo'>About me</a></li>
          <li><a href="#services" className='font-Ovo'>Services</a></li>
          <li><a href="#work" className='font-Ovo'>My Work</a></li>
          <li><a href="#contact" className='font-Ovo'>Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button onClick={()=>setDarkMode((prev : boolean) => !prev)}>
            <Image alt="" src={isDarkMode? assets.sun_icon : assets.moon_icon} className='w-6' />
          </button>


          <a href="#contact" className="hidden lg:flex items-center gap-2 px-4 py-0.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50">Contact
            <Image alt="" src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image alt="" src={isDarkMode ? assets.menu_white : assets.menu_black } className='w-6' />
          </button>

          {/* --------- mobile menu -----------*/}

          <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#11001F] dark:text-white'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
              <Image alt="" src={isDarkMode ? assets.close_white : assets.close_black} className='w-5 cursor-pointer' />
            </div>


            <li><a href="#top" className='font-Ovo' onClick={closeMenu}>Home</a></li>
            <li><a href="#about" className='font-Ovo' onClick={closeMenu}>About me</a></li>
            <li><a href="#services" className='font-Ovo' onClick={closeMenu}>Services</a></li>
            <li><a href="#work" className='font-Ovo' onClick={closeMenu}>My Work</a></li>
            <li><a href="#contact" className='font-Ovo' onClick={closeMenu}>Contact Me</a></li>
          </ul>


        </div>
      </nav>
    </>
  )
}

export default Navbar
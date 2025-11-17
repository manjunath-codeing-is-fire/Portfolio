import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'


const Navbar = () => {

  const sideMenuRef = useRef<HTMLUListElement>(null)
  const [isScroll, setIsScroll] = useState(false)


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
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "backdrop-blur-lg shadow-sm bg-[#11001F] dark:shadow-white/20" : ""}`}>

        <a href="#top">
          <h1 className='font-bold text-white'>Manjunath K</h1>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-1 ${isScroll ? "" : "shadow-sm bg-opacity-50 border border-white/50 bg-transparent"}`}>
          <li><a href="#top" className='font-Ovo hover:text-blue-500'>Home</a></li>
          <li><a href="#about" className='font-Ovo hover:text-blue-500'>About me</a></li>
          <li><a href="#services" className='font-Ovo hover:text-blue-500'>Services</a></li>
          <li><a href="#work" className='font-Ovo hover:text-blue-500'>My Work</a></li>
          <li><a href="#contact" className='font-Ovo hover:text-blue-500'>Contact Me</a></li>
        </ul>

        <div className='flex items-center'>

          <a href="#contact" className="lg:flex items-center gap-2 px-4 py-0.5 border rounded-full ml-4 font-Ovo border-white/50 hover:bg-white/15 sm:hidden">Contact
            <Image src={assets.arrow_icon_dark} alt="" className='w-3 h-3' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image alt="" src={assets.menu_white} className='w-6' />
          </button>

          {/* --------- mobile menu -----------*/}

          <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 bg-[#11001F]'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
              <Image alt="" src={assets.close_white} className='w-5 cursor-pointer' />
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
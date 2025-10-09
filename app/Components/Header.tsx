import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <>
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-1'>

            <motion.div 
            initial = {{scale : 0}} 
            whileInView={{scale : 1}} 
            transition={{duration : 0.8 , type : 'spring', stiffness : 100}}>
                <Image alt="" src={assets.profile_img} className='rounded-full w-28'/>
            </motion.div>

            <motion.h3 
            initial = {{y:-20,opacity:0}} 
            whileInView = {{y:0,opacity:1}} 
            transition={{duration:0.6, delay:0.4}}  
            className='flex items-end gap-2 text-xl md:text-xl mb-3 font-Ovo'>Hi! I'm Manjunath Kavalikai <Image alt="" src={assets.hand_icon} className='w-4'/></motion.h3>

            <motion.h1 
            initial = {{y:-30,opacity:0}} 
            whileInView = {{y:0,opacity:1}} 
            transition={{duration:0.8, delay:0.5}}  
            className='text-6xl sm:text-6xl lg:text-[35px] font-Ovo'>Frontend developer in India.</motion.h1>

            <motion.p
            initial = {{y:-20,opacity:0}} 
            whileInView = {{y:0,opacity:1}} 
            transition={{duration:0.6, delay:0.7}}   
            className='max-w-2xl mx-auto font-Ovo'>I am a frontend developer from India</motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

              <motion.a 
              initial = {{y:30,opacity:0}} 
              whileInView = {{y:0,opacity:1}} 
              transition={{duration:0.6, delay:1}}  
              href="#contact" className='px-5 py-1 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>contact me 
                <Image alt="" src={assets.right_arrow_white} className='w-2'/>
              </motion.a>

              <motion.a 
              initial = {{y:30,opacity:0}} 
              whileInView = {{y:0,opacity:1}} 
              transition={{duration:0.6, delay:1}}  
              href="./myresume.docx" download className='px-5 py-1 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume
                <Image alt="" src={assets.download_icon} className='w-4'/>
              </motion.a>
            </div>
        </div>
    </>
  )
}


export default Header



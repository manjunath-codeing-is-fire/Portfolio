import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { assets, infoList, toolsData } from '@/assets/assets'

type props = {
  isDarkMode : boolean
}

const About = ({isDarkMode} : props) => {
  return (
    <motion.div
    id="about" 
    initial = {{opacity:0}} 
    whileInView = {{opacity:1}} 
    transition={{duration:1}}  
    className='w-full py-10 max-sm:pb-[54rem]'>

        <motion.h4
        initial = {{opacity:0,y:-20}}
        whileInView = {{opacity:1,y:0}} 
        transition={{duration:0.5,delay:0.3}}  
        className='text-center mb-2 text-xl font-Ovo'>Introduction</motion.h4>

        <motion.h2
        initial = {{opacity:0,y:-20}} 
        whileInView = {{opacity:1,y:0}} 
        transition={{duration:0.5,delay:0.5}}  
        className='text-center text-5xl font-Ovo'>About me</motion.h2>

      <div
      className='flex w-full flex-col lg:flex-row items-center gap-6 h-[40rem] px-16 sm:px-3'>

          {/* user image div */}
          <motion.div 
          initial = {{opacity:0,scale:0.9}} 
          whileInView = {{opacity:1,scale:1}} 
          transition={{duration:0.6}}  
          className='w-96 -translate-y-4 max-sm:translate-x-16 max-sm:translate-y-3 translate-x-8'>
            <Image 
            src={assets.user_image} 
            alt='user' 
            className='h-[26rem] w-80 rounded-3xl object-cover max-sm:h-[18rem] max-sm:w-[16rem]'/>
          </motion.div>

          <motion.div 
          initial = {{opacity:0,}} 
          whileInView = {{opacity:1}} 
          transition={{duration:0.6,delay:0.8}}  
          className='flex-1 max-sm:w-64 max-sm:text-center'>
               <p className='mb-10 max-w-7xl font-Ovo text-xl'>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Through my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>

              {/* Language , Education , Projects*/}
               <ul
              //  initial = {{opacity:0}} 
              //  whileInView = {{opacity:1}} 
              //  transition={{duration:1,delay:1}}  
               className='text-xs grid grid-cols-1 gap-5 sm:grid-cols-3 max-w-5xl'>
                  {infoList.map(({icon,iconDark,title,description},index)=>(
                        <li 
                        // whileInView = {{scale:1.05}} 
                        key={index} className='border-[0.5px] border-gray-400 rounded-xl h-56 cursor-pointer hover:-translate-y-1 hover:shadow-[3px_3px_0_#000] ] duration-500 p-3 dark:border-white dark:hover:shadow-white dark:hover:bg-[#2a004a]/50 max-w-72'>
                          <Image src={isDarkMode? iconDark : icon} alt={title} className='w-5 mt-3'/>
                          <h3 className='text-xl my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                          <p className='text-gray-600 text-[18px] dark:text-white'>{description}</p>
                        </li>
                  ))}
               </ul>

               <motion.h4 
               initial = {{opacity:0,scale:0.9}} 
               whileInView = {{opacity:1,y:0}} 
               transition={{duration:0.6,delay:0.8}}  
               className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-3xl lg:-translate-x-14'>Tools I use</motion.h4>

               <motion.ul
               initial = {{opacity:0,scale:0.9}} 
               whileInView = {{opacity:1,y:0}} 
               transition={{duration:0.6,delay:0.8}}  
               className='flex items-center gap-4 sm-gap-5 lg:-translate-x-14 lg:h-14'>
                  {toolsData.map((tool,index)=>(
                    <li key={index} className='flex items-center justify-center sm:w-9 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 lg:p-3 max-sm:w-2xl lg:w-12'>
                        <Image src={tool} alt="" className='max-sm:w-6'/>
                    </li>
                  ))}
               </motion.ul>
          </motion.div>
      </div>

    </motion.div>
    
  )
}

export default About

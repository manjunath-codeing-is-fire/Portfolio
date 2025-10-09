import React from 'react'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

type props = {
  isDarkMode : boolean
}

const Services = ({isDarkMode} : props) => {
    return (
        <motion.div
        initial = {{opacity:0}} 
        whileInView = {{opacity:1}} 
        transition={{duration:1}}   
        id='services' 
        className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
            initial = {{opacity:0}} 
            whileInView = {{opacity:1}} 
            transition={{duration:1}}   
            className='text-center mb-2 text-lg font-Ovo'>What I offer</motion.h4>

            <motion.h2 
            initial = {{y:-20,opacity:0}} 
            whileInView = {{y:0,opacity:1}} 
            transition={{delay:0.5,duration:0.5}}   
            className='text-center text-5xl font-Ovo'>My Services</motion.h2>

            <motion.p 
            initial = {{y:-20,opacity:0}} 
            whileInView = {{y:0,opacity:1}} 
            transition={{delay:0.5,duration:0.5}}  
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I am Frontend and Backend Deveploer from India,I have experience in c++, python, java, next js, tailwind css, TypeScript a Superscript for JavaScript</motion.p>

            <motion.div 
            initial = {{y:-20,opacity:0}} 
            whileInView = {{y:0,opacity:1}} 
            transition={{delay:0.5,duration:0.5}}  
            className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-12 my-10 max-sm:pl-6 sm:pl-6'>
                {serviceData.map(({icon,title,description,link},index)=>(
                    
                    <motion.div 
                    whileHover={{scale:1.05}}
                    key={index} 
                    className='border border-gray-400 rounded-lg px-4 py-4 hover:shadow-[3px_3px_0_rgb(0,0,0)] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 w-48 dark:hover:bg-[#2a004a] dark:hover:shadow-white'>
                        <Image alt="" src={icon} className='w-8'/>
                        <h3 className='text-xl my-4 text-gray-700 dark:text-white/80'>{title}</h3>
                        <p className='text-xs text-gray-600 leading-5 dark:text-white'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image alt="" src={assets.right_arrow} className='w-4'/></a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}


export default Services
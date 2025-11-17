import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { assets, workData } from '@/assets/assets'

const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="work"
            className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo'>
                My Portfolio
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-Ovo'>My latest work</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end deveploment.
            </motion.p>

            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] my-10 gap-5 text-black'>
                {workData.map((projects, index) => (
                    <div
                        key={index}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${projects.bgImage})` }}>

                        <div
                            className='bg-white w-9/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-2 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='text-nowrap text-[12px] font-semibold'>{projects.title}</h2>
                                <p className='text-nowrap text-[12px] text-gray-500'>{projects.description}</p>
                            </div>

                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <Image src={assets.send_icon} alt="" className="w-3" />
                            </div>
                        </div>


                    </div>
                ))}
            </motion.div>

            <motion.a
                initial={{ y: -20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                href=""
                className='w-max flex items-center justify-center gap-2 border-[0.5px] rounded-full py-1 px-2 mx-auto my-20 duration-500 border-white hover:bg-[#2a004a]'> show more <Image src={assets.right_arrow_bold_dark} alt="" className='w-4' /></motion.a>
        </motion.div>
    )
}

export default Work
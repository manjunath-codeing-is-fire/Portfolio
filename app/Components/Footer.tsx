import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

type props = {
  isDarkMode : boolean
}

const Footer = ({isDarkMode} : props ) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <h2 className='text-xl font-bold'>Manjunath <span className='text-red-600 text-3xl'>.</span></h2>

            <div className='w-max items-center gap-2 mx-auto'>
                <Image alt="" src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} className='w-6 inline-flex'/>
                <h5 className='inline-flex ml-2'>manjunathkavalikai9@gmail.com</h5>
                <h5>+919353019944</h5>
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Manjunath Kavalikai. All rights reserved.</p>

            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/manjunath-codeing-is-fire">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/manjunath-kavalikai">LinkedIn</a></li>
                <li><a target='_blank' href="https://twitter.com/Manjuna07851835">Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
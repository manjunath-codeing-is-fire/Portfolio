import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <h2 className='text-xl font-bold'>Manjunath <span className='text-red-600 text-3xl'>.</span></h2>

        <div className='w-max items-center gap-2 mx-auto'>
          <Image alt="" src={assets.mail_icon_dark} className='w-6 inline-flex' />
          <h5 className='inline-flex ml-2'>manjunathkavalikai9@gmail.com</h5>
          <h5>+919353019944</h5>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Manjunath Kavalikai. All rights reserved.</p>

        <ul className='flex items-center gap-10 justify-center sm:mt-0'>
          <li className='p-2 rounded-xl hover:bg-[#2a004a]'><a target='_blank' href="https://github.com/manjunath-codeing-is-fire">GitHub</a></li>
          <li className='p-2 rounded-xl hover:bg-[#2a004a]'><a target='_blank' href="https://www.linkedin.com/in/manjunath-kavalikai">LinkedIn</a></li>
          <li className='p-2 rounded-xl hover:bg-[#2a004a]'><a target='_blank' href="https://twitter.com/Manjuna07851835">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='bg-inheritj'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
          <p className='text-sm text-gray-500'>
            © 2022 <span>Bryanth Briones</span>. All rights reserved.
          </p>
          <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
            <a
              // type='button'
              href='https://github.com/ayanbriones'
              className='bg-inherit p-1 rounded-full text-gray-400'
              target='_blank'
            >
              <span className='sr-only'>Github</span>
              <AiFillGithub
                className='h-6 w-6 hover:text-black hover:bg-white rounded-full'
                aria-hidden='true'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/ayanbriones/'
              className='text-gray-500 transition-colors duration-300 hover:text-teal-accent-400'
              target='_blank'
            >
              <span className='sr-only'>LinkedIn</span>
              <FaLinkedin
                className='h-6 w-6 hover:text-sky-600 hover:bg-white'
                aria-hidden='true'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

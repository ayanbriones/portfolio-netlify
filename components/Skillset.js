import React from 'react'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaHtml5, FaCss3, FaGithub } from 'react-icons/fa'
export default function Skillset() {
  return (
    <section className='text-white px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8 lg:py-10'>
      <div className='max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12'>
        <p className='text-base text-white md:text-lg mb-10'>
          Here are a few technologies I’ve been working with recently:
        </p>
      </div>
      <div className='grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-5'>
        <div className='text-center'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-300 sm:w-16 sm:h-16transform transition-all hover:-translate-y-2'>
            <IoLogoJavascript className='w-10 h-10 text-black' />
          </div>
          <h6 className='mb-2 font-semibold leading-5'>JavaScript</h6>
        </div>

        <div className='text-center'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 transform transition-all hover:-translate-y-2'>
            <FaCss3 className='w-10 h-10 text-sky-500' />
          </div>
          <h6 className='mb-2 font-semibold leading-5'>CSS</h6>
        </div>
        <div className='text-center'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16transform transition-all hover:-translate-y-2'>
            <FaHtml5 className='w-10 h-10 text-orange-700' />
          </div>
          <h6 className='mb-2 font-semibold leading-5'>HTML5</h6>
        </div>
        <div className='text-center'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16transform transition-all hover:-translate-y-2'>
            <FaReact className='text-cyan-400 w-10 h-10' />
          </div>
          <h6 className='mb-2 font-semibold leading-5'>ReactJS</h6>
        </div>
        <div className='text-center'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16transform transition-all hover:-translate-y-2'>
            <FaGithub className='w-10 h-10 text-black' />
          </div>
          <h6 className='mb-2 font-semibold leading-5'>Github</h6>
        </div>
      </div>
    </section>
  )
}

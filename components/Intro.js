import React from 'react'

export default function Intro() {
  return (
    <section className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 md:px-20 lg:mt-20 lg:px-20 xl:mt-28 xl:px-20'>
      <div className='text-center lg:text-left'>
        <h3 className='block text-yellow-100 text-base'>Hi, I'm</h3>
        <h1 className='block text-6xl font-extrabold text-yellow-300 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-300'>
          Bryanth Briones
        </h1>
        <p className='mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
          Front End Developer
        </p>
        {/* <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
          <div className='rounded-md shadow'>
            <a
              href='#'
              className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
            >
              Resume
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}

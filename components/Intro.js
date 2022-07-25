import React from 'react'

export default function Intro() {
  return (
    <section className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 md:px-20 lg:mt-20 lg:px-20 xl:mt-28 xl:px-20'>
      <div className='sm:text-center lg:text-left'>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
          <span className='block xl:inline text-yellow-100'>Hi, I'm</span>{' '}
          <span className='block text-yellow-300 xl:inline'>
            Bryanth Briones
          </span>
        </h1>
        <p className='mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
          Web developer
        </p>
        <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
          <div className='rounded-md shadow'>
            <a
              href='#'
              className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

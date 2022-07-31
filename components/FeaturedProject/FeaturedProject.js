import Image from 'next/image'
import React from 'react'
import ecchorightsImg from '/public/images/fb-sharelogo.png'

export default function FeaturedProject() {
  return (
    <div className='bg-white rounded px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-20'>
      <div className='flex flex-col justify-center md:flex-col lg:flex-row'>
        <div className='flex justify-between flex-col w-full px-5 mb-3 lg:mb-0'>
          <div className='max-w-xl mb-6'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              Eccho Rights
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              This is my latest project. I helped develop and add features on
              the front end using React and Php on the backend.
            </p>
          </div>
          <ul className='flex flex-col lg:flex-row px-5 lg:justify-around italic my-2 py-2 text-sm list-disc uppercase'>
            <li>Php</li>
            <li>SQL</li>
            <li>Sass</li>
            <li>JQuery</li>
            <li>React</li>
          </ul>
          <a
            href='https://ecchorights.com/'
            className='border border-solid border-black py-2 px-10 mr-auto hover:bg-slate-200 hover:shaodw-lg'
            target='_blank'
          >
            Visit Site
          </a>
        </div>
        <div className='flex'>
          <a href='https://ecchorights.com/' target='_blank'>
            <Image
              className='object-contain w-full h-56 sm:h-96 transform transition-all duration-300 hover:scale-110'
              src={ecchorightsImg}
              alt='eccho rights'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

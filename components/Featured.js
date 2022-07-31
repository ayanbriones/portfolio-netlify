import Image from 'next/image'
import React from 'react'
import featuredImg from '/public/images/fb-sharelogo.png'
import { AiFillEye } from 'react-icons/ai'
export default function Featured() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='lg:w-2/3 mx-auto'>
          <div className='flex flex-wrap w-full text-white relative mb-4'>
            <Image
              alt='gallery'
              className='w-full object-cover h-full object-center block absolute inset-0 rounded'
              src={featuredImg}
            />
            <div className='text-center relative z-10 w-full'>
              <h2 className='text-2xl font-medium title-font mb-2'>
                Eccho Rights
              </h2>
              <p className='leading-relaxed'>Contributions:</p>
              <ul>
                <li>Converted pages from Laravel to ReactJS.</li>
                <li>Added functionalities in Admin.</li>
                <li>Integrated videos to hosting servies.</li>
                <li>Used MySQL and Laravel in migrations.</li>
              </ul>
              <div className='my-10'>
                {/* <ul className='flex justify-between'>
                  <li className='px-3 py-2 bg-black text-base rounded'>Php </li>
                  <li className='px-3 py-2 bg-black text-base rounded'>SQL</li>
                  <li className='px-3 py-2 bg-black text-base rounded'>Sass</li>
                  <li className='px-3 py-2 bg-black text-base rounded'>
            React
                  </li>
                  <li className='px-3 py-2 bg-black text-base rounded'>
                    Svelte
                  </li>
                </ul>  */}
                <button class='flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
                  <AiFillEye />
                  <span class='mx-1'>Go to URL</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

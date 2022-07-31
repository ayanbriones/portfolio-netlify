import React from 'react'

export default function Card() {
  return (
    <div className='transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center'>
      <div className='relative'>
        <img
          className='object-cover w-full h-64 rounded-t lg:h-80 xl:h-96'
          src='https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
          alt=''
        />
        <div className='absolute inset-0 bg-gray-800 bg-opacity-25' />
      </div>
      <div className='px-6 py-8 border border-t-0 rounded-b sm:px-8'>
        <h5 className='mb-2 text-xl font-bold leading-none sm:text-2xl'>
          Join Team
        </h5>
        <p className='mb-5 text-gray-700'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
          perspiciatis unde.
        </p>
        <button
          type='submit'
          className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
        >
          Read more
        </button>
      </div>
    </div>
  )
}

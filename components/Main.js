import Image from 'next/image'
import React from 'react'
import Featured from './Featured'
import echorightsImg from '/public/images/fb-sharelogo.png'

export default function Main() {
  return (
    <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 md:px-20 lg:mt-20 lg:px-20 xl:mt-28 xl:px-20'>
      <div>
        {/* <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'> */}
        <h2 className='text-white text-5xl my-20'>Projects</h2>
        {/* <img src={echorightsImg} /> */}
        {/* <Image src={echorightsImg} width={800} height={400} /> */}
        <Featured />
      </div>
    </main>
  )
}

import React from 'react'
import Card from './Card'

export default function ProjectCards() {
  return (
    <div className='bg-white rounded px-4 py-16 mx-auto my-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2'>
        <Card />
        <Card />
      </div>
    </div>
  )
}

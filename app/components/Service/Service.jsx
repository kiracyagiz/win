"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import ServiceText from '../Text/ServiceText'
const Service = () => {
  
  return (
    <div className='service h-screen mt-8 flex items-center justify-center' id='service'>
  <div className='flex flex-col items-center justify-center w-4/5 h-4/5 bg-black bg-opacity-40'>
    <p className='text-white text-2xl lg:text-8xl font-semibold'>OUR SERVICES</p>
    <div className='flex justify-center  flex-wrap gap-8'>
      <ServiceText/>
      <ServiceText/>
      <ServiceText/>
    </div>
    
    
  </div>
</div>

  )
}

export default Service
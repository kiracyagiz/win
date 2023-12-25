"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
const ContactSecond = () => {
  return (
    <div className='justify-center items-center mx-auto text-center'>
                <p className=" text-4xl text-center font-semibold">PORTFOLIO</p>
        <p className=" text-2xl mt-8 text-center font-semibold">COUNTRIES WE CONDUCT BUSINESS</p>
             <Carousel className='mx-aut w-[40%]'>
                <div className='w-[40%] mx-auto'>
                    <img src="/London.jpeg" height='100px' width='200px'/>
                </div>
                <div className='w-[60%] mx-auto' >
                    <img src="/milano.jpg" height='100px' width='200px'/>
                </div>
                <div className='w-[60%] mx-auto'>
                    <img src="/paris.jpg" height='100px' width='200px'/>
                </div>
            </Carousel>
    </div>
  )
}

export default ContactSecond
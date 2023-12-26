"use client"
import Image from "next/image";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
const Portfolio = () => {
    const imageData = [
        '/London.jpeg',
        '/milano.jpg',
        '/paris.jpg',
        '/Greece.jpg',
        'jersusalem.jpg',
        'poland.jpg',
        'switzerland.jpg'
        ]
 
  return (
    <div id="portfolio">
       <div className="text-center py-8">
       <p className=" text-3xl text-center font-semibold">PORTFOLIO</p>
        <p className=" text-xl mt-8 text-center font-semibold">COUNTRIES WE CONDUCT BUSINESS</p>
               <Carousel className=' lg:w-3/5 mx-auto text-center  p-10'>
                {imageData.map((dt,i)=> (
                    <div className="mx-auto" key={i}>
                        <img src={dt} alt="dt" height='100px' width='500px'/>
                    </div>
                ))}
            
        
        </Carousel>
       </div>

    </div>
  );
};

export default Portfolio;

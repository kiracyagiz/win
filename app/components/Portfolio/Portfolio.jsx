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
       <div className="hidden lg:block">
       <p className=" text-4xl text-center font-semibold">PORTFOLIO</p>
        <p className=" text-2xl mt-8 text-center font-semibold">COUNTRIES WE CONDUCT BUSINESS</p>

           <div className=" flex justify-center  p-14">
      <div className=" flex flex-col gap-y-8">
        <div className="w-4/5">
        <Image src={"/jersusalem.jpg"} width={520} height={1}  alt="jersusalem"/>
        </div>
        
        <div className="flex gap-x-11">
      
        <Image src={"/greece.jpg"} width={180} height={1} alt="greece" />
        <Image src={"/poland.jpg"} width={180} height={1} alt="poland" />
        </div>
      </div>


      <div className="w-1/3 flex gap-y-8 flex-col">
      <Image src={"/London.jpeg"} width={400} height={400} alt="london"/>
      <div className="w-[88%] h-[28%] overflow-hidden relative ">
        <Image
          src={"/milano5.png"}
          layout="fill"
          objectPosition="top"
          alt="milano"
        />
      </div>
    </div>
    <div className="w-1/3 flex gap-y-8 flex-col">
      <Image src={"/paris.jpg"} width={400} height={400}  alt="paris"/>
      <div className="w-[88%] h-[28%] overflow-hidden relative ">
        <Image
          src={"/switzerland.png"}
          layout="fill"
          objectPosition="top"
          alt="switzerland"
        />
      </div>
    </div>
    </div>
       </div>
       <div className=" block lg:hidden text-center py-8">
       <p className=" text-2xl text-center font-semibold">PORTFOLIO</p>
        <p className=" text-xl mt-8 text-center font-semibold">COUNTRIES WE CONDUCT BUSINESS</p>
               <Carousel className='block md:hidden lg:hidden mx-auto text-center  p-10'>
                {imageData.map((dt,i)=> (
                    <div className="mx-auto" key={i}>
                        <img src={dt} alt="dt" height='100px' width='200px'/>
                    </div>
                ))}
            
        
        </Carousel>
       </div>

    </div>
  );
};

export default Portfolio;

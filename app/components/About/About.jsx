import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <div className="bg-primaryColor flex flex-col lg:flex-row justify-center lg:px-14 mt-10" id="about">
      <div className="w-4/5 mt-8 lg:mt-0 lg:w-1/2 flex flex-col justify-center gap-y-20 mx-auto">
        <p className=" text-5xl font-semibold">WHO WE ARE</p>
        <p className="text-justify max-w-lg text-md mb-2">
          WIN is an Albanian company with a primary focus on assisting Premium
          Businesses in growing their revenues worldwide. Our company
          specializes in providing comprehensive assistance to businesses
          seeking to expand their global presence. With a strong focus on
          international growth, we offer a wide range of services tailored to
          meet the unique needs of each business. From conducting thorough
          market research and developing strategic plans to executing effective
          international business presence and establishing global distribution
          networks, our dedicated team of experts is committed to supporting
          companies every step of the way.
        </p>
        <div className=" justify-end hidden lg:flex">
        <FaArrowRightLong size={40} />

        </div>

      </div>
      <div className="hidden lg:relative lg:block">
        <Image src="/whoFirst.jpg" width={500} height={500} alt="firstImage" />

        <div className="absolute bottom-0 right-0 -mb-12 -mr-8">
          <Image src="/whoSecond.jpg" width={200} height={200} alt="secondImage" />
        </div>
      </div>
    </div>
  );
};

export default About;

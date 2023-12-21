import Image from "next/image";
import React from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import TextPrimary from "../Text/TextPrimary";

const Hero = () => {
  return (
    <div className=' bg-primaryColor max-w-screen-2xl h-screen lg:h-[90vh]  flex  flex-col-reverse  lg:flex-row gap-y-5  items-center justify-center lg:justify-between m-auto " '>
      <div className=" lg:ml-36 flex flex-col gap-y-10  justify-center items-center lg:items-start   ">
        <p className=" w-4/5 text-2xl text-black font-semibold ">
          With a strong focus on international growth, we offer a wide range of
          services tailored to meet the unique needs of each business
        </p>
        <div className=" w-4/5 flex flex-col gap-y-8">
        <TextPrimary text={'Services tailored to meet the unique needs of each business'} font={'text-md lg:text-lg   '} fontStyle={'font-semibold '}/>
        <ButtonPrimary text={"Contact Now ! "} locate={"#"} />

        </div>
      </div>
      <Image src={"/hero.svg"} width={600} height={600} />
    </div>
  );
};

export default Hero;

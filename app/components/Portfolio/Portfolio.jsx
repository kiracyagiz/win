import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div>
        <p className=" text-4xl text-center font-semibold">PORTFOLIO</p>
        <p className=" text-2xl mt-8 text-center font-semibold">COUNTRIES WE CONDUCT BUSINESS</p>

           <div className=" flex justify-center  p-14">
      <div className=" flex flex-col gap-y-8">
        <div className="w-4/5">
        <Image src={"/jersusalem.jpg"} width={520} height={1} />
        </div>
        
        <div className="flex gap-x-11">
      
        <Image src={"/greece.jpg"} width={180} height={1} />
        <Image src={"/poland.jpg"} width={180} height={1} />
        </div>
      </div>


      <div className="w-1/3 flex gap-y-8 flex-col">
      <Image src={"/London.jpeg"} width={400} height={400} />
      <div className="w-[88%] h-[28%] overflow-hidden relative ">
        <Image
          src={"/milano5.png"}
          layout="fill"
          objectPosition="top"
        />
      </div>
    </div>
    <div className="w-1/3 flex gap-y-8 flex-col">
      <Image src={"/paris.jpg"} width={400} height={400} />
      <div className="w-[88%] h-[28%] overflow-hidden relative ">
        <Image
          src={"/switzerland.png"}
          layout="fill"
          objectPosition="top"
        />
      </div>
    </div>
    </div>
    </div>
  );
};

export default Portfolio;

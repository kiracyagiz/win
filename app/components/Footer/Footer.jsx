import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
      <div className="relative mt-16 bg-deep-purple-accent-400">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  bg-black text-white">
          <div className="flex flex-col justify-between  text-center lg:flex-row mx-auto items-center pb-4">
             <a href="#home">
             <Image src={'/logo3.png'} width={120} height={80} className="mr-1"/>
             </a>
            <div className="flex list-none flex-col lg:flex-row gap-x-20 text-md font-semibold gap-y-8">
                <a href="#home">
                    HOME
                </a>
                <a href="#about">ABOUT</a>
                <a href="#services">SERVICES</a>
                <a href="#team">TEAM</a>
                <a href="#portfolio">PORTFOLIO</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
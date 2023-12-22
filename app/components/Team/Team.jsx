import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col gap-x-14 lg:flex-row justify-center p-10">
      <div className="   gap-y-2 hidden lg:flex lg:flex-col">
        <p className=" text-2xl lg:text-7xl lg:max-w-xl  ">A MESSAGE FROM US</p>
        <Image src={"/team.jpg"} width={500} height={500} />
      </div>
      <div className=" flex flex-col justify-center gap-y-20">
        <p className="text-4xl text-center font-semibold">OUR TEAM</p>
        <p className="max-w-xl text-lg">
          We pride ourselves on fostering a culture of collaboration and
          teamwork at our company. Our team members work synergistically,
          leveraging their diverse skills and expertise to tackle challenges and
          achieve shared goals. Through open communication and a spirit of
          mutual respect, we create an environment where everyone s voice is
          heard and valued. Together, we are greater than the sum of our parts.
          We are always welcoming new partners who share the same vision as us
          in offering win-win collaboration opportunities. Together, we achieve
          greatness!
        </p>
      </div>
    </div>
  );
};

export default Team;

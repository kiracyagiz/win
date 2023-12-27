import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="flex flex-col lg:h-screen  lg:flex-row lg:p-32">
      <div className="   gap-y-8 flex flex-col mx-auto  lg:flex-row gap-x-10  w-4/5 ">
        <div className="bg-gray-300 text-justify  lg:w-1/3 ">
          <p className="text-4xl font-semibold text-center mt-2 ">MISSION</p>
          <p className="max-w-md p-4">
            Our mission is to facilitate worldwide business growth through
            Albania by leveraging our extensive network and expertise. We
            provide comprehensive support to businesses looking to enter the
            Albanian market or expand their operations worldwide. International assists
            with navigating local regulations, establishing strategic
            partnerships and accessing valuable market insights. With our
            assistance, businesses can tap into the opportunities offered by
            Albania and reach new heights on a global scale.
          </p>
        </div>
        <div className="bg-gray-300 text-justify lg:w-1/3">
          <p className="text-4xl font-semibold text-center mt-2 ">VALUES</p>
          <p className="max-w-md p-4">
            As a company, our values are at the heart of everything we do. We
            believe in progress, innovation and collaboration. We strive to
            always act with honesty and transparency, ensuring that our
            cooperators trust us and feel confident in our services. We embrace
            innovation, constantly seeking new ways to improve. Collaboration is
            key to our success, as we believe in the power of teamwork and the
            collective expertise of our diverse team. Together, we are committed
            to delivering exceptional results and making a positive impact in
            the world of business.
          </p>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-col  justify-center ">
        <Image src={"/mission.jpg"} width={350} height={10}  alt="mission"/>
      </div>
    </div>
  );
};

export default Mission;

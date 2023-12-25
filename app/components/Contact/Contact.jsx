import React from "react";
import { IoIosMail, IoMdPhonePortrait } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className=" p-12 gap-y-10 lg:p-32 flex flex-col lg:flex-row justify-between relative">
      <div>
        <div className="flex flex-col gap-y-4">
          <p className="text-2xl font-semibold">GET IN TOUCH</p>
          <p className="max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex
            vitae excepturi culpa, cum adipisci eveniet accusantium vel tenetur
            veniam perferendis reiciendis amet quisquam, qui beatae magnam
            accusamus dolor rerum?
          </p>
        </div>
        <div className="flex flex-col gap-y-10 mt-8">
          <div className="flex items-center gap-x-8">
            <IoIosMail size={30} />
            <p>winInfo@gmail.com</p>
          </div>
          <div className="flex items-center gap-x-8">
            <IoMdPhonePortrait size={30} />
            <p>winInfo@gmail.com</p>
          </div>
          <div className="flex items-center gap-x-8">
            <FaLocationDot size={30} />
            <p>winInfo@gmail.com</p>
          </div>
        </div>
      </div>

      <div className=" w-full   lg:w-2/5 bg-white shadow-lg">
        <iframe
          className="border-2 border-black "
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1498.1820879660868!2d19.816890728215952!3d41.32269371308841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2s!4v1703502988857!5m2!1str!2s"
          loading="lazy"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

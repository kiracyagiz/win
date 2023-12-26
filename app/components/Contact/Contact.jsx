"use client";

import React from "react";
import { IoIosMail, IoMdPhonePortrait } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from 'react-hot-toast';
import { useRef,useEffect } from "react";

const Contact = () => {
    
  const [state, handleSubmit] = useForm("moqgabyp");
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success('You have successfully sent the message!');
      formRef.current.reset(); 

    }
    if (state.errors) {
      toast.error('Error');
    }
  }, [state.succeeded, state.errors]);


 
  return (
        <div className=" p-12 gap-y-10 lg:p-32 flex flex-col lg:flex-row justify-between relative" id="contact">
            <Toaster
  position="top-right"
  reverseOrder={false}
  
/>
        <div>
            
            <div className="flex flex-col gap-y-4">
            <p className="text-2xl font-semibold">GET IN TOUCH</p>
            <p className="max-w-md text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex
                vitae excepturi culpa, cum adipisci eveniet accusantium vel tenetur
                veniam perferendis reiciendis amet quisquam, qui beatae magnam
                accusamus dolor rerum?
            </p>
            </div>
            <div className="flex flex-col gap-y-10 mt-8">
            <div className="flex items-center gap-x-8">
                <FaLocationDot size={30} />
                <p>Bllok, near Swiss Embassy, Tirana, Albania</p>
            </div>
            </div>
        </div>
        <div className="w-full lg:w-1/2 bg-gray-100 shadow-lg p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4" ref={formRef}>
            <label htmlFor="email" className="text-gray-600">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-primaryColor"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="name" className="text-gray-600">
                Name
            </label>
            <input
                id="name"
                type="Name"
                name="name"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-primaryColor"
            />

            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="message" className="text-gray-600">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-primaryColor"
                rows="4"
            />

            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            <button
                type="submit"
                disabled={state.submitting}
                className="bg-black text-white p-2 rounded-md  focus:outline-none "
            >
                Submit
            </button>
            </form>
        </div>
        </div>
  );
};

export default Contact;

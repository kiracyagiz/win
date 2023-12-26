"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
    const [open,setOpen] = useState(false)

    const openNavbar = () => {
        setOpen(!open)
    }
  return (
    

<nav className=" border-gray-200 bg-black dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-2 ">
    <a className="flex items-center justify-center  space-x-3 rtl:space-x-reverse " href='#home' >
      <Image src={'/logo2.png'} width={130} height={10}/>
    </a>
    <button type="button" onClick={openNavbar} className=" mr-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <svg className="  w-20 h-20 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={` ${open ? 'block' : 'hidden'} w-full md:block md:w-auto `} >
      <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#home" className="block py-2 px-3 text-white hover:bg-white md:hover:bg-transparent rounded md:bg-transparent hover:text-black  lg:hover:text-white md:p-0 " aria-current="page">Home</a>
        </li>
        <li>
          <a href="#about" className="block py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 hover:text-black  lg:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:sm:hover:text-black  l md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#services" className="block py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 hover:text-black  lg:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:sm:hover:text-black   md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#team" className="block py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 hover:text-black  lg:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:sm:hover:text-black   md:dark:hover:bg-transparent">Team</a>
        </li>
        <li>
          <a href="#portfolio" className="block py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 hover:text-black  lg:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Portfolio</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
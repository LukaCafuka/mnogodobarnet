'use client'
import React from 'react'
import {useState} from "react";
import Image from "next/image";
import Button from './Button'
import logo from 'public/logoNew.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='bg-neutral-900 absolute end-0 start-0'>
      <div className='mx-2 flex flex-col sm:flex-row justify-between py-2'>
        <div className='flex items-center'><Image className="bg-cover" src={logo}
                                                                                   width={40}></Image></div>
        {/* Hamburger button for mobile */}
        <div className="sm:hidden flex justify-end">
          <button
              onClick={toggleMenu}
              className="focus:outline-none"
          >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <ul className={`hidden sm:flex justify-end items-center flex-col sm:flex-row`}>
          <Button destination={"#"}>Home</Button>
          <Button className='pl-5' destination={"http://z.com.hr"}>About</Button>
          <Button className='pl-5' destination={"mailto:admin@mnogodobar.net"}>Kontakt</Button>
        </ul>

        <ul className={`sm:hidden transition-all duration-300 ease-in-out transform ${isOpen ? 'block' : 'hidden'} space-y-2 mt-4`}>
          <Button className="text-md" destination={"#"}>Home</Button>
          <Button className='pl-5' destination={"http://z.com.hr"}>About</Button>
          <Button className='pl-5' destination={"mailto:admin@mnogodobar.net"}>Kontakt</Button>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
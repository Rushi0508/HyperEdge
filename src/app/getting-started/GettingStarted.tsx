"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { arrowUp } from '../(assets)';
import Link from 'next/link';

const GettingStarted = () => {
    const [role, setRole] = useState("-1");
  return (
    <>
    <div className="h-screen relative bg-gray-gradient overflow-hidden">
        <div className="absolute bg-gradient-to-br h-full rounded-full blue__gradient blur-2xl circle-left"></div>
        <div className="absolute bg-gradient-to-br h-full rounded-full blue__gradient blur-2xl circle-right"></div>

        <div className="absolute w-96 h-96 backdrop-blur-sm pink__gradient rounded-full z-9 top-1/2 right-1/2"></div>
        <div className="absolute w-72 h-72 backdrop-blur-sm pink__gradient rounded-full z-9 bottom-1/2 left-1/2"></div>
        <div className="absolute w-16 h-16 backdrop-blur-sm bg-black-gradient rounded-full z-9 inset-y-2/4 inset-x-3/4"></div>

        <div className="absolute top-0 w-full h-screen backdrop-blur-sm bg-gradient-to-br to-gray-600/30 from-gray-800/40"></div>
    </div>

    <div className="flex justify-center">
        <div className="w-[90%] sm:w-5/6 md:w-4/6 xl:w-3/6 absolute top-[8%] backdrop-blur-xl bg-white/10 rounded-lg p-6 xs:p-10 sm:p-10 md:p-10">
            <h1 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-2">Get Started for free</h1>
            <p className="text-white text-xs sm:text-xl mb-5">Register yourself as a Creator or a Brand</p>
            <div className="relative text-sm xl:text-base">
                <div className="sm:flex flex-1 items-center gap-4 mb-4">
                    <div className="flex flex-col gap-2 w-full mb-4 sm:mb-0">
                        <label className="text-white" htmlFor="fname">First Name</label>
                        <input 
                            type="text" 
                            id="fname"
                            placeholder="First Name..." 
                            className="placeholder:text-gray-300 text-white outline-none focus:border-[#def9fa] w-full form-input py-2 px-4 rounded-md bg-transparent border border-white/30"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-white" htmlFor="lname">Last Name</label>
                        <input 
                            type="text" 
                            id="lname"
                            placeholder="Last Name..." 
                            className="placeholder:text-gray-300 text-white outline-none focus:border-[#def9fa] w-full form-input py-2 px-4 rounded-md bg-transparent border border-white/30"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-white" htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email" 
                        placeholder="Enter your email.." 
                        className="placeholder:text-gray-300 text-white outline-none focus:border-[#def9fa] w-full form-input py-2 px-4 rounded-md bg-transparent border border-white/30"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-white" htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password" 
                        placeholder="Enter your password.." 
                        className="placeholder:text-gray-300 text-white outline-none focus:border-[#def9fa] w-full form-input py-2 px-4 rounded-md bg-transparent border border-white/30"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-white" htmlFor="role">Role</label>
                    <select id="role" onChange={(e)=>{setRole(e.target.value)}} className={`${role== "-1"? 'text-gray-300' : 'text-white'} outline-none focus:border-[#def9fa] w-full form-input py-2 px-4 rounded-md bg-transparent border border-white/30`}>
                        <option className="text-black" selected value="-1">What best describes you ?</option>
                        <option className="text-black" value="0">Influencer</option>
                        <option className="text-black" value="1">Brand</option>
                    </select>
                </div>
                <div className='flex items-center justify-between gap-2 mt-2'>
                    <Link href="./" className="flex items-center gap-1 bg-transparent text-dimWhite border-2 border-dimWhite py-2 px-4 xs:py-2 xs:px-6 rounded-[10px]">
                        <Image src={arrowUp} className="rotate-[220deg]" alt="up"/>
                        Back
                    </Link>
                    <button type="button" className={`text-sm py-2 px-4 xs:py-2 xs:px-6 font-medium xl:text-base text-primary bg-blue-gradient rounded-[10px] outline-none`}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default GettingStarted

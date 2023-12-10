"use client"
import Link from 'next/link'
import React from 'react'

const EmailConfirm = () => {
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
        <div className="w-[90%] text-center sm:w-5/6 md:w-4/6 xl:w-3/6 absolute top-[10%] backdrop-blur-xl bg-white/10 rounded-lg p-6 xs:p-10 sm:p-10 md:p-10">
            <h1 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-2 text-center">Thank you for registering with HyperEdge!</h1>
            <p className="text-center text-white text-xs sm:text-xl mb-5">An email has been sent to the provided address.</p>
            <div className="relative text-sm xl:text-base">
                <p className='text-dimWhite text-center mb-5'>
                Please click the verification link in the email to activate your account. After verification, you can proceed to complete your profile and begin your journey on HyperEdge.
                </p>
                <Link className='text-center font-semibold text-lg text-gradient' href="/">Go to Home</Link>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default EmailConfirm

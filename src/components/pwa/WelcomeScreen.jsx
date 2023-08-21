import Link from 'next/link'
import React from 'react'

function WelcomeScreen() {
  return (
    <div className='h-[100svh] w-full bg-cover bg-center md:hidden flex flex-col z-[49] relative justify-end items-center'
      style={{backgroundImage: "url('/driver.jpg')"}}
    > 
      <div className="absolute top-0 left-0 w-full h-full bg-black/25 z-[-1]" />
      <h1 className='uppercase font-bold text-white text-center tracking-widest text-2xl absolute top-1/2 -translate-y-1/2'>
        Kiro Travel
      </h1>

      <div className='w-full h-[30%] py-4 px-3 flex flex-col justify-center items-center gap-y-4 bg-transparent '>
        <Link href="/signIn"
          className='py-2 w-full bg-mobileMain text-white font-medium tracking-wider text-center rounded-full duration-300 border-2 border-mobileMain hover:bg-transparent hover:text-mobileMain'
        >
          Sign In
        </Link>

        <Link href="/signUp"
          className='py-2 w-full bg-white text-black font-medium tracking-wider text-center rounded-full duration-300 border-2 hover:bg-transparent hover:text-mobileMain hover:border-mobileMain'
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default WelcomeScreen
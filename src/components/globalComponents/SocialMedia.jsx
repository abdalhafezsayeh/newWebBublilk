/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="hidden md:block fixed bottom-5 right-5 z-50 ">
        <Link
          href="https://api.whatsapp.com/send/?phone=%2B33644915310&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <img className='w-[50px] h-[50px] object-contain border-[1px] rounded-full shadow-2xl' width={50}  src="wha.gif" alt="" />
        </Link>
    </div>
  );
}

export default SocialMedia
import React from 'react'
import NavButton from './NavButton'

const Navbar = ({ className }) => {
  return (
    <div
    className={`inline-flex items-center gap-[271px] px-[110px] py-[30px] relative bg-white border-b [border-bottom-style:solid] border-[#00000066] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] ${className}`}
  >
    <div className="absolute md:relative">
      <div className="absolute md:top-0 top-[4px] left-[-100px] [font-family:'Roboto',Helvetica] font-bold text-[#000000] md:text-[24px] text-[20px] tracking-[0] leading-[44px] whitespace-nowrap">
        largerthani
      </div>
    </div>

<div className='relative'  >
    <ul className="inline-flex top-[50px] left-4 md:left-0 md:top-0 items-center justify-center gap-[40px] px-[20px] py-[16px] relative flex-[0_0_auto]">
      <li className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
        Home
      </li>
      <li className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-secondary-text md:text-[16px] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
        About us
      </li>
      <li className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-secondary-text md:text-[16px] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
        What We Do
      </li>
      <li className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-secondary-text md:text-[16px] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
        Media
      </li>
      <li className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-secondary-text md:text-[16px] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
        Contact
      </li>
    </ul>
    <NavButton className="!flex-[0_0_auto] top-8 md:top-2 left-[160px]" text="Donate" />
  </div>


    </div>
  )
}

export default Navbar

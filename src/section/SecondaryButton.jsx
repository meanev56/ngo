import React from 'react'

const SecondaryButton = ({ className }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-[10px] px-[32px] py-[16px] relative bg-white rounded-[4px] backdrop-blur-[80px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(80px)_brightness(100%)] ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
        Secondary button
      </div>
    </div>
  )
}

export default SecondaryButton

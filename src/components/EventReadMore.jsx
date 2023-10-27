import React from 'react'
import Navbar from '../section/Navbar'

const EventReadMore = () => {
  return (
    <div className="bg-[#fdfdfb] flex flex-row justify-center w-full">
      <div className="bg-bg overflow-hidden w-[1500px] h-[2509px] relative">

        <Navbar className=""  /> 

        <header className="absolute left-0 bg-transparent">
          <div className="relative w-[1500px] h-[400px] bg-yellow-light">
            <p className="absolute w-[768px] top-[96px] left-[354px] font-h1 font-[number:var(--h1-font-weight)] text-primary-text text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
              A day with our wonderful children
            </p>
            <div className="absolute w-[612px] h-[26px] top-[278px] left-[354px]">
              <div className="absolute w-[394px] h-[26px] top-0 left-0">
                <p className="absolute w-[364px] top-0 left-[28px] [font-family:'Roboto',Helvetica] font-medium text-[#1d2130] text-[16px] tracking-[0] leading-[25.6px]">
                  Opp Opolo round about, Yenagoa, Bayelsa, Nigeria
                </p>
                <img className="absolute w-[22px] h-[26px] top-0 -left-px" alt="Icon" src="/images/icon-1.svg" />
              </div>
              <div className="absolute w-[196px] h-[26px] top-0 left-[419px]">
                <p className="absolute top-0 left-[30px] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                  April 13, 2022 8:30 AM
                </p>
                <img className="absolute w-[24px] h-[26px] top-0 -left-px" alt="Icon" src="/images/icon.svg" />
              </div>
            </div>
          </div>
        </header> 

      
        
        
      </div>     
    </div>
  )
}

export default EventReadMore

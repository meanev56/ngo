import React from 'react'
import Footer from '../section/Footer'

const EventReadMore = () => {
  return (
    <div className="bg-[#fdfdfb] flex flex-row justify-center w-full">
      <div className="bg-bg overflow-hidden w-[1500px] h-[2509px] relative">
        <Footer
            className="!absolute !left-[-12px] !bg-transparent !top-[2107px]"
            overlapClassName="!w-[1500px]"
            to="/event-read-more"
        
        />
        Home

        <div className="absolute :w-[768px] h-[514px] top-[1497px] :left-[354px]">
          <div className="absolute w-[770px] h-[60px] top-0 left-0">
            <div className="flex top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[40px] tracking-[0] leading-[60px] whitespace-nowrap">
              Other events
            </div>
            <img className="absolute w-[514px] h-px top-[30px] left-[254px]" alt="Line" src="/images/line.svg" />
          </div>
          <div className="absolute w-[768px] h-[406px] top-[108px] left-0">
            <div className="absolute w-[768px] h-[191px] top-0 left-0 bg-yellow rounded-[20px]">
              <div className="relative w-[680px] h-[119px] top-[32px] left-[40px]">
                <div className="absolute w-[56px] h-[56px] md:top-[32px] left-[624px] bg-white rounded-[28px]">
                  <img
                    className="absolute w-[18px] h-[15px] top-[21px] left-[19px] "
                    alt="Arrow"
                    src="/images/arrow-1.svg"
                  />
                </div>
                <div className="absolute w-[523px] h-[111px] top-[8px] left-[79px]">
                  <div className="h-[112px] relative w-[521px] -top-px">
                    <p className="absolute md:w-[521px] md:top-[28px] left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                      Say no to plastic usage and save the planet
                    </p>
                    <div className="absolute w-[21px] h-[190px] top-[-84px] left-[85px] rotate-[90.00deg]">
                      <div className="absolute md:top-[119px] top-20 left-[-52px] rotate-[-90.00deg] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                        NEXT EVENTS
                      </div>
                      <img
                        className="absolute w-[44px] h-[2px] top-[21px] left-[-14px] rotate-[-90.00deg]"
                        alt="Line"
                        src="/images/line-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute w-[59px] h-[77px] top-0 left-0">
                  <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[48px] tracking-[0] leading-[57.6px] whitespace-nowrap">
                    23
                  </div>
                  <div className="absolute top-[58px] left-0 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                    APR
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[768px] h-[191px] top-[215px] left-0 bg-yellow rounded-[20px]">
              <div className="relative w-[680px] h-[77px] top-[57px] left-[40px]">
                <div className="absolute w-[56px] h-[56px] top-[14px] left-[624px] bg-white rounded-[28px]">
                  <img className="absolute w-[18px] h-[15px] top-[21px] left-[19px]" alt="Arrow" src="/images/arrow.svg" />
                </div>
                <div className="absolute w-[523px] h-[69px] top-[8px] left-[79px]">
                  <div className="h-[70px] relative w-[521px] -top-px">
                    <div className="absolute w-[521px] top-[28px] left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                      Monthly orphanage visits
                    </div>
                    <div className="absolute w-[21px] h-[190px] top-[-84px] left-[85px] rotate-[90.00deg]">
                      <div className="absolute top-[119px] left-[-52px] rotate-[-90.00deg] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                        NEXT EVENTS
                      </div>
                      <img
                        className="absolute w-[44px] h-[2px] top-[21px] left-[-14px] rotate-[-90.00deg]"
                        alt="Line"
                        src="/images/line-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute w-[59px] h-[77px] top-0 left-0">
                  <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[48px] tracking-[0] leading-[57.6px] whitespace-nowrap">
                    30
                  </div>
                  <div className="absolute top-[58px] left-0 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                    APR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
       
       
       
       </div></div> 
  )
}

export default EventReadMore

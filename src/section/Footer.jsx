import React from 'react'
import { Link } from "react-router-dom";
import Newsletter from './NewsLetter'
import PropTypes from 'prop-types'

const Footer = ({ className, overlapClassName, to }) => {
  return (
    <footer className={` ${className}`}>
      <div className={`relative ${overlapClassName}`}>
        <div className="absolute w-[1500px] h-[802px] md:h-80   top-0 left-0 bg-black" />
          <div className='grid gap-8'>
            <div className="relative top-[86px] md:left-9">
          <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[44px] whitespace-nowrap">
            largerthan
          </div>
          <div className="absolute w-[11px] top-0 left-[114px] [font-family:'Courgette',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[44px] whitespace-nowrap">
            i
          </div>
            </div>
            <div className="absolute w-[546px] left-[146px] top-96 md:top-4 md:end md:left-[800px]" >
          <div className="absolute w-[546px] h-[64px] top-[144px] left-0">
            <div className="relative w-[544px] h-[64px]">                
                    <div>
                        <Newsletter />
                    </div>
                </div>
          </div>
          <p className="absolute w-[440px] top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[56.0px]">
            Subscribe to get latest updates
          </p>
            </div>
            <div className="absolute w-[366px] h-[210px] top-[96px] left-[200px]" >
        <div className="absolute w-[84px] h-[210px] top-0 left-0">
            <div className="absolute top-[188px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Contact
            </div>
            <div className="absolute top-[142px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              What we do
            </div>
            <div className="absolute top-[96px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Team
            </div>
            <div className="absolute top-[50px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              About us
            </div>
            <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
              Home
            </div>
          </div>
          <div className="w-[62px] h-[210px] left-[162px] absolute top-0">
            <div className="absolute top-[188px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Blog
            </div>
            <div className="absolute top-[142px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Donate
            </div>
            <Link
              className="absolute top-[96px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap"
              to={to}
            >
              Events
            </Link>
            <a href='/project-read-more' className="absolute top-[50px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Projects
            </a>
            <div className="left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap absolute top-0">
              More
            </div>
          </div>
          <div className="w-[74px] h-[210px] left-[302px] absolute top-0">
            <div className="absolute top-[188px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Linkdin
            </div>
            <div className="absolute top-[142px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Twitter
            </div>
            <div className="absolute top-[96px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Instagram
            </div>
            <div className="absolute top-[50px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Facebook
            </div>
            <div className="left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap absolute top-0">
              Connect
            </div>
          </div>
          </div>
          </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
    to: PropTypes.string,
  };
  

export default Footer

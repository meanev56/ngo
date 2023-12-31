import React from 'react'
import { Link } from "react-router-dom";
import Newsletter from './NewsLetter'
import PropTypes from 'prop-types'

const Footer = ({ className, overlapClassName, to }) => {
  return (
    <footer className={` ${className}`}>
      <div className={`relative ${overlapClassName}`}>
        <div className="absolute w-[385px] md:w-[1500px] h-[802px] md:h-80   top-0 left-0 bg-black" />
          <div className='grid gap-8'>
            <div className="relative top-[86px] md:left-9">
          <div className="absolute top-[-60px] md:top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[44px] whitespace-nowrap">
            largerthan
          </div>
          <div className="absolute w-[11px] top-0 left-[114px] [font-family:'Courgette',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[44px] whitespace-nowrap">
            i
          </div>
            </div>
            <div className="absolute w-[546px] left-[146px] top-96 md:top-4 md:end md:left-[800px]" >
          <div className="absolute w-[546px] h-[64px] top-[144px] left-0">
            <div className="relativen w-[200px] md:w-[544px] h-[64px]">                
                    <div>
                        <Newsletter />
                    </div>
                </div>
          </div>
          <p className="absolute w-[340px] md:w-[440px] top-0 left-[-140px] md:left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[56.0px]">
            Subscribe to get latest updates
          </p>
            </div>
            <div className="absolute w-[366px] h-[210px] top-[96px] left-[200px]" >
        <div className="absolute w-[84px] h-[210px] top-0 left-[-180px] md:left-0">
            <a href='/contact' className="absolute top-[188px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Contact
            </a>
            <a href='/what-we-do' className="absolute top-[142px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              What we do
            </a>
            <a href='/team' className="absolute top-[96px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Team
            </a>
            <a href='/about-us' className="absolute top-[50px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              About us
            </a>
            <a href='/' className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
              Home
            </a>
          </div>
          <div className="w-[62px] h-[210px] left-[-60px] md:left-[162px] absolute top-0">
            <a href='/blog' className="absolute top-[188px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Blog
            </a>
            <a href='/donate' className="absolute top-[142px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Donate
            </a>
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
          <div className="w-[74px] h-[210px] left-[80px] md:left-[302px] absolute top-0">
            <a href='/linkedin' className="absolute top-[188px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Linkdin
            </a>
            <a href='/twitter' className="absolute top-[142px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Twitter
            </a>
            <div className="absolute top-[96px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Instagram
            </div>
            <div className="absolute top-[50px] left-0 opacity-[0.78] [font-family:'Roboto',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Facebook
            </div>
            <a href='/contact' className="left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap absolute top-0">
              Connect
            </a>
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

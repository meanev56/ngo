import React from 'react'
import PropTypes from 'prop-types'

const NavButton = ({ className, text = "Navbar button" }) => {
  return (
    <div
      className={`inline-flex items-start gap-[10px] px-[32px] py-[12px] relative bg-primary-text rounded-[4px] ${className}`}
    >
      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-[16px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};

NavButton.propTypes = {
  text: PropTypes.string,
};

export default NavButton

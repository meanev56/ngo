import { useState } from "react";
import NavButton from '../section/NavButton'

export default function Header({ className }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={`inline-flex items-center justify-between md:gap-[271px] border-b border-gray-400 relative bg-white px-[110px] py-8 md:py-[18px] [border-bottom-style:solid] border-[#00000066] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] ${className}`}>
      <div className="relative w-[129px] h-[44px]">
        <div className="absolute top-0 left-[-110px] md:left-0 [font-family:'Roboto',Helvetica] font-bold text-[#000000] text-[24px] tracking-[0] leading-[44px] whitespace-nowrap">
          largerthan
        </div>
        <div className="absolute w-[11px] left-[6px]  top-0 md:left-[114px] [font-family:'Courgette',Helvetica] font-normal text-[#000000] text-[25px] tracking-[0] leading-[44px] whitespace-nowrap">
          i
        </div>
      </div>
      
      <nav>
        
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 left-10 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">Home</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about-us">About Us</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/what-we-do">What We do</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/media">Media</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">contact</a>
              </li>
            </ul>
            <NavButton className="!flex-[0_0_auto]"  text="Donate" />
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/what-we-do">What We Do</a>
          </li>
          <li>
            <a href="/Media">Media</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <NavButton className="!flex-[0_0_auto]" text="Donate" />
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

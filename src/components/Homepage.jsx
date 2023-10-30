import React from 'react'
import Navbar from '../section/Navbar'
import SecondaryButtonEvent from '../section/SecondaryButtonEvent'
import PrimaryButton from '../section/PrimaryButton'

const Homepage = () => {
  return (
    <div className="bg-[#fdfdfb] flex flex-row justify-center w-full">
      <div className="bg-bg overflow-hidden md:w-[1500px]  md:h-[2509px] w-[375px] h-[5860px] relative">
        <Navbar className=" !left-0 !top-0" divClassName="!text-[#525560]" to="/home-page" />

        <header className="absolute w-[375px] h-[600px] md:w-[1500px] md:h-[735px] top-[150px] md:top-[150px] left-0 bg-transparent bg-header-texture bg-cover bg-[50%_50%]">
          <div className="absolute w-[1283px] h-[21px] top-[500px] md:top-[650px] left-[110px]">
            <p className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-white text-[18px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
              230 children under our care
            </p>
            <div className="absolute md:top-0 top-[60px] left-[20px]  md:left-[1095px] [font-family:'Roboto',Helvetica] font-medium text-white text-[18px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
              58 donations collected
            </div>
            <img
              className="absolute w-[836px] h-px top-[50px] md:top-[11px] left-[-110px] md:left-[241px] object-cover"
              alt="Line"
              src="/images/line.svg"
            />
          </div>
          <div className="absolute w-[642px] h-[330px] top-[100px] md:top-[128px] left-[110px]">
            <p className="absolute w-[300px] md:w-[640px] top-[-100px] md:top-0 left-[-80px] md:left-0 [font-family:'Roboto',Helvetica] font-bold text-white text-[30px] md:text-[64px] tracking-[0] leading-[76.8px]">
              Inclusive care for children with special needs
            </p>
            <div className="absolute w-[312px] h-[51px] top-[279px] left-px">
              <div className="inline-flex items-center justify-center gap-[8px] px-[16px] py-[12px] absolute top-[60px] md:top-[2px] left-[15px] md:left-[172px]">
              <a href='https://youtube.com' target='_blank' rel='noreferrer'>
                <img className="relative w-[24px]  md:h-[24px]" alt="Play icon" src="/images/play-icon.png" />
              </a>
                <div className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-white text-[16px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                  Play Video
                </div>
              </div>
              <SecondaryButtonEvent className="!absolute !left-0 !top-0" text="What we do" />
            </div>
          </div>
        
        </header>
        Home

        <div className="absolute w-[1280px] h-[724px] top-[888px] left-[111px]">
          <div className="absolute w-[1280px] h-[82px] top-[642px] left-0">
            <img className="absolute w-[1280px] h-[31px] top-[51px] left-0" alt="Logo row" src="/images/logo-row.png" />
            <div className="absolute w-[1282px] h-[19px] top-0 left-0">
              <img
                className="absolute w-[1094px] h-px top-[10px] left-[186px] object-cover"
                alt="Line"
                src="/images/line-2.svg"
              />
              <div className="[font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap absolute top-0 left-0">
                OUR SUPPORTERS
              </div>
            </div>
          </div>
          <div className="absolute w-[1270px] h-[578px] top-0 left-[10px]">
            <div className="absolute w-[480px] h-[578px] top-0 left-[790px] bg-header-face bg-cover bg-[50%_50%]">
              <img
                className="absolute w-[64px] h-[64px] top-[257px] left-[208px]"
                alt="Play icon"
                src="/images/play-icon-1.png"
              />
            </div>
            <div className="absolute w-[708px] h-[454px] top-[94px] left-0">
              <PrimaryButton className="!absolute !left-[97px] !top-[403px]" text="Learn more" />
              <p className="w-[608px] top-[199px] left-[96px] text-secondary-text absolute font-paragraph font-[number:var(--paragraph-font-weight)] text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique.
                <br />
                <br />
                ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                posuere.
              </p>
              <div className="absolute w-[703px] h-[168px] -top-px left-px">
                <p className="absolute w-[607px] top-[52px] left-[96px] font-h2 font-[number:var(--h2-font-weight)] text-primary-text text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                  We provide a place for children with special needs
                </p>
                <div className="h-[247px] top-[-113px] left-[113px] absolute w-[21px] rotate-[-90.00deg]">
                  <div className="absolute top-[162px] left-[-66px] rotate-[90.00deg] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                    KNOW ABOUT US
                  </div>
                  <img
                    className="absolute w-[72px] h-[2px] top-[35px] left-[-26px] rotate-[90.00deg]"
                    alt="Line"
                    src="/images/line-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

    </div> </div>
  )
}

export default Homepage

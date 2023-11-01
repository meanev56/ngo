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
      

        <section className="absolute w-[375px] md:w-[1280px] h-[724px] top-[800px] md:top-[888px] left-[111px]">
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
            <div className="absolute  w-[480px] h-[400px] md:h-[578px] top-[480px] md:top-0 left-[-200px] md:left-[790px] bg-header-face bg-cover bg-[50%_50%]">
              <a href='https://youtube.com' rel='noreferrer' target='_blank'>
              <img
                className="absolute w-[64px] h-[64px] top-[150px] md:top-[257px] left-[208px]"
                alt="Play icon"
                src="/images/play-icon-1.png"
              />
              </a>
            </div>
            <div className="absolute w-[708px] h-[454px] top-[94px] left-0">
              <PrimaryButton className="!absolute md:!left-[97px] top-[300px] md:!top-[403px]" text="Learn more" />
              <p className=" w-[380px] md:w-[608px] top-[50px] md:top-[199px] left-[-120px] md:left-[96px] text-secondary-text absolute font-paragraph font-[number:var(--paragraph-font-weight)] text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique.
                <br />
                <br />
                ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                posuere.
              </p>
              <div className="absolute w-[703px] h-[168px] -top-px left-px">
                <p className="absolute w-[400px] md:w-[607px] top-[-120px] md:top-[0px] left-[-120px] md:left-[96px] md:font-h2 font-[number:var(--h2-font-weight)] text-primary-text text-[35px] md:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                  We provide a place for children with special needs
                </p>
                <div className="h-[247px] top-[-113px] left-[113px] absolute w-[21px] rotate-[-90.00deg]">
                  <div className="absolute top-2 md:top-[132px] left-[-140px] md:left-[-66px] rotate-[90.00deg] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                    KNOW ABOUT US
                  </div>
                  <img
                    className="absolute w-[72px] h-[2px] top-[35px] left-[-100px] md:left-[-26px] rotate-[90.00deg]"
                    alt="Line"
                    src="/images/line-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="absolute w-[375px] md:w-[1500px] h-[1100px] md:h-[1301px] top-[1686px] left-0 bg-yellow-light">
          <img
            className="absolute w-[480px] h-[400px] md:h-[658px] top-[700px] md:top-[147px] md:left-[910px] object-cover"
            alt="Unsplash"
            src="/images/unsplash-sbiak0pkuie.png"
          />
          <div className="absolute  md:w-[460px] h-[442px] top-80 md:top-[363px] md:left-[206px]">
            <img className="absolute w-[2px] h-[441px] top-px left-0" alt="Line" src="/images/line-4.svg" />
            <div className="absolute w-[440px] h-[94px] top-[348px] left-[24px]">
              <p className="w-[384px] top-[42px] left-[52px] text-secondary-text absolute font-paragraph font-[number:var(--paragraph-font-weight)] text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="absolute top-0 left-[52px] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                Therapy
              </div>
              <div className="absolute w-[28px] h-[28px] top-px left-0 bg-[#000000] rounded-[4px]">
                <img className="absolute w-[18px] h-[19px] top-[4px] left-[6px]" alt="Vector" src="/images/vector-3.svg" />
              </div>
            </div>
            <div className="h-[94px] top-[230px] absolute w-[440px] left-[24px]">
              <p className="w-[384px] top-[42px] left-[52px] text-secondary-text absolute font-paragraph font-[number:var(--paragraph-font-weight)] text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="absolute top-0 left-[52px] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                Scholarships
              </div>
              <div className="absolute w-[28px] h-[28px] top-px left-0 bg-[#000000] rounded-[4px]">
                <img className="absolute w-[18px] h-[13px] top-[7px] left-[5px]" alt="Vector" src="/images/vector-2.svg" />
              </div>
            </div>
            <div className="h-[94px] top-[112px] absolute w-[440px] left-[24px]">
              <p className="w-[384px] top-[42px] left-[52px] text-secondary-text absolute font-paragraph font-[number:var(--paragraph-font-weight)] text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="absolute top-0 left-[52px] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                Health benefits
              </div>
              <div className="absolute w-[28px] h-[28px] top-px left-0 bg-[#000000] rounded-[4px]">
                <img className="absolute w-[18px] h-[17px] top-[6px] left-[5px]" alt="Vector" src="/images/vector-1.svg" />
              </div>
            </div>
            <div className="h-[88px] top-0 absolute w-[440px] left-[24px]">
              <p className="w-[384px] top-[36px] left-[52px] text-secondary-text absolute font-paragraph font-[number:var(--paragraph-font-weight)] text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="absolute top-0 left-[52px] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                Family support
              </div>
              <div className="absolute w-[28px] h-[28px] top-px left-0 bg-[#000000] rounded-[4px]">
                <img className="absolute w-[15px] h-[15px] top-[6px] left-[7px]" alt="Vector" src="/images/vector.svg" />
              </div>
            </div>
          </div>
          <div className="absolute w-[707px] h-[236px] top-[95px] left-[111px]">
            <div className="absolute w-[612px] h-[184px] top-[52px] left-[95px]">
              <p className=" w-[350px] md:w-[608px] top-[-50px] md:top-[132px] left-[-190px] md:left-0 text-secondary-text absolute font-paragraph font-[number:var(--paragraph-font-weight)] text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique.
              </p>
              <p className="absolute w-[400px] md:w-[608px] top-[-150px] md:top-0 left-[-200px] md:left-0 text-[30px] md:font-h2 font-[number:var(--h2-font-weight)] text-primary-text md:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                Some services we provide for our children
              </p>
            </div>
            <div className="h-[212px] top-[-95px] left-[95px] absolute w-[21px] rotate-[-90.00deg]">
              <div className="absolute top-4 md:top-[144px] left-[-80px] md:left-[-49px] rotate-[90.00deg] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                WHAT WE DO
              </div>
              <img
                className="absolute w-[72px] h-[2px] top-[35px] left-[-26px] rotate-[90.00deg]"
                alt="Line"
                src="/images/line-3.svg"
              />
            </div>
          </div>
        </section>

    </div> </div>
  )
}

export default Homepage

import React from 'react'
import Navbar from '../section/Navbar'
import PrimaryButton from '../section/PrimaryButton'
import SecondaryButtonEvent  from '../section/SecondaryButtonEvent'
import Team from '../section/Team'
import Footer from '../section/Footer'

const AboutPage = () => {
  return (
    <div className="bg-[#fdfdfb] flex flex-row justify-center w-full">
      <div className="bg-bg overflow-hidden md:w-[1500px] w-[375px] md:h-[5177px] h-[5773px] relative">
        <Navbar className="!left-0 !top-0" to="/about-us" />

        <header className="absolute w-[375px] md:w-[1280px] h-[273px] top-[120px] md:top-[163px] md:left-[110px] bg-transparent">
          <div className="relative w-[1285px] h-[274px] -top-px left-px">
            <div className="absolute w-[1190px] h-[222px] top-[52px] left-[95px]">
              <p className="w-[350px] md:w-[465px] top-[300px] md:top-[92px] left-[-80px] md:left-[719px] opacity-70 text-primary-text absolute font-paragraph font-[number:var(--paragraph-font-weight)] text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                erat. Suspendisse varius enim elementum tristique.
              </p>
              <p className="absolute w-[350px] md:w-[718px] top-0 left-[-90px] md:left-0 text-[40px] font-h1 font-[number:var(--h1-font-weight)] text-primary-text md:text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
                We are a non-governmental organization
              </p>
              <p className="absolute w-[370px] md:w-[465px] top-[180px] md:top-0 left-[-90px] md:left-[719px] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[20px] tracking-[0] leading-[30px]">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                posuere.
              </p>
            </div>
            <div className="absolute w-[21px] h-[247px] top-[-113px] left-[113px] rotate-[-90.00deg]">
              <div className="absolute top-[162px] left-[-66px] rotate-[90.00deg] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                KNOW ABOUT US
              </div>
              <img
                className="absolute w-[72px] h-[2px] top-[35px] left-[-26px] rotate-[90.00deg]"
                alt="Line"
                src="/images/line-3.svg"
              />
            </div>
          </div>
        </header>


        <section className="absolute w-[375px] md:w-[1500px] h-[1091px] top-[700px] md:top-[506px] left-0">
          <div className="absolute w-[1500px] h-[1050px] md:h-[867px] top-[224px] left-0 bg-yellow-light">
            <div className="absolute w-[1088px] h-[257px] top-[320px] left-[206px]">
              <div className="absolute w-[502px] h-[257px] top-0 left-0">
                <p className="absolute w-[330px] md:w-[496px] top-[-40px] md:top-[127px] left-[-200px] md:left-0 opacity-70 font-paragraph font-[number:var(--paragraph-font-weight)] text-primary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                  vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
                <p className="absolute w-[350px] md:w-[496px] top-[-200px] md:top-[35px] left-[-200px] md:left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  We make sure to provide inclusive care for children with special needs
                </p>
                <div className="absolute top-[-200px] md:top-0 left-[-70px] md:left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                  OUR MISSION
                </div>
              </div>
              <div className="absolute w-[502px] h-[257px] top-0 left-[592px]">
                <p className="absolute w-[496px] top-[400px] md:top-[127px] left-[-790px] md:left-0 opacity-70 font-paragraph font-[number:var(--paragraph-font-weight)] text-primary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                  vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
                <p className="absolute w-[360px] md:w-[496px] top-[250px] md:top-[35px] left-[-780px] md:left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  Provide more inclusive care to children around the world
                </p>
                <div className="absolute top-[240px] md:top-0 left-[-670px] md:left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                  OUR VISION
                </div>
              </div>
            </div>
            <div className="absolute w-[1280px] h-[98px] top-[673px] left-[110px]">
              <img className="absolute w-[1280px] h-[31px] top-[300px] md:top-[67px] left-0" alt="Logo row" src="/images/logo-row.png" />
              <div className="absolute w-[164px] h-[19px] top-[250px] md:top-0 left-0">
                <div className="[font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap absolute top-0 left-0">
                  OUR SUPPORTERS
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[200px] md:w-[1280px] h-[300px] md:h-[448px] top-0 left-[90px] md:left-[110px] bg-header-face bg-cover bg-[50%_50%]">
            <a href='https://youtube.com' target='_blank' rel='noreferrer'>
            <img
              className="absolute w-[64px] h-[64px] top-32 md:top-[192px] left-20 md:left-[608px]"
              alt="Play icon"
              src="/images/play-icon.png"
            />    
            </a>
            
          </div>
        </section>

        <section className="absolute w-[1116px] h-[305px] top-[2000px] md:top-[1693px] left-[200px]">
          <div className="absolute top-0 left-[-200px] md:left-[299px] font-h2 font-[number:var(--h2-font-weight)] text-primary-text text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap [font-style:var(--h2-font-style)]">
            Awards &amp; Recognitions
          </div>
          <div className="absolute w-[1114px] h-[199px] top-[106px] left-0">
            <div className="absolute w-[117px] h-[199px] top-[240px] md:top-0 left-[25px] md:left-[328px]">
              <div className="absolute top-[150px] left-[8px] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] text-center tracking-[0] leading-[25.6px] whitespace-nowrap">
                Global Award
              </div>
              <div className="absolute top-[180px] left-[12px] opacity-60 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[12px] text-center tracking-[0] leading-[19.2px] whitespace-nowrap">
                NEW YORK, USA
              </div>
              <div className="absolute top-[108px] left-[28px] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap">
                2018
              </div>
              <div className="w-[111px] h-[92px] left-0 absolute top-0">
                <div className="relative h-[92px]">
                  <img className="absolute w-[38px] h-[92px] top-0 left-[73px]" alt="Vector" src="/images/vector-5.svg" />
                  <img className="left-0 absolute w-[38px] h-[92px] top-0" alt="Vector" src="/images/vector-4.svg" />
                  <img
                    className="absolute w-[42px] h-[44px] top-[27px] left-[35px]"
                    alt="Union"
                    src="/images/union-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[117px] h-[199px] left-[-200px] md:left-[647px] absolute top-[240px] md:top-0">
              <div className="absolute top-[150px] left-[15px] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] text-center tracking-[0] leading-[25.6px] whitespace-nowrap">
                CSN Award
              </div>
              <div className="absolute top-[180px] left-[6px] opacity-60 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[12px] text-center tracking-[0] leading-[19.2px] whitespace-nowrap">
                NEW DELHI, INDIA
              </div>
              <div className="absolute top-[108px] left-[28px] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap">
                2014
              </div>
              <div className="w-[111px] h-[92px] left-0 absolute top-0">
                <img className="absolute w-[38px] h-[92px] top-0 left-[73px]" alt="Vector" src="/images/vector-32.svg" />
                <img className="left-0 absolute w-[38px] h-[92px] top-0" alt="Vector" src="/images/vector-22.svg" />
                <img className="absolute w-[34px] h-[50px] top-[22px] left-[38px]" alt="Union" src="/images/union-1.svg" />
              </div>
            </div>
            <div className="w-[170px] h-[199px] md:left-[950px] absolute top-0">
              <p className="absolute top-[150px] left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] text-center tracking-[0] leading-[25.6px] whitespace-nowrap">
                NGO of the year Award
              </p>
              <div className="absolute top-[190px] left-[33px] opacity-60 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[12px] text-center tracking-[0] leading-[19.2px] whitespace-nowrap">
                VIENNA, AUSTRIA
              </div>
              <div className="top-[108px] left-[54px] font-bold text-[24px] text-center leading-[38.4px] absolute [font-family:'Roboto',Helvetica] text-primary-text tracking-[0] whitespace-nowrap">
                2010
              </div>
              <div className="left-[27px] absolute w-[111px] h-[92px] top-0">
                <div className="absolute w-[72px] h-[92px] top-0 left-[39px]">
                  <img className="left-[34px] absolute w-[38px] h-[92px] top-0" alt="Vector" src="/images/vector-12.svg" />
                  <img className="absolute w-[36px] h-[55px] top-[18px] left-0" alt="Union" src="/images/union.svg" />
                </div>
                <img className="left-0 absolute w-[38px] h-[92px] top-0" alt="Vector" src="/images/vector-0.svg" />
              </div>
            </div>
            <div className="w-[126px] h-[199px] left-[-200px] md:left-0 absolute top-0">
              <div className="absolute top-[150px] left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] text-center tracking-[0] leading-[25.6px] whitespace-nowrap">
                Best NGO Award
              </div>
              <div className="absolute top-[180px] left-[9px] opacity-60 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[12px] text-center tracking-[0] leading-[19.2px] whitespace-nowrap">
                BERLIN, GERMANY
              </div>
              <div className="top-[108px] left-[32px] font-bold text-[24px] text-center leading-[38.4px] absolute [font-family:'Roboto',Helvetica] text-primary-text tracking-[0] whitespace-nowrap">
                2021
              </div>
              <img
                className="left-[4px] absolute w-[111px] h-[92px] top-0"
                alt="Award badge"
                src="/images/award-badge.png"
              />
            </div>
          </div>
        </section>


        <section className="absolute w-[375] md:w-[1280px] h-[384px] top-[3937px] md:left-[110px]">
          <div className="relative h-[384px]">
            <div className="absolute w-[1280px] h-[384px] top-0 left-0 bg-header-start bg-[100%_100%]">
              <img className="absolute w-[1280px] h-[384px] top-0 left-0" alt="Tint" src="/img/tint.svg" />
            </div>
            <div className="absolute w-[807px] h-[199px] top-[93px] left-[237px]">
              <div className="absolute w-[347px] h-[51px] top-[148px] left-[229px]">
                <PrimaryButton className="!absolute left-[-400px] md:!left-0 !top-20" text="Join as a volunteer" />
                <SecondaryButtonEvent className="!absolute left-[-370px] md:!left-[232px] top-[-20px] md:!top-20" text="Donate" />
              </div>
              <p className="absolute w-[805px] top-[-70px] md:top-0 right-[250px] md:left-0 text-[40px] font-h2 font-[number:var(--h2-font-weight)] text-white md:text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                You can contribute to provide a place for children with special needs!
              </p>
            </div>
          </div>
        </section>

        <section className="absolute w-[1280px] h-[1084px] top-[3500px] md:top-[2766px] left-[110px]">
          <div className="absolute w-[523px] h-[126px] top-0 left-[380px]">
            <p className="w-[519px] top-[74px] left-0 opacity-60 text-secondary-text text-center absolute font-paragraph font-[number:var(--paragraph-font-weight)] text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique.
            </p>
            <div className="absolute top-0 left-[102px] font-h2 font-[number:var(--h2-font-weight)] text-primary-text text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap [font-style:var(--h2-font-style)]">
              Meet our team
            </div>
          </div>
          
          <Team />
        
        </section>

        <section className="absolute w-[375px] md:w-[1280px] h-[295px] top-[4350px] md:top-[4409px] left-[110px]">
          <div className="absolute w-[375px] md:w-[628px] h-[191px] top-[300px] md:top-[104px] left-[-100px] md:left-[652px] bg-yellow rounded-[20px]">
            <div className="relative w-[540px] h-[119px] top-[32px] left-[40px]">
              <div className="absolute w-[56px] h-[56px] top-[32px] left-[484px] bg-white rounded-[28px]">
                <img className="absolute w-[18px] h-[15px] top-[21px] left-[19px]" alt="Arrow" src="/images/arrow.svg" />
              </div>
              <div className="absolute w-[383px] h-[111px] top-[8px] left-[79px]">
                <div className="relative w-[381px] h-[112px] -top-px">
                  <p className="absolute w-[250px] md:w-[381px] md:top-[28px] left-[-20px] md:left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    Seminar: Caring for children with autism
                  </p>
                  <div className="absolute w-[21px] h-[190px] top-[-84px] left-[85px] rotate-[90.00deg]">
                    <div className="absolute top-[90px] md:top-[119px] left-[-52px] rotate-[-90.00deg] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
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
                <div className="top-0 left-0 font-medium text-[48px] leading-[57.6px] absolute [font-family:'Roboto',Helvetica] text-primary-text tracking-[0] whitespace-nowrap">
                  25
                </div>
                <div className="absolute top-[58px] left-0 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                  APR
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[370px] md:w-[628px] h-[191px] top-[104px] left-[-100px] md:left-0 bg-yellow rounded-[20px]">
            <div className="relative w-[540px] h-[119px] top-[32px] left-[40px]">
              <div className="absolute w-[56px] h-[56px] top-[32px] left-[484px] bg-white rounded-[28px]">
                <img className="absolute w-[18px] h-[15px] top-[21px] left-[19px]" alt="Arrow" src="/img/arrow.svg" />
              </div>
              <div className="absolute w-[383px] h-[111px] top-[8px] left-[79px]">
                <div className="relative w-[381px] h-[112px] -top-px">
                  <p className="absolute w-[300px] md:w-[381px] top-[28px] left-[-20px] md:left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    A day with our wonderful children
                  </p>
                  <div className="absolute w-[21px] h-[190px] top-[-84px] left-[85px] rotate-[90.00deg]">
                    <div className="absolute top-[100px] md:top-[119px] left-[-52px] rotate-[-90.00deg] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
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
                <div className="top-0 left-0 font-medium text-[48px] leading-[57.6px] absolute [font-family:'Roboto',Helvetica] text-primary-text tracking-[0] whitespace-nowrap">
                  13
                </div>
                <div className="absolute top-[58px] left-0 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                  APR
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[1282px] h-[56px] top-0 left-0">
            <div className="[font-family:'Roboto',Helvetica] font-medium text-primary-text text-[40px] tracking-[0] leading-[56.0px] whitespace-nowrap absolute top-0 left-0">
              Our Events
            </div>
            <img
              className="absolute w-[1062px] h-px top-[28px] left-[218px] object-cover"
              alt="Line"
              src="/images/line.svg"
            />
          </div>
        </section>

        <section className="absolute w-[375px] md:w-[1280px] h-[950px] md:h-[576px] top-[2600px] md:top-[2094px] md:left-[110px] bg-[#f2c94c] rounded-[20px]">
          <div className="absolute w-[285px] h-[57px] top-[373px] left-[40px] md:left-[96px]">
            <div className="absolute w-[105px] h-[57px] top-0 left-0">
              <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-[#000000] text-[24px] tracking-[0] leading-[38.4px] whitespace-nowrap">
                34M+
              </div>
              <div className="absolute top-[38px] left-0 opacity-60 [font-family:'Roboto',Helvetica] font-medium text-[#000000] text-[12px] tracking-[0] leading-[19.2px] whitespace-nowrap">
                Donation Received
              </div>
            </div>
            <div className="w-[69px] left-[220px] absolute h-[57px] top-0">
              <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-[#000000] text-[24px] tracking-[0] leading-[38.4px] whitespace-nowrap">
                20+
              </div>
              <div className="absolute top-[38px] left-0 opacity-60 [font-family:'Roboto',Helvetica] font-medium text-[#000000] text-[12px] tracking-[0] leading-[19.2px] whitespace-nowrap">
                Care homes
              </div>
            </div>
            <div className="w-[59px] left-[133px] absolute h-[57px] top-0">
              <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-[#000000] text-[24px] tracking-[0] leading-[38.4px] whitespace-nowrap">
                400+
              </div>
              <div className="absolute top-[38px] left-0 opacity-60 [font-family:'Roboto',Helvetica] font-medium text-[#000000] text-[12px] tracking-[0] leading-[19.2px] whitespace-nowrap">
                Volunters
              </div>
            </div>
          </div>
          <div className="absolute w-[494px] h-[213px] top-[128px] left-[96px]">
            <div className="absolute w-[427px] top-[-80px] md:top-[25px] left-[-90px] md:left-0 font-h2 font-[number:var(--h2-font-weight)] text-[#000000] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              How we raised 34M
            </div>
            <p className="w-[330px] md:w-[488px] top-[20px] md:top-[109px] left-[-80px] md:left-0 opacity-60 text-[#000000] absolute font-paragraph font-[number:var(--paragraph-font-weight)] text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh.
            </p>
            <div className="[font-family:'Roboto',Helvetica] font-bold text-[#000000] text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap absolute top-[-100px] md:top-0 left-0">
              OUR JOURNEY
            </div>
          </div>
          <img
            className="absolute w-[300px] md:w-[612px] h-[448px] top-[450px] md:top-[64px] left-[30px]  md:left-[632px] object-cover"
            alt="Image1"
            src="/images/image.png"
          />
        </section>

        <Footer 
            className="!absolute !left-0 !bg-transparent top-[4900px]  md:!top-[4775px]"
            overlapClassName="!w-[1500px]"
            to="/about-us"
            to1="/about-us"
        />

      
    </div></div>
  )
}

export default AboutPage

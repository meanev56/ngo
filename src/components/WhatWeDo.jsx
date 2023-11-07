import React from 'react'
import Footer from '../section/Footer'
import SecondaryButtonEvent from '../section/SecondaryButtonEvent'
import PrimaryButton from '../section/PrimaryButton'
import Navbar from '../section/Navbar'

const WhatWeDo = () => {
  return (
    <div className="bg-[#fdfdfb] flex flex-row justify-center w-full">
      <div className="bg-bg overflow-hidden w-[375px] md:w-[1500px] h-[4800px] md:h-[3136px] relative">

      <Navbar className=" !left-0 !top-0" to="/what-we-do" />


      <header className="absolute w-[375px] md:w-[1279px] h-[384px] top-[163px] left-[110px] bg-transparent">
          <div className="w-[694px] h-[297px] left-0 absolute top-0">
            <div className="absolute w-[556px] h-[186px] -top-px left-px">
              <p className="absolute w-[370px] md:w-[461px] top-[52px] text-[40px] left-[-100px] md:left-[95px] font-h1 font-[number:var(--h1-font-weight)] text-primary-text md:text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
                We are working cross country
              </p>
              <div className="absolute w-[21px] h-[212px] top-[-95px] left-[95px] rotate-[-90.00deg]">
                <div className="absolute top-[144px] left-[-100px] md:left-[-49px] rotate-[90.00deg] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                  WHAT WE DO
                </div>
                <img
                  className="absolute w-[72px] h-[2px] top-[35px] left-[-26px] rotate-[90.00deg]"
                  alt="Line"
                  src="/images/line-4.svg"
                />
              </div>
            </div>
            <p className="w-[370px] md:w-[594px] top-[180px] md:top-[219px] left-[-100px] md:left-[96px] text-secondary-text text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] absolute font-paragraph font-[number:var(--paragraph-font-weight)] tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat.
            </p>
          </div>
          <img
            className="absolute w-[350px] md:w-[476px] h-[384px] top-[350px] md:top-0 left-[-95px] md:left-[803px] object-cover"
            alt="Unsplash aeatunvneik"
            src="/images/unsplash-aeatunvneik.png"
          />
        </header>

      <section className="absolute w-[375px] md:w-[1502px] h-[574px] top-[950px] md:top-[643px] left-[-60px] md:left-0">
          <div className="relative w-[1500px] h-[974px] md:h-[510px] bg-yellow-light">
            <p className="absolute md:top-[96px] sm:w-[200px] left-[110px] text-[30px] font-h2 font-[number:var(--h2-font-weight)] text-primary-text md:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap [font-style:var(--h2-font-style)]">
              What we do for our kids with special needs
            </p>
            <div className="absolute w-[1280px] h-[252px] top-[218px] left-[110px]">
              <div className="absolute w-[384px] h-[102px] top-[600px] md:top-[150px] md:left-[896px]">
                <div className="absolute w-[336px] h-[102px] top-0 left-[52px]">
                  <p className="absolute w-[332px] top-[36px] left-0 opacity-70 font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-primary-text text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique.
                  </p>
                  <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Public outreach
                  </div>
                </div>
                <div className="absolute w-[28px] h-[28px] top-0 left-0 bg-[#000000] rounded-[4px]">
                  <img className="absolute w-[19px] h-[18px] top-[5px] left-[4px]" alt="Vector" src="/img/vector.svg" />
                </div>
              </div>
              <div className="h-[102px] top-[450px] md:top-[150px] md:left-[448px] absolute w-[384px]">
                <div className="absolute w-[336px] h-[102px] top-0 left-[52px]">
                  <p className="absolute w-[332px] top-[36px] left-0 opacity-70 font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-primary-text text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique.
                  </p>
                  <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Therapy
                  </div>
                </div>
                <div className="absolute w-[28px] h-[28px] top-0 left-0 bg-[#000000] rounded-[4px]">
                  <img
                    className="absolute w-[18px] h-[19px] top-[4px] left-[6px]"
                    alt="Vector"
                    src="/images/vector-13.svg"
                  />
                </div>
              </div>
              <div className="h-[102px] top-[150px] left-0 absolute w-[384px]">
                <div className="absolute w-[336px] h-[102px] top-0 left-[52px]">
                  <p className="absolute w-[332px] top-[36px] left-0 opacity-70 font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-primary-text text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique.
                  </p>
                  <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Basic amenities
                  </div>
                </div>
                <div className="absolute w-[28px] h-[28px] top-0 left-0 bg-[#000000] rounded-[4px]">
                  <img
                    className="absolute w-[14px] h-[18px] top-[5px] left-[7px]"
                    alt="Vector"
                    src="/images/vector-51.svg"
                  />
                </div>
              </div>
              <div className="h-[100px] top-[300px] md:top-0 md:left-[896px] absolute w-[384px]">
                <div className="w-[336px] h-[100px] left-[52px] absolute top-0">
                  <p className="w-[332px] top-[34px] left-0 opacity-70 text-primary-text text-[length:var(--paragraph-small-font-size)] leading-[var(--paragraph-small-line-height)] absolute font-paragraph-small font-[number:var(--paragraph-small-font-weight)] tracking-[var(--paragraph-small-letter-spacing)] [font-style:var(--paragraph-small-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique.
                  </p>
                  <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Education
                  </div>
                </div>
                <div className="absolute w-[28px] h-[28px] top-0 left-0 bg-[#000000] rounded-[4px]">
                  <img
                    className="absolute w-[18px] h-[17px] top-[6px] left-[5px]"
                    alt="Vector"
                    src="/images/vector-41.svg"
                  />
                </div>
              </div>
              <div className="h-[102px] top-0 left-0 md:left-[448px] absolute w-[384px]">
                <div className="absolute w-[336px] h-[102px] top-0 left-[52px]">
                  <p className="absolute w-[332px] top-[36px] left-0 opacity-70 font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-primary-text text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique.
                  </p>
                  <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Health benefits
                  </div>
                </div>
                <div className="absolute w-[28px] h-[28px] top-0 left-0 bg-[#000000] rounded-[4px]">
                  <img
                    className="absolute w-[18px] h-[13px] top-[7px] left-[5px]"
                    alt="Vector"
                    src="/images/vector-3.svg"
                  />
                </div>
              </div>
              <div className="h-[102px] top-[-140px] md:top-0 left-0 absolute w-[384px]">
                <div className="absolute w-[336px] h-[102px] top-0 left-[52px]">
                  <p className="w-[290px] md:w-[332px] top-[36px] left-0 text-secondary-text text-[length:var(--paragraph-small-font-size)] leading-[var(--paragraph-small-line-height)] absolute font-paragraph-small font-[number:var(--paragraph-small-font-weight)] tracking-[var(--paragraph-small-letter-spacing)] [font-style:var(--paragraph-small-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique.
                  </p>
                  <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Family support
                  </div>
                </div>
                <div className="absolute w-[28px] h-[28px] top-0 left-0 bg-[#000000] rounded-[4px]">
                  <img
                    className="absolute w-[15px] h-[15px] top-[6px] left-[7px]"
                    alt="Vector"
                    src="/images/vector-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="absolute w-[375px] md:w-[1282px] h-[712px] top-[1950px] md:top-[1273px] left-[110px]">
          <div className="w-[1280px] top-[291px] left-0 absolute h-[421px]">
            <div className="absolute w-[280px] md:w-[411px] h-[280px] md:h-[421px] top-[400px] md:top-0 left-[-80px] md:left-[869px] bg-header-what bg-cover bg-[50%_50%]">
              <div className="relative h-[421px] rounded-[20px]">
                <div className="absolute w-[280px] md:w-[411px] h-[20px] md:h-[421px] top-0 left-0 bg-black rounded-[20px] opacity-50" />
                <div className="absolute w-[319px] h-[293px] top-[80px] left-[48px]">
                  <SecondaryButtonEvent className="!absolute !left-0 top-[120px] md:!top-[242px]" text="Learn more" />
                  <p className="w-[280px] md:w-[315px] top-[10px] md:top-[100px] left-[-30px] md:left-0 text-white text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] absolute font-paragraph font-[number:var(--paragraph-font-weight)] tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <div className="absolute w-[315px] top-[-60px] md:top-0 left-0 font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    Monthly public awareness
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[411px] top-[140px] md:top-0 left-[-80px] md:left-[435px] bg-header-value bg-cover bg-[50%_50%] absolute h-[421px]">
              <div className="relative h-[421px] rounded-[20px]">
                <div className="absolute w-[280px] md:w-[411px] h-[250px] md:h-[421px] top-0 left-0 bg-black rounded-[20px] opacity-50" />
                <div className="absolute w-[319px] h-[293px] top-[80px] left-[48px]">
                  <SecondaryButtonEvent className="!absolute !left-0 top-[100px] md:!top-[242px]" text="Learn more" />
                  <p className="w-[280px] md:w-[315px] top-[-40px] md:top-[58px] left-[-30px] md:left-0 text-white text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] absolute font-paragraph font-[number:var(--paragraph-font-weight)] tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <div className="absolute w-[315px] top-[-75px] md:top-0 left-[-30px] md:left-0 font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    Weekly excursions
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[411px] top-0 left-0 absolute h-[421px]">
              <div className="relative h-[421px] rounded-[20px]">
                <img
                  className="absolute w-[275px]  md:w-[410px] h-[220px] md:h-[421px] top-[-95px] md:top-0 left-[-78px] md:left-0 object-cover"
                  alt="Unsplash cveoh jjmee"
                  src="/images/unsplash-2.png"
                />
                <div className="absolute w-[280px] md:w-[411px] h-[230px] md:h-[421px] top-[-100px] md:top-0 left-[-80px] md:left-0 bg-black rounded-[20px] opacity-50" />
                <div className="absolute w-[319px] h-[293px] top-[80px] left-[10px] md:left-[48px]">
                  <SecondaryButtonEvent className="!absolute !left-0 top-[-20px] md:!top-[242px]" text="Learn more" />
                  <p className="w-[260px] md:w-[315px] top-[-100px] md:top-[100px] left-[-80px] md:left-0 text-white t adipiscing elit. Suspendiext-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] absolute font-paragraph font-[number:var(--paragraph-font-weight)] tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                    Lorem ipsum dolor sit amet, consectetursse varius enim in eros.
                  </p>
                  <p className="absolute w-[260px] md:w-[315px] top-[-200px] md:top-0 left-[-80px] md:left-0 font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    Mission smile 1k: Outdoor charity
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[748px] h-[226px] -top-px left-px">
            <p className="absolute w-[370px] md:w-[640px] top-[52px] left-[-80px] md:left-[108px] text-[30px] font-h2 font-[number:var(--h2-font-weight)] text-primary-text md:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              We are creating a place where children with special needs can thrive
            </p>
            <div className="absolute w-[21px] h-[334px] top-[-156px] left-[156px] rotate-[-90.00deg]">
              <div className="absolute top-[205px] left-[-190px] md:left-[-110px] rotate-[90.00deg] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                PROJECTS WE HAVE DONE
              </div>
              <img
                className="absolute w-[72px] h-[2px] top-[35px] left-[-26px] rotate-[90.00deg]"
                alt="Line"
                src="/images/line.svg"
              />
            </div>
          </div>
        </section>

        <section className="absolute w-[375px] md:w-[1280px] h-[384px] top-[2981px] md:top-[2400px] md:left-[110px]">
          <div className="relative h-[384px]">
            <div className="absolute w-[1280px] h-[384px] top-0 left-0 bg-header-start bg-[100%_100%]">
              <img className="absolute w-[1280px] h-[384px] top-0 left-0" alt="Tint" src="/images/tint.svg" />
            </div>
            <div className="absolute w-[807px] h-[199px] top-[93px] left-[237px]">
              <div className="absolute w-[347px] h-[51px] top-[148px] left-[229px]">
                <PrimaryButton className="!absolute left-[-300px] md:!left-0 md:!top-[70px]" text="Join as a volunteer" />
                <SecondaryButtonEvent className="absolute left-[-450px] md:!left-[232px]  md:!top-[70px]" text="Donate" />
              </div>
              <p className="absolute w-[370px] md:w-[805px] top-[-100px] md:top-0 left-[-240px] text-[30px] md:left-0 font-h2 font-[number:var(--h2-font-weight)] text-white md:text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                You can contribute to provide a place for children with special needs!
              </p>
            </div>
          </div>
        </section>



        <section className="absolute w-[375px] md:w-[1280px] h-[295px] top-[3450px] md:top-[2015px] left-[110px]">
          <div className="absolute md:w-[628px] w-[347px] h-[191px] top-[300px] md:top-[104px] left-[-100px] md:left-[652px] bg-yellow rounded-[20px]">
            <div className="relative w-[540px] h-[119px] top-[32px] left-[40px]">
              <div className="absolute w-[56px] h-[56px] top-[32px] left-[484px] bg-white rounded-[28px]">
                <img className="absolute w-[18px] h-[15px] top-[21px] left-[19px]" alt="Arrow" src="/images/arrow.svg" />
              </div>
              <div className="absolute w-[383px] h-[111px] top-[8px] left-[79px]">
                <div className="relative w-[381px] h-[112px] -top-px">
                  <p className="absolute w-[305px] md:w-[381px] top-[28px] left-[-50px] md:left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    Seminar: Caring for children with autism
                  </p>
                  <div className="absolute w-[21px] h-[190px] top-[-84px] left-[85px] rotate-[90.00deg]">
                    <div className="absolute top-[119px] left-[-52px] rotate-[-90.00deg] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                      NEXT EVENTS
                    </div>
                    <img
                      className="absolute w-[44px] h-[2px] top-[21px] left-[-14px] rotate-[-90.00deg]"
                      alt="Line"
                      src="/images/line-21.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute w-[59px] h-[77px] top-0 left-0">
                <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[48px] tracking-[0] leading-[57.6px] whitespace-nowrap">
                  25
                </div>
                <div className="absolute top-[58px] left-0 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                  APR
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[347px] md:w-[628px] h-[191px] top-[104px] left-[-100px] md:left-0 bg-yellow rounded-[20px]">
            <div className="relative w-[540px] h-[119px] top-[32px] left-[40px]">
              <div className="absolute w-[56px] h-[56px] top-[32px] left-[484px] bg-white rounded-[28px]">
                <img className="absolute w-[18px] h-[15px] top-[21px] left-[19px]" alt="Arrow" src="/images/arrow.svg" />
              </div>
              <div className="absolute w-[383px] h-[111px] top-[8px] left-[79px]">
                <div className="relative w-[381px] h-[112px] -top-px">
                  <p className="absolute w-[300px]  md:w-[381px] top-[28px] left-[-25px] md:left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    A day with our wonderful children
                  </p>
                  <div className="absolute w-[21px] h-[190px] top-[-84px] left-[85px] rotate-[90.00deg]">
                    <div className="absolute top-[119px] left-[-52px] rotate-[-90.00deg] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                      NEXT EVENTS
                    </div>
                    <img
                      className="absolute w-[44px] h-[2px] top-[21px] left-[-14px] rotate-[-90.00deg]"
                      alt="Line"
                      src="/images/line-21.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute w-[59px] h-[77px] top-0 left-0">
                <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[48px] tracking-[0] leading-[57.6px] whitespace-nowrap">
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
              src="/images/line-11.svg"
            />
          </div>
        </section>

       

      <Footer
          className="!absolute !left-0 !bg-transparent top-[4080px] md:!top-[2884px]"
          overlapClassName="!w-[1500px]"
          to="/what-we-do"
        />
    
    </div></div>
  )
}

export default WhatWeDo

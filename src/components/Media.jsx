import React from "react";
import  Footer  from "../section/Footer";
import  Navbar  from "../section/Navbar";
import  PrimaryButton  from "../section/PrimaryButton";
import  SecondaryButtonEvent  from "../section/SecondaryButtonEvent";


const Media = () => {
  return (

<div className="bg-[#fdfdfb] flex flex-row justify-center w-full">
      <div className="bg-bg overflow-hidden w-[375px] md:w-[1500px] h-[2900px] md:h-[2126px] relative">
     
      <Navbar className=" !left-0 !top-0" to="/media" />

      <section className="absolute w-[375px] md:w-[1500px] h-[768px] top-[200px] md:top-[67px] left-0 bg-yellow-light">
         
         
          <div className="absolute w-[592px] h-[576px] top-[280px] md:top-[96px] left-[-10px] md:left-[798px] bg-white rounded-[20px]">
            <div className="relative w-[512px] h-[528px] top-[24px] left-[24px]">
              <div className="absolute w-[512px] h-[160px] top-0 left-0">
                <div className="h-[120px] top-[20px] absolute w-[302px] left-[216px]">
                  <div className="absolute w-[296px] top-0 left-[-20px] md:left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[20px] tracking-[0] leading-[30px]">
                    Autism care day
                  </div>
                  <div className="absolute w-[296px] top-[39px] left-0 opacity-50 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[14px] tracking-[0] leading-[21px]">
                    15th Nov 2022
                  </div>
                  <p className="absolute w-[200px] md:w-[296px] top-[50px] md:top-[68px] left-[-20px] md:left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  </p>
                </div>
                <img
                  className="absolute w-[192px] h-[160px] top-0 left-0 object-cover"
                  alt="Unsplash"
                  src="/images/unsplash-np9j7o90hfy.png"
                />
              </div>
              <div className="top-[184px] absolute w-[512px] h-[160px] left-0">
                <div className="h-[120px] top-[20px] absolute w-[302px] left-[216px]">
                  <div className="absolute w-[200px] md:w-[296px] top-[-20px] md:top-0 left-[-10px] md:left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[20px] tracking-[0] leading-[30px]">
                    Down syndrome outreach
                  </div>
                  <p className="absolute w-[200px] md:w-[296px] top-[40px] md:top-[68px] left-[-20px] md:left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  </p>
                  <div className="absolute w-[296px] top-[39px] left-0 opacity-50 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[14px] tracking-[0] leading-[21px]">
                    15th Nov 2022
                  </div>
                </div>
                <img
                  className="absolute w-[192px] h-[160px] top-0 left-0 object-cover"
                  alt="Unsplash"
                  src="/images/unsplash-sbiak0pkuie-1.png"
                />
              </div>

              <div className="top-[368px] absolute w-[512px] h-[160px] left-0">
                <div className="h-[150px] top-[5px] absolute w-[302px] left-[216px]">
                  <p className="absolute w-[150px] md:w-[296px] top-[-35px] md:top-0 left-[-20px] md:left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[20px] tracking-[0] leading-[30px]">
                    Caring for children with cerebral palsy
                  </p>
                  <p className="absolute w-[200px] md:w-[296px] top-[80px] md:top-[98px] left-[-20px] md:left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  </p>
                  <div className="absolute w-[296px] top-[69px] left-0 opacity-50 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[14px] tracking-[0] leading-[21px]">
                    15th Nov 2022
                  </div>
                </div>
                <img
                  className="absolute w-[192px] h-[160px] top-0 left-0 object-cover"
                  alt="Cerebral palsy"
                  src="/images/cerebral-palsy-11-things-456px-1.png"
                />
              </div>
            </div>
          </div>
         
          <div className="absolute w-[596px] h-[503px] top-[96px] left-[110px]">
            <PrimaryButton className="!absolute !left-[96px] top-[160px] md:!top-[452px]" text="Read more" />
            <p className="absolute w-[496px] top-[80px] md:top-[368px] left-[-80px] md:left-[96px] font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <div className="absolute w-[591px] h-[320px] -top-px left-px">
              <p className="absolute w-[350px] md:w-[496px] top-[-80px] md:top-[52px] left-[-80px] md:left-[95px] font-h1 text-[30px] font-[number:var(--h1-font-weight)] text-primary-text md:text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
                Our goal is to provide inclusive care for children with special needs
              </p>
              <div className="absolute w-[21px] h-[190px] top-[-84px] left-[84px] rotate-[-90.00deg]">
                <div className="absolute md:top-[133px] left-[-38px] rotate-[90.00deg] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                  TOP NEWS
                </div>
                <img
                  className="absolute w-[72px] h-[2px] top-[35px] left-[-26px] rotate-[90.00deg]"
                  alt="Line"
                  src="/images/line-31.svg"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="absolute w-[375px] md:w-[1280px] h-[384px] top-[1100px] md:top-[920px] md:left-[110px]">
          <div className="relative h-[384px]">
            <div className="w-[1280px] h-[384px] bg-header-start bg-[100%_100%] absolute top-0 left-0">
              <img className="absolute w-[1280px] h-[384px] top-0 left-0" alt="Tint" src="/images/tint.svg" />
            </div>
            <div className="absolute w-[807px] h-[199px] top-[93px] left-[237px]">
              <div className="absolute w-[347px] h-[51px] top-[148px] left-[229px]">
                <PrimaryButton className="!absolute left-[-450px] md:!left-0 !top-0" text="Join as a volunteer" />
                <SecondaryButtonEvent className="!absolute left-[-215px] md:!left-[232px] !top-0" text="Donate" />
              </div>
              <p className="absolute w-[380px] md:w-[805px] top-[-100px] md:top-0 left-[-250px] text-[30px] md:left-0 font-h2 font-[number:var(--h2-font-weight)] text-white md:text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                You can contribute to provide a place for children with special needs!
              </p>
            </div>
          </div>
        </section>


        <section className="absolute w-[375px] md:w-[1280px] h-[295px] top-[1500px] md:top-[1342px] md:left-[110px]">
          <div className="absolute w-[380px] md:w-[628px] h-[191px] top-[300px] md:top-[104px] left-[0px]  md:left-[652px] bg-yellow rounded-[20px]">
            <div className="relative w-[540px] h-[119px] top-[32px] left-[40px]">
              <div className="absolute w-[56px] h-[56px] top-[32px] left-[484px] bg-white rounded-[28px]">
                <img className="absolute w-[18px] h-[15px] top-[21px] left-[19px]" alt="Arrow" src="/images/arrow-1.svg" />
              </div>
              <div className="absolute w-[383px] h-[111px] top-[8px] left-[79px]">
                <div className="relative w-[381px] h-[112px] -top-px">
                  <p className="absolute w-[250px] md:w-[381px] md:top-[28px] left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    Seminar: Caring for children with autism
                  </p>
                  <div className="absolute w-[21px] h-[190px] top-[-84px] left-[85px] rotate-[90.00deg]">
                    <div className="absolute top-[2px] md:top-[119px] left-[-52px] rotate-[-90.00deg] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                      NEXT EVENTS
                    </div>
                    <img
                      className="absolute w-[44px] h-[2px] top-[21px] left-[-14px] rotate-[-90.00deg]"
                      alt="Line"
                      src="/images/line-7.svg"
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
          <div className="absolute w-[380px] md:w-[628px] h-[191px] top-[104px] left-0 bg-yellow rounded-[20px]">
            <div className="relative w-[540px] h-[119px] top-[32px] left-[40px]">
              <div className="absolute w-[56px] h-[56px] top-[32px] left-[484px] bg-white rounded-[28px]">
                <img className="absolute w-[18px] h-[15px] top-[21px] left-[19px]" alt="Arrow" src="/images/arrow-1.svg" />
              </div>
              <div className="absolute w-[383px] h-[111px] top-[8px] left-[79px]">
                <div className="relative w-[381px] h-[112px] -top-px">
                  <p className="absolute w-[300px] md:w-[381px] top-[28px] left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    A day with our wonderful children
                  </p>
                  <div className="absolute w-[21px] h-[190px] top-[-84px] left-[85px] rotate-[90.00deg]">
                    <div className="absolute top-[80px] md:top-[119px] left-[-52px] rotate-[-90.00deg] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                      NEXT EVENTS
                    </div>
                    <img
                      className="absolute w-[44px] h-[2px] top-[21px] left-[-14px] rotate-[-90.00deg]"
                      alt="Line"
                      src="/images/line-7.svg"
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
              src="/images/line-6.svg"
            />
          </div>
        </section>


        <Footer
          className="!absolute !left-0 !bg-transparent top-[2050px] md:!top-[1724px]"
          overlapClassName="!w-[1500px]"
          to="/media"
        />
        
      </div>
    </div>

  )
}

export default Media

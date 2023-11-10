import React from "react";
import Footer from "../section/Footer";
import Navbar from "../section/Navbar";
import PrimaryButton from "../section/PrimaryButton";
import SecondaryButtonEvent from "../section/SecondaryButtonEvent";

const Donations = () => {
  return (
    <div className="bg-[#fdfdfb] flex flex-row justify-center w-full">
      <div className="bg-bg w-[375px] md:w-[1500px] h-[2309px] relative">

      <Navbar className=" !left-0 !top-0" />

      <header className="absolute w-[375px] md:w-[1500px] h-[576px] top-[107px] left-0 bg-yellow-light">
          <img
            className="absolute w-[370px] md:w-[480px] h-[384px] top-[350px] md:top-[96px] md:left-[910px] object-cover"
            alt="Image1"
            src="/images/image-9.png"
          />
          <div className="absolute w-[632px] h-[283px] top-[147px] left-[206px]">
            <PrimaryButton className="!absolute !left-px !bg-[#f2c94c] top-[100px] md:!top-[232px]" text="Donate now" />
            <p className="absolute w-[360px] md:w-[517px] top-[0px] md:top-[148px] left-[-200px] md:left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              When you donate, you’re supporting effective care to children with special needs—an investment in the
              leaders of tomorrow.
            </p>
            <p className="absolute w-[370px] md:w-[627px] top-[-140px] md:top-[-20px] left-[-200px] md:left-px text-[40px] font-h1 font-[number:var(--h1-font-weight)] text-primary-text md:text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
              Making a donation for our children.
            </p>
          </div>
          <div className="absolute w-[21px] h-[168px] top-[21px] left-[184px] rotate-[-90.00deg]">
            <div className="absolute md:top-[122px] left-[-27px] rotate-[90.00deg] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
              DONATE
            </div>
            <img
              className="absolute w-[72px] h-[2px] top-[35px] left-[-26px] rotate-[90.00deg]"
              alt="Line"
              src="/images/line-2.svg"
            />
          </div>
        </header>


        <section className="absolute w-[375px] md:w-[1280px] h-[244px] top-[800px] md:top-[739px] left-[110px]">
          <div className="absolute w-[596px] h-[244px] md:top-0 left-0">
            <p className="absolute w-[375px] md:w-[592px] top-[40px] md:top-0 left-[-100px] md:left-0 font-h2 text-[30px] font-[number:var(--h2-font-weight)] text-b md:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              How you can contribute to caring for our kids
            </p>
            <p className="top-[140px] absolute w-[370px] md:w-[592px] left-[-100px] md:left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
              posuere.
            </p>
          </div>
          <div className="absolute w-[594px] h-[222px] top-[380px] md:top-[11px] left-[-100px] md:left-[688px]">
            <p className="top-[66px] absolute w-[592px] left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. <br />
              <br />
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <div className="absolute w-[356px] h-[2px] top-[42px] left-0">
              <img className="absolute w-[356px] h-px top-0 left-0 object-cover" alt="Line" src="/images/line-1.svg" />
              <img className="absolute w-[114px] h-[2px] top-0 left-0" alt="Line" src="/images/line-3.svg" />
            </div>
            <div className=" left-[212px] inline-flex items-start gap-[10px] px-[24px] py-[8px] absolute top-0">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-secondary-text text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                What You get
              </div>
            </div>
            <div className="left-[114px] inline-flex items-start gap-[10px] px-[24px] py-[8px] absolute md:top-0">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-secondary-text text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                Impact
              </div>
            </div>
            <div className="left-0 inline-flex items-start gap-[10px] px-[24px] py-[8px] absolute top-0">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                Overview
              </div>
            </div>
          </div>
        </section>
       
        <section className="absolute w-[1286px] h-[156px] top-[1400px] md:top-[1175px] left-[110px]">
          <p className="absolute w-[374px] top-0 left-0 font-h2 font-[number:var(--h2-font-weight)] text-b text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            How we use your donation
          </p>
          <p className="absolute w-[338px]  top-[200px] md:top-0 left-[-100px] md:left-[472px] font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat.&nbsp;&nbsp;Nunc ut sem vitae risus tristique posuere.
          </p>
          <p className="absolute w-[374px] top-[400px] md:top-0 left-[-100px] md:left-[906px] font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
          </p>
        </section>

        <section className="absolute w-[375] md:w-[1280px] h-[384px] top-[1950px] md:top-[1442px] md:left-[110px]">
          <div className="relative h-[384px]">
            <div className="w-[375px] md:w-[1280px] h-[384px] bg-header-start bg-[100%_100%] absolute top-0 left-0">
              <img className="absolute w-[375px] md:w-[1280px] h-[384px] top-0 left-0" alt="Tint" src="/images/tint.svg" />
            </div>
            <div className="absolute w-[807px] h-[199px] top-[93px] left-[237px]">
              <div className="absolute w-[347px] h-[51px] top-[148px] left-[229px]">
                <PrimaryButton className="!absolute left-[-450px] md:!left-0 !top-[80px]" text="Join as a volunteer" />
                <SecondaryButtonEvent className="!absolute left-[-220px] md:!left-[232px] !top-[80px]" text="Donate" to="/donation" />
              </div>
              <p className="absolute w-[375px] md:w-[805px] top-[-100px] md:top-0 left-[-250px] md:left-0 text-[30px] font-h2 font-[number:var(--h2-font-weight)] text-white md:text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                You can contribute to provide a place for children with special needs!
              </p>
            </div>
          </div>
        </section>

       
        <Footer
          className="!absolute !left-0 !bg-transparent !top-[2407px]"
          overlapClassName="!w-[1500px]"
          to="/donation"
        />

        
        <img
          className="absolute w-[1280px] h-px top-[1079px] left-[110px] object-cover"
          alt="Line"
          src="/images/line.svg"
        />
        
      
      </div>
    </div>
  )
}

export default Donations
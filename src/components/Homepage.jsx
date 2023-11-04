import React from 'react'
import Navbar from '../section/Navbar'
import SecondaryButtonEvent from '../section/SecondaryButtonEvent'
import PrimaryButton from '../section/PrimaryButton'
import Footer from '../section/Footer'

const Homepage = () => {
  return (
    <div className="bg-[#fdfdfb] flex flex-row justify-center w-full">
      <div className="bg-bg overflow-hidden md:w-[1500px]  md:h-[5509px] w-[375px] h-[5860px] relative">
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

        <section className="absolute w-[375px] md:w-[1500px] h-[1100px] md:h-[901px] top-[1686px] left-0 bg-yellow-light">
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

        <section className="absolute w-[375px] md:w-[1282px] h-[762px] top-[2780px] md:top-[2583px] left-[110px]">
          <div className="w-[1280px] top-[291px] left-0 absolute h-[421px]">
            
            <div className="absolute w-[411px] h-[421px] top-0 left-[869px] bg-header-object bg-cover bg-[50%_50%]">
              <div className="relative h-[421px] rounded-[20px]">
                <div className="absolute w-[411px] h-[421px] top-0 left-0 bg-black rounded-[20px] opacity-60" />
                <div className="absolute w-[319px] h-[293px] top-[80px] left-[48px]">
                  <SecondaryButtonEvent className="!absolute !left-0 !top-[242px]" text="Learn more" />
                  <p className="absolute w-[315px] top-[100px] left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-white text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <div className="absolute w-[315px] top-0 left-0 font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    Monthly public awareness
                  </div>
                </div>
              </div>
            </div>
           
            <div className="w-[411px] top-0 left-[435px] bg-header-value bg-cover bg-[50%_50%] absolute h-[421px]">
              <div className="relative h-[421px] rounded-[20px]">
                <div className="absolute w-[411px] h-[421px] top-0 left-0 bg-black rounded-[20px] opacity-60" />
                <div className="absolute w-[319px] h-[293px] top-[80px] left-[48px]">
                  <SecondaryButtonEvent className="!absolute !left-0 !top-[242px]" text="Learn more" />
                  <p className="w-[315px] top-[58px] left-0 text-white absolute font-paragraph font-[number:var(--paragraph-font-weight)] text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <div className="absolute w-[315px] top-0 left-0 font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    Weekly excursions
                  </div>
                </div>
              </div>
            </div>
          
            <div className="w-[411px] top-0 left-0 absolute h-[421px]">
             
              <div className="relative h-[421px] rounded-[20px]">
                <img
                  className="absolute w-[330px] md:w-[410px] h-[421px] top-[-80px] md:top-0 left-[-110px] md:left-0 object-cover"
                  alt="Unsplash cveoh jjmee"
                  src="/images/unsplash-cveoh-jjmee.png"
                />
                <div className="absolute  w-[411px] h-[421px] top-[-80px] md:top-0 left-[-200px] md:left-0 bg-black rounded-[20px] opacity-60" />
                <div className="absolute w-[319px] h-[293px] top-[80px] left-[48px]">
                  <SecondaryButtonEvent className="!absolute left-[-60px] md:!left-0 top-20 md:!top-[242px]" text="Learn more" />
                  <p className="absolute w-[315px] top-[-60px] md:top-[100px] left-[-150px] md:left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-white text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <p className="absolute w-[315px] top-[-180px] md:top-0 left-[-150px] md:left-0 font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    Mission smile 1k: Outdoor charity
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[748px] h-[226px] -top-px left-px">
            <p className="absolute w-[350px] md:w-[640px] top-[52px] left-[-100px] md:left-[108px] font-h2 font-[number:var(--h2-font-weight)] text-[30px] text-primary-text md:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              We are creating a place where children with special needs can thrive
            </p>
            <div className="h-[334px] top-[-156px] left-[156px] absolute w-[21px] rotate-[-90.00deg]">
              <div className="absolute top-[205px] left-[-200px] md:left-[-110px] rotate-[90.00deg] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                PROJECTS WE HAVE DONE
              </div>
              <img
                className="absolute w-[72px] h-[2px] top-[35px] left-[-26px] rotate-[90.00deg]"
                alt="Line"
                src="/images/line-3.svg"
              />
            </div>
          </div>
        </section>


        <section className="absolute w-[375px] md:w-[1500px] h-[652px] top-[3350px] md:top-[3250px] left-0">
          <div className="relative h-[652px]">
            <div className="absolute w-[1500px] h-[567px] top-[85px] left-0 bg-[#000000]" />
            <div className="absolute w-[375px] h-[556px] top-0 left-[1015px]">
              <div className="absolute w-[375px] h-[375px] top-[181px] left-0">
                <img
                  className="absolute w-[188px] h-[352px] top-0 left-[188px]"
                  alt="Ellipse"
                  src="/images/ellipse-4.svg"
                />
                <img
                  className="absolute w-[278px] h-[240px] top-[135px] left-0"
                  alt="Ellipse"
                  src="/images/ellipse-3.svg"
                />
                <img
                  className="absolute w-[115px] h-[114px] top-[47px] left-[7px]"
                  alt="Ellipse"
                  src="/images/ellipse-2.svg"
                />
                <img
                  className="absolute w-[107px] h-[111px] top-[3px] left-[63px]"
                  alt="Ellipse"
                  src="/images/ellipse-1.svg"
                />
                <img className="absolute w-[39px] h-[91px] top-0 left-[153px]" alt="Ellipse" src="/images/ellipse.svg" />
              </div>
              <div className="absolute w-[129px] h-[40px] top-0 left-[124px]">
                <div className="w-[112px] text-white absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-[24px] tracking-[0] leading-[44px] whitespace-nowrap">
                  largerthan
                </div>
                <div className="text-white absolute w-[11px] top-0 left-[114px] [font-family:'Courgette',Helvetica] font-normal text-[25px] tracking-[0] leading-[44px] whitespace-nowrap">
                  i
                </div>
              </div>
            </div>
            <div className="absolute w-[633px] h-[284px] top-[227px] left-[110px]">
              <div className="absolute w-[630px] h-[184px] top-0 left-0">
                <p className="absolute w-[350px] md:w-[626px] top-[-180px] md:top-[-90px] left-[-100px] md:left-0 text-[40px] font-h2 font-[number:var(--h2-font-weight)] text-white md:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                  How we spend your donations and where it goes
                </p>
                <p className="absolute w-[300px] md:w-[621px] top-[10px] md:top-[132px] left-[-100px] md:left-px opacity-60 font-paragraph font-[number:var(--paragraph-font-weight)] text-white text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                  We understand that when you make a  donation, you want to know exactly where your money is going and
                  we pledge to be transparent.
                </p>
              </div>
              <div className="absolute w-[632px] h-[68px] top-[216px] left-px">
                <div className="absolute w-[174px] h-[26px] top-0 left-0">
                  <div className="absolute top-[-70px] md:top-0 left-[5px] md:left-[24px] [font-family:'Roboto',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                    40% child care home
                  </div>
                  <div className="absolute w-[16px] h-[16px] top-[4px] left-0 bg-green-secondary rounded-[4px]" />
                </div>
                <div className="absolute w-[138px] h-[26px] top-[42px] left-0">
                  <div className="absolute top-[-70px] md:top-0 md:left-[24px] [font-family:'Roboto',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                    10% excursions
                  </div>
                  <div className="bg-[#f9cf64] absolute w-[16px] h-[16px] top-[-68px] md:top-[4px] left-[-20px] md:left-0 rounded-[4px]" />
                </div>
                <div className="absolute w-[206px] h-[26px] top-0 left-[211px]">
                  <div className="absolute md:top-0 top-2 left-[-208px] md:left-[24px] [font-family:'Roboto',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                    35% cleanliness program
                  </div>
                  <div className="bg-[#ac94f1] absolute w-[16px] h-[16px] top-[12px] md:top-[4px] left-[-230px] md:left-0 rounded-[4px]" />
                </div>
                <div className="absolute w-[169px] h-[26px] top-[42px] left-[211px]">
                  <div className="absolute top-0 left-[-205px] md:left-[24px] [font-family:'Roboto',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                    5% feeding the poor
                  </div>
                  <div className="bg-[#f38ebf] absolute w-[16px] h-[16px] top-[4px] left-[-230px] md:left-0 rounded-[4px]" />
                </div>
                <div className="absolute w-[165px] h-[26px] top-0 left-[469px]">
                  <div className="absolute top-[80px] md:top-0 left-[-470px] md:left-[24px] [font-family:'Roboto',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                    10% helping people
                  </div>
                  <div className="bg-[#fff0c9] absolute w-[16px] h-[16px] top-[4px] left-0 rounded-[4px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="absolute w-[375px] md:w-[1280px] h-[384px] top-[4020px] md:top-[3950px] md:left-[110px] bg-header-page bg-[100%_100%]">
          <div className="relative w-[807px] h-[199px] top-[93px] left-[237px]">
            <div className="absolute w-[347px] h-[51px] top-[148px] left-[229px]">
              <PrimaryButton className="!absolute left-[-375px] md:!left-0 top-20 md:!top-0" text="Join as a volunteer" />
              <SecondaryButtonEvent className="!absolute left-[-330px] md:!left-[232px] !top-0" text="Donate" />
            </div>
            <p className="absolute w-[300px] md:w-[805px] top-[-90px] md:top-[-100px] text-[30px] left-[-210px] md:left-0 font-h2 font-[number:var(--h2-font-weight)] text-white md:text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              You can contribute to provide a place for children with special needs!
            </p>
          </div>
        </section>


        <section className="absolute w-[375px] md:w-[1280px] h-[295px] top-[4400px] md:top-[4342px] md:left-[110px]">
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

        <Footer className="!absolute !left-0 !bg-transparent !top-[4900px] md:!top-[4703px]" overlapClassName="!w-[1500px]" />
        

    </div> </div>
  )
}

export default Homepage

import React from 'react'
import NavButton from '../section/NavButton'
import SecondaryButton from '../section/SecondaryButton'
import PrimaryButton from '../section/PrimaryButton'

const StyleGuide = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1500px] h-[1890px] relative">
       
      <div className="absolute w-[1602px] h-[84px] top-[40px] left-0">
          <div className="absolute w-[1602px] h-[84px] top-0 left-0">
            <div className="absolute top-0 left-[110px] [font-family:'Roboto',Helvetica] font-bold text-[#232536] text-[36px] tracking-[0] leading-[44px] whitespace-nowrap">
              Styleguide
            </div>
            <img
              className="absolute w-[1500px] h-px top-[83px] left-0 object-cover"
              alt="Divider"
              src="/images/divider.svg"
            />
          </div>
          <div className="absolute w-[183px] h-[44px] top-[15px] left-[1143px]">
            <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-[#000000] text-[36px] tracking-[0] leading-[44px] whitespace-nowrap">
              largerthan
            </div>
            <div className="absolute top-0 left-[168px] [font-family:'Courgette',Helvetica] font-normal text-yellow text-[36px] tracking-[0] leading-[44px] whitespace-nowrap">
              i
            </div>
          </div>
        </div>

      <div className="absolute w-[1286px] h-[287px] top-[180px] left-[110px]">
          <div className="absolute w-[1280px] h-[211px] top-[76px] left-0 bg-yellow-light">
            <a
              className="absolute w-[251px] top-[94px] left-[963px] [font-family:'Roboto',Helvetica] font-normal text-[#232536] text-[24px] tracking-[0] leading-[36px] underline whitespace-nowrap"
              href="https://fonts.google.com/specimen/Roboto"
              rel="noopener noreferrer"
              target="_blank"
            >
              Roboto Font Family
            </a>
            <div className="absolute w-[71px] h-[53px] top-[79px] left-[875px]">
              <div className="relative w-[69px] h-[53px] photo bg-[100%_100%]">
                <div className="w-[34px] top-[12px] left-[18px] [font-family:'Poppins',Helvetica] font-semibold text-[#000000] text-[24px] leading-[32px] absolute tracking-[0] whitespace-nowrap">
                  Aa
                </div>
              </div>
            </div>
            <p className="absolute top-[84px] left-[156px] [font-family:'Roboto',Helvetica] font-medium text-dark-scaledark400 text-[36px] tracking-[0] leading-[44px] whitespace-nowrap">
              Download the Font family 👉
            </p>
            <div className="absolute w-[51px] h-[51px] top-[80px] left-[80px] bg-yellow rounded-[25.5px]">
              <img className="absolute w-[22px] h-[30px] top-[10px] left-[15px]" alt="Arrow" src="/images/arrow-5.svg" />
            </div>
          </div>
          <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-[#232536] text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
            Typography
          </div>
        </div>

      <div className="absolute w-[1001px] h-[601px] top-[547px] left-[107px]">
          <div className="absolute w-[435px] h-[601px] top-0 left-0">
            <div className="top-[583px] left-0 text-[length:var(--h6-font-size)] leading-[var(--h6-line-height)] absolute font-h6 font-[number:var(--h6-font-weight)] text-primary-text tracking-[var(--h6-letter-spacing)] whitespace-nowrap [font-style:var(--h6-font-style)]">
              Heading 6
            </div>
            <div className="top-[514px] left-0 text-[length:var(--h5-font-size)] leading-[var(--h5-line-height)] absolute font-h5 font-[number:var(--h5-font-weight)] text-primary-text tracking-[var(--h5-letter-spacing)] whitespace-nowrap [font-style:var(--h5-font-style)]">
              Heading 5
            </div>
            <div className="top-[436px] left-0 text-[length:var(--h4-font-size)] leading-[var(--h4-line-height)] absolute font-h4 font-[number:var(--h4-font-weight)] text-primary-text tracking-[var(--h4-letter-spacing)] whitespace-nowrap [font-style:var(--h4-font-style)]">
              Heading 4
            </div>
            <div className="top-[346px] left-[3px] text-[length:var(--h3-font-size)] leading-[var(--h3-line-height)] absolute font-h3 font-[number:var(--h3-font-weight)] text-primary-text tracking-[var(--h3-letter-spacing)] whitespace-nowrap [font-style:var(--h3-font-style)]">
              Heading 3
            </div>
            <div className="top-[240px] left-[3px] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] absolute font-h2 font-[number:var(--h2-font-weight)] text-primary-text tracking-[var(--h2-letter-spacing)] whitespace-nowrap [font-style:var(--h2-font-style)]">
              Heading 2
            </div>
            <div className="top-[125px] left-[3px] text-[length:var(--h1-font-size)] leading-[var(--h1-line-height)] absolute font-h1 font-[number:var(--h1-font-weight)] text-primary-text tracking-[var(--h1-letter-spacing)] whitespace-nowrap [font-style:var(--h1-font-style)]">
              Heading 1
            </div>
            <div className="absolute top-0 left-[3px] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[64px] tracking-[0] leading-[76.8px] whitespace-nowrap">
              Home heading
            </div>
          </div>
          <div className="absolute w-[92px] h-[601px] top-0 left-[601px]">
            <div className="top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[64px] leading-[76.8px] absolute tracking-[0] whitespace-nowrap">
              Aa
            </div>
            <div className="top-[125px] left-0 font-h1 font-[number:var(--h1-font-weight)] text-primary-text text-[length:var(--h1-font-size)] leading-[var(--h1-line-height)] absolute tracking-[var(--h1-letter-spacing)] whitespace-nowrap [font-style:var(--h1-font-style)]">
              Aa
            </div>
            <div className="top-[240px] left-0 font-h2 font-[number:var(--h2-font-weight)] text-primary-text text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] absolute tracking-[var(--h2-letter-spacing)] whitespace-nowrap [font-style:var(--h2-font-style)]">
              Aa
            </div>
            <div className="top-[346px] left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text text-[length:var(--h3-font-size)] leading-[var(--h3-line-height)] absolute tracking-[var(--h3-letter-spacing)] whitespace-nowrap [font-style:var(--h3-font-style)]">
              Aa
            </div>
            <div className="top-[436px] left-[5px] font-h4 font-[number:var(--h4-font-weight)] text-primary-text text-[length:var(--h4-font-size)] leading-[var(--h4-line-height)] absolute tracking-[var(--h4-letter-spacing)] whitespace-nowrap [font-style:var(--h4-font-style)]">
              Aa
            </div>
            <div className="top-[514px] left-[5px] font-h5 font-[number:var(--h5-font-weight)] text-primary-text text-[length:var(--h5-font-size)] leading-[var(--h5-line-height)] absolute tracking-[var(--h5-letter-spacing)] whitespace-nowrap [font-style:var(--h5-font-style)]">
              Aa
            </div>
            <div className="top-[583px] left-[5px] font-h6 font-[number:var(--h6-font-weight)] text-primary-text text-[length:var(--h6-font-size)] leading-[var(--h6-line-height)] absolute tracking-[var(--h6-letter-spacing)] whitespace-nowrap [font-style:var(--h6-font-style)]">
              Aa
            </div>
          </div>
          <div className="absolute w-[156px] h-[601px] top-0 left-[859px]">
            <div className="top-[436px] text-[length:var(--h4-font-size)] leading-[var(--h4-line-height)] absolute left-0 font-h4 font-[number:var(--h4-font-weight)] text-primary-text tracking-[var(--h4-letter-spacing)] whitespace-nowrap [font-style:var(--h4-font-style)]">
              20px
            </div>
            <div className="top-[514px] text-[length:var(--h5-font-size)] leading-[var(--h5-line-height)] absolute left-0 font-h5 font-[number:var(--h5-font-weight)] text-primary-text tracking-[var(--h5-letter-spacing)] whitespace-nowrap [font-style:var(--h5-font-style)]">
              14px
            </div>
            <div className="top-[583px] text-[length:var(--h6-font-size)] leading-[var(--h6-line-height)] absolute left-0 font-h6 font-[number:var(--h6-font-weight)] text-primary-text tracking-[var(--h6-letter-spacing)] whitespace-nowrap [font-style:var(--h6-font-style)]">
              12px
            </div>
            <div className="top-[346px] text-[length:var(--h3-font-size)] leading-[var(--h3-line-height)] absolute left-0 font-h3 font-[number:var(--h3-font-weight)] text-primary-text tracking-[var(--h3-letter-spacing)] whitespace-nowrap [font-style:var(--h3-font-style)]">
              28px
            </div>
            <div className="top-[240px] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] absolute left-0 font-h2 font-[number:var(--h2-font-weight)] text-primary-text tracking-[var(--h2-letter-spacing)] whitespace-nowrap [font-style:var(--h2-font-style)]">
              48px
            </div>
            <div className="top-[125px] text-[length:var(--h1-font-size)] leading-[var(--h1-line-height)] absolute left-0 font-h1 font-[number:var(--h1-font-weight)] text-primary-text tracking-[var(--h1-letter-spacing)] whitespace-nowrap [font-style:var(--h1-font-style)]">
              56px
            </div>
            <div className="top-0 text-[64px] leading-[76.8px] absolute left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text tracking-[0] whitespace-nowrap">
              64px
            </div>
          </div>
        </div>


      <div className="absolute w-[1096px] h-[88px] top-[1228px] left-[110px]">
          <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[18px] tracking-[-0.54px] leading-[19.2px] whitespace-nowrap">
            Paragraph
          </div>
          <div className="absolute top-0 left-[576px] [font-family:'Roboto',Helvetica] font-medium text-primary-text text-[18px] tracking-[-0.54px] leading-[19.2px] whitespace-nowrap">
            Paragraph (small)
          </div>
          <p className="absolute text-center sm:text-sm sm:text-left w-[512px] top-[36px] left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis
            tristique, egestas lacus at, cursus arcu
          </p>
          <p className="absolute text-center sm:text-sm sm:text-left w-[512px] top-[36px] left-[576px] font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-secondary-text text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis
            tristique, egestas lacus at, cursus arcu
          </p>
        </div>
      
      <div className="absolute w-[1189px] h-[127px] top-[1396px] left-[110px]">
            <div className="absolute w-[149px] h-[51px] top-[76px] left-[1038px] bg-border" />
            <div className="absolute w-[149px] h-[51px] top-[76px] left-[889px] bg-off-white" />
                <div className="absolute w-[295px] h-[51px] top-[76px] left-[594px]">
                    <div className="absolute w-[149px] h-[51px] top-0 left-[146px] bg-secondary-text" />
                    <div className="absolute w-[149px] h-[51px] top-0 left-0 bg-primary-text" />
                </div>
                <div className="absolute w-[149px] h-[51px] top-[76px] left-[445px] bg-black" />
                <div className="absolute w-[148px] h-[51px] top-[76px] left-[297px] bg-green-tertiary" />
                <div className="absolute w-[149px] h-[51px] top-[76px] left-[148px] bg-yellow-light" />
                <div className="absolute w-[148px] h-[51px] top-[76px] left-0 bg-yellow" />
    
                <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-[#232536] text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                    Color Palette
                </div>
            </div>



        <footer className="absolute w-[1282px] h-[207px] top-[1603px] left-[110px]">
          <div className="flex items-center flex-center w-[1280px] h-[131px] top-[76px] left-0 bg-yellow-light sm:col-span-3">
            <NavButton className="!absolute mx-auto items-start !left-[482px] !top-[44px] "  />
            <SecondaryButton className="!absolute mx-auto items-center !left-[251px] !top-[40px]"/>
            <PrimaryButton className="!absolute mx-auto !left-[40px] !top-[40px]"/>
            </div>
            <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-[#232536] text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                Buttons
            </div>
        </footer>

        
      

                
                Hello




          </div></div>
  )
}

export default StyleGuide

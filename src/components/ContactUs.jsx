import React, { useState } from 'react'
import Footer from '../section/Footer'
import PrimaryButton from '../section/PrimaryButton'
import Navbar from '../section/Navbar'

const ContactUs = () => {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
};

  return (
    <div className="bg-[#fdfdfb] flex flex-row justify-center w-full">
      <div className="bg-bg w-[375px] overflow-hidden md:w-[1500px] h-[2400px] md:h-[2003px] relative">

        <Navbar className=" !left-0 !top-0" to="/contact-us" />

        <header className="absolute w-[375px] md:w-[1500px] h-[650px] md:h-[584px] top-[110px] md:top-[117px] left-0 bg-yellow-light">
         
          <div className="absolute w-[325px] h-[392px] top-[250px] md:top-[96px] md:left-[782px]">
            <img
              className="absolute w-[100px] h-[20px] top-[372px] left-0"
              alt="Social row"
              src="/images/social-row-1.png"
            />
            <div className="absolute w-[306px] h-[92px] top-[200px] md:top-[248px] left-0">
              <p className="absolute w-[302px] top-[40px] left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Opp Opolo round about, Yenagoa, Bayelsa,
                <br />
                Nigeria
              </p>
              <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[20px] tracking-[0] leading-[32.0px] whitespace-nowrap">
                Branch Office
              </div>
            </div>
            <div className="w-[306px] h-[92px] top-[90px] md:top-[124px] absolute left-0">
              <p className="w-[302px] top-[40px] font-paragraph font-[number:var(--paragraph-font-weight)] text-secondary-text text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] absolute left-0 [font-style:var(--paragraph-font-style)]">
                8 Brewery Drive, Lagos, <br />
                Nigeria.
              </p>
              <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[20px] tracking-[0] leading-[32.0px] whitespace-nowrap">
                Headoffice
              </div>
            </div>
            <img className="absolute w-[325px] h-px top-[91px] left-0 object-cover" alt="Line" src="/img/line-1.svg" />
            <div className="absolute w-[331px] h-[76px] top-0 left-0">
              <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[24px] tracking-[0] leading-[38.4px] whitespace-nowrap">
                Let&#39;s talk!
              </div>
              <div className="absolute top-[48px] left-0 [font-family:'Roboto',Helvetica] font-normal text-primary-text text-[16px] tracking-[0] leading-[28px] whitespace-nowrap">
                +234 09012346514
              </div>
              <div className="absolute top-[48px] left-[164px] [font-family:'Roboto',Helvetica] font-normal text-primary-text text-[16px] tracking-[0] leading-[28px] whitespace-nowrap">
                hello@largerthani.com
              </div>
            </div>
          </div>
          
          <div className="absolute w-[579px] h-[254px] top-[95px] left-[111px]">
            <div className="absolute w-[484px] h-[202px] top-[52px] left-[95px]">
              <p className="absolute w-[370px] md:w-[480px] top-[-110px] md:top-[-20px] left-[-200px] md:left-0 font-h1 font-[number:var(--h1-font-weight)] text-[30px] text-b md:text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
                We&#39;d love to hear from you
              </p>
              <p className="absolute w-[370px] md:w-[480px] md:top-[150px] left-[-200px] md:left-0 opacity-70 font-paragraph font-[number:var(--paragraph-font-weight)] text-b text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Have any question in mind or want to enquire? Please feel free to contact us through the form or the
                following details.
              </p>
            </div>
            <div className="absolute w-[21px] h-[211px] top-[-95px] left-[95px] rotate-[-90.00deg]">
              <div className="absolute top-[30px] md:top-[144px] left-[-48px] rotate-[90.00deg] [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[16px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                CONTACT US
              </div>
              <img
                className="absolute w-[72px] h-[2px] top-[35px] left-[-26px] rotate-[90.00deg]"
                alt="Line"
                src="/img/line.svg"
              />
            </div>
          </div>
        </header>

        <form onSubmit={handleSubmit}  className="absolute w-[375px] md:w-[768px] h-[440px] top-[800px] md:top-[747px] left-[20px] md:left-[366px]">
          <PrimaryButton className="!absolute md:!left-[289px] top-[500px] md:!top-[389px]" text="Send message" />
          <div className="absolute w-[372px] h-[57px] top-0 left-0">
            <label htmlFor="first-name" className="absolute top-0 left-0 opacity-60 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[12px] tracking-[0] leading-[19.2px] whitespace-nowrap">
              First Name
            </label>
            <input type="text" id="first-name" name="first-name" value={formData.name} onChange={handleChange} className="absolute top-[27px] left-0 [font-family:'Roboto',Helvetica] font-normal text-primary-text text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap"/>
            <img className="absolute w-[368px] h-px top-[56px] left-0 object-cover" alt="Line" src="/img/line-3.svg" />
          </div>

          <div className="absolute w-[372px] h-[57px] top-[90px] md:top-0 md:left-[400px]">
            <label htmlFor="last-name" className="absolute top-0 left-0 opacity-60 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[12px] tracking-[0] leading-[19.2px] whitespace-nowrap">
              Last Name
            </label>
            <input type="text" id="last-name" name="last-name" value={formData.name} onChange={handleChange} className="absolute top-[27px] left-0 [font-family:'Roboto',Helvetica] font-normal text-primary-text text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap"/>
            <img className="absolute w-[368px] h-px top-[56px] left-0 object-cover" alt="Line" src="/img/line-3.svg" />
          </div>

          <div className="absolute w-[372px] h-[57px] top-[89px] left-0">
            <label htmlFor="last-name" className="absolute top-[90px] md:top-0 left-0 opacity-60 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[12px] tracking-[0] leading-[19.2px] whitespace-nowrap">
              Email Id
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="absolute top-[120px] md:top-[27px] left-0 [font-family:'Roboto',Helvetica] font-normal text-primary-text text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap"/>           
            <img className="absolute w-[368px] h-px top-[56px] left-0 object-cover" alt="Line" src="/img/line-3.svg" />
          </div>

          <div className="absolute w-[370px] h-[57px] top-[89px] left-[400px]">
            <div className="absolute top-0 left-0 opacity-60 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[12px] tracking-[0] leading-[19.2px] whitespace-nowrap">
              Subject
            </div>
            <img className="absolute w-[368px] h-px top-[56px] left-0 object-cover" alt="Line" src="/img/line-2.svg" />
          </div>


          <div className="absolute w-[772px] h-[179px] top-[178px] left-0">
            <label htmlFor="message" className="absolute top-[80px] md:top-0 left-0 opacity-60 [font-family:'Roboto',Helvetica] font-bold text-primary-text text-[12px] tracking-[0] leading-[19.2px] whitespace-nowrap">
              Message
            </label>
            <div className="absolute w-[770px] h-[158px] top-[22px] -left-px rounded-[4px]">
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="absolute w-[300px]  md:w-[770px] h-[158px] top-[100px] md:top-0 left-0 rounded-[4px] border border-solid border-[#000000]" />
            </div>
          </div>
        </form>

        <img className="absolute w-[1500px] h-[448px] top-[1283px] left-0 object-cover" alt="Map" src="/images/map.png" />


        <Footer
          className="!absolute !left-0 !bg-transparent top-[1800px] md:!top-[1731px]"
          overlapClassName="!w-[1500px]"
          to="/contact-us"
        />

      </div>
    </div>
  )
}

export default ContactUs

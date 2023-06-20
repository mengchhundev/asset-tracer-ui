import React from 'react'
import contact from "../../assets/images/ContactUs/contact.png";
import Location from "../../assets/images/ContactUs/Location.png";
import email from "../../assets/images/ContactUs/email.png";
import Phone from "../../assets/images/ContactUs/Phone.png";
import facebook from "../../assets/images/ContactUs/facebook.png";
import NavbarComponent from './NavbarComponent'
import FooterComponent from './FooterComponent'

export default function ContactComponent() {
  return (
    <div>
      <NavbarComponent />
      <div className="bg-bg-pink pt-[60px]">
        <div className="grid lg:grid-cols-12 sm:grid-cols-1 gap-1">
          <div className=" col-span-6 ">
            <div className="relative w-[90%] mx-auto hidden md:block mt-14">
              <img src={contact} alt="Contact Picture" className="w-full" />
            </div>
          </div>

          <div className=" col-span-6">
            <div className="lg:ml-0 md:ml-[100px] sm:ml-[60px] ml-[25px]">
              <div className=" ">
                <div className=" w-[80%] text-text-color text-left">
                  <p className="font-sp-pro-text-regular 3xl:text-base xl:text-sm text-sm mt-14">
                    CONTECT US
                  </p>
                  <div className="font-sp-pro-text-bold 3xl:text-5xl xl:text-4xl md:text-3xl text-3xl">
                    Get in touch <span className="text-pending">today</span>
                  </div>
                  <p className="3xl:text-base xl:text-sm text-sm my-6 font-sp-pro-text-regular">
                    We love hearing from our customers. If you have any questions
                    about Asset Tracer, please send us a message.
                  </p>
                </div>
                <div className="sm:w-[90%] w-[80%]">
                  <div className="text-left mb-3">
                    <label className="block mb-2 ml-1 text-sm font-sp-pro-text-medium text-text-color">Full Name</label>
                    <input
                      type="email"
                      className="text-sm border-border-strock border-2 rounded-lg block w-[90%] py-2.5 px-4 focus:border-2 focus:border-hover-yellow  focus:outline-0 focus:bg-white focus:border-purple-500"
                      placeholder=" "
                    />
                  </div>
                  <div className="text-left mb-3">
                    <label className="block mb-2 ml-1 text-sm font-sp-pro-text-medium text-text-color">Email</label>
                    <input
                      type="email"
                      className="text-sm border-border-strock border-2 rounded-lg block w-[90%] py-2.5 px-4 focus:border-2 focus:border-hover-yellow  focus:outline-0 focus:bg-white focus:border-purple-500"
                      placeholder=" "
                    />
                  </div>

                  <div className=" text-left mb-6">
                    <div className="flex justify-between">
                      <label className="block mb-2 ml-1 text-sm font-sp-pro-text-medium text-text-color">Message</label>
                      <label className="block mb-2 ml-1 text-sm ">
                        0/200 charecters
                      </label>
                    </div>
                    <input
                      type="message"
                      className="text-sm border-border-strock border-2 rounded-lg block w-full py-8 px-4 focus:border-2 focus:border-hover-yellow  focus:outline-0 focus:bg-white focus:border-purple-500"
                      placeholder=" "
                    />
                  </div>
                </div>
                <button
                  type="message"
                  className="lg:mr-[350px] md:mr-[450px] sm:mr-[350px] mr-[200px] py-2.5 px-6 rounded-md text-white bg-pending hover:bg-hover-yellow font-medium 2xl:text-base xl:text-sm text-sm text-center shadow-lg shadow-shadow "
                >
                  <div className="2xl:w-[150px] xl:w-[150px] lg:w-[100px] md:w-[100px] sm:w-[100px] w-[100px]">
                    Send Massage
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className=" text-text-color 3xl:w-[85%] xl:w-[85%] w-[85%] mx-auto ">
          <div className="flex flex-wrap justify-evenly">
            <div className=" text-text-color 3xl:w-[800px] xl:w-[550px] w-[550px]">
              <div href="#" className="block pt-16">
                <div>
                  <div className=" flex justify-between  ">
                    <div className=" md:w-[50%] sm:w-[60%] h-[130px] lg:mx-0 md:mx-0 sm:mx-auto mx-auto">
                      <img src={Location} alt="Contact Picture" className="w-[50px] mx-auto mb-5" />
                      <div className="3xl:ml-[80px] 2xl:ml-[20px] xl:ml-6 md:ml-6 ml-0 lg:text-left md:text-left sm:text-center text-center text-md font-sp-pro-text-regular text-text-color">
                        Address:#12, st323, Sangkat
                        <div>Boeung Kak II, Khan Toul Kork,</div>
                        <div>Phnom Penh, Cambodia</div>
                      </div>
                    </div>
                    <div className="w-[60%] hidden md:block h-[130px] mb-8 lg:mb-0 md:mb-0 sm:mb-8">
                      <img src={email} alt="Contact Picture" className="w-[50px] mx-auto mb-5" />
                      <div className="text-md font-sp-pro-text-regular text-text-color 3xl:ml-[80px] 2xl:ml-[20px] xl:ml-7 md:ml-8 ml-0">
                        Email: <span className="text-blue-light">assettracerteam@gamil.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3 text-text-color 3xl:w-[800px] xl:w-[500px] w-[500px]">
              <div href="#" className="block pt-16">
                <div>
                  <div className=" flex justify-between  ">
                    <div className="hidden md:block w-[40%] h-[130px]">
                      <img src={Phone} alt="Contact Picture" className="w-[50px] mx-auto mb-5" />
                      <div className="3xl:ml-[70px] 2xl:ml-[10px]  xl:ml-3 ml-0">
                        <div className="text-md font-sp-pro-text-regular text-text-color">
                          Tel::<span className="text-blue-light">12 9989 19 ( khmer )</span>
                        </div>
                        <div className="ml-[22px]">
                          : <span className="text-md font-sp-pro-text-regular text-blue-light">085 402 605 (Korean)</span>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block w-[40%] h-[130px] mb-10 ">
                      <img src={facebook} alt="Contact Picture" className="w-[50px] mx-auto mb-5 ml-12" />
                      <div className="text-md font-sp-pro-text-regular text-text-color 3xl:ml-[80px] 2xl:ml-[20px] xl:ml-0 ml-0">
                        Facebook : <span className="text-gray">Asset Tracer</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  )
}

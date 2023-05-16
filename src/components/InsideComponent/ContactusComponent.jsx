import React from "react";
import contact from "../../assets/images/ContactUs/contact.png";
import Location from "../../assets/images/ContactUs/Location.png";
import email from "../../assets/images/ContactUs/email.png";
import Phone from "../../assets/images/ContactUs/Phone.png";
import facebook from "../../assets/images/ContactUs/facebook.png";
import FooterComponent from "../LandingComponent/FooterComponent";
import NavbarComponent from "../LandingComponent/NavbarComponent";

export default function ContactusComponent() {
  return (
    <>
    <NavbarComponent/>
      <div class="bg-bgpink pt-[60px]">
        <div class="grid lg:grid-cols-12 sm:grid-cols-1 gap-1">
          <div class=" col-span-6 ">
            <div className="relative w-[90%] mx-auto hidden md:block mt-14">
              <img src={contact} alt="Contact Picture" className="w-full" />
            </div>
          </div>

          <div class=" col-span-6">
            <div class="lg:ml-0 md:ml-[100px] sm:ml-[60px] ml-[25px]">
            <div className="mr-20 ">
              <div class=" w-[80%] text-text-color text-left">
                <p className="font-sp-pro-text-regular text-sm  mt-14">
                  CONTECT US
                </p>
                <div class="font-sp-pro-text-bold text-3xl">
                  Get in touch <span class="text-pending">today</span>
                </div>
                <p className="text-sm my-6 font-sp-pro-text-regular">
                  We love hearing from our customers. If you have any questions
                  about Asset Tracer, please send us a message.
                </p>
              </div>
              <div class="sm:w-[90%] w-[80%]">
              <div className="text-left mb-3">
                <label className="block mb-2 ml-1 text-sm font-sp-pro-text-medium text-text-color">Full Name</label>
                <input
                  type="email"
                  className="text-sm border-border-strock border-2 rounded-lg block w-[90%] py-2.5 px-4 focus:border-2 focus:border-hoveryellow  focus:outline-0 focus:bg-white focus:border-purple-500"
                  placeholder=" "
                />
              </div>
              <div className="text-left mb-3">
                <label className="block mb-2 ml-1 text-sm font-sp-pro-text-medium text-text-color">Email</label>
                <input
                  type="email"
                  className="text-sm border-border-strock border-2 rounded-lg block w-[90%] py-2.5 px-4 focus:border-2 focus:border-hoveryellow  focus:outline-0 focus:bg-white focus:border-purple-500"
                  placeholder=" "
                />
              </div>

              <div className=" text-left mb-6">
                <div class="flex justify-between">
                  <label className="block mb-2 ml-1 text-sm font-sp-pro-text-medium text-text-color">Message</label>
                  <label className="block mb-2 ml-1 text-sm ">
                    0/200 charecters
                  </label>
                </div>
                <input
                  type="message"
                  className="text-sm border-border-strock border-2 rounded-lg block w-full py-8 px-4 focus:border-2 focus:border-hoveryellow  focus:outline-0 focus:bg-white focus:border-purple-500"
                  placeholder=" "
                />
              </div>
              </div>
              <button
                type="message"
                class="lg:mr-[400px] md:mr-[450px] sm:mr-[350px] mr-[250px] py-2.5 px-6 rounded-md text-textwhite bg-pending hover:bg-hoveryellow font-medium text-sm text-center shadow-lg shadow-shadow "
              >
                <div class="w-[90px]">
                Send Massage
                </div>
              </button>
            </div>
            </div>
          </div>
        </div>


        <div class=" text-text-color w-[85%] mx-auto ">
        <div class="flex flex-wrap justify-evenly">
            <div class=" text-text-color w-[550px] ">
              <div href="#" class="block pt-16">
                <div>
                  <div class=" flex justify-between  ">
                    <div class="md:w-[50%] sm:w-[60%] h-[130px] lg:mx-0 md:mx-0 sm:mx-auto mx-auto">
                    <img src={Location} alt="Contact Picture" className="w-[50px] mx-auto mb-5" />
                      <div class="lg:text-left md:text-left sm:text-center text-center text-md font-sp-pro-text-regular text-text-color">
                       Address:#12, st323, Sangkat
                       <div>Boeung Kak II, Khan Toul Kork,</div>
                       <div>Phnom Penh, Cambodia</div>
                      </div>
                    </div>
                    <div class="w-[60%] hidden md:block h-[130px] mb-8 lg:mb-0 md:mb-0 sm:mb-8">
                    <img src={email} alt="Contact Picture" className="w-[50px] mx-auto mb-5" />
                    <div class="text-md font-sp-pro-text-regular text-text-color">
                       Email: <span class="text-blue-light">assettracerteam@gamil.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-3 text-text-color w-[500px] ">
              <div href="#" class="block pt-16">
                <div>
                  <div class=" flex justify-between  ">
                    <div class="hidden md:block w-[40%] h-[130px]">
                    <img src={Phone} alt="Contact Picture" className="w-[50px] mx-auto mb-5" />
                      <div class="text-md font-sp-pro-text-regular text-text-color">
                       Tel::<span class="text-blue-light">12 9989 19 ( khmer )</span>
                      </div>
                      <div class="ml-[22px]">
                       : <span class="text-md font-sp-pro-text-regular text-blue-light">085 402 605 (Korean)</span> 
                      </div>
                    </div>
                    <div class="hidden md:block w-[40%] h-[130px] mb-10">
                    <img src={facebook} alt="Contact Picture" className="w-[50px] mx-auto mb-5" />
                      <div class="text-md font-sp-pro-text-regular text-text-color">
                       Facebook : <span class="text-gray">Asset Tracer</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent/>
    </>
  );
}

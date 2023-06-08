import React from 'react'
import { Link } from 'react-router-dom';
import Facebook from "../../assets/images/Iconfooter/Facebook.png";
import Instagram from "../../assets/images/Iconfooter/Instagram.png";
import Twitter from "../../assets/images/Iconfooter/Twitter.png";
import Phone from "../../assets/images/Iconfooter/Phone.png";

export default function FooterComponent() {
  return (
    <>
     <footer className="bg-white rounded-lg shadow ">
        <div className="w-full max-w-screen-3xl mx-auto p-4 md:py-14">

          <div className="flex flex-wrap-reverse items-center justify-between">
            <ul className="flex flex-none -ml-[30px] lg:ml-10 md:ml-[160px] sm:ml-[100px] mb-6 text-xl font-medium text-textmediem sm:mb-0 px-[33px]">
              <span className="mr-6 md:mr-8 font-sp-pro-text-heavy ">Follow Us</span>
              <li>
                <div href="#" className="mr-4 md:mr-6 ">
                  <img src={Facebook} alt="" className="sm:w-[40px] w-[38px]" />
                </div>
              </li>
              <li>
                <div href="#" className="mr-4 md:mr-6">
                  <img src={Twitter} alt="" className="sm:w-[40px] w-[38px]" />
                </div>
              </li>
              <li>
                <div href="#" className="mr-4 md:mr-6 ">
                  <img src={Instagram} alt="" className="sm:w-[40px] w-[38px]" />
                </div>
              </li>
              <li>
                <div href="#" className="hover:underline">
                  <img src={Phone} alt="" className="sm:w-[40px] w-[38px]" />
                </div>
              </li>
            </ul>

            <ul className="flex flex-wrap ml-[30px] items-center mb-8 lg:mb-0 md:mb-8 sm:mb-8 text-sm font-medium ">
              <li>
                <div
                  href="#"
                  className="mr-4 mb-3 lg:mb-0 md:mb-0 sm:mb-3 lg:ml-0 md:ml-[120px] text-xl font-medium text-text-color "
                >
                  Get Newsletter
                </div>
              </li>
              <li>
                <div href="#" className="mr-4 md:mr-6">
                  <form className="flex items-center">
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="border-border-strock border-2 block w-full focus:border-2 focus:border-hover-yellow  focus:outline-0 focus:bg-white focus:border-purple-500 text-sm rounded-l-md  py-2 px-5"
                        placeholder="Your email Address"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      ></button>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center py-2.5 px-6 text-white bg-pending hover:bg-hover-yellow font-medium text-sm text-center mr-10 shadow-lg shadow-shadow rounded-r-md"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-light sm:mx-auto  lg:my-8" />

          <div className="w-full flex flex-col p-4 ">
            <ul className="font-normal text-text-color flex mx-auto ">
              <li>
                <div
                  href="#"
                  className="block py-2 px-5 border-r-2 border-gray-light "
                >
                  Feature
                </div>
              </li>
              <li>
                <div
                  href="#"
                  className="block py-2 px-5 border-r-2 border-gray-light"
                >
                  Benefits
                </div>
              </li>
              <li>
                <div
                  href="#"
                  className="hidden md:block py-2 px-5 border-r-2 border-gray-light"
                >
                  About us
                </div>
              </li>
              <li>
                <div
                  href="#"
                  className="hidden md:block py-2 px-5 border-r-2 border-gray-light"
                >
                  <Link to={"/contact"}>Contact us</Link>
                </div>
              </li>
              <li>
                <div href="#" className="block py-2 px-5 ">
                  Support
                </div>
              </li>
            </ul>
          </div>
          <span className="block text-sm text-text-color sm:text-center text-center ">
            Copyright © 2023 Asset Tracer |All
            <div href=" " className="hover:underline">
              . All Rights Reserved.
            </div>
          </span>
        </div>
      </footer>
    </>
  )
}

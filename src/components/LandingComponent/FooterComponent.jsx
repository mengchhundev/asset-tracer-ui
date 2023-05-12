import React from 'react'
import Facebook from "../../assets/images/Iconfooter/Facebook.png";
import Instagram from "../../assets/images/Iconfooter/Instagram.png";
import Twitter from "../../assets/images/Iconfooter/Twitter.png";
import Phone from "../../assets/images/Iconfooter/Phone.png";

export default function FooterComponent() {
  return (
    <>
     <footer class="bg-white rounded-lg shadow ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-14">
          <div class="sm:flex sm:items-center sm:justify-between">
            <ul class="flex flex-wrap items-center mb-6 text-xl font-medium text-textmediem sm:mb-0 px-10">
              <span class="mr-6 md:mr-8 ">Follow Us</span>
              <li>
                <div href="#" class="mr-4 md:mr-6 ">
                  <img src={Facebook} alt="" class="w-[40px]" />
                </div>
              </li>
              <li>
                <div href="#" class="mr-4 md:mr-6">
                  <img src={Twitter} alt="" class="w-[40px]" />
                </div>
              </li>
              <li>
                <div href="#" class="mr-4 md:mr-6 ">
                  <img src={Instagram} alt="" class="w-[40px]" />
                </div>
              </li>
              <li>
                <div href="#" class="hover:underline">
                  <img src={Phone} alt="" class="w-[40px]" />
                </div>
              </li>
            </ul>

            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
              <li>
                <div
                  href="#"
                  class="mr-4 md:mr-6 text-xl font-medium text-text-color "
                >
                  Get Newsletter
                </div>
              </li>
              <li>
                <div href="#" class="mr-4 md:mr-6">
                  <form class="flex items-center">
                    <div class="relative w-full">
                      <input
                        type="text"
                        class="bg-gray-50 border border-gray-light text-text-color text-sm rounded-sm  py-2.5 px-3"
                        placeholder="Your email Address"
                      />
                      <button
                        type="button"
                        class="absolute inset-y-0 right-0 flex items-center pr-3"
                      ></button>
                    </div>
                    <button
                      type="submit"
                      class="inline-flex items-center py-2.5 px-6 text-textwhite bg-pending hover:bg-hoveryellow font-medium text-sm text-center mr-10 shadow-lg shadow-shadow "
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-light sm:mx-auto  lg:my-8" />

          <div class="w-full flex flex-col p-4">
            <ul class="font-normal text-text-color flex flex-col md:flex-row mx-auto">
              <li>
                <div
                  href="#"
                  class="block py-2 px-5 border-r-2 border-gray-light "
                >
                  Feature
                </div>
              </li>
              <li>
                <div
                  href="#"
                  class="block py-2 px-5 border-r-2 border-gray-light"
                >
                  Benefits
                </div>
              </li>
              <li>
                <div
                  href="#"
                  class="block py-2 px-5 border-r-2 border-gray-light"
                >
                  About us
                </div>
              </li>
              <li>
                <div
                  href="#"
                  class="block py-2 px-5 border-r-2 border-gray-light"
                >
                  Contact us
                </div>
              </li>
              <li>
                <div href="#" class="block py-2 px-5 ">
                  Support
                </div>
              </li>
            </ul>
          </div>
          <span class="block text-sm text-text-color sm:text-center ">
            Copyright © 2023 Asset Tracer |All
            <div href=" " class="hover:underline">
              . All Rights Reserved.
            </div>
          </span>
        </div>
      </footer>
    </>
  )
}

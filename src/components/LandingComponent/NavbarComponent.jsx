import React from 'react'
import Logo from "../../assets/images/PictureLanding/Logo.jpg";

export default function NavbarComponent() {
  return (
    <>
    <nav class="bg-white fixed w-full z-50 top-0 left-0 border-b border-white ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div class=" ">
            <img src={Logo} alt="" class="h-12 w-12 mr-10 rounded-full" />
          </div>
  <div class="flex md:order-2">
      
  <button
            type="button"
            class="text-textwhite rounded-md bg-secondaryyellow font-medium text-sm px-10 py-3 text-center mr-14 hover:bg-hoveryellow shadow-lg shadow-shadow"
          >
            Sign Up
          </button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div class="items-center justify-between hidden w-full lg:block md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-light rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
    <li>
        <div href="#" class="block py-2 px-3 text-textblack mx-auto">
                Home
              </div>
        </li>
        <li>
        <div href="#" class="block py-2 px-3 text-textblack ">
                Feature
              </div>
        </li>
        <li>
        <div href="#" class="block py-2 px-3 text-textblack ">
                Benefits
              </div>
        </li>
        <li>
        <div href="#" class="block py-2 px-3 text-textblack ">
                Our team
              </div>
        </li>
        <li>
        <div href="#" class="block py-2 px-3 text-textblack ">
                About us
              </div>
        </li>
        <li>
        <div href="#" class="block py-2 px-3 text-textblack">
                Contact us
              </div>
        </li>
    </ul>
  </div>
  </div>
</nav>
    </>
  )
}

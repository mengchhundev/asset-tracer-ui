import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/PictureLanding/Logo.jpg";

export default function NavbarComponent() {

  let token = localStorage.getItem("token")
  
  return (
    <>
      <nav className="bg-white fixed w-full z-50 top-0 left-0 border-b border-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <ul>
            <li>
            <div className="items-center inline-flex">
            <img src={Logo} alt="" className="h-12 w-12 mr-10 rounded-full" />
            <div className="block text-lg text-text-color font-sp-pro-text-medium -ml-[20px]">Asset Tracer</div>
          </div>
            </li>
          </ul>
          <div
            className="items-center justify-between hidden w-full lg:block md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-light rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <div href="#" className="block py-2 px-3 text-textblack mx-auto">
                <Link to={"/"}>Home</Link>
                </div>
              </li>
              <li>
                <div href="#" className="block py-2 px-3 text-textblack ">
                  Feature
                </div>
              </li>
              <li>
                <div href="#" className="block py-2 px-3 text-textblack ">
                  Benefits
                </div>
              </li>
              <li>
                <div href="#" className="block py-2 px-3 text-textblack ">
                  Our team
                </div>
              </li>
              <li>
                <div href="#" className="block py-2 px-3 text-textblack ">
                  <Link to={"/about"}>About us</Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex md:order-3 relative">
            <NavLink
              to={`${token ? "organization" : "/signin"}`}
              type="button"
              className="text-white  hidden lg:block rounded-md bg-secondary-yellow font-medium text-sm px-10 py-3 text-center mr-14 hover:bg-hover-yellow shadow-lg shadow-shadow"
            >
              Sign In
            </NavLink>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="">
                  {" "}
                  <svg
                    className="w-10 h-8 text-gray"
                    aria-hidden="false"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content p-2 shadow bg-base-100 rounded-md w-52"
                >
                 <ul className="flex flex-col text-lg p-4 md:p-0 mt-4 font-medium border rounded-lg md:border-0  ">
              <li>
                <div href="#" className="block py-2 px-3 text-text-color rounded-md hover:border-hover-yellow hover:bg-hover-yellow hover:text-white">
                  Home
                </div>
              </li>
              <li>
                <div href="#" className="block py-2 px-3 text-text-color rounded-md hover:border-hover-yellow hover:bg-hover-yellow hover:text-white ">
                  Feature
                </div>
              </li>
              <li>
                <div href="#" className="block py-2 px-3 text-text-color rounded-md hover:border-hover-yellow hover:bg-hover-yellow hover:text-white">
                  Benefits
                </div>
              </li>
              <li>
                <div href="#" className="block py-2 px-3 text-text-color rounded-md hover:border-hover-yellow hover:bg-hover-yellow hover:text-white">
                  Our team
                </div>
              </li>
              <li>
                <div href="#" className="block py-2 px-3 text-text-color rounded-md hover:border-hover-yellow hover:bg-hover-yellow hover:text-white">
                  <Link to={"/about"} className="hover:text-white">About us</Link>
                </div>
              </li>
              <li>
              <div href="#" className="block py-2 px-3 mx-auto ">
              <button
              type="button"
              className="text-white rounded-md bg-secondary-yellow font-medium text-sm px-10 py-1 text-center hover:bg-hover-yellow shadow-lg shadow-shadow"
            >
              Sign Up
            </button>
                </div>
              </li>
            </ul>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

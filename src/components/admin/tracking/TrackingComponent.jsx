import React from "react";
import { BiCheck, BiHome } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { HiOutlineQrcode } from "react-icons/hi";
import { RiBarcodeFill } from "react-icons/ri";
import { TbCalendarStats } from "react-icons/tb";
import { BsHouseCheck } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

// import logo from;
import logo from "../../../assets/images/A_Tracer_logo1.png";
import RoomFillterComponent from "./RoomFillterComponent";
import SuperFillterComponent from "./SuperFillterComponent";
import SortByComponent from "./SortByComponent";
import OwnerFillterComponent from "./OwnerFillterComponent";
import NormalFillterComponent from "./NormalFillterComponent";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  SubMenu,
} from "@szhsin/react-menu";

export default function TrackingComponent() {
  const myBorderStyle = {
    display: "inline-block",
    marginTop: "10px",
    height: "85px",
    borderRight: "2px solid #ccc",
  };

  return (
    <div>
      {/* Tracking data table */}
      <main className="h-full overflow-y-auto">
        <div
          className="p-10 bg-white rounded-xl overflow-hidden h-[690px]"
          style={{
            boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
            height: "calc(100vh - 6rem)",
          }}
        >
          <div className="flex justify-between mb-8 mt-3">
            <div>
              <h2 className="text-2xl  text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
                All Tracking
              </h2>
            </div>
          </div>

          <div className="mt-8">
            <form action="" method="">
              <div className="grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-1  gap-5">
                <div className="col-span-2">
                  <RoomFillterComponent />
                </div>

                <div className="col-span-2">
                  <SuperFillterComponent />
                </div>

                <div className="col-span-2">
                  <NormalFillterComponent />
                </div>

                <div className="col-span-2">
                  <OwnerFillterComponent />
                </div>

                <div className="col-span-2">
                  <SortByComponent />
                </div>
              </div>

              <div className="mt-7">
                <button type="reset" className=" text-sm block text-blue-light">
                  Clear All Filters
                </button>
              </div>
            </form>
          </div>

          <div className="overflow-x-scroll z-0 mt-3">
            <table className="table w-full">
              <thead>
                <tr className="text-md tracking-wide text-left text-text-color">
                  <th>Label code</th>
                  <th>Assets Name</th>
                  <th>Categories</th>
                  <th>Satatus</th>
                  <th>Owner</th>
                  <th>Room</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div className="flex items-center">
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>Electronic</div>
                    </div>
                  </td>
                  <td>Furniture</td>
                  <td className="">
                    <div className="flex justify-between bg-light-green w-[85px] text-green rounded-lg p-1">
                      <span className="text-green flex">
                        <BiCheck className="w-6 h-6 flex pr-1" />
                        In use
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>Mnor</div>
                    </div>
                  </td>
                  <td>Accounting</td>
                  <td>
                    <div className="flex items-center space-x-4 w-20">
                      {/* The button to open modal */}
                      <label
                        htmlFor="my-modal-3"
                        className=" flex items-center border border-primary text-bg-secondary bg-primary px-3 justify-between py-1 font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                      >
                        View Details
                      </label>
                    </div>
                  </td>
                  {/* <td>
                    <Menu menuButton={<MenuButton>Menu</MenuButton>} transition>
                      <MenuItem>Cut</MenuItem>
                      <MenuItem>Copy</MenuItem>
                      <MenuItem>Paste</MenuItem>
                    </Menu>
                  </td> */}
                </tr>

                <tr>
                  <td>1</td>
                  <td>
                    <div className="flex items-center">
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>Electronic</div>
                    </div>
                  </td>
                  <td>Furniture</td>
                  <td className="">
                    <div className="flex justify-between bg-reject-light w-[85px] text-reject rounded-lg p-1">
                      <span className="text-reject flex items-center">
                        <IoMdClose className="w-5 h-5 flex pr-1" />
                        In issue
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>Mnor</div>
                    </div>
                  </td>
                  <td>Accounting</td>
                  <td>
                    <div className="flex items-center space-x-4 w-20">
                      <button
                        className="flex items-center border border-primary text-bg-secondary bg-primary px-3 justify-between py-1 font-medium leading-5 rounded-md dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                        aria-label="Edit"
                      >
                        View Details
                      </button>
                    </div>
                  </td>
                  {/* <td>
                    <Menu align="end" menuButton={<MenuButton>Menu</MenuButton>} transition>
                      <MenuItem>Cut</MenuItem>
                      <MenuItem>Copy</MenuItem>
                      <MenuItem>Paste</MenuItem>
                    </Menu>
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid px-4 py-5 text-sm tracking-wide text-gray-500 uppercase dark:border-y-bg-primary bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
            <span className="flex items-center col-span-3">
              Showing 21-30 of 100
            </span>
            <span className="col-span-2"></span>
            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Table navigation">
                <ul className="inline-flex items-center">
                  <li>
                    <button
                      className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                      aria-label="Previous"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-primary border text-white border-slate-200 mx-2">
                      1
                    </button>
                  </li>
                  <li>
                    <button className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      2
                    </button>
                  </li>
                  <li>
                    <button className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      4
                    </button>
                  </li>
                  <li>
                    <span className="p-2.5">...</span>
                  </li>
                  <li>
                    <button className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      8
                    </button>
                  </li>
                  <li>
                    <button className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      9
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                      aria-label="Next"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </span>
          </div>
        </div>
      </main>

      {/* Modol */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="bg-bg-primary p-6 modal-box w-11/12 max-w-5xl">
          {/* header */}
          <div className="flex justify-between mb-5">
            <div className="flex">
              <span>
                <BsGraphUp className="w-8 h-8 bg-primary text-white" />
              </span>
              <span className="pl-3  text-text-color text-xl font-sp-pro-text-semibold">
                Tracking Details
              </span>
            </div>
            <div className="flex">
              <label
                htmlFor="my-modal-3"
                className="btn border-red-500 bg-white text-red-500 hover:bg-white hover:border-red-400 btn-sm btn-circle absolute right-4 top-4"
              >
                ✕
              </label>
            </div>
          </div>

          {/* frist contect */}
          <div className="lg:flex lg:space-x-6 md:space-x-0 sm:flex-row">
            <div className="">
              <div className=" ">
                {/* slide 1 */}
                <div className="col-span-6 rounded-lg border shadow-sm border-slate-200">
                  <div className="carousel w-full flex top-1/2">
                    <div
                      id="slide1"
                      className="carousel-item relative w-full flex justify-center"
                    >
                      <img src={logo} className="md:h-[300px] sm:h-[200px]" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                          href="#slide4"
                          className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center"
                        >
                          ❮
                        </a>
                        <a
                          href="#slide2"
                          className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center"
                        >
                          ❯
                        </a>
                      </div>
                    </div>

                    {/* slide 2 */}
                    <div
                      id="slide2"
                      className="carousel-item flex justify-center relative w-full h-[300px]"
                    >
                      <img src={logo} alt="" className="" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                          href="#slide1"
                          className="w-8 h-8 bg-yellow rounded-full p-1 text-center"
                        >
                          ❮
                        </a>
                        <a
                          href="#slide3"
                          className="w-8 h-8 bg-yellow rounded-full p-1 text-center"
                        >
                          ❯
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="mt-5">
                  <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                    Asset Information
                  </h1>
                  <div className="grid lg:grid-cols-2 rounded-lg border shadow-sm border-slate-200">
                    <div className="p-4 lg:border-r-2 md:border-r-none border-gray-light h-[180px] mt-[10px]">
                      <div className="mt-[-10px]">
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Category Type
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <span className="bg-blue-400 rounded-full p-2 flex justify-center">
                              <TbCalendarStats className="w-6 h-6 text-white" />
                            </span>
                            <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">
                              Electronic
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 lg:mt-0 md:mt-[-90px]">
                      <div>
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Organization
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <span className="bg-lightorange rounded-full w-[40px] p-2 flex justify-center">
                              <BiHome className="w-6 h-6 text-yellow" />
                            </span>
                            <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">
                              KSHRD =Center
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-3">
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Room Name
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <span className="bg-lightorange rounded-full w-[40px] p-2 flex justify-center">
                              <BsHouseCheck className="w-6 h-6 text-yellow" />
                            </span>
                            <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">
                              Siemreap
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:mt-0 md:mt-4">
              <div className="col-span-6">
                {/* Identifiers */}
                <div className="mb-3">
                  <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                    Identifiers
                  </h1>
                  <div className="xl:flex md:flex-row rounded-lg border shadow-sm border-slate-200 ">
                    <div className="col-span-6 p-4 lg:border-r-2 md:border-r-none border-gray-light h-[80px] mt-[10px]">
                      <div className="mt-[-10px] ">
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color"
                        >
                          Label code
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <span className="pr-3">
                              <HiOutlineQrcode className="w-8 h-8  text-primary" />
                            </span>
                            <span className="text-text-color text-xs font-sp-pro-text-regular">
                              Y8R6E6N9Z3W
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-6 p-4">
                      <div>
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color"
                        >
                          Serial code
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <p className="pr-3">
                              <RiBarcodeFill className="w-8 h-8 text-primary" />{" "}
                            </p>
                            <p className="text-text-color text-xs font-sp-pro-text-regular flex flex-row">
                              A8H9G6F5C5S4N9S2
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Usage */}
                <div className="mt-5">
                  <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                    Usage
                  </h1>
                  <div className="grid lg:grid-cols-2 rounded-lg border shadow-sm border-slate-200">
                    <div className="p-4 lg:border-r-2 md:border-r-none border-gray-light h-[92px] mt-[10px]">
                      <div className="mt-[-10px]">
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Status
                        </label>
                        <div className="mt-3">
                          <div className=" bg-lightorange w-[85px] border border-yellow text-yellow rounded-lg p-1">
                            <span className="text-yellow flex">
                              <BiCheck className="w-6 h-6 flex pr-1" />
                              In use
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div>
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Owner
                        </label>
                        <div className="flex items-center mt-2">
                          <img
                            src={logo}
                            alt="background image"
                            className="h-12"
                          />
                          <div className="pl-2">
                            <span className="text-text-color font-sp-pro-text-regular text-sm">
                              Rotanakosal
                              <br />
                            </span>
                            <span className="text-xs text-text-color font-sp-pro-text-regular">
                              Admin
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Information */}
              <div className="col-span-6">
                <div className="mt-5">
                  <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                    Admin Information
                  </h1>
                  <div className="grid lg:grid-cols-2 rounded-lg border shadow-sm border-slate-200">
                    <div className="p-4 lg:border-r-2 md:border-r-none border-gray-light h-[85px] mt-[10px]">
                      <div className="mt-[-10px]">
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Create by
                        </label>
                        <div className="flex items-center mt-3">
                          <img
                            src={logo}
                            alt="background image"
                            className="h-12"
                          />
                          <div className="pl-2">
                            <span className="text-text-color font-sp-pro-text-regular text-sm">
                              Rotanakosal
                              <br />
                            </span>
                            <span className="text-xs text-text-color font-sp-pro-text-regular">
                              Admin
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div>
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Create date
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <span className="bg-lightorange rounded-full w-[40px] p-2 flex justify-center">
                              <TbCalendarStats className="w-6 h-6 text-yellow" />
                            </span>
                            <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">
                              Thu-08-12-2013 : 12:00
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineCheck } from "react-icons/hi";
import facebook from "../../../assets/images/user/fb.png";
import linkin from "../../../assets/images/user/in.png";
import instagram from "../../../assets/images/user/ig.png";
import twinter from "../../../assets/images/user/tw.png";
import RoomFillterComponent from "../tracking/RoomFillterComponent";
import SuperFillterComponent from "../tracking/SuperFillterComponent";
import NormalFillterComponent from "../tracking/NormalFillterComponent";
import OwnerFillterComponent from "../tracking/OwnerFillterComponent";
import SortByComponent from "../tracking/SortByComponent";
import { BsPlus } from "react-icons/bs";

export default function UserRequestComponent() {
  const [user, setUser] = useState([
    {
      id: 1,
      profile: "S",
      name: "Senglorn",
      email: "hrdcenter@gamil.com",
    },
    {
      id: 2,
      profile: "H",
      name: "Hong Meng",
      email: "hrdcenter@gamil.com",
    },
    {
      id: 3,
      profile: "M",
      name: "Keo Mony",
      email: "hrdcenter@gamil.com",
    },
    {
      id: 4,
      profile: "C",
      name: "Chheang Mengchhun",
      email: "hrdcenter@gamil.com",
    },
  ]);

  return (
    <main className="overflow-y-auto pb-4 ">
    <div
      className="mx-5 mt-5 p-5 gap-6 bg-white rounded-3xl overflow-hidden h-[690px]"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px" }}
    >
      <div className="flex lg:flex-row md:flex-col sm:flex-col justify-between mb-8 gap-4 p-5 text">
        <div>
          <h2 className="text-2xl  text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
            All <span className="text-primary">User</span> Request
          </h2>
          <p className="text-green font-sp-pro-text-regular text-sm mt-2">
            Active users
          </p>
        </div>

        <div className="w-full sm:w-1/4 lg:w-1/4 md:w-1/3">
          <div className="relative w-full border rounded-md border-slate-200 bg-bg-main p-[5px]">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <svg
                className="w-5 h-5 text-primary"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              className="w-full pl-10 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
              type="text"
              name="search"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="lg:mt-[-6px] md:mt-[-4px] w-full sm:w-full lg:w-1/4 md:w-1/3">
          <SortByComponent />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 px-5 lg:mt-0">
          {user.map((list) => (
            <button
              type="button"
              onClick={() => handleShowOrganization(list)}
              key={list.id}
              className="border border-bg-primary rounded-xl min-w-max cursor-pointer shadow-sm"
            >
              <div className="px-6 py-4">
                <div className="flex flex-row justify-end items-center">
                  <div className="dropdown dropdown-bottom">
                    <button
                      // onClick={() => setDropdown(!dropdown)}
                      // tabIndex={0}
                      className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-white text-gray hover:text-white"
                    >
                      <BiDotsHorizontalRounded className="w-6 h-6" />
                    </button>
                    {/* {dropdown ? (
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-md mt-2 w-52"
                      >
                        <li>
                          <a>Download invoice</a>
                        </li>
                        <li>
                          <a>Download invoice</a>
                        </li>
                      </ul>
                    ) : null} */}
                  </div>
                </div>
                <div className="font-bold text-xl mx-auto text-center w-full mt-4 mb-2">
                  <div className="w-[70px] h-[70px] md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green rounded-full flex justify-center items-center m-auto">
                    <p className="font-sp-pro-text-bold text-3xl lg:text-2xl text-white">
                      {list.profile}
                    </p>
                  </div>
                </div>
                <p className="font-sp-pro-text-semibold text-lg w-full text-center text-text-color capitalize">
                  {list.name}
                </p>
                <p className="text-gray-700 text-sm text-center opacity-60">
                  {list.email}
                </p>
                <p className="text-gray-700 text-sm lg:text-md mt-4 text-center text-text-color">
                  20 members
                </p>

                <div className="w-full flex flex-row justify-center space-x-2 my-2">

                  {/* <img src={facebook} alt="" srcset="" />
                  <img src={linkin} alt="" srcset="" />
                  <img src={instagram} alt="" srcset="" />
                  <img src={twinter} alt="" srcset="" /> */}
                </div>
              </div>
              <div className="pb-2 w-full px-8 mb-3 text-center">
                <span className="inline-block w-full bg-gray-200 rounded-md py-2 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-yellow text-white">
                  More Info
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  </main>
  );
}


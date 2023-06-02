import React, { useState } from "react";
import { BiCheck, BiDotsHorizontalRounded, BiHome } from "react-icons/bi";
import { HiOutlineCheck, HiOutlineQrcode } from "react-icons/hi";
import facebook from "../../../assets/images/user/fb.png";
import linkin from "../../../assets/images/user/in.png";
import instagram from "../../../assets/images/user/ig.png";
import twinter from "../../../assets/images/user/tw.png";
import RoomFillterComponent from "../tracking/RoomFillterComponent";
import SuperFillterComponent from "../tracking/SuperFillterComponent";
import NormalFillterComponent from "../tracking/NormalFillterComponent";
import OwnerFillterComponent from "../tracking/OwnerFillterComponent";
import SortByComponent from "../tracking/SortByComponent";
import { BsGraphUp, BsHouseCheck, BsPlus } from "react-icons/bs";
import { TbCalendarStats } from "react-icons/tb";
import { AiFillGift } from "react-icons/ai";
import UserDetail from "./userPopup/UserDetail";
import '../../../style/shadow.css';

export default function UsersAllComponent() {
  const [user, setUser] = useState([
    {
      id: 1,
      profile: "S",
      name: "Senglorn",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 2,
      profile: "H",
      name: "HongMeng",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF38z4yXEJCseD5dYN08fHuNTgDeFlxZkohQ&usqp=CAU",
    },
    {
      id: 3,
      profile: "M",
      name: "Mony",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
    {
      id: 4,
      profile: "M",
      name: "Mnor",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
    {
      id: 5,
      profile: "M",
      name: "Mengchhun",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
    {
      id: 6,
      profile: "K",
      name: "KONG",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
    {
      id: 7,
      profile: "J",
      name: "JONG",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
    {
      id: 8,
      profile: "K",
      name: "KIM",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
  ]);

  //featch images
  const socialImg = [
    {
      item: 1,
      title: "facebook",
      src: facebook,
    },
    {
      item: 2,
      title: "linkin",
      src: linkin,
    },
    {
      item: 3,
      title: "instagram",
      src: instagram,
    },
    {
      item: 3,
      title: "twinter",
      src: twinter,
    },
  ];

  const listOfImage = socialImg.map((image) => (
    <div key={image.id}>
      <img src={image.src} alt={image.title} />
    </div>
  ));
  //featch images

  return (
    <main
      className="overflow-y-auto px-10 py-6 bg-white rounded-xl relative con-Shadow"
      // style={{
      //   boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
      // }}
    >
      <div className="gap-6 overflow-hidden z-10">
        <div className="lg:flex lg:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 mb-5 text">
          {/* header */}
          <div className="md:pb-0 sm:pb-2 text-text-colors">
            <h2 className="text-2xl font-sp-pro-text-semibold">
              All <span className="text-pending">User</span> Managment
            </h2>
            <p className="font-sp-pro-text-regular text-sm text-green">
              Active categories
            </p>
          </div>

          <div className="flex flex-row justify-center gap-10">
            <div>
              <div className="relative text-sm border-[#E1E9EE]  bg-[#F9FBFF]  border rounded-lg block w-full py-2 px-1 mb-1  focus:border-primary">
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
            <SortByComponent />
            <div className="block ">
              <label
                htmlFor="normalCategory"
                className="border-2 ml-auto cursor-pointer border-yellow text-yellow p-[5px] px-3 rounded-lg font-sp-pro-text-regular text-sm flex items-center uppercase"
              >
                <BsPlus className="w-6 h-6" /> &nbsp; Invite User
              </label>
            </div>
          </div>

          {/* <div className="lg:mt-[-6px] md:mt-[-4px] w-full sm:w-full lg:w-1/4 md:w-1/3">
            <SortByComponent />
          </div> */}

         
        </div>

        {/* card */}
        <div className="overflow-x-auto p-5 ">
          <div className=" space-x-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 lg:mt-0">
            {user.map((list) => (
              <button
                type="button"
                onClick={() => handleShowOrganization(list)}
                key={list.id}
                className="border border-bg-primary rounded-[5px] min-w-max cursor-pointer"
                style={{
                  boxShadow: "0px 2.44633px 11.2792px rgba(0, 0, 0, 0.06)",
                }}
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
                    {listOfImage}
                  </div>
                </div>
                <div className="pb-2 w-full px-8 mb-3 text-center">
                  {/* <span className="inline-block w-full bg-gray-200 rounded-md py-2 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-yellow text-white">
                    More Info
                  </span> */}
                  <label
                    htmlFor="my-modal-5"
                    className="inline-block w-full bg-gray-200 rounded-md py-2 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-yellow text-white"
                  >
                    More Info
                  </label>
                </div>
              </button>
            ))}
          </div>
          
        </div>
        {/* popupDetaile */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <UserDetail className="modal" />
        {/* Modol invite user */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="bg-bg-primary lg:w-1/3 md:w-3/4 sm:w-32 rounded-lg relative p-4">
            {/* header */}
            <div className="flex justify-between mb-5">
              <div className="flex items-center">
                <div className="flex items-center mt-2">
                  <div className="bg-gray-light rounded-full p-3">
                    <AiFillGift className="w-8 h-8" />
                  </div>
                  <div className="pl-4 flex flex-col space-y-1">
                    <span className="text-text-color font-sp-pro-text-medium text-lg">
                      Rotanakosal
                    </span>
                    <span className="text-sm text-text-color font-sp-pro-text-regular">
                      Manage invitations and requests to join your team.
                    </span>
                  </div>
                </div>
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

            {/* data */}
            <div>
              <div className="w-full">
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

              {/* featch data invite user */}
              <div className="w-full mt-5 border border-slate-200 bg-bg-main">
                {user.map((users) => (
                  <div className="w-full rounded-md">
                    <div className="flex justify-between hover:bg-gray-light p-2">
                      <div>
                        <div className="flex items-center m-auto space-x-3">
                          <span>
                            <img
                              src={users.src}
                              alt={users.title}
                              className="w-10 h-10 rounded-full"
                            />
                          </span>
                          <span className="font-sp-pro-text-medium text-sm text-text-color">
                            {users.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-blue-light p-1 rounded-sm text-white text-sm cursor-pointer">
                          Resend
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        {/* modal invite user */}
        {/* Put this part before </body> tag */}
      </div>
    </main>
  );
}

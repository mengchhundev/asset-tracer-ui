import React, { useState } from "react";
import { BiCheck, BiDotsHorizontalRounded } from "react-icons/bi";
import { RxCheck } from "react-icons/rx";

// image
import facebook from "../../../assets/images/user/fb.png";
import linkin from "../../../assets/images/user/in.png";
import cancel from "../../../assets/images/user/cancel.png";
import check from "../../../assets/images/user/check.png";
import AssetFiltterComponent from "./AssetFiltterComponent";
import { BsDot, BsGraphUp, BsPlus } from "react-icons/bs";
import { EyeIcon } from "@heroicons/react/24/outline";
import DetailComponent from "./popUp/DetailComponent";
import AddComponent from "./AssetAddComponent";
import { Link } from "react-router-dom";

export default function AssetComponent() {
  const [user, setUser] = useState([
    {
      id: 1,
      profile: "SE",
      name: "Senglorn",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF38z4yXEJCseD5dYN08fHuNTgDeFlxZkohQ&usqp=CAU",
    },
    {
      id: 2,
      profile: "HO",
      name: "Hong Meng",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF38z4yXEJCseD5dYN08fHuNTgDeFlxZkohQ&usqp=CAU",
    },
    {
      id: 3,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 4,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 5,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 6,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
  ]);

  return (
    <main className="overflow-y-auto pb-4 ">
      <div
        className="mx-5 mt-5 p-5 gap-6 bg-white rounded-3xl overflow-hidden h-[690px]"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px" }}
      >
        <div className="lg:flex lg:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 text">
          <div>
            <h2 className="text-2xl  text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold pb-2 md:pb-3">
              All <span className="text-primary">Asset</span> Items           </h2>
            <p className="font-sp-pro-text-regular text-green ">Active Asset</p>
          </div>
          {/* search */}
          <div className="flex flex-row justify-center gap-5">
            <div>
              <div className="relative w-full border rounded-md border-slate-200  p-[5px]">
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

            {/* filter */}
            <div className="md:mt-[-6px] sm:mt-[-12px]">
              <AssetFiltterComponent />
            </div>

            {/* add */}
            <div className="block ">

              <Link
                to={"/add-asset"}
                className="hover:bg-primary"
              >
                <label
                  className="border ml-auto border-yellow text-yellow p-1 px-2 rounded-md font-sp-pro-text-regular text-sm  w-32 flex items-center"
                >
                  <BsPlus className="w-6 h-6" /> &nbsp; Invite User
                </label>
              </Link>

            </div>
          </div>
        </div>

        {/* content */}
        <div className="overflow-x-auto">
          <div className="p-1 overflow-y-scroll">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="bg-bg-primary text-text-color">
                    <th className="">No</th>
                    <th className="">Name</th>
                    <th className="">Category</th>
                    <th className="">Owner</th>
                    <th className="">Status</th>
                    <th className="">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-gray-700">
                  {user.map((users) => (
                    <tr className="font-md text-text-color border-none">
                      <td className="">{users.id}</td>
                      <td className="">
                        <div className="flex items-center">
                          <div className="relative  mr-3 w-10 ">
                            <img
                              src={users.src}
                              alt={users.title}
                              loading="lazy"
                              className="rounded-full h-10"
                            />
                          </div>
                          <div>{users.name}</div>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex items-center m-auto space-x-3">
                          <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-sp-pro-text-regular text-red-500 text-sm">
                            {users.profile}
                          </span>
                          <span className="font-sp-pro-text-medium text-sm text-text-color">
                            {users.name}
                          </span>
                        </div>
                      </td>
                      <td className=" text-text-color">
                        <div className="flex items-center">
                          <div className="relative  mr-3 w-10 ">
                            <img
                              src={users.src}
                              alt={users.title}
                              loading="lazy"
                              className="rounded-full h-10"
                            />
                          </div>
                          <div>{users.name}</div>
                        </div>
                      </td>
                      <td className=" text-text-color">
                        <div className="flex flex-row px-3  bg-gray-light w-[125px] text-text-color rounded-lg p-1">
                          <span className="text-text-color">
                            <BsDot className="w-6 h-6" />
                          </span>
                          <span>Damaged</span>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex flex-rol space-x-1 items-center">
                          <span className="w-6 h-6 ">
                            <label
                              htmlFor="deleteAsset"
                              className="cursor-pointer"
                            >
                              <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.5 5.49935H4.16667M4.16667 5.49935H17.5M4.16667 5.49935V17.166C4.16667 17.608 4.34226 18.032 4.65482 18.3445C4.96738 18.6571 5.39131 18.8327 5.83333 18.8327H14.1667C14.6087 18.8327 15.0326 18.6571 15.3452 18.3445C15.6577 18.032 15.8333 17.608 15.8333 17.166V5.49935H4.16667ZM6.66667 5.49935V3.83268C6.66667 3.39065 6.84226 2.96673 7.15482 2.65417C7.46738 2.34161 7.89131 2.16602 8.33333 2.16602H11.6667C12.1087 2.16602 12.5326 2.34161 12.8452 2.65417C13.1577 2.96673 13.3333 3.39065 13.3333 3.83268V5.49935M8.33333 9.66602V14.666M11.6667 9.66602V14.666"
                                  stroke="#667085"
                                  strokeWidth="1.66667"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </label>
                          </span>
                          <span className="w-6 h-6 ">
                            <svg
                              width="19"
                              height="20"
                              viewBox="0 0 19 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.334 1.14809C15.4658 0.283508 14.0587 0.284038 13.1912 1.14927L6.48127 7.84251C5.94461 8.37774 5.62909 9.09424 5.59716 9.85021L5.50164 12.1116C5.45815 13.1414 6.28405 13.9999 7.31823 13.9999L9.54314 14C10.36 14 11.1423 13.6714 11.7127 13.0887L18.3685 6.26724C19.2182 5.39909 19.2093 4.01137 18.3485 3.15417L16.334 1.14809ZM14.0486 2.00316C14.443 1.60987 15.0826 1.60963 15.4772 2.00262L17.4917 4.0087C17.883 4.39834 17.887 5.02912 17.5008 5.42373C16.7644 6.17612 15.5558 6.18388 14.8099 5.441L14.0496 4.68396C13.3073 3.9447 13.3068 2.74298 14.0486 2.00316ZM13.5891 5.9331C12.6262 4.97424 11.0691 4.97494 10.1071 5.93466L7.33874 8.6964C7.01674 9.01754 6.82743 9.44744 6.80827 9.90102L6.71275 12.1624C6.69825 12.5057 6.97355 12.7918 7.31828 12.7919L9.54319 12.792C10.0333 12.792 10.5027 12.5948 10.8449 12.2452L13.6153 9.4016C14.5584 8.43356 14.5467 6.88677 13.5891 5.9331Z"
                                fill="#667085"
                              />
                              <path
                                d="M17.2 10.4008V15.5008C17.2 17.1576 15.8569 18.5008 14.2 18.5008H4C2.34314 18.5008 1 17.1576 1 15.5008V5.30078C1 3.64393 2.34315 2.30078 4 2.30078H9.1"
                                stroke="#667085"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                          <span className="w-6 h-6 ">
                            <label
                              htmlFor="my-modal-3"
                            // className="border border-yellow text-yellow p-1 px-2 h-10 rounded-md font-sp-pro-text-regular text-sm  max-w-max flex items-center"
                            ><EyeIcon className="h-6 w-6 text-gray-500" />

                            </label>

                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* pagination */}
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

        {/* Model Delete */}
        <input type="checkbox" id="deleteAsset" className="modal-toggle" />
        <div className="modal">
          <div className="bg-bg-primary w-1/4 rounded-lg relative">
            {/* header */}
            <div className="mb-5">
              <div>
                <label
                  htmlFor="deleteAsset"
                  className="btn border-red-500 bg-white text-red-500 hover:bg-white hover:border-red-400 btn-sm btn-circle absolute right-4 top-4"
                >
                  ✕
                </label>
              </div>
            </div>

            {/* content */}
            <div className="">
              <div className="flex-row">
                <div className="md:w-12 md:h-12 lg:w-14 lg:h-14 bg-reject-light rounded-full flex justify-center items-center m-auto">
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 5.49935H4.16667M4.16667 5.49935H17.5M4.16667 5.49935V17.166C4.16667 17.608 4.34226 18.032 4.65482 18.3445C4.96738 18.6571 5.39131 18.8327 5.83333 18.8327H14.1667C14.6087 18.8327 15.0326 18.6571 15.3452 18.3445C15.6577 18.032 15.8333 17.608 15.8333 17.166V5.49935H4.16667ZM6.66667 5.49935V3.83268C6.66667 3.39065 6.84226 2.96673 7.15482 2.65417C7.46738 2.34161 7.89131 2.16602 8.33333 2.16602H11.6667C12.1087 2.16602 12.5326 2.34161 12.8452 2.65417C13.1577 2.96673 13.3333 3.39065 13.3333 3.83268V5.49935M8.33333 9.66602V14.666M11.6667 9.66602V14.666"
                        stroke="#C52222"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className="text-center px-5 my-5">
                  <h1 className="text-text-color font-sp-pro-text-medium text-lg">
                    You want to delete?
                  </h1>
                  <p className="text-text-color font-sp-pro-text-regular text-sm mt-1">
                    Do you really want to delete these organization? This
                    process cannot be undone.
                  </p>
                </div>

                <div className="w-full">
                  <hr className="border-gray-light" />
                </div>

               <div className="p-5 flex flex-row justify-center space-x-5">
                  <span className="border border-slate-200 bg-bg-main text-text-color font-sp-pro-text-medium p-1.5 px-5 rounded-md">
                    Cancel
                  </span>
                  <spann className="border border-red-500 bg-reject-light text-reject font-sp-pro-text-medium p-1.5 px-5 rounded-md">
                    Delete
                  </spann>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <DetailComponent className="modal" />
    </main>
  );
}

import React, { useState } from "react";
import { BiCheck, BiDotsHorizontalRounded } from "react-icons/bi";
import UserSortByComponent from "./UserSortByComponent";
import { RxCheck } from "react-icons/rx";

// image
import facebook from "../../../assets/images/user/fb.png";
import linkin from "../../../assets/images/user/in.png";
import cancel from "../../../assets/images/user/cancel.png";
import check from "../../../assets/images/user/check.png";

export default function UserRequestComponent() {
  const [user, setUser] = useState([
    {
      id: 1,
      profile: "SE",
      name: "Senglorn",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF38z4yXEJCseD5dYN08fHuNTgDeFlxZkohQ&usqp=CAU",
    },
    {
      id: 2,
      profile: "HO",
      name: "Hong Meng",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF38z4yXEJCseD5dYN08fHuNTgDeFlxZkohQ&usqp=CAU",
    },
    {
      id: 3,
      profile: "ME",
      name: "Keo Mony",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 4,
      profile: "ME",
      name: "Keo Mony",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 5,
      profile: "ME",
      name: "Keo Mony",
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
              All <span className="text-primary">User</span> Request
            </h2>
          </div>
          {/* search */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
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

            {/* filter */}
            <div className="md:mt-[-6px] sm:mt-[-12px]">
              <UserSortByComponent />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto px-10">
          <h1 className="mb-2 text-text-color font-sp-pro-text-medium text-base">
            Organization A
          </h1>
          <div className="rounded-xl border border-bg-main shadow">
            <div className="rounded-md p-5 flex-col space-y-2">
              <div className="overflow-x-auto h-[242px]">
                <div className="p-1 overflow-y-scroll">
                  <div className="overflow-x-auto">
                    <div className="p-1 overflow-y-scroll">
                      <table className="table border-spacing-y-3 border-separate w-full">
                        {/* <thead>
                            <tr className="bg-bg-primary text-sidebar">
                              <th className="w-1/6">No</th>
                              <th className="w-4/12">Name</th>
                              <th className="w-4/12">Created Date</th>
                              <th className="w-1/6">Action</th>
                            </tr>
                          </thead> */}
                        <tbody className="divide-y dark:divide-gray-700">
                          {user.map((users) => (
                            <tr className="font-md text-text-color  border-none">
                              <td className="bg-bg-main rounded-[5px]">{users.id}</td>
                              <td className="bg-bg-main">
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
                              <td className="bg-bg-main rounded-[5px]">
                                <div className="flex items-center m-auto space-x-3">
                                  <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-sp-pro-text-regular text-red-500 text-sm">
                                    {users.profile}
                                  </span>
                                  <span className="font-sp-pro-text-medium text-sm text-text-color">
                                    {users.name}
                                  </span>
                                </div>
                              </td>
                              <td className="bg-bg-main rounded-[5px]">
                                <div className="flex flex-rol space-x-3 items-center">
                                  <span className="w-6 h-6 bg-white border border-border-strock text-reject text-center font-sp-pro-text-medium">
                                    X
                                  </span>
                                  <span>
                                    <RxCheck className="w-6 h-6 bg-white border border-border-strock text-green" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

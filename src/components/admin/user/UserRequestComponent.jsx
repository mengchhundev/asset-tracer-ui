import React, { useState } from "react";
import { BiCheck, BiDotsHorizontalRounded } from "react-icons/bi";
import UserSortByComponent from "./UserSortByComponent";
import { RxCheck } from "react-icons/rx";

// image
import facebook from "../../../assets/images/user/fb.png";
import linkin from "../../../assets/images/user/in.png";
import cancel from "../../../assets/images/user/cancel.png";
import check from "../../../assets/images/user/check.png";
import Ellipse_1 from "../../../assets/icon/default profile/Ellipse 1.svg";
import Ellipse_2 from "../../../assets/icon/default profile/Ellipse 2.svg";
import Ellipse_3 from "../../../assets/icon/default profile/Ellipse 3.svg";
import Ellipse_4 from "../../../assets/icon/default profile/Ellipse 4.svg";
import Ellipse_5 from "../../../assets/icon/default profile/Ellipse 5.svg";
// import Ellipse_6 from "../../../assets/icon/default profile/Ellipse 6.svg"
// import Ellipse_7 from "../../../assets/icon/default profile/Ellipse 7.svg"
// import Ellipse_8 from "../../../assets/icon/default profile/Ellipse 8.svg"
const people = [
  { id: 1, name: "Sort by" },
  { id: 2, name: "A - Z" },
  { id: 3, name: "Z - A" },
  { id: 4, name: "Olest - Newest" },
  { id: 5, name: "Newest - Olest" },
];

export default function UserRequestComponent() {
  const [organization, setOrg] = useState([
    {
      id: 1,
      name: "KSHRD Center",
    },
    {
      id: 2,
      name: "KOSIGN",
    },
  ]);
  const [user, setUser] = useState([
    {
      id: 1,
      profile: "SE",
      name: "Senglorn",
      email: "hrdcenter@gamil.com",
      src: Ellipse_1,
    },
    {
      id: 2,
      profile: "HO",
      name: "Hong Meng",
      email: "hrdcenter@gamil.com",
      src: Ellipse_2,
    },
    {
      id: 3,
      profile: "ME",
      name: "Keo Mony",
      email: "hrdcenter@gamil.com",
      src: Ellipse_5,
    },
    {
      id: 4,
      profile: "ME",
      name: "Keo Mony",
      email: "hrdcenter@gamil.com",
      src: Ellipse_4,
    },
    {
      id: 5,
      profile: "ME",
      name: "Keo Mony",
      email: "hrdcenter@gamil.com",
      src: Ellipse_5,
    },
  ]);

  return (
    <main className="p-6 con-Shadow px-4 lg:px-3 py-6 bg-white rounded-2xl relative">
      <div className="gap-6 overflow-hidden z-10 ">
        <div className="xl:flex xl:flex-row md:flex-col sm:flex-col justify-between gap-5 p-5">
          {/* header */}
          <div className="md:pb-0 sm:pb-2 min-w-max mb-4 xl:mb-0">
            <h2 className="text-2xl font-sp-pro-text-semibold">
              All <span className="text-pending">User</span> Management
            </h2>
            <p className="font-sp-pro-text-regular text-sm text-green">
              Active Users
            </p>
          </div>
          {/* search */}
          <div className="md:flex md:flex-row justify-start gap-6 ">
            <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
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
            <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
              <UserSortByComponent />
            </div>
          </div>
        </div>
        <div className="space-y-8 sm:px-3 px-10">
          {organization.map((organizations) => (
            <div className="overflow-x-auto px-10">
              <h1 className="mb-2 text-text-color font-sp-pro-text-medium text-base">
                {organizations.name}
              </h1>
              <div className="rounded-xl border border-bg-main shadow"
                style={{boxShadow: " rgba(0, 0, 0, 0.1)  0px 2.45px 11.28px"}}
              >
                <div className="rounded-md pb-12 p-5 py-6  flex-col  ">
                  <div className="overflow-x-auto h-[270px] ">
                    <div className=" xl:px-11 sm:px-5 2xl:px-20 3xl:px-32 overflow-y-scroll">
                      <div className="overflow-x-auto">
                        <div className="p-1 overflow-y-scroll items-start">
                          <table className="table border-spacing-y-3 border-separate w-[1020px]">
                            {/* <thead>
                            <tr className="bg-bg-primary text-sidebar">
                              <th className="w-1/6">No</th>
                              <th className="w-4/12">Name</th>
                              <th className="w-4/12">Created Date</th>
                              <th className="w-1/6">Action</th>
                            </tr>
                          </thead> */}
                            <tbody>
                              {user.map((users) => (
                                <tr className="font-md text-text-color border-none">
                                  <td
                                    className="bg-bg-main text-center rounded-s-[5px]"
                                    style={{ padding: "1.5rem" }}
                                  >
                                    {users.id}
                                  </td>
                                  <td className="bg-bg-main items-start ">
                                    <div className="flex  items-center ml-40 space-x-3  ">
                                      <img
                                        src={users.src}
                                        alt={users.title}
                                        className="rounded-full h-10 "
                                      />
                                      <div>{users.name}</div>
                                    </div>
                                  </td>
                                  <td className="bg-bg-main w-1/12 items-start  ">
                                    <div className="flex items-center mr-20 space-x-3 ">
                                      <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-sp-pro-text-regular text-red-500 text-sm">
                                        {users.profile}
                                      </span>
                                      <span className="font-sp-pro-text-medium text-sm text-text-color">
                                        {users.name}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="bg-bg-main rounded-e-[4px]">
                                    <div className="flex justify-center space-x-5 items-center">
                                      <span className="w-7 h-7 bg-white border border-border-strock text-reject flex items-center justify-center font-sp-pro-text-medium">
                                        X
                                      </span>
                                      <span>
                                        <RxCheck className="w-7 h-7 bg-white border border-border-strock text-green" />
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
          ))}
        </div>
      </div>
    </main>
  );
}

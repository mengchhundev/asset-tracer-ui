import React, { Fragment, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import facebook from "../../../assets/images/user/fb.png";
import instagram from "../../../assets/images/user/ig.png";
import twinter from "../../../assets/images/user/tw.png";
import { BsPlus } from "react-icons/bs";
import { AiFillGift } from "react-icons/ai";
import UserDetail from "./userPopup/UserDetail";

import "../../../style/shadow.css";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Ellipse_1 from "../../../assets/icon/default profile/Ellipse 1.svg";
import Ellipse_2 from "../../../assets/icon/default profile/Ellipse 2.svg";
import Ellipse_3 from "../../../assets/icon/default profile/Ellipse 3.svg";
import Ellipse_4 from "../../../assets/icon/default profile/Ellipse 4.svg";
import Ellipse_5 from "../../../assets/icon/default profile/Ellipse 5.svg";
const people = [
  { id: 1, name: "Sort by" },
  { id: 2, name: "A - Z" },
  { id: 3, name: "Z - A" },
  { id: 4, name: "Olest - Newest" },
  { id: 5, name: "Newest - Olest" },
];

export default function UsersAllComponent() {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const [organization, setOrg] = useState([
    {
      name: "KSHRD Center",
    },
  ]);

  const [user, setUser] = useState([
    {
      id: 1,
      profile: "S",
      email: "hrdcenter@gmail.com",
      name: "Senglorn",
      src: Ellipse_1,
    },
    {
      id: 2,
      profile: "H",
      email: "hrdcenter@gmail.com",
      name: "HongMeng",
      src: Ellipse_2,
    },
    {
      id: 3,
      profile: "M",
      email: "hrdcenter@gmail.com",
      name: "Mony",
      src: Ellipse_3,
    },
    {
      id: 4,
      profile: "M",
      name: "Mnor",
      email: "hrdcenter@gmail.com",
      src: Ellipse_4,
    },
    {
      id: 5,
      profile: "M",
      email: "hrdcenter@gmail.com",
      name: "Mengchhun",
      src: Ellipse_5,
    },
    {
      id: 6,
      profile: "K",
      name: "KONG",
      email: "hrdcenter@gmail.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
    {
      id: 7,
      profile: "J",
      name: "JONG",
      email: "hrdcenter@gmail.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
    {
      id: 8,
      profile: "K",
      name: "KIM",
      email: "hrdcenter@gmail.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
    {
      id: 9,
      profile: "M",
      name: "Mengchhun",
      email: "hrdcenter@gmail.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
    {
      id: 10,
      profile: "K",
      name: "KONG",
      email: "hrdcenter@gmail.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
    {
      id: 11,
      profile: "J",
      name: "JONG",
      email: "hrdcenter@gmail.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
    },
    {
      id: 12,
      profile: "K",
      name: "KIM",
      email: "hrdcenter@gmail.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd7qwwQHtYYI5AtJlt-fhcQqFikjyz2EfTg&usqp=CAU",
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

            {/* filter */}
            <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
              <Combobox
                value={selected}
                onChange={setSelected}
                className="z-20"
              >
                <div className="relative z-20">
                  <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                    <Combobox.Input
                      className="w-full border-[#E1E9EE] border rounded-lg bg-[#F9FBFF] py-2  pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                      displayValue={(person) => person.name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-text-color"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredPeople.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                          Nothing found.
                        </div>
                      ) : (
                        filteredPeople.map((person) => (
                          <Combobox.Option
                            key={person.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-hover-yellow text-text-color"
                                  : "text-text-color"
                              }`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-text-color"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>

            {/* add */}
            <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
              <label
                htmlFor="invite-user"
                className="border border-opacity-70 w-max mr-auto md:min-w-max cursor-pointer border-yellow text-yellow hover:bg-primary hover:bg-opacity-10 p-[5px] pr-3 rounded-lg font-sp-pro-text-medium text-sm flex items-center uppercase"
              >
                <BsPlus className="w-6 h-6" />
                &nbsp;Invite user
              </label>
            </div>
          </div>
        </div>

        {/* card */}
        <div className=" py-6 relative">
          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  justify-items-center gap-10 lg:gap-x-10  gap-y-8 p-5 w-full">
            {user.map((list) => (
              <button
                type="button"
                onClick={() => handleShowOrganization(list)}
                key={list.id}
                className="relative con-Shadow-Card rounded-[5px] min-w-max w-52 cursor-pointer"
                style={{
                  boxShadow: "0px 2.44633px 11.2792px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="relative ">
                  <div className="absolute top-1 right-3 cursor-pointer">
                    <div className="dropdown dropdown-bottom">
                      <button
                        // onClick={() => setDropdown(!dropdown)}
                        // tabIndex={0}
                        className=" w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-white text-gray hover:text-white"
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

                  <div className="font-bold text-xl mx-auto pt-6 lt-14:pt-6 text-center flex flex-col justify-center w-full ">
                    <div className="w-[65px] h-[65px] con-pro-color rounded-full flex justify-center items-center m-auto">
                      <p className="font-sp-pro-text-semibold uppercase text-xl text-green ">
                        {list.name.substring(0, 2)}
                      </p>
                    </div>
                  </div>

                  <p className="pt-2 font-sp-pro-text-semibold 2xl:text-[15px]  w-full text-center text-text-color capitalize">
                    {list.name}
                  </p>

                  <p className="text-gray-700  lg:text-[12px] text-[12px] text-center opacity-60">
                    {list.email}
                  </p>
                  <div className="m-auto gap-1 flex flex-row justify-center space-x-1 pt-4 2xl:pb-5 pb-3">
                    <div className="w-6 h-6  rounded-full">
                      <img src={facebook} alt="" />
                    </div>
                    <div className="w-6 h-6 rounded-full">
                      <img src={instagram} alt="" />
                    </div>
                    <div className="w-6 h-6 rounded-full">
                      <img src={instagram} alt="" />
                    </div>
                    <div className="w-6 h-6 rounded-full">
                      <img src={twinter} alt="" />
                    </div>
                  </div>
                </div>
                <div className="p-6 w-48  text-center mx-auto  ">
                  {/* <span className="inline-block w-full bg-gray-200 rounded-md py-2 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-yellow text-white">
                    More Info
                  </span> */}
                  <label
                    htmlFor="my-modal-5"
                    className="inline-block mb-1 2xl:mb-2 lt-16:w-full lt-14:w-28 cursor-pointer  shadow-[#F8C400] con-Shadow-btn rounded-md py-2 px-4 lt-16:text-sm lt-14:text-xs font-sp-pro-text-regular text-gray-700 mr-2  bg-yellow text-white"
                  >
                    <p className=" text-xs ">More Info</p>
                  </label>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* popupDetaile */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <UserDetail className="modal" />


        {/* ============ Modol invite user  ===============*/}
        <input type="checkbox" id="invite-user" className="modal-toggle" />
        <div className="modal duration-300">
          <div className="bg-bg-primary overflow-hidden sm:h-[29rem] sm:w-[30rem] lg:h-[35rem] lg:w-[35rem] 2xl:h-[35rem] 2xl:w-[36] lt-16:w-4/12 h-[35rem] rounded-[20px] relative p-4">
            {/* header */}
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                {organization.map((orgs) => (
                  <div className="flex items-center">
                  <div className="rounded-full p-3 px-6">
                    <div className="w-[74px] h-[74px] con-pro-color rounded-full flex justify-center items-center m-auto">
                      <p className="font-sp-pro-text-bold uppercase text-2xl text-green ">
                        {orgs.name.substring(0,2)}
                      </p>
                    </div>
                  </div>
                  <div className="pl-4 flex flex-col space-y-1">
                    <span className="text-text-color font-sp-pro-text-bold text-xl">
                      {orgs.name}
                    </span>
                    <span className="text-sm text-text-color font-sp-pro-text-regular">
                      Manage invitations and requests to join your team.
                    </span>
                  </div>
                </div>
                ))}
                
              </div>
              <div className="flex">
                <label
                  htmlFor="invite-user"
                  className="btn border-bg-primary-strock bg-white text-red-500 hover:bg-white hover:border-red-400 btn-sm btn-circle absolute right-7 top-6"
                >
                  ✕
                </label>
              </div>
            </div>

            {/* data */}
            <div className="px-6">
              <div className="w-full">
                <div className="relative w-full border rounded-[4px] border-slate-200 bg-bg-main p-[5px]">
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
                    className=" w-full h-9 pl-10 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                    type="text"
                    name="search"
                    placeholder="Search team member or type an email"
                  />
                </div>
              </div>

              {/* featch data invite user */}
            </div>
            <div className="relative overflow-y-auto p-4 px-6 ">
              <div className="overflow-y-auto  scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-bg-primary-strock scrollbar-track-bg-primary sm:h-[15rem] lg:h-[20rem] h-[20rem] relative max-w-xl  mx-auto divide-border-gray-light bg-bg-main ring-1 ring-black/5 rounded-[4px] flex flex-col divide-y highlight-white/5 ">
                {user.map((users) => (
                  <div className="flex 3xl:space-x-[28rem] sm:space-x-[18rem] lg:space-x-[23rem] items-center  ">
                    <div className="flex items-center gap-4 p-4 ">
                      <img
                        className="w-12 h-12 rounded-full"
                        src={users.src}
                        alt=""
                      />
                      <div className="flex flex-col ">
                        <strong className="text-slate-900 text-sm font-sp-pro-text-regular ">
                          {users.name}
                        </strong>
                        <span className="text-slate-500 text-xs font-sp-pro-text-regular ">
                          {users.email}
                        </span>
                      </div>
                    </div>
                    <div className="absolute flex items-center">
                      <button className="w-20 h-8 bg-yellow rounded-[3px] text-white text-md ">
                        <p>Invite</p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* modal invite user */}

        {/* Put this part before </body> tag */}
      </div>
    </main>
  );
}

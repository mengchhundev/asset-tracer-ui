import React, { Fragment, useState } from "react";
import { BiCheck, BiDotsHorizontalRounded, BiHome } from "react-icons/bi";
import { RxCheck } from "react-icons/rx";
import logo from "../../../assets/images/A_Tracer_logo1.png";

// image
import facebook from "../../../assets/images/user/fb.png";
import linkin from "../../../assets/images/user/in.png";
import cancel from "../../../assets/images/user/cancel.png";
import check from "../../../assets/images/user/check.png";
import { BsDot, BsGraphUp, BsHouseCheck, BsPlus } from "react-icons/bs";
import { EyeIcon } from "@heroicons/react/24/outline";
//import combobox
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import AddComponent from "../Room/popUpRoom/AddComponent";
import UpdateComponent from "../Room/popUpRoom/UpdateComponent";
import RoomFillterComponent from "./RoomFillterComponent";
import SuperFillterComponent from "./SuperFillterComponent";
import SortByComponent from "./SortByComponent";
import OwnerFillterComponent from "./OwnerFillterComponent";
import NormalFillterComponent from "./NormalFillterComponent";
import ReactPaginate from "react-paginate";
import { IoMdClose } from "react-icons/io";
import { TbCalendarStats } from "react-icons/tb";
import { HiOutlineQrcode } from "react-icons/hi";
import { RiBarcodeFill } from "react-icons/ri";
const people = [
  { id: 1, name: "Asset" },
  { id: 2, name: "HDMI" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Mango" },
];

export default function TrackingComponent() {
  //combobox
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
  const [user, setUser] = useState([
    {
      id: "Mango_M092392",
      profile: "SE",
      name: "Senglorn",
      room: "btb",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF38z4yXEJCseD5dYN08fHuNTgDeFlxZkohQ&usqp=CAU",
    },
    {
      id: "Mango_M092392",
      profile: "HO",
      name: "Hong Meng",
      room: "kps",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF38z4yXEJCseD5dYN08fHuNTgDeFlxZkohQ&usqp=CAU",
    },
    {
      id: "Mango_M092392",
      profile: "ME",
      name: "Keo Mony",
      room: "pp",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: "Mango_M092392",
      profile: "ME",
      name: "Keo Mony",
      room: "sr",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
  ]);

  // pagination
  const [pageCount, setPageCount] = useState(2);
  let [isOpen, setIsOpen] = useState(false);
  function openDetail() {
    setIsOpen(true);
  }
  const handlePageClick = (event) => {
    getAllSuperCategory(event.selected + 1);
    setI(event.selected * 10 + 1);
  };

  return (
    <main
      className="overflow-y-auto p-5 bg-white rounded-xl relative"
      style={{
        boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
        minHeight: "calc(100vh - 6.3rem)",
      }}
    >
      <div className="flex justify-between px-5 pt-5">
        <div>
          <h2 className="text-2xl  text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
            All Tracking
          </h2>
        </div>
      </div>

      <div className="mt-8 px-5">
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

          <div className="mt-8">
            <button type="reset" className=" text-sm block text-blue-light">
              Clear All Filters
            </button>
          </div>
        </form>
      </div>

      <div className="gap-6 overflow-hidden z-10 mt-1">
        {/* table */}
        <div
          className="overflow-x-auto px-5 z-0"
          style={{
            minHeight: "calc(100vh - 15rem)",
          }}
        >
          <table className="table w-full">
            <thead>
              <tr>
                <th className="w-1/8 bg-bg-primary rounded-none py-3">
                  Label code
                </th>
                <th className="w-2/8 bg-bg-primary py-3">Assets Name</th>
                <th className="w-1/8 bg-bg-primary py-3">Categories</th>
                <th className="w-1/8 bg-bg-primary py-3">Status</th>
                <th className="w-1/8 bg-bg-primary py-3">Owner</th>
                <th className="w-2/8 bg-bg-primary py-3">Room</th>
                <th className="w-1/8 bg-bg-primary rounded-none py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide divide-slate-800">
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
                    <div className="font-sp-pro-text-medium text-sm text-text-color">
                      {users.name}
                    </div>
                  </td>
                  <td className="">
                    <div className="flex justify-between bg-light-green w-[85px] text-green rounded-lg p-1">
                      <span className="text-green flex">
                        <BiCheck className="w-6 h-6 flex pr-1" />
                        In use
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
                    <div className="font-sp-pro-text-medium text-sm text-text-color">
                      {users.room}
                    </div>
                  </td>
                  <td className="">
                    <div className="flex items-center space-x-4 w-20">
                      <label
                        htmlFor="my-modal-3"
                        className=" flex items-center border border-primary text-yellow px-3 justify-between py-1 font-medium leading-5 rounded-s dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                      >
                        View Details
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
                          <img
                            src={logo}
                            className="md:h-[300px] sm:h-[200px]"
                          />
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
          {/****/}
        </div>

        {/* pagination */}
        <div className="w-full flex justify-between items-center px-8 py-5 text-sm text-gray-500 uppercase absolute bottom-0 left-0">
          <div className="">Showing 21-30 of 100</div>
          <div id="react-paginate" className="">
            <ReactPaginate
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="< "
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

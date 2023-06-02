import React, { Fragment, useState } from "react";
import { BiCheck, BiDotsHorizontalRounded } from "react-icons/bi";
import { RxCheck } from "react-icons/rx";

// image
import facebook from "../../../assets/images/user/fb.png";
import linkin from "../../../assets/images/user/in.png";
import cancel from "../../../assets/images/user/cancel.png";
import check from "../../../assets/images/user/check.png";
import { BsDot, BsGraphUp, BsPlus } from "react-icons/bs";
import { EyeIcon } from "@heroicons/react/24/outline";
//import combobox
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
const people = [
  { id: 1, name: "Asset" },
  { id: 2, name: "HDMI" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Mango" },
];

export default function AssetComponent() {
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
      <div className="gap-6 overflow-hidden z-10">
        <div className="lg:flex lg:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 text">
          {/* header */}
          <div className="md:pb-0 sm:pb-2 text-text-colors">
            <h2 className="text-2xl font-sp-pro-text-semibold">
              All <span className="text-primary">Invoice</span>
            </h2>
            <p className="font-sp-pro-text-regular text-sm text-green">
              Active Invoice
            </p>
          </div>

          {/* search */}
          <div className="flex flex-row justify-center gap-5">
            <div>
              <div className="relative text-sm border-[#E1E9EE] border rounded-lg block w-full py-1.5 px-1 mb-1  focus:border-primary">
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
            <div className="z-20">
              <Combobox
                value={selected}
                onChange={setSelected}
                className="z-20"
              >
                <div className="relative z-20">
                  <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                    <Combobox.Input
                      className="w-full border-[#E1E9EE] border rounded-md py-1.5  pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
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
            <div className="block ">
              <label
                htmlFor="my-modal-3"
                className="border ml-auto cursor-pointer border-yellow text-yellow p-1 px-2 rounded-md font-sp-pro-text-regular text-sm  w-36 flex items-center uppercase"
              >
                <BsPlus className="w-6 h-6" /> &nbsp; Add invoice
              </label>
            </div>
          </div>
        </div>

        {/* table */}
        <div
          className="overflow-x-auto px-5 z-0"
          style={{
            minHeight: "calc(100vh - 15rem)",
          }}
        >
          <table className="table w-full">
            <thead >
              <tr>
                <th className="bg-bg-primary rounded-none py-3">No</th>
                <th className="bg-bg-primary py-3">Invoice</th>
                <th className="bg-bg-primary py-3 ">Suplier</th>
                <th className="bg-bg-primary py-3 ">Purchase</th>
                <th className="bg-bg-primary py-3 ">Date</th>
                <th className="bg-bg-primary py-3 ">Quantity</th>
                <th className="bg-bg-primary py-3 ">Total Price</th>
                <th className="bg-bg-primary rounded-none py-3">More</th>
              </tr>
            </thead>
            <tbody className="divide divide-slate-800">
              <tr>
                <td>1</td>
                <td>1</td>
                <td>phone</td>
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
                    <div>khjkgj</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>4</td>
                <td>2000$</td>
                <td>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-text-color text-text-color hover:text-text-color"
                    >
                      <BiDotsHorizontalRounded className="w-6 h-6 rotate-90" />
                    </label>
                    <ul className="dropdown-content right-3 menu p-2 shadow bg-base-100 rounded-md mt-2 w-52">
                      <li>
                        <Link to={"/view-invoice"} className="hover:bg-primary">
                          View invoice
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/update-invoice"}
                          className="hover:bg-primary"
                        >
                          Update invoice
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:bg-primary">
                          Download invoice
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>phone</td>
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
                    <div>khjkgj</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>4</td>
                <td>2000$</td>
                <td>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-text-color text-text-color hover:text-text-color"
                    >
                      <BiDotsHorizontalRounded className="w-6 h-6 rotate-90" />
                    </label>
                    <ul className="dropdown-content right-3 menu p-2 shadow bg-base-100 rounded-md mt-2 w-52">
                      <li>
                        <Link to={"/view-invoice"} className="hover:bg-primary">
                          View invoice
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/update-invoice"}
                          className="hover:bg-primary"
                        >
                          Update invoice
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:bg-primary">
                          Download invoice
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>phone</td>
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
                    <div>khjkgj</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>4</td>
                <td>2000$</td>
                <td>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-text-color text-text-color hover:text-text-color"
                    >
                      <BiDotsHorizontalRounded className="w-6 h-6 rotate-90" />
                    </label>
                    <ul className="dropdown-content right-3 menu p-2 shadow bg-base-100 rounded-md mt-2 w-52">
                      <li>
                        <Link to={"/view-invoice"} className="hover:bg-primary">
                          View invoice
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/update-invoice"}
                          className="hover:bg-primary"
                        >
                          Update invoice
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:bg-primary">
                          Download invoice
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>phone</td>
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
                    <div>khjkgj</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>4</td>
                <td>2000$</td>
                <td>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-text-color text-text-color hover:text-text-color"
                    >
                      <BiDotsHorizontalRounded className="w-6 h-6 rotate-90" />
                    </label>
                    <ul className="dropdown-content right-3 menu p-2 shadow bg-base-100 rounded-md mt-2 w-52">
                      <li>
                        <Link to={"/view-invoice"} className="hover:bg-primary">
                          View invoice
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/update-invoice"}
                          className="hover:bg-primary"
                        >
                          Update invoice
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:bg-primary">
                          Download invoice
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>phone</td>
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
                    <div>khjkgj</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>4</td>
                <td>2000$</td>
                <td>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-text-color text-text-color hover:text-text-color"
                    >
                      <BiDotsHorizontalRounded className="w-6 h-6 rotate-90" />
                    </label>
                    <ul className="dropdown-content right-3 menu p-2 shadow bg-base-100 rounded-md mt-2 w-52">
                      <li>
                        <Link to={"/view-invoice"} className="hover:bg-primary">
                          View invoice
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/update-invoice"}
                          className="hover:bg-primary"
                        >
                          Update invoice
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:bg-primary">
                          Download invoice
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>phone</td>
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
                    <div>khjkgj</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>4</td>
                <td>2000$</td>
                <td>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-text-color text-text-color hover:text-text-color"
                    >
                      <BiDotsHorizontalRounded className="w-6 h-6 rotate-90" />
                    </label>
                    <ul className="dropdown-content right-3 menu p-2 shadow bg-base-100 rounded-md mt-2 w-52">
                      <li>
                        <Link to={"/view-invoice"} className="hover:bg-primary">
                          View invoice
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/update-invoice"}
                          className="hover:bg-primary"
                        >
                          Update invoice
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:bg-primary">
                          Download invoice
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>phone</td>
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
                    <div>khjkgj</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>4</td>
                <td>2000$</td>
                <td>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-text-color text-text-color hover:text-text-color"
                    >
                      <BiDotsHorizontalRounded className="w-6 h-6 rotate-90" />
                    </label>
                    <ul className="dropdown-content right-3 menu p-2 shadow bg-base-100 rounded-md mt-2 w-52">
                      <li>
                        <Link to={"/view-invoice"} className="hover:bg-primary">
                          View invoice
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/update-invoice"}
                          className="hover:bg-primary"
                        >
                          Update invoice
                        </Link>
                      </li>
                      <li>
                        <Link className="hover:bg-primary">
                          Download invoice
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>

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
          {/****/}

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
      </div>
    </main>
  );
}

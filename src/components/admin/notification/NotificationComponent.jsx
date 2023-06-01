import React, { Fragment, useState } from "react";
import AssetFiltterComponent from "../asset/AssetFiltterComponent";
import { BsDot, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ChevronUpDownIcon, EyeIcon } from "@heroicons/react/20/solid";
import { Combobox, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";

const people = [
  { id: 1, name: "Sort By" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
];

export default function NotificationComponent() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[0]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const [notifications, setNotification] = useState([
    {
      id: 1,
      profile: "SE",
      name: "jiso",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Compact_disc_album.jpg/800px-Compact_disc_album.jpg",
    },
    {
      id: 2,
      profile: "SE",
      name: "jiso",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://i.pinimg.com/564x/18/40/f1/1840f18b87198ab3b79198979e491b39.jpg",
    },
    {
      id: 3,
      profile: "SE",
      name: "jiso",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://i.pinimg.com/564x/a9/e0/45/a9e045a4cc1e78022ca1b4a275938142.jpg",
    },
    {
      id: 4,
      profile: "SE",
      name: "jiso",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://i.pinimg.com/564x/db/84/6c/db846c57d050b6916fa09ca4773f3ad2.jpg",
    },
    {
      id: 5,
      profile: "SE",
      name: "jiso",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://i.pinimg.com/564x/c9/f2/4c/c9f24c35ec99e28a50dc158abf68e5b8.jpg",
    },
    {
      id: 6,
      profile: "SE",
      name: "jiso",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://i.pinimg.com/564x/2c/a7/95/2ca7954afb804e926221a5f364f7a9fb.jpg",
    },
    {
      id: 7,
      profile: "SE",
      name: "jiso",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Compact_disc_album.jpg/800px-Compact_disc_album.jpg",
    },
    {
      id: 8,
      profile: "SE",
      name: "jiso",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Compact_disc_album.jpg/800px-Compact_disc_album.jpg",
    },
    {
      id: 9,
      profile: "SE",
      name: "jiso",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Compact_disc_album.jpg/800px-Compact_disc_album.jpg",
    },
    {
      id: 10,
      profile: "SE",
      name: "jiso",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Compact_disc_album.jpg/800px-Compact_disc_album.jpg",
    },
  ]);
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
              All <span className="text-pending">List</span> Notification
            </h2>
            <p className="font-sp-pro-text-regular text-sm text-green">
              Active notification
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
          <div className="z-50">
            <div className="relative z-50">
              <div className="z-50 relative w-full cursor-default overflow-hidden text-left rounded-md">
                <input
                  className="w-full border-[#E1E9EE] border rounded-md py-1.5  pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                  id="headlessui-combobox-input-:r19:"
                  role="combobox"
                  type="text"
                  aria-expanded="false"
                  aria-autocomplete="list"
                  data-headlessui-state=""
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-2"
                  id="headlessui-combobox-button-:r1b:"
                  type="button"
                  tabIndex="-1"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-text-color"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* DropDown filter */}

          {/* <div className="z-20">
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
          </div> */}

          {/* add */}
          <div className="block ">
            <div>
              <button
                type="button"
                className="border ml-auto border-yellow text-yellow p-1 px-2 rounded-md font-sp-pro-text-regular text-sm  w-32 flex items-center"
                //   {/* className="bg-primary text-white py-2 px-4 rounded-md max-w-max" */}
              >
                <BsPlus className="w-6 h-6" /> &nbsp; Create New
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* table for list notification */}
      <div
        className="overflow-x-auto px-5 flex-grow"
        style={
          {
            // minHeight: "calc(100vh - 12rem)",
          }
        }
      >
        <table className="table w-full">
          <thead>
            <tr>
              <th className="w-1/12 bg-bg-primary rounded-none py-3">No</th>
              <th className="w-3/12 bg-bg-primary py-3">
                Normal Category Name
              </th>
              <th className="w-3/12 bg-bg-primary py-3">Super Category Name</th>
              <th className="w-3/12 bg-bg-primary py-3">Created Date</th>
              <th className="w-2/12 bg-bg-primary rounded-none py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide divide-slate-800">
            {notifications.map((users) => (
              <tr
                key={users.id}
                className="font-md text-text-color border-none"
              >
                <td className="p-2.5">{users.id}</td>
                <td className="p-2.5">
                  <div className="flex items-center">
                    <div className="relative  mr-3 w-8">
                      <img
                        src={users.src}
                        alt={users.title}
                        loading="lazy"
                        className="rounded-full h-8"
                      />
                    </div>
                    <div>{users.name}</div>
                  </div>
                </td>
                <td className="p-2.5">
                  <div className="flex items-center m-auto space-x-3">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-sp-pro-text-regular text-red-500 text-sm">
                      {users.profile}
                    </span>
                    <span className="font-sp-pro-text-medium text-sm text-text-color">
                      {users.name}
                    </span>
                  </div>
                </td>
                <td className=" text-text-color p-2.5">
                  <div className="flex items-center">
                    <div className="relative  mr-3 w-8 ">
                      <img
                        src={users.src}
                        alt={users.title}
                        loading="lazy"
                        className="rounded-full h-8"
                      />
                    </div>
                    <div>{users.name}</div>
                  </div>
                </td>
                <td className="p-2.5">
                  <div className="flex items-center space-x-4">
                    {/* Edit */}
                    <label
                      htmlFor="modalEdit"
                      className="flex items-center border border-accept text-accept min-w-min px-5 py-1 leading-5 rounded-md"
                      aria-label="Edit"
                    >
                      Edit
                    </label>
                    {/* Delete */}
                    <label
                      htmlFor="modalDelete"
                      className="flex items-center border border-reject text-reject min-w-min px-5 py-1 leading-5 rounded-md"
                      aria-label="Delete"
                    >
                      Delete
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
      </div>
    </main>
  );
}

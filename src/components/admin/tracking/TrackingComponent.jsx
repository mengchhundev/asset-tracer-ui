import React, { Fragment, useState } from "react";
//import combobox
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ReactPaginate from "react-paginate";
import avatar01 from "../../../assets/images/tracking/chair.png";
import avatar02 from "../../../assets/images/tracking/motor_bike.png";
import avatar03 from "../../../assets/images/tracking/paper.png";
import avatar04 from "../../../assets/images/tracking/laptop.png";
import avatar05 from "../../../assets/images/organization/avatar01.png";
import { FiPlus } from "react-icons/fi";

const people = [
  { id: 1, name: "Asset" },
  { id: 2, name: "HDMI" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Mango" },
];

const superCategories = [
  { id: 1, name: "Super Category" },
  { id: 2, name: "HDMI" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Mango" },
];

const normalCategory = [
  { id: 1, name: "Normal Category" },
  { id: 2, name: "HDMI" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Mango" },
];

const owner = [
  { id: 1, name: "Owner" },
  { id: 2, name: "HDMI" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Mango" },
];

const sort = [
  { id: 1, name: "Sort by" },
  { id: 2, name: "HDMI" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Mango" },
];


let organizationList = [
  {
    id: 1,
    name: "HRD Center",
    owner: "Sok Polen",
    memebers: [

    ]
  },
  {
    id: 1,
    name: "HRD Center",
    owner: "Sok Polen",
    memebers: [

    ]
  },
  {
    id: 1,
    name: "HRD Center",
    owner: "Sok Polen",
    memebers: [

    ]
  },
  {
    id: 1,
    name: "HRD Center",
    owner: "Sok Polen",
    memebers: [

    ]
  },
  {
    id: 1,
    name: "HRD Center",
    owner: "Sok Polen",
    memebers: [

    ]
  }
]


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
    <main className="px-4 lg:px-10 py-6 bg-white rounded-2xl relative overflow-hidden h-[calc(100vh-7.8rem)]">
      <div className="gap-6 overflow-hidden z-10">
        <div className="flex-col justify-between gap-4 p-5 mb-5 text">

          {/* header */}
          <div className="md:pb-0 sm:pb-2 min-w-max mb-4">
            <h2 className="text-2xl font-sp-pro-text-semibold">
              All Tracking
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-x-10 gap-y-5">
            <div className="col-span-4 md:col-span-2 xl:col-span-1">
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
            <div className="col-span-4 md:col-span-2 xl:col-span-1">
              {/* filter */}
              <div className="z-20 ">
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
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                  ? "bg-hover-yellow text-text-color"
                                  : "text-text-color"
                                }`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? "font-medium" : "font-normal"
                                      }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
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
            </div>

            <div className="col-span-4 md:col-span-2 xl:col-span-1">
              {/* filter */}
              <div className="z-20 ">
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
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                  ? "bg-hover-yellow text-text-color"
                                  : "text-text-color"
                                }`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? "font-medium" : "font-normal"
                                      }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
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
            </div>

            <div className="col-span-4 md:col-span-2 xl:col-span-1">
              {/* filter */}
              <div className="z-20 ">
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
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                  ? "bg-hover-yellow text-text-color"
                                  : "text-text-color"
                                }`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? "font-medium" : "font-normal"
                                      }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
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
            </div>

            <div className="col-span-4 md:col-span-2 xl:col-span-1">
              {/* filter */}
              <div className="z-20 ">
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
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                  ? "bg-hover-yellow text-text-color"
                                  : "text-text-color"
                                }`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? "font-medium" : "font-normal"
                                      }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
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
            </div>

            <div className="col-span-4 md:col-span-2 xl:col-span-1">
              {/* filter */}
              <div className="z-20 ">
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
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                  ? "bg-hover-yellow text-text-color"
                                  : "text-text-color"
                                }`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? "font-medium" : "font-normal"
                                      }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
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
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between ">
          {/* table */}

          <div
            className="overflow-scroll px-5 flex-grow"
          // style={
          //   {
          //     minHeight: "calc(100vh - 40rem)",
          //   }
          // }
          >
            <table className="table w-full">
              <tbody className="">
                <tr className="text-sm font-sp-pro-text-semibold text-opacity-90 divide-none">
                  <td className="w-1/12 bg-bg-main py-3 text-center">No</td>
                  <td className="w-1/12 bg-bg-main py-3 text-center">
                    Label Code
                  </td>
                  <td className="w-2/12 bg-bg-main py-3 text-center">
                    Asset Name
                  </td>
                  <td className="w-2/12 bg-bg-main py-3 text-center">
                    Category
                  </td>
                  <td className="w-2/12 bg-bg-main py-3 text-center">
                    Status
                  </td>
                  <td className="w-2/12 bg-bg-main py-3 text-center">
                    Owner
                  </td>
                  <td className="w-2/12 bg-bg-main py-3 text-center">
                    Room
                  </td>
                  <td className="w-2/12 bg-bg-main py-3 text-center">
                    Action
                  </td>
                </tr>

                <tr className="text-sm font-sp-pro-text-regular text-center">
                  <td className="w-1/12 py-3 text-center ">
                    1
                  </td>
                  <td className="w-1/12 py-3 text-center ">
                    Mango-M092392
                  </td>
                  <td className="w-3/12 py-3 pl-20">
                    <div className="flex items-center">
                      <div className="relative  mr-3 w-8 h-8 ">
                        <img
                          src={avatar01}
                          loading="lazy"
                        />
                      </div>
                      <div>Chair</div>
                    </div>
                  </td>
                  <td className="w-2/12 py-3 text-center ">
                    Furniture
                  </td>
                  <td>
                    <div className="flex items-center space-x-4 justify-center">
                      <label
                        htmlFor="modalEdit"
                        className="flex items-center border bg-reject bg-opacity-10 border-reject text-reject w-[90px] justify-center px-5 py-1 hover:bg-reject hover:bg-opacity-10 cursor-pointer leading-5 rounded-full"
                        aria-label="Edit"
                      >
                        Issue
                      </label>

                    </div>
                  </td>

                </tr>
                {/* {organizationList.map(list => (
                  <tr className="text-sm font-sp-pro-text-regular text-center">
                    <td className="w-1/12 py-3 text-center ">
                      1
                    </td>
                    <td className="w-1/12 py-3 text-center ">
                      Mango-M092392
                    </td>
                    <td className="w-3/12 py-3 pl-20">
                      <div className="flex items-center">
                        <div className="relative  mr-3 w-8 h-8 ">
                          <img
                            src={avatar05}
                            loading="lazy"
                          />
                        </div>
                        <div>Electronic</div>
                      </div>
                    </td>
                    <td className="w-2/12 py-3">
                      Sok polen
                    </td>

                    <td className="w-2/12 py-3 p-2.5 m-auto">
                      <div className='w-full flex justify-center'>
                        <div className="relative  w-8 h-8 mr-[-14px] z-10">
                          <img
                            src={avatar01}
                            loading="lazy"
                            className="rounded-full h-full w-full"
                          />
                        </div>
                        <div className="relative  w-8 h-8 mr-[-14px] z-20">
                          <img
                            src={avatar02}
                            loading="lazy"
                            className="rounded-full h-full w-full"
                          />
                        </div>
                        <div className="relative  w-8 h-8 mr-[-14px] z-30">
                          <img
                            src={avatar03}
                            loading="lazy"
                            className="rounded-full h-full w-full"
                          />
                        </div>
                        <div className="relative  w-8 h-8 mr-[-14px] z-40">
                          <img
                            src={avatar04}
                            loading="lazy"
                            className="rounded-full h-full w-full"
                          />
                        </div>
                        <div className="relative  w-8 h-8 mr-[-14px] z-50 border-2 text-xs font-sp-pro-text-semibold bg-white  border-bg-primary rounded-full flex items-center justify-center">
                          8 <FiPlus />
                        </div>
                      </div>
                    </td>
                    <td className="w-2/12 py-3">
                      <div className="flex items-center space-x-4 justify-center">
                        <label
                          htmlFor="modalEdit"
                          className="flex items-center border bg-accept bg-opacity-10 border-accept text-accept w-[90px] justify-center px-5 py-1 hover:bg-green hover:bg-opacity-10 cursor-pointer leading-5 rounded-full"
                          aria-label="Edit"
                        >
                          Accept
                        </label>

                      </div>
                    </td>
                  </tr>
                ))} */}

              </tbody>
            </table>
          </div>

          {/* pagination */}
          <div className="w-full flex justify-between items-center text-sm  font-sp-pro-text-medium text-gray-500 h-14 flex-grow-0 px-7">
            <div className="font-sp-pro-text-regular opacity-90">Showing data 1 to 8 of 256K entries</div>
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

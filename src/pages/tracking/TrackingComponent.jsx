import React from "react";
import { AiOutlineCheck, AiOutlineSearch } from "react-icons/ai";
import { BiCheck, BiHome } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { HiOutlineQrcode } from "react-icons/hi";
import { RiBarcodeFill } from "react-icons/ri";
import { TbCalendarStats } from "react-icons/tb";
import { BsHouseCheck } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
// import logo from;
import logo from "../../../src/assets/images/A_Tracer_logo1.png"

//import
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
const people = [
  { id: 1, name: 'Room' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]
// import




export default function TrackingComponent() {
  const myBorderStyle = {
    display: 'inline-block',
    marginTop: '10px', 
    height:'80px',
    borderRight: '2px solid #ccc',
  }

  // under  export 
  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople = query === '' ? people : people.filter((person) =>
    person.name
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(query.toLowerCase().replace(/\s+/g, ''))
  )
  // over return

  
  return (
    <div>
      {/* Tracking data table */}
      <main className="h-full overflow-y-auto">
        <div className="mt-3 p-10 bg-white rounded-3xl overflow-hidden h-[690px]">
          <div className="flex justify-between mb-8 mt-3">
            <div>
              <h2 className="text-2xl  text-gray-700 dark:text-border-gray-light font-sp-pro-text-semibold">
                All Tracking
              </h2>
            </div>
          </div>

          <div className="mt-8">
            <form action="" method="">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-2">
                  <Combobox value={selected} onChange={setSelected}>
                    <div className="relative mt-1 z-20">
                      <div className="relative w-full cursor-default overflow-hidden text-left shadow-md rounded-md">
                        <Combobox.Input
                          className="w-full border border-slate-200 bg-bg-main rounded-md py-2 pl-3 pr-10 text-sm leading-5 text-text-color focus:outline-yellow"
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
                        afterLeave={() => setQuery('')}
                      >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {filteredPeople.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                              Nothing found.
                            </div>
                          ) : (
                            filteredPeople.map((person) => (
                              <Combobox.Option
                                key={person.id}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-hover-yellow text-white' : 'text-gray-900'
                                  }`
                                }
                                value={person}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                      }`}
                                    >
                                      {person.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                          active ? 'text-white' : 'text-text-color'
                                        }`}
                                      >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

              <div className="mt-7">
                <button type="reset" class=" text-sm block text-blue-light">Clear All Filters</button>
              </div>
            </form>
          </div>

          <div className="overflow-x-auto text-text-color z-0 mt-3">
            <table className="table w-full">
              <thead>
                <tr className="text-md tracking-wide text-left">
                  <th>Label code</th>
                  <th>Assets Name</th>
                  <th>Categories</th>
                  <th>Satatus</th>
                  <th>Owner</th>
                  <th>Room</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div class="flex items-center">
                      <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          class="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>Electronic</div>
                    </div>
                  </td>
                  <td>Furniture</td>
                  <td className="">
                    <div class="flex justify-between bg-light-green w-[85px] text-green rounded-lg p-1">
                      <span className="text-green flex">
                        <BiCheck className="w-6 h-6 flex pr-1" />
                        In use
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center">
                      <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          class="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>Mnor</div>
                    </div>
                  </td>
                  <td>Accounting</td>
                  <td>
                    <div class="flex items-center space-x-4 w-20">
                      {/* The button to open modal */}
                      <label
                        htmlFor="my-modal-3"
                        className=" flex items-center border border-primary text-bg-secondary bg-primary px-3 justify-between py-1 font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                      >
                        View Details
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>
                    <div class="flex items-center">
                      <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          class="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>Electronic</div>
                    </div>
                  </td>
                  <td>Furniture</td>
                  <td className="">
                  <div class="flex justify-between bg-reject-light w-[85px] text-reject rounded-lg p-1">
                      <span className="text-reject flex items-center">
                        <IoMdClose className="w-5 h-5 flex pr-1" />
                        In use
                      </span>
                    </div>
{/*                     
                    <div class="bg-red-100 w-[85px] text-green rounded-lg p-1 flex items-center">
                      <span className="flex pr-1">
                        <span>
                          <svg
                            width="15px"
                            height="15px"
                            viewBox="0 0 512 512"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          >
                            <title>cancel</title>
                            <g
                              id="Page-1"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <g
                                id="work-case"
                                fill="red"
                                transform="translate(91.520000, 91.520000)"
                              >
                                <polygon
                                  id="Close"
                                  points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
                                ></polygon>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </span>
                      <span className="text-red-500 flex">Issue</span>
                    </div> */}
                  </td>
                  <td>
                    <div class="flex items-center">
                      <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          class="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>Mnor</div>
                    </div>
                  </td>
                  <td>Accounting</td>
                  <td>
                    <div class="flex items-center space-x-4 w-20">
                      <button
                        class="flex items-center border border-primary text-bg-secondary bg-primary px-3 justify-between py-1 font-medium leading-5 rounded-md dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                        aria-label="Edit"
                      >
                        View Details
                      </button>
                    </div>
                  </td>
                </tr> 
              </tbody>
            </table>
          </div>

          <div class="grid px-4 py-5 text-sm tracking-wide text-gray-500 uppercase border-t dark:border-y-bg-primary bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
            <span class="flex items-center col-span-3">
              Showing 21-30 of 100
            </span>
            <span class="col-span-2"></span>
            <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Table navigation">
                <ul class="inline-flex items-center">
                  <li>
                    <button
                      class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                      aria-label="Previous"
                    >
                      <svg
                        class="w-4 h-4 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-primary border text-white border-slate-200 mx-2">
                      1
                    </button>
                  </li>
                  <li>
                    <button class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      2
                    </button>
                  </li>
                  <li>
                    <button class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      4
                    </button>
                  </li>
                  <li>
                    <span class="p-2.5">...</span>
                  </li>
                  <li>
                    <button class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      8
                    </button>
                  </li>
                  <li>
                    <button class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      9
                    </button>
                  </li>
                  <li>
                    <button
                      class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                      aria-label="Next"
                    >
                      <svg
                        class="w-4 h-4 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
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

      {/* Modol */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="bg-bg-primary p-6 md:w-10/12 sm:w-1/2 rounded-lg relative">
          {/* header */}
          <div className="flex justify-between mb-5">
            <div className="flex">
              <span><BsGraphUp className="w-8 h-8 bg-primary text-white"/></span>
              <span className="pl-3  text-text-color text-xl font-sp-pro-text-semibold"> Tracking Details</span>
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
          <div className=" grid grid-cols-12 gap-10">
            {/* slide 1 */}
            <div className="col-span-6 rounded-lg border shadow-sm border-slate-200">
              <div className="carousel w-full flex top-1/2">
                <div id="slide1" className="carousel-item relative w-full h-[300px] flex justify-center">
                  <img src={logo} className="" />  
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="w-8 h-8 bg-yellow rounded-full p-1 text-center">❮</a> 
                    <a href="#slide2" className="w-8 h-8 bg-yellow rounded-full p-1 text-center">❯</a>
                  </div>
                </div> 

                {/* slide 2 */}
                <div id="slide2" className="carousel-item flex justify-center relative w-full h-[300px]">
                  <img src={logo} alt="" className="" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="w-8 h-8 bg-yellow rounded-full p-1 text-center">❮</a> 
                    <a href="#slide3" className="w-8 h-8 bg-yellow rounded-full p-1 text-center">❯</a>
                  </div>
                </div> 
              </div>
            </div>

            {/* left content  */}
            <div className="col-span-6">
              {/* Identifiers */}
              <div className="mb-3">
                <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">Identifiers</h1>
                <div className="grid grid-cols-12 rounded-lg border shadow-sm border-slate-200">
                  <div className="col-span-6 p-4 border-r-2 border-gray" style={myBorderStyle}>
                    <div className="mt-[-10px]">
                      <label htmlFor="" className="font-sp-pro-text-medium text-text-color">Label code</label>
                      <div className="mt-3">
                        <p className="flex items-center">
                          <span className="pr-3"><HiOutlineQrcode className="w-8 h-8  text-primary"/> </span> 
                          <span className="text-text-color text-sm font-sp-pro-text-regular"> Y8R6E6N9Z3W</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 p-4">
                    <div>
                      <label htmlFor="" className="font-sp-pro-text-medium text-text-color">Serial code</label>
                      <div className="mt-3">
                        <p className="flex items-center">
                          <span className="pr-3"><RiBarcodeFill className="w-8 h-8 text-primary"/> </span>
                          <span className="text-text-color text-sm font-sp-pro-text-regular"> A8H9G6F5C5S4N9S2</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>

              {/* Usage */}
              <div className="mt-5">
                <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">Usage</h1>
                <div className="grid grid-cols-12 rounded-lg border shadow-sm border-slate-200">
                  <div className="col-span-6 p-4 border-r-2 border-gray" style={myBorderStyle}>
                    <div className="mt-[-10px]">
                      <label htmlFor="" className="font-sp-pro-text-medium text-text-color text-base">Status</label>
                      <div className="mt-3">
                        <div class=" bg-lightorange w-[85px] border border-yellow text-yellow rounded-lg p-1">
                          <span className="text-yellow flex">
                            <BiCheck className="w-6 h-6 flex pr-1" />
                            In use
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 p-4">
                    <div>
                      <label htmlFor="" className="font-sp-pro-text-medium text-text-color text-base">Owner</label>
                      <div className="flex items-center mt-2">
                        <img src={logo} alt="background image" className="h-12" />
                        <div class="pl-2">
                          <span class="text-text-color font-sp-pro-text-regular text-sm">
                            Rotanakosal
                            <br />
                          </span>
                          <span className="text-xs text-text-color font-sp-pro-text-regular">Admin</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>

          {/* second contect */}
          <div className=" grid grid-cols-12 gap-10 mt-10">
            {/* right content */}
            <div className="col-span-6">
              <div className="mt-5">
              <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">Asset Information</h1>
                <div className="grid grid-cols-12 rounded-lg border shadow-sm border-slate-200">
                
                  <div className="col-span-6 p-4 border-r-2 border-gray" style={{ display: 'inline-block', height : '180px', marginTop: '10px', borderRight: '2px solid #ccc' }}>
                    <div className="mt-[-10px]">
                    <label htmlFor="" className="font-sp-pro-text-medium text-text-color text-base">Category Type</label>
                    <div className="mt-3">
                        <p className="flex items-center">
                          <span className="bg-blue-400 rounded-full w-[40px] p-2 flex justify-center"><TbCalendarStats className="w-6 h-6 text-white" /></span>
                          <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">Electronic</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 p-4">
                    <div>
                      <label htmlFor="" className="font-sp-pro-text-medium text-text-color text-base">Organization</label>
                      <div className="mt-3">
                        <p className="flex items-center">
                          <span className="bg-lightorange rounded-full w-[40px] p-2 flex justify-center"><BiHome className="w-6 h-6 text-yellow" /></span>
                          <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">KSHRD Center</span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-3">
                      <label htmlFor="" className="font-sp-pro-text-medium text-text-color text-base">Room  Name</label>
                      <div className="mt-3">
                        <p className="flex items-center">
                          <span className="bg-lightorange rounded-full w-[40px] p-2 flex justify-center"><BsHouseCheck className="w-6 h-6 text-yellow" /></span>
                          <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">Siemreap</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
            </div>

            {/* left */}
            <div className="col-span-6">
              <div className="mt-5">
                <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">Admin Information</h1>
                <div className="grid grid-cols-12 rounded-lg border shadow-sm border-slate-200">
                  <div className="col-span-6 p-4 border-r-2 border-gray" style={myBorderStyle}>
                    <div className="mt-[-10px]">
                    <label htmlFor="" className="font-sp-pro-text-medium text-text-color text-base">Create by</label>
                      <div className="flex items-center mt-3">
                        <img src={logo} alt="background image" className="h-12" />
                        <div class="pl-2">
                          <span class="text-text-color font-sp-pro-text-regular text-sm">
                            Rotanakosal
                            <br />
                          </span>
                          <span className="text-xs text-text-color font-sp-pro-text-regular">Admin</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 p-4">
                    <div>
                      <label htmlFor="" className="font-sp-pro-text-medium text-text-color text-base">Create date</label>
                      <div className="mt-3">
                        <p className="flex items-center">
                          <span className="bg-lightorange rounded-full w-[40px] p-2 flex justify-center"><TbCalendarStats className="w-6 h-6 text-yellow" /></span>
                          <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">Thu-08-12-2013 : 12:00</span>
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
  );
}
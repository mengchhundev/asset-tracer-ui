import React from 'react';
import { BookmarkIcon, BookmarkSquareIcon, ChevronDownIcon, HomeIcon, TrashIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import upload from '../../../../assets/images/Room/Upload.png';
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

function UpdateComponent(props) {
    const Room = ["kitchen", "Store", "Class", "Office"];
    const floor = ["GF", "F1", "F2", "F3", "F4"];
    const createBy = ["Hong meng", "Meng hout", "MnoR"];
    const [selectedfloor, setSelectedfloor] = useState("F1");
    const [selectedCreate, setSelectedCreate] = useState("Mno");
    const [selectedRoom, setSelectedRoom] = useState("Office");
    return (
        <>
            <div className="modal">
                <div className="bg-white rounded-lg p-6 w-2/3 font-sp-pro-text-regular" >
                    <div className="flex justify-between">
                        <div className="flex">

                            <HomeIcon className="h-10 w-10 text-white bg-primary p-2 rounded-lg" />
                            <p className="px-6  text-text-color text-[28px] font-sp-pro-text-bold">Room Information</p>
                        </div>
                        <div className="">
                            <label htmlFor="my-modal-5" ><XCircleIcon className="cursor-pointer h-10 w-10 text-[#F90000] text-opacity-40 ml-[-60px]" /></label>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-[22px] flex justify-center text-text-color font-sp-pro-text-semibold">Update  Room Information</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col-span-4  xl:grid-cols-1">
                            <div className=" item-center p-[5%] w-full shadow-sm rounded-lg ">
                                <div className="xl:m-5 grid grid-cols-2 rounded-md p-5 border-primary border-opacity-30 items-center" style={{ border: '1px dotted #F8C400' }}>
                                    <img className="w-3/4 px-20 pt-20 p-5" src={upload} alt="" />
                                    <p className="text-center">Upload Room picture, max size 2MB</p>
                                    <button className="">Browse</button>
                                </div>

                            </div>
                            <div className="xl:flex xl:justify-center text-it xl:m-[5%] w-full">
                                <div className="bg-primary bg-opacity-10 w-full xl:w-9/12 p-3 rounded-lg flex justify-center">
                                    <button className="flex justify-around  text-red-500 font-sp-pro-text-regular text-[20px]"><TrashIcon class="h-6 w-6 text-red-500" />Remove</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8">

                            <div className="grid grid-cols-1  my-5 justify-center shadow-sm w-full">
                                <div >
                                    <div className='xl:p-[2.5%] p-[5%]'>
                                        <label htmlFor="">Room Name</label><br />
                                        <input className="border mt-2 text-text-color md:px-3 px-1 border-text-color border-opacity-30 w-full rounded-md p-2" type="text"
                                            placeholder="SeimReap Class"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-2  w-full justify-between">
                                        <div className="p-[5%]">
                                            <label htmlFor="" className="" >Room Type</label>
                                            <Listbox as="div" className={"mt-2"} value={selectedRoom} onChange={setSelectedRoom}>
                                                {({ open }) => (
                                                    <>
                                                        <div className="relative">
                                                            <span className="inline-block w-full ">
                                                                <Listbox.Button className="pl-3 py-2 w-full text-left  relative border border-slate-200  rounded-md text-text-color">
                                                                    <span className="flex justify-between px-2 truncate">{selectedRoom}<ChevronDownIcon class="h-6 w-6 text-gray-500" /></span>
                                                                </Listbox.Button>
                                                            </span>
                                                            <Transition
                                                                show={open}
                                                                leave=""
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options
                                                                    static
                                                                    className="border w-full mt-2 border-slate-200 bg-white rounded-md absolute z-50 "
                                                                >
                                                                    {Room.map((room) => (
                                                                        <Listbox.Option key={room} value={room}>
                                                                            {({ selected, active }) => (
                                                                                <div
                                                                                    className={`${active
                                                                                        ? "text-white bg-primary"
                                                                                        : "text-gray-900"
                                                                                        } cursor-default select-none relative py-2 pl-10 pr-4`}
                                                                                >
                                                                                    <span
                                                                                        className={`${selected ? "font-semibold" : "font-normal"
                                                                                            }`}
                                                                                    >
                                                                                        {room}
                                                                                    </span>

                                                                                    {selected && (
                                                                                        <span
                                                                                            className={`${active ? "text-white" : "text-indigo-600"
                                                                                                } absolute inset-y-0 left-0 flex items-center pl-2`}
                                                                                        >
                                                                                            <svg
                                                                                                className="h-5 w-5"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                viewBox="0 0 20 20"
                                                                                                fill="currentColor"
                                                                                            >
                                                                                                <path
                                                                                                    fillRule="evenodd"
                                                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                                                    clipRule="evenodd"
                                                                                                />
                                                                                            </svg>
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </>
                                                )}
                                            </Listbox>
                                        </div>
                                        <div className="p-[5%]">

                                            <label htmlFor="" className="" >Creat Date</label> <br />
                                            <input className="border mt-2 text-text-color  px-3 border-text-color border-opacity-30 w-full rounded-md p-2" type="Date"
                                                placeholder="Room Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-2  w-full justify-between">
                                        <div className="p-[5%]">
                                            <label htmlFor="" className="" >Room Floor</label>
                                            <Listbox as="div" className={"mt-2"} value={selectedfloor} onChange={setSelectedfloor}>
                                                {({ open }) => (
                                                    <>
                                                        <div className="relative">
                                                            <span className="inline-block w-full ">
                                                                <Listbox.Button className="pl-3 py-2 w-full text-left focus:outline-none focus:shadow-outline-blue relative border border-slate-200  rounded-md text-gray-800">
                                                                    <span className="flex justify-between px-2 truncate">{selectedfloor}<ChevronDownIcon class="h-6 w-6 text-gray-500" /></span>
                                                                </Listbox.Button>
                                                            </span>
                                                            <Transition
                                                                show={open}
                                                                leave=""
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options
                                                                    static
                                                                    className="border w-full mt-2 border-slate-200 bg-white rounded-md absolute z-50 "
                                                                >
                                                                    {floor.map((room) => (
                                                                        <Listbox.Option key={room} value={room}>
                                                                            {({ selected, active }) => (
                                                                                <div
                                                                                    className={`${active
                                                                                        ? "text-white bg-primary"
                                                                                        : "text-gray-900"
                                                                                        } cursor-default select-none relative py-2 pl-10 pr-4`}
                                                                                >
                                                                                    <span
                                                                                        className={`${selected ? "font-semibold" : "font-normal"
                                                                                            }`}
                                                                                    >
                                                                                        {room}
                                                                                    </span>

                                                                                    {selected && (
                                                                                        <span
                                                                                            className={`${active ? "text-white" : "text-indigo-600"
                                                                                                } absolute inset-y-0 left-0 flex items-center pl-2`}
                                                                                        >
                                                                                            <svg
                                                                                                className="h-5 w-5"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                viewBox="0 0 20 20"
                                                                                                fill="currentColor"
                                                                                            >
                                                                                                <path
                                                                                                    fillRule="evenodd"
                                                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                                                    clipRule="evenodd"
                                                                                                />
                                                                                            </svg>
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </>
                                                )}
                                            </Listbox>
                                        </div>
                                        <div className="p-[5%]">
                                            <label htmlFor="" className="" >Create By</label>
                                            <Listbox as="div" className={"mt-2"} value={selectedCreate} onChange={setSelectedCreate}>
                                                {({ open }) => (
                                                    <>
                                                        <div className="relative">
                                                            <span className="inline-block w-full ">
                                                                <Listbox.Button className="pl-3 py-2 w-full text-left focus:outline-none focus:shadow-outline-blue relative border border-slate-200  rounded-md text-gray-800">
                                                                    <span className=" flex justify-between px-2 truncate">{selectedCreate}<ChevronDownIcon class="h-6 w-6 text-gray-500" />
                                                                    </span>
                                                                </Listbox.Button>
                                                            </span>
                                                            <Transition
                                                                show={open}
                                                                leave=""
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options
                                                                    static
                                                                    className="border w-full mt-2 border-slate-200 bg-white rounded-md absolute z-50 "
                                                                >
                                                                    {createBy.map((room) => (
                                                                        <Listbox.Option key={room} value={room}>
                                                                            {({ selected, active }) => (
                                                                                <div
                                                                                    className={`${active
                                                                                        ? "text-white bg-primary"
                                                                                        : "text-gray-900"
                                                                                        } cursor-default select-none relative py-2 pl-10 pr-4`}
                                                                                >
                                                                                    <span
                                                                                        className={`${selected ? "font-semibold" : "font-normal"
                                                                                            }`}
                                                                                    >
                                                                                        {room}
                                                                                    </span>

                                                                                    {selected && (
                                                                                        <span
                                                                                            className={`${active ? "text-white" : "text-indigo-600"
                                                                                                } absolute inset-y-0 left-0 flex items-center pl-2`}
                                                                                        >
                                                                                            <svg
                                                                                                className="h-5 w-5"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                viewBox="0 0 20 20"
                                                                                                fill="currentColor"
                                                                                            >
                                                                                                <path
                                                                                                    fillRule="evenodd"
                                                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                                                    clipRule="evenodd"
                                                                                                />
                                                                                            </svg>
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </>
                                                )}
                                            </Listbox>
                                        </div>
                                    </div>
                                    <div className="
                                 grid grid-cols-1  w-full justify-between">
                                        <div className='xl:p-[2.5%] p-[5%]'>
                                            <h1 className="text-[18px]  text-text-color font-sp-pro-text-semibold">Room Information</h1>
                                            <textarea className="border border-text-color border-opacity-30 rounded-lg w-full" name="" id="" cols="15" rows="5"></textarea>
                                        </div>
                                    </div>
                                    <div className="flex mt-5 justify-end flex-row w-full">
                                        <div className="bg-slate-500   w-1/4 p-4  rounded-lg flex justify-center">
                                            <button className="flex justify-around text-white font-sp-pro-text-regular items-center  text-[16px]"><XCircleIcon class="h-6 w-6 text-white" />Cancell</button>
                                        </div>
                                        <div className="bg-primary bg-opacity-20 ml-6 w-1/4 p-3 rounded-lg flex justify-center">
                                            <button className="flex justify-around text-primary font-sp-pro-text-regular items-center text-[16px]"><BookmarkIcon class="h-6 w-6 text-primary" />Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateComponent;
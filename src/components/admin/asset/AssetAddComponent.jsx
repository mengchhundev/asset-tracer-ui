import { ChevronDownIcon, HomeIcon, XCircleIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import upload from '../../../assets/images/Room/Upload.png';
import { Listbox, Transition } from '@headlessui/react';
function AssetAddComponent(props) {

    const Room = ["Sr Room", "Admin Room", "PP Room", "BTB Room", "Koskhobg Room"]
    const [selectedRoom, setSelectedRoom] = useState("");

    return (
        <>

            <div className="">
                <div className="bg-white p-10 rounded-lg " >
                    <div className=' text-xl font-sp-pro-text-bold text-text-color text-opacity-90'>
                        <p>Update Asset</p>
                    </div>
                    <hr className='border border-text-color border-opacity-40 my-5' />
                    <div className='grid grid-cols-12'>
                        
                        <div className='col-span-7'>
                            <div className='grid grid-cols-11 mt-5'>
                                <div className=" col-span-5 w-full">
                                    <label htmlFor="" className="" >Select item</label>
                                    <Listbox as="div" className={"mt-2"} value={selectedRoom} onChange={setSelectedRoom}>
                                        {({ open }) => (
                                            <>
                                                <div className="relative">
                                                    <span className="inline-block w-full ">
                                                        <Listbox.Button className="pl-3 py-2 w-full text-left  relative border border-slate-200  rounded-md text-text-color">
                                                            <span className="flex justify-between px-2 truncate">{selectedRoom}<ChevronDownIcon className="h-6 w-6 text-gray-500" /></span>
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
                                <div className="col-span-5 w-full ml-20" >
                                    <label htmlFor="">Owner</label><br />
                                    <input className="border mt-2 text-text-color px-3 border-text-color border-opacity-30 w-full h-[39px] rounded-md p-2" type="text"
                                        placeholder="Room Name"
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-11 mt-5'>
                                <div className="col-span-5 w-full" >
                                    <label htmlFor="">Lable Code</label><br />
                                    <input className="border mt-2 text-text-color px-3 border-text-color border-opacity-30 w-full h-[39px] rounded-md p-2" type="text"
                                        placeholder="Room Name"
                                    />
                                </div>
                                <div className="col-span-5 w-full ml-20" >
                                    <label htmlFor="">Serial Code</label><br />
                                    <input className="border mt-2 text-text-color px-3 border-text-color border-opacity-30 w-full h-[39px] rounded-md p-2" type="text"
                                        placeholder="Room Name"
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-11 mt-5'>
                                <div className=" col-span-5 w-full ">
                                    <label htmlFor="" className="" >Select Category</label>
                                    <Listbox as="div" className={"mt-2"} value={selectedRoom} onChange={setSelectedRoom}>
                                        {({ open }) => (
                                            <>
                                                <div className="relative">
                                                    <span className="inline-block w-full ">
                                                        <Listbox.Button className="pl-3 py-2 w-full text-left  relative border border-slate-200  rounded-md text-text-color">
                                                            <span className="flex justify-between px-2 truncate">{selectedRoom}<ChevronDownIcon className="h-6 w-6 text-gray-500" /></span>
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
                                <div className=" col-span-5 w-full ml-20">
                                    <label htmlFor="" className="" >Select Status</label>
                                    <Listbox as="div" className={"mt-2"} value={selectedRoom} onChange={setSelectedRoom}>
                                        {({ open }) => (
                                            <>
                                                <div className="relative">
                                                    <span className="inline-block w-full ">
                                                        <Listbox.Button className="pl-3 py-2 w-full text-left  relative border border-slate-200  rounded-md text-text-color">
                                                            <span className="flex justify-between px-2 truncate">{selectedRoom}<ChevronDownIcon className="h-6 w-6 text-gray-500" /></span>
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
                            </div>
                            <div className='grid grid-cols-11 mt-5'>
                                <div className=" col-span-5 w-full ">
                                    <label htmlFor="" className="" >Select Room</label>
                                    <Listbox as="div" className={"mt-2"} value={selectedRoom} onChange={setSelectedRoom}>
                                        {({ open }) => (
                                            <>
                                                <div className="relative">
                                                    <span className="inline-block w-full ">
                                                        <Listbox.Button className="pl-3 py-2 w-full text-left  relative border border-slate-200  rounded-md text-text-color">
                                                            <span className="flex justify-between px-2 truncate">{selectedRoom}<ChevronDownIcon className="h-6 w-6 text-gray-500" /></span>
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

                            </div>
                            <div className="w-full mt-5">
                                <h1 className="text-[18px]  text-text-color font-sp-pro-text-regular">Room Information</h1>
                                <textarea className="border border-text-color border-opacity-30 rounded-lg w-full" name="" id="" cols="20" rows="5"></textarea>
                            </div>
                        </div>
                        <div className='col-span-5'>
                        <div className="w-2/3 mx-40 h-full">
                                <div className="m-5 rounded-md p-5 border-primary border-opacity-30 flex flex-col items-center" style={{ border: '1px dotted #F8C400' }}>
                                    <img className="w-3/4 px-20 pt-20 pb-5" src={upload} alt="" />
                                    <p className="text-center">Upload Room picture, max size 2MB</p>
                                    <button className="p-4 m-10 center text-center w-28 shadow-md">Browse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default AssetAddComponent;
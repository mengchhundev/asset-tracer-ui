import React, { Fragment } from 'react'
import hongmenng from "../../../assets/images/Iconteam/hongmenng.png";
import { Tab } from '@headlessui/react';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from 'react';


export default function ProfileComponent() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <main className="overflow-y-auto pb-4 text-text-color">
            <h2 className="mx-5 text-2xl mt-5 text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
                Account Settings
            </h2>


            <Tab.Group>
                <div className="mx-5 mt-5 gap-6 bg-white rounded-xl overflow-hidden" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px" }}>
                    <div className="overflow-x-auto p-5 shadow-sm relative">
                        <div className="dropdown dropdown-bottom dropdown-end absolute right-5 top-5">
                            <button onClick={() => setDropdown(!dropdown)} tabIndex={0} className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-white text-gray hover:text-white">
                                <BiDotsHorizontalRounded className="w-6 h-6" />
                            </button>
                            {dropdown ?
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-md mt-2 w-52 border border-bg-primary"
                                >

                                    <li>
                                        <a>Download invoice</a>
                                    </li>
                                    <li>
                                        <a>Download invoice</a>
                                    </li>
                                </ul>

                                : null}

                        </div>
                        <div className='px-5 py-4'>

                            <div className='flex flex-row gap-10 md:gap-5 justify-center w-full flex-wrap sm:flex-nowrap'>
                                <img src={hongmenng} alt="" className="w-36 h-36 md:w-28 md:h-28" />
                                <div className='flex flex-row justify-start w-full'>
                                    <div className='leading-8 w-full md:w-1/3'>
                                        <div className='flex w-full'>
                                            <p className='w-full font-sp-pro-text-bold'>Leng Hongmeng</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='w-32'>Role</p>
                                            <p className='break-all w-full'>: Admin</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='w-32'>Created Date</p>
                                            <p className='break-all w-full'>: 01 Jan 2023</p>
                                        </div>
                                        <span className='md:hidden block'>
                                            <div className='flex'>
                                                <p className='w-32'>Phone</p>
                                                <p className='break-all w-full'>: 010 10 10 10</p>
                                            </div>
                                            <div className='flex'>
                                                <p className='w-32'>Email</p>
                                                <p className='break-all w-full'>: assettracerteam@gmail.com</p>
                                            </div>
                                            <div className='flex'>
                                                <p className='w-32'>Gender</p>
                                                <p className='break-all w-full'>: Male</p>
                                            </div>
                                            <div className='flex'>
                                                <p className='w-32'>Address</p>
                                                <p className='break-all w-full'>: Phnom Penh</p>
                                            </div>
                                        </span>
                                    </div>
                                    <div className='leading-8 pl-10 border-l-2 border-dashed w-2/3 border-gray-light md:block hidden'>
                                        <div className='flex'>
                                            <p className='w-24'>Phone</p>
                                            <p className='break-all w-1/2'>: 010 10 10 10</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='w-24'>Email</p>
                                            <p className='break-all w-1/2'>: assettracerteam@gmail.com</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='w-24'>Gender</p>
                                            <p className='break-all w-1/2'>: Male</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='w-24'>Address</p>
                                            <p className='break-all w-1/2'>: Phnom Penh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tab.List className="flex space-x-1 text-text-color">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={`px-4 py-3 rounded-sm outline-none border-b-4 border-white ${selected ? "bg-custom-yellow-showdow-light border-b-primary" : ""}`}>
                                    Your Organizations
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={`px-4 py-3 rounded-sm outline-none border-b-4 border-white ${selected ? "bg-custom-yellow-showdow-light border-b-primary" : ""}`}>
                                    Change Password
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                </div>
                <div className='mx-5 my-5 p-5 gap-6 bg-white rounded-xl' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px" }}>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div>
                                Content 1
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='w-full md:w-6/12 lg:w-4/12 py-5 m-auto'>
                                <h2 className='text-center text-2xl font-sp-pro-text-bold my-5 pt-5'>Change Password</h2>
                                <p className='mb-5'>Your password must be at least 8 characters and should include a combination of numbers, letters and special characters &#40;!$@%&#41;</p>
                                <form action="">
                                    <div className="text-left mb-4 mt-2">
                                        <label className="block text-md ml-1 font-medium leading-6 text-gray-900">Current Password</label>
                                        <div className="relative w-full  mt-1 focus-within:text-black border rounded-lg p-2 border-slate-200 bg-bg-main">
                                            <input
                                                name="name"
                                                className="w-full px-2 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                                type="text"
                                                placeholder="Input name..."
                                            />
                                        </div>
                                        {/* {formik.touched.name && formik.errors?.name ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.name}</p> : null} */}
                                    </div>
                                    <div className="text-left mb-4 mt-2">
                                        <label className="block text-md ml-1 font-medium leading-6 text-gray-900">New Password</label>
                                        <div className="relative w-full  mt-1 focus-within:text-black border rounded-lg p-2 border-slate-200 bg-bg-main">
                                            <input
                                                name="name"
                                                className="w-full px-2 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                                type="text"
                                                placeholder="Input name..."
                                            />
                                        </div>
                                        {/* {formik.touched.name && formik.errors?.name ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.name}</p> : null} */}
                                    </div>
                                    <div className="text-left mb-4 mt-2">
                                        <label className="block text-md ml-1 font-medium leading-6 text-gray-900">Confirm New Password</label>
                                        <div className="relative w-full  mt-1 focus-within:text-black border rounded-lg p-2 border-slate-200 bg-bg-main">
                                            <input
                                                name="name"
                                                className="w-full px-2 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                                type="text"
                                                placeholder="Input name..."
                                            />
                                        </div>
                                        {/* {formik.touched.name && formik.errors?.name ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.name}</p> : null} */}
                                    </div>
                                    <div className="text-left mb-4 mt-2 py-3">
                                        <button className='w-full bg-primary text-white rounded-md py-2'>Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>

        </main>
    )
}

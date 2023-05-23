import React, { useState } from 'react'
import logo from '../assets/images/A_Tracer_logo1.png'
import '../../src/index.css'

export default function DashboardComponent() {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    return (
        <div className="flex h-screen font-semibold text-md font-sp-pro-text-regular bg-bg-primary text-secondary">
            <aside className="z-20 hidden w-72 overflow-y-auto md:block flex-shrink-0 bg-white text-sidebar h-screen">
                <div className='flex flex-col justify-between h-screen'>
                    <div className="text-gray-500 dark:text-gray-400">
                        <div className='flex items-center justify-center py-2'>
                            <img src={logo} alt="" className='w-20' />
                            <a
                                className=" font-bold text-gray-800 dark:text-gray-200 text-2xl font-sp-pro-text-bold text-text-color"
                                href="#"
                            >
                                Asset Tracer
                            </a>
                        </div>
                        <ul className='mt-12'>
                            <li className="relative px-6 py-1">
                                <a className="inline-flex items-center w-full bg-white px-4 py-2  text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        ></path>
                                    </svg>
                                    <span className="ml-4">Orgainization</span>
                                </a>
                            </li>
                            <li className="relative px-6 py-1">
                                <a className="inline-flex items-center w-full bg-white px-4 py-2  text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                        ></path>
                                    </svg>
                                    <span className="ml-4">Dashbord</span>
                                </a>
                            </li>
                            <li className="relative px-6 py-1">
                                <button
                                    className="inline-flex items-center justify-between w-full bg-primary px-4 py-3 text-white  text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    aria-haspopup="true">
                                    <span className="inline-flex items-center">
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                            ></path>
                                        </svg>
                                        <span className="ml-4">Category</span>
                                    </span>
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                <template x-if="isPagesMenuOpen">
                                    <ul
                                        x-transition:enter="transition-all ease-in-out duration-300"
                                        x-transition:enter-start="opacity-25 max-h-0"
                                        x-transition:enter-end="opacity-100 max-h-xl"
                                        x-transition:leave="transition-all ease-in-out duration-300"
                                        x-transition:leave-start="opacity-100 max-h-xl"
                                        x-transition:leave-end="opacity-0 max-h-0"
                                        className="p-2 mt-2 space-y-2 overflow-hidden font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                                        aria-label="submenu"
                                    >
                                        <li
                                            className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                        >
                                            <a className="w-full" href="pages/login.html">Login</a>
                                        </li>
                                        <li
                                            className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                        >
                                            <a className="w-full" href="pages/create-account.html">
                                                Create account
                                            </a>
                                        </li>
                                        <li
                                            className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                        >
                                            <a className="w-full" href="pages/forgot-password.html">
                                                Forgot password
                                            </a>
                                        </li>
                                        <li
                                            className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                        >
                                            <a className="w-full" href="pages/404.html">404</a>
                                        </li>
                                        <li
                                            className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                        >
                                            <a className="w-full" href="pages/blank.html">Blank</a>
                                        </li>
                                    </ul>
                                </template>
                            </li>
                            <li className="relative px-6 py-1">
                                <a className="inline-flex items-center w-full bg-white px-4 py-2  text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                        ></path>
                                        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                    </svg>
                                    <span className="ml-4">Charts</span>
                                </a>
                            </li>
                            <li className="relative px-6 py-1">
                                <a className="inline-flex items-center w-full bg-white px-4 py-2  text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                        ></path>
                                    </svg>
                                    <span className="ml-4">Buttons</span>
                                </a>
                            </li>
                            <li className="relative px-6 py-1">
                                <a className="inline-flex items-center w-full bg-white px-4 py-2  text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    <span className="ml-4">Modals</span>
                                </a>
                            </li>
                            <li className="relative px-6 py-1">
                                <a className="inline-flex items-center w-full bg-white px-4 py-2  text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                                    </svg>
                                    <span className="ml-4">Tables</span>
                                </a>
                            </li>

                        </ul>
                        <div className="px-6 my-6">
                            <button
                                className="flex items-center justify-between w-full px-4 py-1 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                            >
                                Create account
                                <span className="ml-2" aria-hidden="true">+</span>
                            </button>
                        </div>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                        <ul className='mt-12'>
                            <li className="relative px-6 py-1">
                                <a className="inline-flex items-center w-full bg-white px-4 py-2  text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        ></path>
                                    </svg>
                                    <span className="ml-4">Notification</span>
                                </a>
                            </li>
                            <li className="relative px-6 py-1">
                                <a className="inline-flex items-center w-full bg-white px-4 py-2  text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                        ></path>
                                    </svg>
                                    <span className="ml-4">Setting</span>
                                </a>
                            </li>

                            <li className="relative px-6 py-1">
                                <a className="inline-flex items-center w-full bg-white px-4 py-2  text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                        ></path>
                                        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                    </svg>
                                    <span className="ml-4">Sign Out</span>
                                </a>
                            </li>

                        </ul>
                        <div className="px-6 my-6">
                            <button
                                className="flex items-center justify-between w-full px-4 py-1 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                            >
                                Create account
                                <span className="ml-2" aria-hidden="true">+</span>
                            </button>
                        </div>
                    </div>
                </div>
            </aside >

            

            <div className="flex flex-col flex-1 w-full">
                <header className="header z-10 py-6 bg-white dark:bg-gray-800">
                    <div
                        className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300"
                    >
                        <button
                            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                            aria-label="Menu"
                        >
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <div className="flex justify-center flex-1 lg:mr-32">

                        </div>
                        <ul className="flex items-center flex-shrink-0 space-x-6">
                            <li className="flex">
                                <button
                                    className="rounded-md focus:outline-none focus:shadow-outline-purple"
                                    aria-label="Toggle color mode"
                                >
                                    <template x-if="!dark">
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                            ></path>
                                        </svg>
                                    </template>
                                    <template x-if="dark">
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </template>
                                </button>
                            </li>
                            <li className="relative">
                                <button
                                    className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                                    aria-label="Notifications"
                                    aria-haspopup="true"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                                        ></path>
                                    </svg>
                                    <span
                                        aria-hidden="true"
                                        className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                                    ></span>
                                </button>
                                <template x-if="isNotificationsMenuOpen">
                                    <ul
                                        x-transition:leave="transition ease-in duration-150"
                                        x-transition:leave-start="opacity-100"
                                        x-transition:leave-end="opacity-0"
                                        className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
                                    >
                                        <li className="flex">
                                            <a
                                                className="inline-flex items-center justify-between w-full px-2 py-1  transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href="#"
                                            >
                                                <span>Messages</span>
                                                <span
                                                    className="inline-flex items-center justify-center px-2 py-1 text-sm font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                                                >
                                                    13
                                                </span>
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <a
                                                className="inline-flex items-center justify-between w-full px-2 py-1  transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href="#"
                                            >
                                                <span>Sales</span>
                                                <span
                                                    className="inline-flex items-center justify-center px-2 py-1 text-md font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                                                >
                                                    2
                                                </span>
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <a
                                                className="inline-flex items-center justify-between w-full px-2 py-1  transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href="#"
                                            >
                                                <span>Alerts</span>
                                            </a>
                                        </li>
                                    </ul>
                                </template>
                            </li>
                            <li className="relative">
                                <button
                                    className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                                    aria-label="Account"
                                    aria-haspopup="true"
                                >
                                    <img
                                        className="object-cover w-8 h-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </button>
                                <template x-if="isProfileMenuOpen">
                                    <ul
                                        x-transition:leave="transition ease-in duration-150"
                                        x-transition:leave-start="opacity-100"
                                        x-transition:leave-end="opacity-0"
                                        className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                                        aria-label="submenu"
                                    >
                                        <li className="flex">
                                            <a
                                                className="inline-flex items-center w-full px-2 py-1  transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href="#"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-3"
                                                    aria-hidden="true"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    ></path>
                                                </svg>
                                                <span>Profile</span>
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <a
                                                className="inline-flex items-center w-full px-2 py-1  transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href="#"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-3"
                                                    aria-hidden="true"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                    ></path>
                                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                <span>Settings</span>
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <a
                                                className="inline-flex items-center w-full px-2 py-1  transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href="#"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-3"
                                                    aria-hidden="true"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                                    ></path>
                                                </svg>
                                                <span>Log out</span>
                                            </a>
                                        </li>
                                    </ul>
                                </template>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className="h-full overflow-y-auto">
                    <div className="px-10 mx-auto grid">


                        <div className="my-10 p-10  gap-6 mb-8 bg-white shadow-gray-light shadow-xs rounded-2xl">
                            <div className='flex items-center justify-between'>
                                <h2 className="text-2xl  text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
                                    All Super Category
                                </h2>
                                <div className="relative w-full max-w-xl mr-6 focus-within:text-black border rounded-lg p-2 border-bg-primary bg-bg-primary">
                                    <div className="absolute inset-y-0 flex items-center pl-2">
                                        <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input
                                        className="w-full pl-8 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                        type="text" placeholder="Search..." aria-label="Search" />
                                </div>
                                <button className='outline p-1.5 px-5 outline-primary rounded-lg outline-2 text-primary'>
                                    <span className='text-lg'>+</span> Create New
                                </button>
                            </div>
                            <div className="min-w-0 bg-white rounded-lg dark:bg-gray-800">
                                <h4 className="mb-8 mt-3  text-green dark:text-gray-300">
                                    Active categories
                                </h4>




                                <div className="w-full overflow-hidden text-text-color">
                                    <div className="w-full overflow-x-auto">
                                        <table className="w-full whitespace-no-wrap">
                                            <thead>
                                                <tr
                                                    className="text-sm font-sp-pro-text-bold tracking-wide text-left text-gray-500 uppercase dark:text-gray-400 dark:bg-gray-800 bg-bg-primary"
                                                >
                                                    <th className="px-4 py-3">NO</th>
                                                    <th className="px-4 py-3">Name</th>
                                                    <th className="px-4 py-3">CREATED DATE</th>
                                                    <th className="px-4 py-3">ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                className="bg-white divide-y dark:divide-bg-primary dark:bg-gray-800 text-md font-sp-pro-text-regular"
                                            >
                                                <tr className="text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-5">
                                                        1
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center">
                                                            <div
                                                                className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                            >
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
                                                            <div>
                                                                <p className="font-semibold">Electronic</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-4 py-5">
                                                        6/10/2020
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center space-x-4 w-20">
                                                            <button
                                                                className="flex items-center border border-green text-green px-5 justify-between py-2 font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Edit"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                                                    ></path>
                                                                </svg>
                                                                Edit

                                                            </button>
                                                            <button
                                                                className="flex items-center border border-red-600 text-red-600 justify-between px-5 py-2 font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Delete"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr className="text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-5">
                                                        1
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center">
                                                            <div
                                                                className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                            >
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
                                                            <div>
                                                                <p className="font-semibold">Electronic</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-4 py-5">
                                                        6/10/2020
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center space-x-4 w-20">
                                                            <button
                                                                className="flex items-center border border-green text-green px-5 justify-between py-2 font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Edit"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                                                    ></path>
                                                                </svg>
                                                                Edit

                                                            </button>
                                                            <button
                                                                className="flex items-center border border-red-600 text-red-600 justify-between px-5 py-2 font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Delete"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr className="text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-5">
                                                        1
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center">
                                                            <div
                                                                className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                            >
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
                                                            <div>
                                                                <p className="font-semibold">Electronic</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-4 py-5">
                                                        6/10/2020
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center space-x-4 w-20">
                                                            <button
                                                                className="flex items-center border border-green text-green px-5 justify-between py-2 font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Edit"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                                                    ></path>
                                                                </svg>
                                                                Edit

                                                            </button>
                                                            <button
                                                                className="flex items-center border border-red-600 text-red-600 justify-between px-5 py-2 font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Delete"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr className="text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-5">
                                                        1
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center">
                                                            <div
                                                                className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                            >
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
                                                            <div>
                                                                <p className="font-semibold">Electronic</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-4 py-5">
                                                        6/10/2020
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center space-x-4 w-20">
                                                            <button
                                                                className="flex items-center border border-green text-green px-5 justify-between py-2 font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Edit"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                                                    ></path>
                                                                </svg>
                                                                Edit

                                                            </button>
                                                            <button
                                                                className="flex items-center border border-red-600 text-red-600 justify-between px-5 py-2 font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Delete"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr className="text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-5">
                                                        1
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center">
                                                            <div
                                                                className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                            >
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
                                                            <div>
                                                                <p className="font-semibold">Electronic</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-4 py-5">
                                                        6/10/2020
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center space-x-4 w-20">
                                                            <button
                                                                className="flex items-center border border-green text-green px-5 justify-between py-2 font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Edit"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                                                    ></path>
                                                                </svg>
                                                                Edit

                                                            </button>
                                                            <button
                                                                className="flex items-center border border-red-600 text-red-600 justify-between px-5 py-2 font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Delete"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-5">
                                                        1
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center">
                                                            <div
                                                                className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                            >
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
                                                            <div>
                                                                <p className="font-semibold">Electronic</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-4 py-5">
                                                        6/10/2020
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="flex items-center space-x-4 w-20">
                                                            <button
                                                                className="flex items-center border border-green text-green px-5 justify-between py-2 font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Edit"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                                                    ></path>
                                                                </svg>
                                                                Edit

                                                            </button>
                                                            <button
                                                                className="flex items-center border border-red-600 text-red-600 justify-between px-5 py-2 font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Delete"
                                                            >
                                                                <svg
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                    <div
                                        className="grid px-4 py-5 text-sm font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-y-bg-primary bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
                                    >
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
                                                        <button
                                                            className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-primary border text-white border-slate-200 mx-2"
                                                        >
                                                            1
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                                                        >
                                                            2
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                                                        >
                                                            3
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                                                        >
                                                            4
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <span className="p-2.5">...</span>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                                                        >
                                                            8
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                                                        >
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

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div >
    )
}

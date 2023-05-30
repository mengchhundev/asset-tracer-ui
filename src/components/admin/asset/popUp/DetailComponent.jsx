import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from 'react';
import { XCircleIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { TbCalendarStats } from "react-icons/tb";
import { HiOutlineQrcode } from "react-icons/hi";
import { RiBarcodeFill } from "react-icons/ri";
import logo from "../../../../assets/images/A_Tracer_logo1.png"
import { BiCheck, BiHome } from "react-icons/bi";
import { BsHouseCheck } from "react-icons/bs";

function DetailComponent(props) {
    const selectedImage = 'https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004_960_720.jpg';
    const [topImage, setTopImage] = useState(selectedImage);

    const handleImageClick = (newImage) => {
        setTopImage(newImage);
    };
    const myBorderStyle = {
        display: "inline-block",
        marginTop: "10px",
        height: "85px",
        borderRight: "2px solid #ccc",
    };
    return (
        <>
            <div className="modal">
                <div className="bg-white rounded-lg p-6 xl:w-[1423px]" >
                    <div className="flex justify-between">
                        <div className="flex">

                            <HomeIcon className="h-10 w-10 text-white bg-primary p-2 rounded-lg" />
                            <p className="px-6 text-text-color text-[28px] font-sp-pro-text-bold">Asset Details</p>
                        </div>
                        <div className="">
                            <label htmlFor="my-modal-3" ><XCircleIcon className="cursor-pointer h-10 w-10 text-[#F90000] text-opacity-40 ml-[-60px]" /></label>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className=" grid grid-cols-12 gap-10">
                            {/* slide 1 */}
                            <div className="col-span-6 rounded-lg border shadow-sm border-slate-200">
                                <div className="carousel w-full flex top-1/2">
                                    <div
                                        id="slide1"
                                        className="carousel-item relative w-full h-[300px] flex justify-center"
                                    >
                                        <img src={logo} className="" />
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

                            {/* left content  */}
                            <div className="col-span-6">
                                {/* Identifiers */}
                                <div className="mb-3">
                                    <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                                        Identifiers
                                    </h1>
                                    <div className="grid grid-cols-12 rounded-lg border shadow-sm border-slate-200">
                                        <div
                                            className="col-span-6 p-4 border-r-2 border-gray"
                                            style={{
                                                height: "80px",
                                                marginTop: "10px",
                                                borderRight: "2px solid #ccc",
                                            }}
                                        >
                                            <div className="mt-[-10px]">
                                                <label
                                                    htmlFor=""
                                                    className="font-sp-pro-text-medium text-text-color"
                                                >
                                                    Label code
                                                </label>
                                                <div className="mt-3">
                                                    <p className="flex items-center">
                                                        <span className="pr-3">
                                                            <HiOutlineQrcode className="w-8 h-8  text-primary" />{" "}
                                                        </span>
                                                        <span className="text-text-color text-sm font-sp-pro-text-regular">
                                                            {" "}
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
                                                        <span className="pr-3">
                                                            <RiBarcodeFill className="w-8 h-8 text-primary" />{" "}
                                                        </span>
                                                        <span className="text-text-color text-sm font-sp-pro-text-regular">
                                                            {" "}
                                                            A8H9G6F5C5S4N9S2
                                                        </span>
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
                                    <div className="grid grid-cols-12 rounded-lg border shadow-sm border-slate-200">
                                        <div
                                            className="col-span-6 p-4 border-r-2 border-gray"
                                            style={{
                                                height: "92px",
                                                marginTop: "10px",
                                                borderRight: "2px solid #ccc",
                                            }}
                                        >
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

                                        <div className="col-span-6 p-4">
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
                        </div>

                        {/* second contect */}
                        <div className=" grid grid-cols-12 gap-10 mt-10">
                            {/* right content */}
                            <div className="col-span-6">
                                <div className="mt-5">
                                    <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                                        Asset Information
                                    </h1>
                                    <div className="grid grid-cols-12 rounded-lg border shadow-sm border-slate-200">
                                        <div
                                            className="col-span-6 p-4 border-r-2 border-gray"
                                            style={{
                                                display: "inline-block",
                                                height: "180px",
                                                marginTop: "10px",
                                                borderRight: "2px solid #ccc",
                                            }}
                                        >
                                            <div className="mt-[-10px]">
                                                <label
                                                    htmlFor=""
                                                    className="font-sp-pro-text-medium text-text-color text-base"
                                                >
                                                    Category Type
                                                </label>
                                                <div className="mt-3">
                                                    <p className="flex items-center">
                                                        <span className="bg-blue-400 rounded-full w-[40px] p-2 flex justify-center">
                                                            <TbCalendarStats className="w-6 h-6 text-white" />
                                                        </span>
                                                        <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">
                                                            Electronic
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
                                                            <img src="https://purepng.com/public/uploads/large/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-2515306895701eqxj.png" alt="" />
                                                        </span>
                                                        <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">
                                                            Iphone
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-6 p-4">
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
                                                            KSHRD Center
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

                            {/* left */}
                            <div className="col-span-6">
                                <div className="mt-5">
                                    <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                                        Admin Information
                                    </h1>
                                    <div className="grid grid-cols-12 rounded-lg border shadow-sm border-slate-200">
                                        <div
                                            className="col-span-6 p-4 border-r-2 border-gray"
                                            style={myBorderStyle}
                                        >
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

                                        <div className="col-span-6 p-4">
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
        </>
    );
}

export default DetailComponent;
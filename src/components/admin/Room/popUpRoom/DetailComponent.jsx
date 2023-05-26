import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from 'react';
import { XCircleIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";


function DetailComponent() {
    const selectedImage = 'https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004_960_720.jpg';
    const [topImage, setTopImage] = useState(selectedImage);

    const handleImageClick = (newImage) => {
        setTopImage(newImage);
    };


    return (
        <>
            <div className="modal">
                <div className="bg-white rounded-lg p-6 w-[1423px]" >
                    <div className="flex justify-between">
                        <div className="flex">

                            <HomeIcon className="h-10 w-10 text-white bg-primary p-2 rounded-lg" />
                            <p className="px-6 text-text-color text-[28px] font-sp-pro-text-bold">Room Details</p>
                        </div>
                        <div className="">
                            <label htmlFor="my-modal" ><XCircleIcon className="cursor-pointer h-10 w-10 text-[#F90000] text-opacity-40 ml-[-60px]" /></label>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-5/12 mr-14">
                            <div className="w-[480px] justify-center mx-6 mt-6 pb-5 rounded-xl shadow-lg">
                                <img
                                    className="object-cover w-full h-full rounded-3xl p-7"
                                    src={topImage}
                                    alt=""
                                    loading="lazy"
                                />
                                <h3 className="text-[24px] font-sp-pro-text-bold px-7">
                                    Siemreap Room
                                </h3>
                                <span className="font-sp-pro-text-semibold px-7 text-[14] text-opacity-30 text-text-color ">Class</span>
                            </div>
                            <div className="flex justify-start">
                                <div className={`w-1/4 ml-6 mt-6 mb-6 transition ease-in-out delay-150 opacity-50 hover:opacity-100 duration-300 `}>
                                    <img
                                        className="object-cover rounded-lg cursor-pointer"
                                        src={"https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004_960_720.jpg"}
                                        alt=""
                                        loading="lazy"
                                        onClick={() =>
                                            handleImageClick(
                                                'https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004_960_720.jpg'
                                            )
                                        }
                                    />
                                </div>
                                <div className={`w-1/4 ml-6 mt-6 mb-6 transition ease-in-out delay-150 opacity-50 hover:opacity-100  duration-300`}>
                                    <img
                                        className="object-cover rounded-lg cursor-pointer"
                                        src={"https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg"}
                                        alt=""
                                        loading="lazy"
                                        onClick={() =>
                                            handleImageClick(
                                                'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg'
                                            )
                                        }
                                    />
                                </div>
                                <div className="w-1/4 ml-6 mt-6 mb-6">
                                    <img
                                        className="object-cover rounded-lg hover:scale-110 cursor-pointer opacity-50 hover:opacity-100 transition ease-in-out delay-150"
                                        src="https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg"
                                        alt=""
                                        loading="lazy"
                                        onClick={() =>
                                            handleImageClick(
                                                'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg'
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-7/12 mr-10">
                            <div className="">
                                <h1 className="text-[22px] text-text-color font-sp-pro-text-semibold">Room Information</h1>
                            </div>
                            <div className="flex justify-center shadow-xl w-full">
                                <div className="w-full flex ">
                                    <div className=" w-full m-10">
                                        <div className="">
                                            <div className="pt-10">
                                                <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Room Name</label>
                                                <div className=" mt-2 flex ">
                                                    <span className="font-sp-pro-text-medium p-2 text-[16] rounded-full bg-emerald-200 text-emerald-500">SR</span>
                                                    <p className="font-sp-pro-text-medium text-[13.05px] text-text-color p-2">Siemreab class</p>
                                                </div>
                                            </div>
                                            <div className="pt-5 ">
                                                <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Organization</label>
                                                <div className=" mt-2 flex ">
                                                    <span className="font-sp-pro-text-medium p-2 text-[16] rounded-full bg-amber-200"><HomeIcon className="h-5 w-5 text-white" /></span>
                                                    <p className="font-sp-pro-text-medium text-[13.05px] text-text-color p-2">KSHRD Center</p>
                                                </div>
                                            </div>
                                            <div className="pt-5">
                                                <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Room Type</label>
                                                <div className=" mt-2 flex ">
                                                    <label className="flex font-sp-pro-text-medium text-[14px] justify-center text-[#FA7436] bg-[#FA7436] bg-opacity-10 w-[118px] p-3 rounded-xl border-blue-200">Class</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" w-full flex border-l-2 border-opacity-30 border-text-color m-14 pl-14">
                                    <div className="">
                                        <div className="pt-10">
                                            <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Created Date</label>
                                            <div className=" mt-2 flex ">
                                                <span className="font-sp-pro-text-medium p-2 text-[16] rounded-full bg-emerald-200 text-emerald-500"><CalendarDaysIcon className="h-6 w-6 text-gray-500" /></span>
                                                <p className="font-sp-pro-text-medium text-[13.05px] text-text-color p-2"> Thu-08-12-2013 : 12:00</p>
                                            </div>
                                        </div>
                                        <div className="pt-5">
                                            <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Create by</label>
                                            <div className=" mt-2 flex ">
                                                <span className="font-sp-pro-text-medium p-2 text-[16] rounded-full bg-amber-200"><UserCircleIcon className="h-6 w-6 text-white" /></span>
                                                <p className="font-sp-pro-text-medium text-[13.05px] text-text-color p-2">KSHRD Center</p>
                                            </div>
                                        </div>
                                        <div className="pt-5">
                                            <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Room Floor</label>
                                            <div className=" mt-2 flex ">
                                                <label className="flex font-sp-pro-text-medium text-[14px] justify-center text-[#FA7436] bg-[#FA7436] bg-opacity-10 w-[118px] p-3 rounded-xl border-blue-200">A0001</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-[22px] pt-4 text-text-color font-sp-pro-text-semibold">Room Information</h1>
                                <p className="text-[16] text-text-color bg-zinc-50 rounded-lg font-sp-pro-text-regular p-5">We’re starting a new school year. I’m starting off with all the
                                    vocabulary associated with schools.
                                    vocabulary associated with schools.
                                    The nouns: pencil, desk, teacher.
                                    The verbs: stand up, raise your hand, read and writ…</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default DetailComponent;
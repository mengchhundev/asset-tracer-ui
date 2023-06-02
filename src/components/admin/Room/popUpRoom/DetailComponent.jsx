import { HomeIcon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useEffect, useState } from 'react';
import { XCircleIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import RoomService from "../../../../redux/services/RoomService";
import { setRoomById } from "../../../../redux/slices/RoomSlice";


function DetailComponent() {
    const selectedImage = 'https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004_960_720.jpg';
    const [topImage, setTopImage] = useState(selectedImage);

    const handleImageClick = (newImage) => {
        setTopImage(newImage);
    };
    const roomDetail = useSelector(state => state.room.roomDetail)

    return (
        <div className="modal">
            <div className="bg-white rounded-lg p-6 modal-box max-w-5xl" >
                <div className="flex justify-between ">
                    <div className="flex">
                        <HomeIcon className="h-10 w-10 text-white bg-primary p-2 rounded-lg" />
                        <p className="px-6 text-text-color text-[28px] font-sp-pro-text-bold">Room Details</p>
                    </div>
                    <div className="">
                    <label htmlFor="detail" ><XMarkIcon className="cursor-pointer h-8 w-8 text-text-color hover:bg-text-color hover:bg-opacity-20 rounded-full p-1 ml-[-60px]" /></label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="xl:w-5/12 md:w-10/12">
                        <div className="w-full justify-center lg:mx-6 lg:mt-6 lg:pb-2 rounded-xl shadow-lg">
                            <img
                                className="object-cover w-full h-full rounded-3xl p-7"
                                src={topImage}
                                alt=""
                                loading="lazy"
                            />
                            <h3 className="text-[24px] font-sp-pro-text-bold px-7">

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
                    <div className="xl:w-7/12 lg:ml-10 sm:w-full rounded-lg">
                        <div className="xl:flex lg:flex-row justify-center shadow-xl w-full py-10">
                            <div className="w-full flex ">
                                <div className="pl-14">
                                    <div className="">
                                        <div className="pt-5">
                                            <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Room Name</label>
                                            <div className=" mt-2 flex ">
                                                <span className="font-sp-pro-text-medium p-2 text-[16] rounded-full bg-emerald-200 text-emerald-500">SR</span>
                                                <p className="font-sp-pro-text-medium text-[13.05px] text-text-color p-2">{roomDetail?.name}</p>
                                            </div>
                                        </div>
                                        <div className="pt-5 ">
                                            <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Organization</label>
                                            <div className=" mt-2 flex ">
                                                <span className="font-sp-pro-text-medium p-2 text-[16] rounded-full bg-amber-200"><HomeIcon className="h-5 w-5 text-white" /></span>
                                                <p className="font-sp-pro-text-medium text-[13.05px] text-text-color p-2">{roomDetail?.organization?.name}</p>
                                            </div>
                                        </div>
                                        <div className="pt-5">
                                            <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Room Type</label>
                                            <div className=" mt-2 flex ">
                                                <label className="flex font-sp-pro-text-medium text-[14px] justify-center text-[#FA7436] bg-[#FA7436] bg-opacity-10 w-[118px] p-3 rounded-xl border-blue-200">{roomDetail?.type}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex xl:border-l-2 border-opacity-30 border-text-color pl-14">
                                <div className="">
                                    <div className="pt-5">
                                        <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Created Date</label>
                                        <div className=" mt-2 flex ">
                                            <span className="font-sp-pro-text-medium p-2 text-[16] rounded-full bg-emerald-200 text-emerald-500"><CalendarDaysIcon className="h-6 w-6 text-gray-500" /></span>
                                            <p className="font-sp-pro-text-medium text-[13.05px] text-text-color p-2"> {roomDetail?.createdAt.split("T")[0]}</p>
                                        </div>
                                    </div>
                                    <div className="pt-5">
                                        <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Create by</label>
                                        <div className=" mt-2 flex ">
                                            <span className="font-sp-pro-text-medium p-2 text-[16] rounded-full bg-amber-200"><UserCircleIcon className="h-6 w-6 text-white" /></span>
                                            <p className="font-sp-pro-text-medium text-[13.05px] text-text-color p-2">{roomDetail?.organization?.users?.name}</p>
                                        </div>
                                    </div>
                                    <div className="pt-5">
                                        <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Room Floor</label>
                                        <div className=" mt-2 flex ">
                                            <label className="flex font-sp-pro-text-medium text-[14px] justify-center text-[#FA7436] bg-[#FA7436] bg-opacity-10 w-[118px] p-3 rounded-xl border-blue-200">{roomDetail?.floor}</label>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-[16px] pt-4 text-text-color font-sp-pro-text-regular">Room Description</h1>
                            <p className="text-[16] text-text-color bg-zinc-50 rounded-lg font-sp-pro-text-regular p-5">{roomDetail?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailComponent;
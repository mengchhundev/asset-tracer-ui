import { HomeIcon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useEffect, useState } from 'react';
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import FileUploadService from "../../../../redux/services/FileUploadService";

function DetailComponent() {
    const roomDetail = useSelector(state => state.room.roomDetail)
    const [image, setImage]=useState("");
   useEffect(()=>{
    setImage(FileUploadService.getImage(roomDetail.image))
   },[roomDetail])
//    console.log(image);
    return (
        <div className="modal">
            <div className="bg-white rounded-lg p-6 modal-box max-w-6xl" >
                <div className="flex justify-between mx-6 ">
                    <div className="flex">
                        <HomeIcon className="h-8 w-8 text-white bg-primary p-1 rounded-lg" />
                        <p className="px-6 text-text-color text-xl font-sp-pro-text-bold">Room Details</p>
                    </div>
                    <div className="">
                    <label htmlFor="detail" ><XMarkIcon className="cursor-pointer h-9 w-9 text-text-color hover:bg-text-color hover:bg-opacity-20 rounded-full p-1 " /></label>
                    </div>
                </div>
                <div className="flex">
                    <div className="xl:w-5/12 md:w-6/12">
                        <div style={{ boxShadow: "0 1px 40px 0 rgb(0 0 0 / 0.06)" }} className="w-full justify-center lg:mx-6 lg:mt-6 lg:pb-2 rounded-xl">
                            <img
                                className="object-cover w-full h-full rounded-3xl p-7"
                                
                                src={image}
                                // src={roomDetail.image}
                                alt=""
                                loading="lazy"
                            />
                            <h3 className="text-[24px] font-sp-pro-text-bold px-7">

                            </h3>
                            <span className="font-sp-pro-text-semibold px-7 text-[14] text-opacity-30 text-text-color ">{roomDetail.name}</span>
                        </div>
                    </div>
                    <div className="xl:w-7/12 md:ml-10 md:w-1/2 rounded-lg">
                        <div style={{ boxShadow: "0 1px 40px 0 rgb(0 0 0 / 0.06)" }} className="xl:flex lg:flex-row rounded-lg justify-center w-full py-5 lg:mt-6">
                            <div className="w-full flex sm:w-1/2 ">
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
                            <div className=" w-full flex xl:border-l-2 sm:w-1/2 border-opacity-30 border-text-color pl-14">
                                <div className="">
                                    <div className="pt-5">
                                        <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Created Date</label>
                                        <div className=" mt-2 flex ">
                                            <span className="font-sp-pro-text-medium p-2 text-[16] rounded-full bg-emerald-200 text-emerald-500"><CalendarDaysIcon className="h-6 w-6 text-gray-500" /></span>
                                            <p className="font-sp-pro-text-medium text-[13.05px] text-text-color p-2"> {roomDetail && roomDetail.createdAt ? roomDetail.createdAt.split("T")[0] : ""}</p>
                                        </div>
                                    </div>
                                    <div className="pt-5">
                                        <label htmlFor="" className="font-sp-pro-text-semibold text-[15px]">Created by</label>
                                        <div className=" mt-2 flex ">
                                            <span className="font-sp-pro-text-medium p-2 text-[16] rounded-full bg-amber-200"><UserCircleIcon className="h-6 w-6 text-white" /></span>
                                            <p className="font-sp-pro-text-medium text-[13.05px] text-text-color p-2">{roomDetail?.createdBy}</p>
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
                            <h1 className="text-[16px] mx-2 mt-2 text-text-color font-sp-pro-text-regular">Room Description</h1>
                            <p style={{ boxShadow: "0 1px 40px 0 rgb(0 0 0 / 0.06)" }} className="xl:flex lg:flex-row rounded-lg w-full p-4 h-24 mt-1">{roomDetail?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailComponent;
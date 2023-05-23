import React from 'react'
import { useState } from 'react';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineCheck } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setAllOrganization, setItem } from '../../../redux/slices/OrganizationSlice';
import jwt_decode from "jwt-decode";
import OrganizationService from '../../../redux/services/OrganizationService';

export default function OrganizationListComponent() {

    const dispatch = useDispatch();
    const organizations = useSelector(state => state.organizaton.data)
    const item = useSelector(state => state.organizaton?.item)
    const organization = JSON.parse(sessionStorage.getItem("organization"))

    const token = localStorage.getItem("token")
    var decoded = jwt_decode(token);
    var userId = decoded.id;

    const getAllOrganizations = () => {
        OrganizationService.getAllOrganizations(userId).then(res => {
            if (res.data?.success) {
                dispatch(setAllOrganization(res.data.payload))
            }
        }, err => {
            dispatch(setAllOrganization([]))
        })
    }

    const handleShowOrganization = (val) => {
        dispatch(setItem(val))
        // sessionStorage.setItem("organization", JSON.stringify(val))
    }

    useState(() => {
        getAllOrganizations()
        console.log(item)
    }, [])

    return (
        <main className="overflow-y-auto pb-4">
            <div className="mx-5 mt-5 p-5 gap-6 bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px" }}>
                <div className="flex flex-col px-5 pt-5 sm:flex-row justify-between mb-5 gap-4">
                    <h2 className="text-2xl  text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
                        All Organizations
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 p-5">
                        {organizations.map(list => (
                            <button type='button' onClick={() => handleShowOrganization(list)} key={list.id} className='border border-bg-primary rounded-xl min-w-max cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200' style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}>
                                <div className="px-6 py-4">
                                    <div className='flex flex-row justify-between items-center'>
                                        <HiOutlineCheck className="w-4 h-4 bg-green text-white rounded-full" />
                                        <div className='bg-bg-primary w-8 h-8 rounded-full flex justify-center items-center'>
                                            <BiDotsHorizontalRounded className="w-6 h-6 text-gray" />
                                        </div>
                                    </div>
                                    <div className="font-bold text-xl mx-auto text-center w-full mt-4 mb-2">
                                        <div className='w-[70px] h-[70px] md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green rounded-full flex justify-center items-center m-auto'>
                                            <p className='font-sp-pro-text-bold text-3xl lg:text-2xl text-white'>{list.name.substring(0, 1)}</p>
                                        </div>
                                    </div>
                                    <p className='font-sp-pro-text-semibold text-lg w-full text-center text-text-color capitalize'>{list.name}</p>
                                    <p className="text-gray-700 text-sm text-center opacity-60">
                                        Organization Owner
                                    </p>
                                    <p className="text-gray-700 text-sm lg:text-md mt-4 text-center text-text-color">
                                        20 members
                                    </p>
                                    <div className='w-full flex flex-row justify-center my-2'>
                                        <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple rounded-full z-50 outline outline-3 outline-white'></div>
                                        <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 ml-[-9px] bg-blue-500 rounded-full outline outline-3 outline-white z-40'></div>
                                        <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 ml-[-9px] bg-primary rounded-full outline outline-3 outline-white z-20'></div>
                                        <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 ml-[-9px] bg-gray-light rounded-full outline outline-3 outline-white z-10'></div>
                                        {/* <div className='w-8 h-8 bg-purple rounded-full'></div>
                                        <div className='w-8 h-8 bg-purple rounded-full'></div> */}
                                    </div>
                                </div>
                                <div className="pb-2 w-full px-8 mb-3 text-center">
                                    <span className="inline-block w-full bg-gray-200 rounded-md py-2 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-blue-100 text-blue-700">Joined</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

            </div>

        </main>
    )
}

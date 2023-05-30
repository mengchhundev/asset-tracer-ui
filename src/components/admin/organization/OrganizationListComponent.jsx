import React from 'react'
import { useState } from 'react';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineCheck } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { setAllOrganization, setItem } from '../../../redux/slices/OrganizationSlice';
import jwt_decode from "jwt-decode";
import OrganizationService from '../../../redux/services/OrganizationService';
import { FiPlus } from "react-icons/fi";
import no_data_pic from '../../../assets/images/empty_box.png'

export default function OrganizationListComponent() {
    const [dropdown, setDropdown] = useState(false);
    const dispatch = useDispatch();
    const organizations = useSelector(state => state.organization.data)
    const item = useSelector(state => state.organization?.item)
    const organization = JSON.parse(sessionStorage.getItem("organization"))
    const navigator = useNavigate()

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
        sessionStorage.setItem("organization", JSON.stringify(val))
        navigator("/dashboard", { state: { hideOrganizationBar: true } })
    }

    useState(() => {
        getAllOrganizations()
    }, [])

    return (
        <main className="overflow-y-auto pb-4 bg-white rounded-xl" style={{ boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px" }}>
            <div className="gap-6 overflow-hidden">
                <div className="flex flex-col px-5 pt-5 sm:flex-row justify-between mb-5 gap-4">
                    <h2 className="text-xl  text-text-color dark:text-gray-200 font-sp-pro-text-semibold">
                        All Organizations
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 p-5">
                        {organizations.length != 0 ? organizations.map(list => (
                            <button type='button' onClick={() => handleShowOrganization(list)} key={list.id} className='border border-bg-primary rounded-xl min-w-max cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200' style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}>
                                <div className="px-6 py-4">
                                    <div className='flex flex-row justify-between items-center'>
                                        <HiOutlineCheck className="w-4 h-4 bg-green text-white rounded-full" />

                                        <div className="dropdown dropdown-bottom">
                                            <button onClick={() => setDropdown(!dropdown)} tabIndex={0} className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-white text-gray hover:text-white">
                                                <BiDotsHorizontalRounded className="w-6 h-6" />
                                            </button>
                                            {dropdown ?
                                                <ul
                                                    tabIndex={0}
                                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-md mt-2 w-52"
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
                                        {list.users.map(user => (
                                            <div key={user.id} className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple rounded-full z-50 outline outline-3 outline-white'>

                                            </div>
                                        ))}
                                        <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 ml-[-9px] bg-gray-light rounded-full outline outline-3 outline-white z-10 flex justify-center items-center'>
                                            <FiPlus />
                                        </div>
                                        {/* <div className='w-8 h-8 bg-purple rounded-full'></div>
                                        <div className='w-8 h-8 bg-purple rounded-full'></div> */}
                                    </div>
                                </div>
                                <div className="pb-2 w-full px-8 mb-3 text-center">
                                    <span className="inline-block w-full bg-border-gray-light rounded-md py-2 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 text-blue-700">Joined</span>
                                </div>
                            </button>
                        )) :
                            <div className='text-center w-full col-span-12 h-[68vh] flex justify-center items-center'>
                                <div className='mt-[-6rem]'>
                                    <img src={no_data_pic} className='w-3/6 m-auto pb-5' />
                                    <h2 className='text-2xl text-gray font-sp-pro-text-bold '>No Organization</h2>
                                    {/* <button
                                        type="submit"
                                        className="bg-primary hover:bg-pending-hover text-white font-sp-pro-text-regular py-2 px-4  rounded"
                                    >
                                        Create Organazation
                                    </button> */}
                                </div>


                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

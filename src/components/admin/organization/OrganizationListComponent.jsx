import React from 'react'
import { useState } from 'react';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineCheck } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { setAllOrganization, setItem } from '../../../redux/slices/OrganizationSlice';
import jwt_decode from "jwt-decode";
import OrganizationService from '../../../redux/services/OrganizationService';
import { FiPlus } from "react-icons/fi";
import no_data_pic from '../../../assets/images/empty_box.png'
import SpinnerComponent from '../spinner/SpinnerComponent'
import LoadingComponent from '../../LoadingComponent';
import '../../../style/shadow.css';
import avatar01 from "../../../assets/images/organization/avatar01.png";
import avatar02 from "../../../assets/images/organization/avatar02.png";
import avatar03 from "../../../assets/images/organization/avatar03.png";
import avatar04 from "../../../assets/images/organization/avatar04.png";
import avatar05 from "../../../assets/images/organization/organization.png";

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

    console.log(document.location)

    return (
        <main className="overflow-y-scroll p-5 con-Shadow h-[calc(100vh-8.3rem)] bg-white rounded-xl overflow-x-hidden">
            {/* <div className="flex flex-wrap justify-around md:justify-start gap-12 p-5 w-full"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-12 p-5 w-full">
                {organizations.length != 0 ? organizations.map(list => (
                    <div key={list.id} className='relative con-Shadow-Card rounded-xl min-w-max w-52 cursor-pointer'>
                        <div className='absolute top-3 right-3 cursor-pointer'>

                            <div className="dropdown dropdown-bottom cursor-pointer">
                                <button onClick={() => setDropdown(!dropdown)} tabIndex={0} className="hover:bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center text-gray">
                                    <BiDotsHorizontalRounded className="w-6 h-6" />
                                </button>
                                {dropdown ?
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content transition-all duration-200 menu p-2 shadow-md focus:bg-none rounded-md mt-2 w-40 z-50 bg-white border border-bg-primary"
                                    >
                                        <li>
                                            <button className='bg-transparent py-2 hover:bg-bg-primary text-text-color'>Delete</button>
                                        </li>
                                    </ul>
                                    : null}

                            </div>
                        </div>
                        <label className="px-6" onClick={() => handleShowOrganization(list)}>
                                <HiOutlineCheck className="w-4 h-4 bg-green text-white rounded-full ml-5 cursor-pointer" />
                                <div className="font-bold text-xl mx-auto text-center w-full mt-4 mb-2 cursor-pointer">
                                    <div className='w-12 h-12 bg-green rounded-full flex justify-center items-center m-auto'>
                                        <p className='font-sp-pro-text-bold text-2xl lg:text-2xl text-white'>{list.name.substring(0, 1)}</p>
                                    </div>
                                </div>
                                <p className='font-sp-pro-text-semibold text-md w-full text-center text-text-color capitalize cursor-pointer'>{list.name}</p>
                                <p className="text-gray-700 text-xs text-center opacity-60 cursor-pointer">
                                    Organization Owner
                                </p>
                                <p className="text-gray-700 text-xs mt-4 text-center text-text-color cursor-pointer">
                                    20 members
                                </p>
                                <div className='w-full flex flex-row justify-center my-1 mb-5 cursor-pointer'>
                                    {/* {list.users.map(user => ( */}
                               
                                        <div className='w-full flex justify-center'>
                                            <div className="relative  w-7 h-7 mr-[-14px] z-10">
                                                <img
                                                    src={avatar01}
                                                    loading="lazy"
                                                    className="rounded-full h-full w-full"
                                                />
                                            </div>
                                            <div className="relative  w-7 h-7 mr-[-14px] z-20">
                                                <img
                                                    src={avatar02}
                                                    loading="lazy"
                                                    className="rounded-full h-full w-full"
                                                />
                                            </div>
                                            <div className="relative  w-7 h-7 mr-[-14px] z-30">
                                                <img
                                                    src={avatar03}
                                                    loading="lazy"
                                                    className="rounded-full h-full w-full"
                                                />
                                            </div>
                                            <div className="relative  w-7 h-7 mr-[-14px] z-40">
                                                <img
                                                    src={avatar04}
                                                    loading="lazy"
                                                    className="rounded-full h-full w-full"
                                                />
                                            </div>
                                            <div className="relative  w-7 h-7 mr-[-14px] z-50 border-2 text-xs font-sp-pro-text-semibold bg-white  border-bg-primary rounded-full flex items-center justify-center">
                                                8 <FiPlus />
                                            </div>
                                        </div>
                                    {/* ))} */}
                                </div>
                                <div className="w-full px-8 text-center cursor-pointer">
                                    <span className="inline-block w-full rounded-md py-2 px-3 text-xs font-semibold text-green bg-green bg-opacity-10">Joined</span>
                                </div>
                            </label>
                    </div>

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
        </main>
    )
}

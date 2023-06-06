import React from 'react'
import { useState } from 'react';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineCheck } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { setAllOrganization, setItem } from '../../../redux/slices/OrganizationSlice';
import jwt_decode from "jwt-decode";
import OrganizationService from '../../../redux/services/OrganizationService';
import { FiPlus, FiSave, FiTrash2 } from "react-icons/fi";
import no_data_pic from '../../../assets/images/empty_box.png'
import '../../../style/shadow.css';
import '../../../style/dropdown.css';
import avatar01 from "../../../assets/images/organization/avatar01.png";
import avatar02 from "../../../assets/images/organization/avatar02.png";
import avatar03 from "../../../assets/images/organization/avatar03.png";
import avatar04 from "../../../assets/images/organization/avatar04.png";
import trash_ico from "../../../assets/images/trash.png"
import { Listbox, Transition } from '@headlessui/react';
import { RiCloseFill } from 'react-icons/ri';

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
        <main className="overflow-y-scroll p-5 con-Shadow bg-white rounded-xl">

            <input type="checkbox" id="delete_org" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div className='absolute right-4 top-3 hover:bg-bg-primary w-8 h-8 flex justify-center rounded-full items-center cursor-pointer'>
                        <label htmlFor="delete_org" ><RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" /></label>
                    </div>
                    <div className="flex justify-start">
                        <div>
                            <img src={trash_ico} width={55} height={55} className="inline-block" />
                        </div>
                        <div className="pl-3 leading-none">
                            <h3 className="font-sp-pro-text-bold text-xl">Delete</h3>
                            <p className="pt-1 py-5">
                                Are you sure want to delete this post?
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-end space-x-4">
                        <label
                            htmlFor='delete_org'
                            className="rounded-md bg-bg-primary py-2 cursor-pointer px-5 text-sm font-sp-pro-text-medium text-text-color text-opacity-90 border border-[#D0D5DD] flex justify-center items-center gap-1"
                        >
                            Cancel
                        </label>
                        <button
                            type="submit"
                            className="bg-opacity-10 rounded-md cursor-pointer bg-reject border border-reject py-2 px-5 text-sm font-sp-pro-text-medium text-reject flex justify-center items-center gap-1"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-wrap justify-around md:justify-start gap-12 p-5 w-full"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-10 gap-y-8 p-5 w-full">
                {organizations.length != 0 ? organizations.map(list => (
                    <div key={list.id} className='relative con-Shadow-Card rounded-xl min-w-max w-52 cursor-pointer'>
                        <div className='absolute top-3 right-3 cursor-pointer'>
                            <Listbox as="div">
                                {({ open }) => (
                                    <>
                                        <div className="relative">
                                            <span className="">
                                                <Listbox.Button className="hover:bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center text-gray   ">
                                                    <span><BiDotsHorizontalRounded className="w-6 h-6" /></span>
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
                                                    className="border border-bg-primary mt-2  bg-white shadow-md rounded-md absolute right-[-2.5rem] z-50 w-40 p-3"
                                                >
                                                    <Listbox.Option>
                                                        <label
                                                            htmlFor='delete_org'
                                                            className={`cursor-pointer text-reject hover:bg-reject hover:bg-opacity-10 inline-block select-none relative py-2 p-4 w-full  text-gray-900 rounded-md `}
                                                        >
                                                            <span className='flex justify-start text-[16px] font-sp-pro-text-semibold items-center gap-2'>
                                                                <FiTrash2 /> Delete
                                                            </span>
                                                        </label>
                                                    </Listbox.Option>
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>

                        </div>
                        <label className="px-6" onClick={() => handleShowOrganization(list)}>
                            <HiOutlineCheck className="w-4 h-4 bg-green text-white rounded-full ml-5 cursor-pointer" />
                            <div className="font-bold text-xl mx-auto text-center w-full mt-4 mb-2 cursor-pointer">
                                <div className='w-12 h-12 bg-green rounded-full flex justify-center items-center m-auto'>
                                    <p className='font-sp-pro-text-bold text-2xl lg:text-2xl text-white'>{list.name.substring(0, 1)}</p>
                                    {/* <p>{list.id}</p> */}
                                </div>
                            </div>
                            <p className='font-sp-pro-text-semibold text-md text-center text-text-color capitalize cursor-pointer line-clamp-1 w-52'>{list.name}</p>
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
                    <div className='text-center w-full col-span-12 h-[calc(100vh-14rem)] flex justify-center items-center'>
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

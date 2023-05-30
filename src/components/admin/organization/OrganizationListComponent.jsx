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
import { Menu } from '@headlessui/react';
import { MenuButton, MenuItem } from '@szhsin/react-menu';

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
        <main className="overflow-y-auto p-5 bg-white rounded-xl" style={{ boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px" }}>
            <div className="gap-6 overflow-hidden">
                <div className="flex flex-col px-5 pt-5 sm:flex-row justify-between mb-5 gap-4">
                    <h2 className="text-2xl  text-text-color dark:text-gray-200 font-sp-pro-text-semibold">
                        All Organizations
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 lg:gap-x-14 p-5">
                        {organizations.length != 0 ? organizations.map(list => (
                            <label key={list.id} className='border relative shadow-sm border-slate-200 rounded-xl min-w-max cursor-pointer'>
                                <div className='absolute top-3 right-3 cursor-pointer'>
{/* 
                                    <Menu
                                        menuButton={
                                            <MenuButton className="flex font-sp-pro-text-medium items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                                                <img
                                                    src={hongmenng}
                                                    className="w-6 h-6 object-cover rounded-full"
                                                />
                                                <span className="header">Leng Hongmeng</span>
                                            </MenuButton>
                                        }
                                        align="end"
                                        arrow
                                        transition
                                        arrowClassName="bg-secondary-100 "
                                        menuClassName="bg-secondary-100 px-4 rounded-lg border"
                                    >
                                        <MenuItem className="p-0 hover:bg-transparent">
                                            <Link
                                                to="/profile"
                                                className="rounded-lg hover:bg-bg-primary mx-2 transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-3 px-6 flex-1"
                                            >
                                                <div className="flex flex-col text-sm">
                                                    <span className="text-sm font-sp-pro-text-medium">Leng Hongmeng</span>
                                                    <span className="text-xs text-gray-500">assettracerteam@gmail.com</span>
                                                </div>
                                            </Link>
                                        </MenuItem>
                                        <hr className="my-4 border-text-color border-opacity-10" />

                                        <MenuItem className="p-0 hover:bg-transparent">
                                            <label htmlFor="my-modal" className="bg-white cursor-pointer justify-center my-1 border mx-3 text-reject hover:border-reject hover:bg-reject hover:text-white border-gray-light rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-2 font-sp-pro-text-medium py-1.5  flex-1"><ArrowRightOnRectangleIcon className="w-5 text-gray-500" />Singout</label>
                                        </MenuItem>
                                    </Menu> */}
                                    {/*                                     
                                    <div className="dropdown dropdown-bottom cursor-pointer">
                                        <button onClick={() => setDropdown(!dropdown)} tabIndex={0} className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center text-gray ">
                                            <BiDotsHorizontalRounded className="w-6 h-6" />
                                        </button>
                                        {dropdown ?
                                            <ul
                                                tabIndex={0}
                                                className="dropdown-content menu p-2 shadow-md focus:bg-none rounded-md mt-2 w-52 z-50 bg-white border border-bg-primary"
                                            >

                                                <li>
                                                    <button>Delete</button>
                                                </li>
                                            </ul>

                                            : null}

                                    </div> */}
                                </div>
                                <label className="px-6 py-4" onClick={() => handleShowOrganization(list)}>
                                    <HiOutlineCheck className="w-4 h-4 bg-green text-white rounded-full ml-5 cursor-pointer" />
                                    <div className="font-bold text-xl mx-auto text-center w-full mt-4 mb-2 cursor-pointer">
                                        <div className='w-[70px] h-[70px] md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green rounded-full flex justify-center items-center m-auto'>
                                            <p className='font-sp-pro-text-bold text-2xl lg:text-2xl text-white'>{list.name.substring(0, 1)}</p>
                                        </div>
                                    </div>
                                    <p className='font-sp-pro-text-semibold text-md w-full text-center text-text-color capitalize cursor-pointer'>{list.name}</p>
                                    <p className="text-gray-700 text-xs text-center opacity-60 cursor-pointer">
                                        Organization Owner
                                    </p>
                                    <p className="text-gray-700 text-sm lg:text-md mt-4 text-center text-text-color cursor-pointer">
                                        20 members
                                    </p>
                                    <div className='w-full flex flex-row justify-center my-3 cursor-pointer'>
                                        {list.users.map(user => (
                                            <div key={user.id} className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple rounded-full z-50 outline outline-3 outline-white'>

                                            </div>
                                        ))}
                                        <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 ml-[-9px] bg-gray-light rounded-full outline outline-3 outline-white z-10 flex justify-center items-center'>
                                            <FiPlus />
                                        </div>

                                    </div>
                                    <div className="pb-2 w-full px-8 text-center cursor-pointer">
                                        <span className="inline-block w-full bg-border-gray-light rounded-md py-1.5 px-3 text-xs font-semibold text-gray-700 mr-2 mb-2 text-blue-700">Joined</span>
                                    </div>
                                </label>
                            </label>
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

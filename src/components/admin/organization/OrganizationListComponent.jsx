import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineCheck } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { setAllOrganization, setItem, setOrgDetail } from '../../../redux/slices/OrganizationSlice';
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
import { Listbox } from '@headlessui/react';
import { RiCloseFill } from 'react-icons/ri';
import FileUploadService from '../../../redux/services/FileUploadService';
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { BsPlus } from 'react-icons/bs';
import CreateOrganizatoinComponent from './popUp/CreateOrganizatoinComponent';
import { TbListDetails } from "react-icons/tb";

const sort = [
    {
        id: "sort_by", name: "Sort by"
    },
    {
        id: "asc", name: "A - Z"
    },
    {
        id: "desc", name: "Z - A"
    }
];

export default function OrganizationListComponent() {

    const [selectedSort, setSelectedSort] = useState(sort[0])
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState()
    const [orgId, setOrgId] = useState()
    const [isUpdateSuccess, setIsUpdateSuccess] = useState(false)
    const orgDetail = useSelector(state => state.organization.orgDetail)

    const handleUpdateSuccess = (val) => {
        setIsUpdateSuccess(val)
    }

    useEffect(() => {
        getAllOrganizations()
        setIsUpdateSuccess(false)
    }, [isUpdateSuccess])

    const filteredOrganizatoin =
        query === ""
            ? sort
            : sort.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );

    const dispatch = useDispatch();
    const organizations = useSelector(state => state.organization.data)
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

    const handleInputSearch = (e) => {
        setSearch(e.target.value)
    };

    const handleShowOrganization = (val) => {
        dispatch(setItem(val))
        sessionStorage.setItem("organization", JSON.stringify(val))
        navigator("/dashboard", { state: { hideOrganizationBar: true } })
    }

    useState(() => {
        getAllOrganizations()
    }, [])

    useEffect(() => {
        if (selectedSort.id == "asc" || selectedSort.id == "desc" || search != null) {
            OrganizationService.getAllOrganizations(userId, search, selectedSort.id).then(res => {
                if (res.data?.success) {
                    dispatch(setAllOrganization(res.data.payload))
                }
            }, err => {
                dispatch(setAllOrganization([]))
            })
        }

    }, [selectedSort, search])

    const handleDeleteOrganization = () => {
        OrganizationService.deleteOrganization(orgId).then(res => {
            if (res.data.success) {
                getAllOrganizations()
                document.getElementById("delete_org").click()
            }
        })
    }

    const handleSetOrgDetail = (val) => {
        dispatch(setOrgDetail(val))
    }

    return (
        <main className="p-5 lg:px-3 con-Shadow bg-white rounded-xl min-h-[calc(100vh-9rem)]">
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
                                Are you sure want to delete this organization?
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
                            onClick={handleDeleteOrganization}
                            type="button"
                            className="bg-opacity-10 rounded-md cursor-pointer bg-reject border border-reject py-2 px-5 text-sm font-sp-pro-text-medium text-reject flex justify-center items-center gap-1"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            {/* Update */}

            <CreateOrganizatoinComponent className="modal" val={orgDetail} handleUpdateSuccess={handleUpdateSuccess} />

            <div className="xl:flex xl:flex-row md:flex-col sm:flex-col justify-between gap-5 p-5">
                {/* header */}
                <div className="md:pb-0 sm:pb-2 min-w-max mb-4 xl:mb-0">
                    <h2 className="text-2xl font-sp-pro-text-semibold">
                        All <span className="text-pending">Organization</span> Management
                    </h2>
                </div>

                {/* search */}
                <div className="md:flex md:flex-row justify-start gap-6 ">
                    <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                        <div className="relative text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20   bg-[#F9FBFF]  border rounded-lg block w-full py-2 px-1 mb-1  focus:border-primary">
                            <div className="absolute inset-y-0 flex items-center pl-2">
                                <svg
                                    className="w-5 h-5 text-primary"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                className="w-full pl-10 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                type="text"
                                name="search"
                                onInput={handleInputSearch}
                                placeholder="Search..."
                            />
                        </div>
                    </div>

                    {/* filter */}
                    <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                        <Combobox
                            value={selectedSort}
                            onChange={setSelectedSort}
                            className="z-20"
                        >
                            <div className="relative z-20">
                                <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                                    <Combobox.Input
                                        className="w-full border-[#E1E9EE] border rounded-lg bg-[#F9FBFF] py-2  pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                                        displayValue={(val) => val.name}
                                        onChange={(event) => setQuery(event.target.value)}
                                    />
                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-text-color"
                                            aria-hidden="true"
                                        />
                                    </Combobox.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-10sp0"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    afterLeave={() => setQuery("")}
                                >
                                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {filteredOrganizatoin.length === 0 && query !== "" ? (
                                            <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                                Nothing found.
                                            </div>
                                        ) : (
                                            filteredOrganizatoin.map((val, index) => (
                                                <Combobox.Option
                                                    key={index}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                            ? "bg-custom-yellow-showdow-light text-text-color"
                                                            : "text-text-color"
                                                        }`
                                                    }
                                                    value={val}
                                                >
                                                    {({ selectedSort, active }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selectedSort ? "font-medium" : "font-normal"
                                                                    }`}
                                                            >
                                                                {val.name}
                                                            </span>
                                                            {selectedSort ? (
                                                                <span
                                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
                                                                        }`}
                                                                >
                                                                    <CheckIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Combobox.Option>
                                            ))
                                        )}
                                    </Combobox.Options>
                                </Transition>
                            </div>
                        </Combobox>
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-wrap justify-around md:justify-start gap-12 p-5 w-full"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-10 lg:gap-14 gap-y-8 p-5 w-full">
                {organizations.length != 0 ? organizations.map((list, index) => (
                    <div key={index} className='relative con-Shadow-Card rounded-xl min-w-max w-52 cursor-pointer'>
                        <div className='absolute top-3 right-3 cursor-pointer'>
                            <Listbox as="div">
                                {({ open }) => (
                                    <>
                                        <div className="relative">
                                            <span className="">
                                                <Listbox.Button className="hover:bg-bg-primary focus:bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center text-gray   ">
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
                                                    className="border border-bg-primary mt-2  bg-white shadow-md rounded-md absolute right-0 z-50 w-40 p-2"
                                                >
                                                    <Listbox.Option>
                                                        <label
                                                            onClick={() => showOrganizationDetail(list)}
                                                            htmlFor='show-organization'
                                                            className={`cursor-pointer text-text-color hover:bg-bg-primary inline-block select-none relative py-2 p-4 w-full text-gray-900 rounded-md `}
                                                        >
                                                            <span className='flex justify-start text-[14px] font-sp-pro-text-semibold items-center gap-2'>
                                                                <TbListDetails /> Show Detail
                                                            </span>
                                                        </label>
                                                        {list.roleName == "ADMIN" &&
                                                            <>
                                                                <label
                                                                    onClick={() => handleSetOrgDetail(list)}
                                                                    htmlFor='create-organization'
                                                                    className={`cursor-pointer text-green hover:bg-green hover:bg-opacity-10 inline-block select-none relative py-2 p-4 w-full text-gray-900 rounded-md `}
                                                                >
                                                                    <span className='flex justify-start text-[14px] font-sp-pro-text-semibold items-center gap-2'>
                                                                        <FiTrash2 /> Edit
                                                                    </span>
                                                                </label>
                                                                <label
                                                                    onClick={() => setOrgId(list.id)}
                                                                    htmlFor='delete_org'
                                                                    className={`cursor-pointer text-reject hover:bg-reject hover:bg-opacity-10 inline-block select-none relative py-2 p-4 w-full  text-gray-900 rounded-md `}
                                                                >
                                                                    <span className='flex justify-start text-[14px] font-sp-pro-text-semibold items-center gap-2'>
                                                                        <FiTrash2 /> Delete
                                                                    </span>
                                                                </label>
                                                            </>
                                                        }

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

                            {list.logo != "" && list.logo != null ? <>
                                <div className="font-bold text-xl mx-auto text-center w-full mt-4 mb-2 cursor-pointer">
                                    <img src={FileUploadService.getImage(list.logo)} className='w-12 h-12  rounded-full flex justify-center items-center m-auto' />
                                </div>
                            </> : <>
                                <div className="font-bold text-xl mx-auto text-center w-full mt-4 mb-2 cursor-pointer">
                                    <div className='w-12 h-12 bg-green rounded-full flex justify-center items-center m-auto'>
                                        <p className='font-sp-pro-text-bold text-2xl lg:text-2xl text-white'>{list.name.substring(0, 1)}</p>
                                    </div>
                                </div>
                            </>}
                            <p className='font-sp-pro-text-semibold text-md w-full text-center text-text-color capitalize cursor-pointer'>{list.name}</p>
                            <p className="text-gray-700 text-xs text-center opacity-60 cursor-pointer">
                                {list.roleName == "ADMIN" ? "Owner" : "Member"}
                            </p>
                            <p className="text-gray-700 text-xs mt-4 text-center text-text-color cursor-pointer">
                                {list.totalUser} {list.totalUser <= 1 ? "Member" : "Members"}
                            </p>
                            <div className='w-full flex flex-row justify-center my-1 mb-5 cursor-pointer'>
                                <div className='w-full flex justify-center'>
                                    {list.users.map((user, index) => (
                                        <span key={index}>
                                            {
                                                user.id != userId ?
                                                    <>
                                                        {
                                                            user?.image ?
                                                                <div className="relative  w-7 h-7 mr-[-14px] z-10">
                                                                    <img
                                                                        src={FileUploadService.getImage(user.image)}
                                                                        loading="lazy"
                                                                        className="rounded-full h-full w-full"
                                                                    />
                                                                </div>
                                                                :
                                                                <div className="relative  w-7 h-7 mr-[-14px] z-10 bg-green rounded-full flex justify-center items-center text-white shadow-sm">
                                                                    {user.name.substring(0, 1)}
                                                                </div>
                                                        }
                                                    </> : <>
                                                        <div className="invisible w-7 h-7 mr-[-28px] z-10 bg-green rounded-full flex justify-center items-center text-white shadow-sm">
                                                            {user.name.substring(0, 1)}
                                                        </div>
                                                    </>
                                            }
                                        </span>
                                    ))}

                                    {/* <div className="relative  w-7 h-7 mr-[-14px] z-50 border-2 text-xs font-sp-pro-text-semibold bg-white  border-bg-primary rounded-full flex items-center justify-center">
                                        8 <FiPlus />
                                    </div> */}
                                </div>

                            </div>
                            <div className="w-full px-8 text-center cursor-pointer">
                                <span className="inline-block w-full rounded-md py-2 px-3 text-xs font-semibold text-green bg-green bg-opacity-10">Joined</span>
                            </div>
                        </label>
                    </div>

                )) :
                    <div className='text-center w-full col-span-12 h-[calc(100vh-18.5rem)] flex justify-center items-center'>
                        <div className='mt-[-6rem]'>
                            <img src={no_data_pic} className='w-2/6 xl:w-3/6 m-auto pb-5' />
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

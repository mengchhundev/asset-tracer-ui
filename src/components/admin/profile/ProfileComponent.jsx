import React, { Fragment, useEffect } from 'react'
import hongmenng from "../../../assets/images/Iconteam/hongmenng.png";
import { Listbox, Tab, Transition } from '@headlessui/react';
import { BiDotsHorizontalRounded, BiExpandVertical } from "react-icons/bi";
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup"
import jwt_decode from "jwt-decode";
import UserService from '../../../redux/services/UserService';
import successIcon from '../../../assets/images/success.png'
import verifyIcon from '../../../assets/images/false.png'
import { FaUserEdit } from "react-icons/fa";
import { FiPlus } from 'react-icons/fi';
import { HiOutlineCheck } from 'react-icons/hi';

export default function ProfileComponent() {
    const [isShowSuccess, setIsShowSuccess] = useState(false)
    const [isShowErr, setIsShowErr] = useState(false)
    const [isSuccessUpdateProfile, setIsSuccessUpdateProfile] = useState(false)
    const [newData, setNewData] = useState({
        oldPassword: "", newPassword: "", confirmNewPassword: ""
    })
    const [isShowUpdateProfile, setIsShowUpdateProfile] = useState(false)
    console.log(isShowUpdateProfile)
    const [file, setFile] = useState()

    const token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    var userId = decoded.id;

    const handleInputChange = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value })
    };

    const handleFile = (event) => {
        // setFile(event.target.file[0])
    }
    const formData = new FormData();

    // Change Password
    const formik = useFormik({
        initialValues: newData,
        validationSchema: Yup.object().shape({
            oldPassword: Yup.string().required("Current password is required"),
            newPassword: Yup.string().required("New password is required"),
            confirmNewPasswrod: Yup.string().required("Confirm new password is required").oneOf([Yup.ref('newPassword'), null], 'Password not match'),
        }),
        onSubmit: (val, { resetForm }) => {
            handleChangePassword()
            resetForm(val = { oldPassword: "", newPassword: "", confirmNewPasswrod: "" })
            setNewData({ oldPassword: "", newPassword: "", confirmNewPasswrod: "" })
        }
    });

    const handleChangePassword = () => {
        UserService.changeUserPassword(userId, newData).then(res => {
            if (res.data?.success) {
                setIsShowSuccess(true)
                setIsShowErr(false)
            }
        }, err => {
            if (err?.response?.data.status == 400) {
                setIsShowSuccess(false)
                setIsShowErr(true)
            }
        })
    }

    // Update Profile
    const [profile, setProfile] = useState({
        name: "", gender: "", phone: "", address: ""
    })

    const handleInputChangeProfile = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    };

    const handleUpdateProfile = () => {
        UserService.updateProfile(userId, profile).then(res => {
            if (res.data?.success) {
                setIsSuccessUpdateProfile(true)
                setIsShowUpdateProfile(false)
            }
        }, err => {
        })
    }

    const updateProfileFormik = useFormik({
        initialValues: profile,
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name is required"),
            gender: Yup.string().required("Gender is required"),
        }),
        onSubmit: (val, { resetForm }) => {
            handleUpdateProfile()
            resetForm(val = {})
            setProfile({ name: "", gender: "", phone: "", address: "" })
        }
    })

    return (
        <main className="overflow-y-auto pb-4 text-text-color">
            <h2 className="text-2xl mt-5 text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
                Account Settings
            </h2>
            <Tab.Group>
                <div className="mt-5 gap-6 bg-white rounded-xl overflow-hidden" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px" }}>
                    <div className="overflow-x-auto p-5 shadow-sm relative">
                        <label
                            onClick={() => setIsShowUpdateProfile(!isShowUpdateProfile)}
                            id='profile-troggle'
                            htmlFor="update-profile"
                            className="absolute flex-row right-5 top-5 bg-bg-primary w-9 h-9 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-white text-gray hover:text-white"
                        >
                            <FaUserEdit />
                        </label>

                        <input type="checkbox" id="update-profile" className="modal-toggle" />
                        {isShowUpdateProfile ?
                            <div className={`modal ${isShowUpdateProfile ? "modal-open" : ""}`}>
                                <div className="bg-white p-6 w-1/2 rounded-lg relative">
                                    <div className="flex justify-between mb-5">
                                        <div className="flex">
                                            <span className="pl-3 text-text-color text-xl font-sp-pro-text-semibold">Update Profile</span>
                                        </div>
                                        <div className="flex">
                                            <label
                                                onClick={() => setIsShowUpdateProfile(false)}
                                                htmlFor="update-profile"
                                                className="btn bg-transparent hover:bg-bg-primary-strock border-none hover text-text-color btn-sm btn-circle absolute right-4 top-4"
                                            >
                                                ✕
                                            </label>
                                        </div>
                                    </div>

                                    <div className='m-3'>
                                        <h3 className='text-center font-sp-pro-text-bold text-lg my-3'>My Profile</h3>
                                        <div className='w-32 h-32 bg-blue-600 rounded-full m-auto relative overflow-hidden'>
                                            <label htmlFor='updateProfile' type='file' className='w-full absolute bg-gray bottom-0 py-1.5 text-xs cursor-pointer text-white text-center'>Upload</label>
                                            <input type="file"
                                                id='updateProfile'
                                                name="file"
                                                multiple
                                                accept="image/*"
                                                onChange={handleFile} className='hidden' />
                                        </div>

                                        <form onSubmit={updateProfileFormik.handleSubmit}>
                                            <div className='w-full flex flex-wrap mt-5'>

                                                <div className="text-left mb-4 w-full mt-2 md:w-1/2 px-3">
                                                    <label className="block text-md ml-1 font-medium leading-6 text-gray-900">Name</label>
                                                    <input
                                                        onInput={handleInputChangeProfile}
                                                        onChange={updateProfileFormik.handleChange}
                                                        value={profile.name}
                                                        name="name"
                                                        type='text'
                                                        placeholder='Name'
                                                        className='relative w-full px-3 outline-none mt-1 border rounded-lg p-2 border-slate-200 bg-bg-main '
                                                    />
                                                    {updateProfileFormik.touched.name && updateProfileFormik.errors?.name ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{updateProfileFormik.errors.name}</p> : null}
                                                </div>
                                                <div className="text-left mb-4 w-full mt-2 md:w-1/2 px-3">
                                                    <label className="block text-md ml-1 font-medium leading-6 text-gray-900">Gender</label>
                                                    <select
                                                        onInput={handleInputChangeProfile}
                                                        onChange={updateProfileFormik.handleChange}
                                                        value={profile.gender}
                                                        name="gender"
                                                        placeholder='Gender'
                                                        className='relative w-full  mt-1 border rounded-lg p-2.5 border-slate-200 bg-bg-main '
                                                    >
                                                        <option value="" disabled>Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                    {updateProfileFormik.touched.gender && updateProfileFormik.errors?.gender ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{updateProfileFormik.errors.gender}</p> : null}
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-wrap'>

                                                <div className="text-left mb-4 w-full mt-2 md:w-1/2 px-3">
                                                    <label className="block text-md ml-1 font-medium leading-6 text-gray-900">Phone</label>
                                                    <input
                                                        onInput={handleInputChangeProfile}
                                                        onChange={updateProfileFormik.handleChange}
                                                        value={profile.phone}
                                                        name="phone"
                                                        type='number'
                                                        placeholder='Phone'
                                                        className='relative w-full px-3 outline-none mt-1 border rounded-lg p-2 border-slate-200 bg-bg-main '
                                                    />
                                                    {updateProfileFormik.touched.phone && updateProfileFormik.errors?.phone ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{updateProfileFormik.errors.phone}</p> : null}
                                                </div>
                                                <div className="text-left mb-4 w-full mt-2 md:w-1/2 px-3">
                                                    <label className="block text-md ml-1 font-medium leading-6 text-gray-900">Address</label>
                                                    <textarea
                                                        rows={1}
                                                        onInput={handleInputChangeProfile}
                                                        onChange={updateProfileFormik.handleChange}
                                                        value={profile.address}
                                                        name="address"
                                                        placeholder='Address'
                                                        className='relative w-full  mt-1 border rounded-lg p-2.5 border-slate-200 bg-bg-main '
                                                    >
                                                    </textarea>
                                                    {updateProfileFormik.touched.address && updateProfileFormik.errors?.address ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{updateProfileFormik.errors.address}</p> : null}
                                                </div>
                                            </div>
                                            <div className='w-full md:w-1/3 m-auto mt-5'>
                                                <button type='submit' className="inline-block w-full m-auto rounded text-center bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white cursor-pointer">Save Changes</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            : null}
                        <div className='px-5 py-4'>
                            <div className='flex flex-row gap-10 md:gap-5 justify-center w-full flex-wrap sm:flex-nowrap'>
                                <img src={hongmenng} alt="" className="w-36 h-36 md:w-28 md:h-28" />
                                <div className='flex flex-row justify-start w-full'>
                                    <div className='leading-8 w-full md:w-1/3'>
                                        <div className='flex w-full'>
                                            <p className='w-full font-sp-pro-text-bold'>Leng Hongmeng</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='w-32'>Role</p>
                                            <p className='break-all w-full'>: Admin</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='w-32'>Created Date</p>
                                            <p className='break-all w-full'>: 01 Jan 2023</p>
                                        </div>
                                        <span className='md:hidden block'>
                                            <div className='flex'>
                                                <p className='w-32'>Phone</p>
                                                <p className='break-all w-full'>: 010 10 10 10</p>
                                            </div>
                                            <div className='flex'>
                                                <p className='w-32'>Email</p>
                                                <p className='break-all w-full'>: assettracerteam@gmail.com</p>
                                            </div>
                                            <div className='flex'>
                                                <p className='w-32'>Gender</p>
                                                <p className='break-all w-full'>: Male</p>
                                            </div>
                                            <div className='flex'>
                                                <p className='w-32'>Address</p>
                                                <p className='break-all w-full'>: Phnom Penh</p>
                                            </div>
                                        </span>
                                    </div>
                                    <div className='leading-8 pl-10 border-l-2 border-dashed w-2/3 border-gray-light md:block hidden'>
                                        <div className='flex'>
                                            <p className='w-24'>Phone</p>
                                            <p className='break-all w-1/2'>: 010 10 10 10</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='w-24'>Email</p>
                                            <p className='break-all w-1/2'>: assettracerteam@gmail.com</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='w-24'>Gender</p>
                                            <p className='break-all w-1/2'>: Male</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='w-24'>Address</p>
                                            <p className='break-all w-1/2'>: Phnom Penh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tab.List className="flex space-x-1 text-text-color">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={`px-4 py-3 rounded-sm outline-none border-b-4 border-white ${selected ? "bg-custom-yellow-showdow-light border-b-primary" : ""}`}>
                                    Your Organizations
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={`px-4 py-3 rounded-sm outline-none border-b-4 border-white ${selected ? "bg-custom-yellow-showdow-light border-b-primary" : ""}`}>
                                    Change Password
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                </div>
                <div className='my-5 p-5 gap-6 bg-white rounded-xl' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px" }}>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className='w-full flex gap-6'>
                                <button type='button' className='border border-bg-primary rounded-xl min-w-max cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200' style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}>
                                    <div className="px-6 py-4">
                                        <div className='flex flex-row justify-between items-center'>
                                            <HiOutlineCheck className="w-4 h-4 bg-green text-white rounded-full" />

                                            <div className="dropdown dropdown-bottom">
                                                <button tabIndex={0} className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-white text-gray hover:text-white">
                                                    <BiDotsHorizontalRounded className="w-6 h-6" />
                                                </button>
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

                                            </div>
                                        </div>
                                        <div className="font-bold text-xl mx-auto text-center w-full mt-4 mb-2">
                                            <div className='w-[70px] h-[70px] md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green rounded-full flex justify-center items-center m-auto'>
                                                <p className='font-sp-pro-text-bold text-3xl lg:text-2xl text-white'>k</p>
                                            </div>
                                        </div>
                                        <p className='font-sp-pro-text-semibold text-lg w-full text-center text-text-color capitalize'>Leng Hongmeng</p>
                                        <p className="text-gray-700 text-sm text-center opacity-60">
                                            Organization Owner
                                        </p>
                                        <p className="text-gray-700 text-sm lg:text-md mt-4 text-center text-text-color">
                                            20 members
                                        </p>
                                        <div className='w-full flex flex-row justify-center my-2'>
                                            <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple rounded-full z-50 outline outline-3 outline-white'>

                                            </div>
                                            <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple rounded-full z-50 outline outline-3 outline-white'>

                                            </div>
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
                                <button type='button' className='border border-bg-primary rounded-xl min-w-max cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200' style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}>
                                    <div className="px-6 py-4">
                                        <div className='flex flex-row justify-between items-center'>
                                            <HiOutlineCheck className="w-4 h-4 bg-green text-white rounded-full" />

                                            <div className="dropdown dropdown-bottom">
                                                <button tabIndex={0} className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-white text-gray hover:text-white">
                                                    <BiDotsHorizontalRounded className="w-6 h-6" />
                                                </button>
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

                                            </div>
                                        </div>
                                        <div className="font-bold text-xl mx-auto text-center w-full mt-4 mb-2">
                                            <div className='w-[70px] h-[70px] md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green rounded-full flex justify-center items-center m-auto'>
                                                <p className='font-sp-pro-text-bold text-3xl lg:text-2xl text-white'>k</p>
                                            </div>
                                        </div>
                                        <p className='font-sp-pro-text-semibold text-lg w-full text-center text-text-color capitalize'>Leng Hongmeng</p>
                                        <p className="text-gray-700 text-sm text-center opacity-60">
                                            Organization Owner
                                        </p>
                                        <p className="text-gray-700 text-sm lg:text-md mt-4 text-center text-text-color">
                                            20 members
                                        </p>
                                        <div className='w-full flex flex-row justify-center my-2'>
                                            <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple rounded-full z-50 outline outline-3 outline-white'>

                                            </div>
                                            <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple rounded-full z-50 outline outline-3 outline-white'>

                                            </div>
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
                                <button type='button' className='border border-bg-primary rounded-xl min-w-max cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200' style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}>
                                    <div className="px-6 py-4">
                                        <div className='flex flex-row justify-between items-center'>
                                            <HiOutlineCheck className="w-4 h-4 bg-green text-white rounded-full" />

                                            <div className="dropdown dropdown-bottom">
                                                <button tabIndex={0} className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-white text-gray hover:text-white">
                                                    <BiDotsHorizontalRounded className="w-6 h-6" />
                                                </button>
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

                                            </div>
                                        </div>
                                        <div className="font-bold text-xl mx-auto text-center w-full mt-4 mb-2">
                                            <div className='w-[70px] h-[70px] md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green rounded-full flex justify-center items-center m-auto'>
                                                <p className='font-sp-pro-text-bold text-3xl lg:text-2xl text-white'>k</p>
                                            </div>
                                        </div>
                                        <p className='font-sp-pro-text-semibold text-lg w-full text-center text-text-color capitalize'>Leng Hongmeng</p>
                                        <p className="text-gray-700 text-sm text-center opacity-60">
                                            Organization Owner
                                        </p>
                                        <p className="text-gray-700 text-sm lg:text-md mt-4 text-center text-text-color">
                                            20 members
                                        </p>
                                        <div className='w-full flex flex-row justify-center my-2'>
                                            <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple rounded-full z-50 outline outline-3 outline-white'>

                                            </div>
                                            <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple rounded-full z-50 outline outline-3 outline-white'>

                                            </div>
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
                                <button type='button' className='border border-bg-primary rounded-xl min-w-max cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200' style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}>
                                    <div className="px-6 py-4">
                                        <div className='flex flex-row justify-between items-center'>
                                            <HiOutlineCheck className="w-4 h-4 bg-green text-white rounded-full" />

                                            <div className="dropdown dropdown-bottom">
                                                <button tabIndex={0} className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-white text-gray hover:text-white">
                                                    <BiDotsHorizontalRounded className="w-6 h-6" />
                                                </button>
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

                                            </div>
                                        </div>
                                        <div className="font-bold text-xl mx-auto text-center w-full mt-4 mb-2">
                                            <div className='w-[70px] h-[70px] md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green rounded-full flex justify-center items-center m-auto'>
                                                <p className='font-sp-pro-text-bold text-3xl lg:text-2xl text-white'>k</p>
                                            </div>
                                        </div>
                                        <p className='font-sp-pro-text-semibold text-lg w-full text-center text-text-color capitalize'>Leng Hongmeng</p>
                                        <p className="text-gray-700 text-sm text-center opacity-60">
                                            Organization Owner
                                        </p>
                                        <p className="text-gray-700 text-sm lg:text-md mt-4 text-center text-text-color">
                                            20 members
                                        </p>
                                        <div className='w-full flex flex-row justify-center my-2'>
                                            <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple rounded-full z-50 outline outline-3 outline-white'>

                                            </div>
                                            <div className='w-9 h-9 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple rounded-full z-50 outline outline-3 outline-white'>

                                            </div>
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
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='w-full md:w-6/12 lg:w-4/12 py-5 m-auto'>
                                <h2 className='text-center text-2xl font-sp-pro-text-bold my-5 pt-5'>Change Password</h2>
                                <p className='mb-5'>Your password must be at least 8 characters, numbers, letters and special characters &#40;!$@%&#41;</p>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="text-left mb-4 mt-2">
                                        <label className="block text-md ml-1 font-medium leading-6 text-gray-900">Current Password</label>
                                        <div className="relative w-full  mt-1 focus-within:text-black border rounded-lg p-2 border-slate-200 bg-bg-main">
                                            <input
                                                onInput={handleInputChange}
                                                onChange={formik.handleChange}
                                                defaultValue={newData.oldPassword}
                                                name="oldPassword"
                                                className="w-full px-2 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                                type="password"
                                                placeholder="********"
                                            />
                                        </div>
                                        {formik.touched.oldPassword && formik.errors?.oldPassword ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.oldPassword}</p> : null}
                                    </div>
                                    <div className="text-left mb-4 mt-2">
                                        <label className="block text-md ml-1 font-medium leading-6 text-gray-900">New Password</label>
                                        <div className="relative w-full  mt-1 focus-within:text-black border rounded-lg p-2 border-slate-200 bg-bg-main">
                                            <input
                                                onInput={handleInputChange}
                                                onChange={formik.handleChange}
                                                value={newData.newPassword}
                                                name="newPassword"
                                                className="w-full px-2 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                                type="password"
                                                placeholder="********"
                                            />
                                        </div>
                                        {formik.touched.newPassword && formik.errors?.newPassword ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.newPassword}</p> : null}
                                    </div>
                                    <div className="text-left mb-4 mt-2">
                                        <label className="block text-md ml-1 font-medium leading-6 text-gray-900">Confirm New Password</label>
                                        <div className="relative w-full  mt-1 focus-within:text-black border rounded-lg p-2 border-slate-200 bg-bg-main">
                                            <input
                                                onInput={handleInputChange}
                                                onChange={formik.handleChange}
                                                value={newData.confirmNewPassword}
                                                name="newPassword"
                                                className="w-full px-2 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                                type="password"
                                                placeholder="********"
                                            />
                                        </div>
                                        {formik.touched.confirmNewPassword && formik.errors?.confirmNewPassword ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.confirmNewPassword}</p> : null}
                                    </div>
                                    <div className="text-left mb-4 mt-2 py-3">
                                        <button type='submit' className='w-full bg-primary text-white rounded-md py-2'>Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>

            {isShowSuccess ? <>
                <div className={`${isShowSuccess ? "modal rounded-sm modal-open" : ""}`}>
                    <div className="modal-box">
                        <div className="flex justify-center"> <img src={successIcon} width={80} alt="" /></div>
                        <h2 className="mb-1 text-xl font-sp-pro-text-semibold leading-tight text-primary sm:text-2xl text-center pt-[25px]">Password Changed!</h2>
                        <p className="mt-3 text-sm text-gray-500 text-center">Your password has been updated successfully</p>
                        <div className="modal-action mt-[70px]">
                            <button onClick={() => setIsShowSuccess(false)} htmlFor="my-modal" className="inline-block w-full rounded text-center bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white cursor-pointer">OK</button>
                        </div>
                    </div>
                </div>
            </> : null}

            {isShowErr ? <>
                <div className={`${isShowErr ? "modal rounded-sm modal-open" : ""}`}>
                    <div className="modal-box">
                        <div className="flex justify-center"> <img src={verifyIcon} width={80} alt="" /></div>
                        <h2 className="mb-1 text-xl font-sp-pro-text-semibold leading-tight text-primary sm:text-2xl text-center pt-[25px]">Unable To Update Password!</h2>
                        <p className="mt-3 text-sm text-gray-500 text-center">Your old password is incorrect. Please check again!</p>
                        <div className="modal-action mt-[70px]">
                            <button onClick={() => setIsShowErr(false)} htmlFor="my-modal" className="inline-block w-full rounded text-center bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white cursor-pointer">OK</button>
                        </div>
                    </div>
                </div>
            </> : null}

            {isSuccessUpdateProfile ? <>
                <div className={`${isSuccessUpdateProfile ? "modal rounded-sm modal-open" : ""}`}>
                    <div className="modal-box">
                        <div className="flex justify-center"> <img src={successIcon} width={80} alt="" /></div>
                        <h2 className="mb-1 text-xl font-sp-pro-text-semibold leading-tight text-primary sm:text-2xl text-center pt-[25px]">Profile Updated!</h2>
                        <p className="mt-3 text-sm text-gray-500 text-center">Your profile has been updated successfully</p>
                        <div className="modal-action mt-[70px]">
                            <button onClick={() => setIsSuccessUpdateProfile(false)} htmlFor="my-modal" className="inline-block w-full rounded text-center bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white cursor-pointer">OK</button>
                        </div>
                    </div>
                </div>
            </> : null}
        </main>
    )
}

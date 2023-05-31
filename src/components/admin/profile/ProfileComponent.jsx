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
import FormProfileComponent from './FormProfileComponent';
import { useDispatch } from 'react-redux';

export default function ProfileComponent() {

    const dispatch = useDispatch()
    const [isShow, setIsShow] = useState(false)
    const [isShowSuccess, setIsShowSuccess] = useState(false)
    const [isShowErr, setIsShowErr] = useState(false)
    const [isSuccessUpdateProfile, setIsSuccessUpdateProfile] = useState(false)
    const [isShowUpdateProfile, setIsShowUpdateProfile] = useState(false)
    const [file, setFile] = useState()
    const token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    var userId = decoded.id;

    const [newData, setNewData] = useState({
        oldPassword: "", newPassword: "", confirmNewPassword: ""
    })

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
            <h2 className="text-2xl text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
                Account Settings
            </h2>
            <Tab.Group>
                <div className="mt-5 gap-6 bg-white rounded-xl overflow-hidden" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px" }}>
                    <div className="overflow-x-auto p-5 shadow-sm relative">
                        <label
                            id='profile-troggle'
                            htmlFor="update-profile"
                            className="absolute flex-row right-5 top-5 bg-bg-primary w-9 h-9 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-white text-gray hover:text-white"
                        >
                            <FaUserEdit />
                        </label>

                        <input type="checkbox" id="update-profile" className="modal-toggle" />
                        <FormProfileComponent className="modal" />

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

                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='w-full md:w-6/12 lg:w-4/12 py-5 m-auto'>
                                <h2 className='text-center text-2xl font-sp-pro-text-bold my-5 pt-5'>Change Password</h2>
                                <p className='mb-5'>Your password must be at least 8 characters, numbers, letters and special characters &#40;!$@%&#41;</p>
                                <form onSubmit={formik.handleSubmit} className='space-y-5 bg-bg-primary px-5 py-8 rounded-lg'>
                                    <div className='text-left  w-full '>
                                        <label className="block mb-2 ml-1 text-sm">Current Password</label>
                                        <input
                                            type='number'
                                            onInput={handleInputChange}
                                            onChange={formik.handleChange}
                                            defaultValue={newData.oldPassword}
                                            name="password"
                                            className="text-sm border-[#E1E9EE] w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                                            placeholder="********"
                                        />
                                        {formik.touched.oldPassword && formik.errors?.oldPassword ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.oldPassword}</p> : null}
                                    </div>
                                    <div className='text-left  w-full '>
                                        <label className="block mb-2 ml-1 text-sm">New Password</label>
                                        <input
                                            type='number'
                                            onInput={handleInputChange}
                                            onChange={formik.handleChange}
                                            defaultValue={newData.newPassword}
                                            name="newPassword"
                                            className="text-sm border-[#E1E9EE] w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                                            placeholder="********"
                                        />
                                        {formik.touched.newPassword && formik.errors?.newPassword ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.newPassword}</p> : null}
                                    </div>
                                    <div className='text-left  w-full '>
                                        <label className="block mb-2 ml-1 text-sm">Confirm New Password</label>
                                        <input
                                            onInput={handleInputChange}
                                            onChange={formik.handleChange}
                                            value={newData.confirmNewPassword}
                                            name="confirmNewPassword"
                                            className="text-sm border-[#E1E9EE] w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                                            placeholder="********"
                                        />
                                        {formik.touched.confirmNewPassword && formik.errors?.confirmNewPassword ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.confirmNewPassword}</p> : null}
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
        </main>
    )
}

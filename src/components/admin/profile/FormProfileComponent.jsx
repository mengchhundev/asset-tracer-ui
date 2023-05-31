import { XCircleIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup"
import jwt_decode from "jwt-decode";
import successIcon from '../../../assets/images/success.png'
import UserService from '../../../redux/services/UserService';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function FormProfileComponent() {
    const [isSuccessUpdateProfile, setIsSuccessUpdateProfile] = useState(false)
    const token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    var userId = decoded.id;
    const dispatch = useDispatch()
    const isShow = useSelector(state => state.user.isShow)

    useEffect(() => {
        UserService.getProfileUser(userId).then(res => {
            if (res.data?.success) {
            }
        })
    }, [])

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
                setShowForm(false)
            }
        }, err => {
            console.log(err)
        })
    }

    const formik = useFormik({
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
        <>
            <div className="modal bg-opacity-20">
                <div className="modal-box max-w-2xl">
                    <label htmlFor="update-profile" className='absolute top-3 right-3' ><XCircleIcon className="cursor-pointer h-8 w-8 text-bg-primary-strock hover:text-gray" /></label>
                    <div>
                        <h3 className='text-center font-sp-pro-text-bold text-lg my-3 mb-5'>My Profile</h3>
                        <div className='w-28 h-28 border border-bg-primary-strock bg-slate-500 rounded-full m-auto relative overflow-hidden'>
                            <label htmlFor='updateProfile' type='file' className='w-full absolute bg-black shadow-sm bg-opacity-20 bottom-0 py-1.5 text-xs cursor-pointer text-white text-center'>Upload</label>
                            <input type="file"
                                id='updateProfile'
                                name="file"
                                multiple
                                accept="image/*"
                                className='hidden' />
                        </div>
                    </div>
                    <div>
                        <form className='space-y-5 pt-5' onSubmit={formik.handleSubmit}>
                            <div className='flex md:flex-row gap-6'>
                                <div className='text-left w-full md:w-1/2'>
                                    <label className="block mb-2 ml-1 text-sm">Name</label>
                                    <input
                                        type='text'
                                        onInput={handleInputChangeProfile}
                                        onChange={formik.handleChange}
                                        value={profile.name}
                                        name="name"
                                        className="text-sm border-[#E1E9EE] w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                                        placeholder='Enter name'
                                    />
                                    {formik.touched.name && formik.errors?.name ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.name}</p> : null}
                                </div>
                                <div className="text-left  w-full md:w-1/2">
                                    <label className="block mb-2 ml-1 text-sm">Gender</label>
                                    <select
                                        onInput={handleInputChangeProfile}
                                        onChange={formik.handleChange}
                                        value={profile.gender}
                                        name="gender"
                                        placeholder='Gender'
                                        className='text-sm border-[#E1E9EE] w-full border rounded-lg block py-2 px-4 mb-1 outline-none'
                                    >
                                        <option value="" disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    {formik.touched.gender && formik.errors?.gender ? <p className="text-reject font-sp-pro-text-regular text-xs mt-2 pl-1">{formik.errors.gender}</p> : null}
                                </div>
                            </div>
                            <div className='text-left  w-full '>
                                <label className="block mb-2 ml-1 text-sm">Phone Number</label>
                                <input
                                    type='number'
                                    onInput={handleInputChangeProfile}
                                    onChange={formik.handleChange}
                                    value={profile.phone}
                                    name="phone"
                                    className="text-sm border-[#E1E9EE] w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                                    placeholder='Enter phone number'
                                />
                                {formik.touched.phone && formik.errors?.phone ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.phone}</p> : null}
                            </div>

                            <div className='text-left'>
                                <label className="block mb-2 ml-1 text-sm">Address</label>
                                <textarea
                                    onInput={handleInputChangeProfile}
                                    onChange={formik.handleChange}
                                    value={profile.address}
                                    rows={4}
                                    name="address"
                                    className="text-sm border-[#E1E9EE] border w-full  rounded-lg block py-2 px-4 mb-1 outline-none"
                                    placeholder='Enter address'
                                >
                                </textarea>
                            </div>
                            <div className='w-1/3 m-auto'>
                                <button type='submit' className="inline-block w-full rounded text-center bg-primary pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white cursor-pointer hover:bg-pending-hover">Save Changes</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            {isSuccessUpdateProfile ? <>
                <div className={`${isSuccessUpdateProfile ? "modal rounded-sm modal-open" : ""}`}>
                    <div className="modal-box max-w-md">
                        <div className="flex justify-center"> <img src={successIcon} width={80} alt="" /></div>
                        <h2 className="mb-1 text-xl font-sp-pro-text-semibold leading-tight text-primary text-center mt-5">Profile Updated!</h2>
                        <p className="mt-3 text-sm text-text-color text-center">Your profile has been updated successfully</p>
                        <br />
                        <div className="modal-action">
                            <button onClick={() => setIsSuccessUpdateProfile(false)} htmlFor="my-modal" className="inline-block w-full rounded text-center bg-primary px-7 py-2 text-sm font-sp-pro-text-medium text-white cursor-pointer">OK</button>
                        </div>
                    </div>
                </div>
            </> : null}
        </>

    )
}

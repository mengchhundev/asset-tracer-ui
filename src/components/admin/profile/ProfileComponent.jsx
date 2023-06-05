import React, { Fragment, useEffect } from 'react'
import hongmenng from "../../../assets/images/Iconteam/hongmenng.png";
import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { useFormik } from 'formik';
import moment from "moment";
import * as Yup from "yup"
import jwt_decode from "jwt-decode";
import UserService from '../../../redux/services/UserService';
import successIcon from '../../../assets/images/success.png'
import verifyIcon from '../../../assets/images/false.png'
import { FaUserEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setProfileDetail } from '../../../redux/slices/UserSlice';
import coconut_trees from '../../../assets/images/profile/coconut_trees.svg'
import plans from '../../../assets/images/profile/plans.svg'
import user_placeholder from '../../../assets/images/placeholder/user_placeholder.jpg'
import { RiCloseFill } from 'react-icons/ri';
import avatar01 from "../../../assets/images/organization/avatar01.png";
import avatar02 from "../../../assets/images/organization/avatar02.png";
import avatar03 from "../../../assets/images/organization/avatar03.png";
import avatar04 from "../../../assets/images/organization/avatar04.png";
import { FiPlus } from 'react-icons/fi';
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { ref, list, listAll, getDownloadURL, uploadBytes, getStorage } from 'firebase/storage'
import { storage } from "../../../redux/services/googleAuth/firebase";
import { v4 as uuid } from 'uuid';
import LoadingComponent from '../../LoadingComponent';

export default function ProfileComponent() {
    const [isShowLoading, setIsShowLoading] = useState(false)
    const [img, setImg] = useState("")
    const storage = getStorage();
    const getImage = async (fileName) => {
        return await getDownloadURL(ref(storage, `images/${fileName}`));
    }

    // useEffect(() => {
    //     const fetchImages = async () => {
    //         const storageRef = ref(storage, 'images/');
    //         const result = await listAll(storageRef);
    //         const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
    //         return Promise.all(urlPromises);
    //     };

    //     const loadImages = async () => {
    //         const urls = await fetchImages();
    //         setFiles(urls);
    //     };
    //     loadImages();

    // }, []);

    const dispatch = useDispatch()
    const profileDetail = useSelector(state => state.user?.profileDetail)
    const [isShowSuccess, setIsShowSuccess] = useState(false)
    const [isShowErr, setIsShowErr] = useState(false)
    const [isSuccessUpdateProfile, setIsSuccessUpdateProfile] = useState(false)
    const [isShowFormUpdateProfile, setIsShowFormUpdateProfile] = useState(false)
    const token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    var userId = decoded.id;
    var [fileName, setFileName] = useState('')
    const [uniqueId, setUniqueId] = useState("")
    // Upload file
    var unique_id = "";
    const [selectedFile, setSelectedFile] = useState('')
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    useEffect(() => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const image = new Image();
                image.onload = () => {
                    setImageDimensions({
                        width: image.width,
                        height: image.height,
                    });
                };
                image.src = event.target.result;
            };
            reader.readAsDataURL(selectedFile);
        }
    }, [selectedFile]);

    const handleUploadFile = () => {
        setUniqueId(uuid())
        if (selectedFile) {
            const uploadTask = ref(storage, `images/${uniqueId}`);
            uploadBytes(uploadTask, selectedFile)
        }
    };

    // Get profile detail
    const handleGetProfileDetail = () => {
        setIsShowLoading(true)
        UserService.getProfileUser(userId).then(res => {
            if (res.data?.success) {
                if (res.data?.payload?.image) {
                    getImage(res.data.payload.image).then(res => {
                        setImg(res)
                        setIsShowLoading(false)
                    }, err => {
                        setIsShowLoading(false)
                    })
                    dispatch(setProfileDetail(res.data.payload))
                } else {
                    setIsShowLoading(false)
                }
            }
        })
    }

    useEffect(() => {
        handleGetProfileDetail()
    }, [])

    const [newData, setNewData] = useState({
        oldPassword: "", newPassword: "", confirmNewPassword: ""
    })

    const handleInputChange = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value })
    };

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
        name: "", gender: "", phone: "", address: "", image: ""
    })


    const handleInputChangeProfile = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    };

    const handleUpdateProfile = () => {
        handleUploadFile()
        console.log(uniqueId)
        UserService.updateProfile(userId, {
            name: profile.name,
            gender: profile.gender,
            phone: profile.phone,
            address: profile.address,
            image: uniqueId
        }).then(res => {
            if (res.data?.success) {
                if (res.data.payload?.image) {
                    setImg(res.data.payload.image)
                }
                setIsSuccessUpdateProfile(true)
                handleGetProfileDetail()
            }
        })
    }

    const formikProfile = useFormik({
        initialValues: profile,
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name is required"),
            gender: Yup.string().required("Gender is required"),
        }),
        onSubmit: (val, { resetForm }) => {
            handleUpdateProfile()
            // resetForm(val = {})
            // setProfile({ name: "", gender: "", phone: "", address: "" })
            setIsShowFormUpdateProfile(false)
        }
    })

    return (
        <>
            {isShowLoading &&
                <LoadingComponent />
            }
            <main className="overflow-y-auto pb-4 text-text-color">
                <h2 className="text-2xl text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
                    Account Settings
                </h2>
                <Tab.Group>
                    <div className="mt-5 gap-6 bg-white rounded-xl overflow-hidden" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px" }}>
                        <div className="overflow-x-auto px-5 shadow-sm relative">
                            <label
                                id='profile-troggle'
                                htmlFor="update-profile"
                                onClick={() => setIsShowFormUpdateProfile(true)}
                                className="absolute flex-row right-5 top-5 bg-bg-primary w-9 h-9 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-white text-gray hover:text-white"
                            >
                                <FaUserEdit />
                            </label>

                            <input type="checkbox" id="update-profile" className="modal-toggle" />
                            <div className={`modal ${isShowFormUpdateProfile ? "modal-open" : ""}`} >
                                <div className="modal-box max-w-2xl">
                                    <div className='absolute right-4 top-3 hover:bg-bg-primary w-8 h-8 flex justify-center rounded-full items-center cursor-pointer'>
                                        <label
                                            onClick={() => setIsShowFormUpdateProfile(false)}
                                            htmlFor="update-profile"
                                        ><RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" /></label>
                                    </div>
                                    <div>
                                        <h3 className='text-center font-sp-pro-text-bold text-lg my-3 mb-5'>My Profile</h3>
                                        <div className='w-28 h-28 border border-bg-primary-strock rounded-full m-auto relative overflow-hidden'>
                                            {selectedFile ? <img src={URL.createObjectURL(selectedFile)} className='w-full rounded-full' /> : <img src={user_placeholder} className='w-full rounded-full' />}
                                            <label htmlFor='updateProfile' type='file' className='w-full absolute bg-black bg-opacity-30 shadow-sm bottom-0 py-1.5 text-xs cursor-pointer text-white text-center'>Upload</label>
                                            <input type="file"
                                                id='updateProfile'
                                                name="file"
                                                accept="image/*"
                                                className='hidden'
                                                onChange={handleFileSelect} />
                                        </div>
                                    </div>
                                    <div>
                                        <form className='space-y-5 pt-5' onSubmit={formikProfile.handleSubmit}>
                                            <div className='flex md:flex-row gap-6'>
                                                <div className='text-left w-full md:w-1/2'>
                                                    <label className="block mb-2 ml-1 text-sm">Name</label>
                                                    <input
                                                        type='text'
                                                        onInput={handleInputChangeProfile}
                                                        onChange={formikProfile.handleChange}
                                                        value={profile.name}
                                                        name="name"
                                                        className="text-sm border-[#E1E9EE] focus:border-primary w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                                                        placeholder='Enter name'
                                                    />
                                                    {formikProfile.touched.name && formikProfile.errors?.name ? <p className="text-reject text-xs mt-2 pl-1">{formikProfile.errors.name}</p> : null}
                                                </div>
                                                <div className="text-left  w-full md:w-1/2">
                                                    <label className="block mb-2 ml-1 text-sm">Gender</label>
                                                    <select
                                                        onInput={handleInputChangeProfile}
                                                        onChange={formikProfile.handleChange}
                                                        value={profile.gender}
                                                        name="gender"
                                                        placeholder='Gender'
                                                        className='text-sm border-[#E1E9EE] focus:border-primary w-full border rounded-lg block py-2 px-4 mb-1 outline-none'
                                                    >
                                                        <option value="" disabled>Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                    {formikProfile.touched.gender && formikProfile.errors?.gender ? <p className="text-reject font-sp-pro-text-regular text-xs mt-2 pl-1">{formikProfile.errors.gender}</p> : null}
                                                </div>
                                            </div>
                                            <div className='text-left  w-full '>
                                                <label className="block mb-2 ml-1 text-sm">Phone Number</label>
                                                <input
                                                    type='number'
                                                    onInput={handleInputChangeProfile}
                                                    onChange={formikProfile.handleChange}
                                                    value={profile.phone}
                                                    name="phone"
                                                    className="text-sm border-[#E1E9EE] focus:border-primary w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                                                    placeholder='Enter phone number'
                                                />
                                                {formikProfile.touched.phone && formikProfile.errors?.phone ? <p className="text-reject text-xs mt-2 pl-1">{formikProfile.errors.phone}</p> : null}
                                            </div>

                                            <div className='text-left'>
                                                <label className="block mb-2 ml-1 text-sm">Address</label>
                                                <textarea
                                                    onInput={handleInputChangeProfile}
                                                    onChange={formikProfile.handleChange}
                                                    value={profile.address}
                                                    rows={4}
                                                    name="address"
                                                    className="text-sm border-[#E1E9EE] focus:border-primary border w-full  rounded-lg block py-2 px-4 mb-1 outline-none"
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

                            <div className='px-5 py-4'>
                                <div className='flex flex-row gap-10 md:gap-5 justify-center w-full flex-wrap sm:flex-nowrap'>
                                    <div>
                                        <div className='w-36 h-36 md:w-28 md:h-28 rounded-full overflow-hidden'>
                                            {img ? <img src={img} alt="" className="w-ful" /> : <img src={user_placeholder} alt="" className="w-36 h-36 md:w-28 md:h-28" />}
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-start w-full'>
                                        <div className='leading-8 w-full md:w-1/3'>

                                            {profileDetail?.name != null &&
                                                <div className='flex'>
                                                    <p className='w-32'>Name</p>
                                                    <p className='break-all w-full font-sp-pro-text-bold capitalize'>: {profileDetail?.name != "" && profileDetail?.name != null ? profileDetail?.name : <> <span className='opacity-50'>(Update Your Name)</span></>}</p>
                                                </div>
                                            }

                                            <div className='flex'>
                                                <p className='w-32'>Email</p>
                                                <p className='break-all w-full text-blue-700'>: {profileDetail?.email}</p>
                                            </div>

                                            {profileDetail?.gender != null &&
                                                <div className='flex'>
                                                    <p className='w-32'>Gender</p>
                                                    <p className='break-all w-full capitalize'>: {profileDetail?.gender != "" && profileDetail?.gender != null ? profileDetail?.gender : <> <span>(Update Your Gender)</span></>}</p>
                                                </div>
                                            }

                                            <div className='flex'>
                                                <p className='w-32'>Created Date</p>
                                                <p className='break-all w-full'>: {moment(profileDetail?.createdAt).format("DD MMMM YYYY")}</p>
                                            </div>

                                            <span className='md:hidden block'>

                                                {profileDetail?.phone != null &&
                                                    <div className='flex'>
                                                        <p className='w-32'>Phone</p>
                                                        <p className='break-all w-full'>: {profileDetail?.phone != "" && profileDetail?.phone != null ? profileDetail?.phone : <> <span className='opacity-50'>(Update Your Phone)</span></>}</p>
                                                    </div>
                                                }

                                                {profileDetail?.address != null &&
                                                    <div className='flex'>
                                                        <p className='w-32'>Address</p>
                                                        <p className='break-all w-full'>: {profileDetail?.address != "" && profileDetail?.address != null ? profileDetail?.address : <> <span className='opacity-50'>(Update Your Address)</span></>}</p>
                                                    </div>
                                                }

                                            </span>
                                        </div>
                                        <div className='leading-8 pl-10 border-l-2 border-dashed w-2/3 border-gray-light md:block hidden'>
                                            <div className='flex'>
                                                <p className='w-24'>Phone</p>
                                                <p className='break-all w-1/2'>: {profileDetail?.phone != "" && profileDetail?.phone != null ? profileDetail?.phone : <> <span className='opacity-50'>(Update Your Phone)</span></>}</p>
                                            </div>
                                            <div className='flex'>
                                                <p className='w-24'>Address</p>
                                                <p className='break-all w-1/2'>: {profileDetail?.address != "" && profileDetail?.address != null ? profileDetail?.address : <> <span className='opacity-50'>(Update Your Address)</span></>}</p>
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
                    <div className='my-5 p-5 relative gap-6 bg-white rounded-xl' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px" }}>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className='w-full'>
                                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-14 gap-y-8 p-5 px-10 w-full">
                                        <div className='relative con-Shadow-Card rounded-xl min-w-max w-64 cursor-pointer'>
                                            <div className='flex flex-row justify-between items-center p-3'>
                                                <p className='font-sp-pro-text-bold text-lg text-text-color capitalize cursor-pointer'>KSHRD</p>
                                                <div>
                                                    <PlusCircleIcon className="w-8 h-8 text-green rounded-full" />
                                                </div>
                                            </div>
                                            <p className='break-all text-sm w-64 px-5 text-secondary text-opacity-80'>
                                                Lorem Ipsum is simply dummy text of the ...
                                            </p>
                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Date of create :
                                                <div className='font-sp-pro-text-light'>
                                                    <small>05 Apr 2023</small>
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Organization Owner :
                                                <div className="relative my-1 w-6 h-6 mr-[-10px] z-10">
                                                    <img
                                                        src={avatar01}
                                                        loading="lazy"
                                                        className="rounded-full h-full w-full"
                                                    />
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold'>
                                                Member : 12
                                                <div className='w-full flex justify-start my-1'>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-10">
                                                        <img
                                                            src={avatar01}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-20">
                                                        <img
                                                            src={avatar02}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-30">
                                                        <img
                                                            src={avatar03}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-40">
                                                        <img
                                                            src={avatar04}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-50 border-2 text-xs font-sp-pro-text-semibold bg-white  border-bg-primary rounded-full flex items-center justify-center">
                                                        8 <FiPlus />
                                                    </div>
                                                </div>
                                            </p>
                                            <label className="px-6">
                                                <div className="w-full px-8 text-center cursor-pointer">
                                                    <span className="inline-block w-full rounded-md py-2 px-3 text-xs font-semibold text-white bg-primary">Joined</span>
                                                </div>
                                            </label>
                                        </div>

                                        <div className='relative con-Shadow-Card rounded-xl min-w-max w-64 cursor-pointer'>
                                            <div className='flex flex-row justify-between items-center p-3'>
                                                <p className='font-sp-pro-text-bold text-lg text-text-color capitalize cursor-pointer'>KSHRD</p>
                                                <div>
                                                    <PlusCircleIcon className="w-8 h-8 text-green rounded-full" />
                                                </div>
                                            </div>
                                            <p className='break-all text-sm w-64 px-5 text-secondary text-opacity-80'>
                                                Lorem Ipsum is simply dummy text of the ...
                                            </p>
                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Date of create :
                                                <div className='font-sp-pro-text-light'>
                                                    <small>05 Apr 2023</small>
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Organization Owner :
                                                <div className="relative my-1 w-6 h-6 mr-[-10px] z-10">
                                                    <img
                                                        src={avatar01}
                                                        loading="lazy"
                                                        className="rounded-full h-full w-full"
                                                    />
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold'>
                                                Member : 12
                                                <div className='w-full flex justify-start my-1'>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-10">
                                                        <img
                                                            src={avatar01}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-20">
                                                        <img
                                                            src={avatar02}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-30">
                                                        <img
                                                            src={avatar03}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-40">
                                                        <img
                                                            src={avatar04}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-50 border-2 text-xs font-sp-pro-text-semibold bg-white  border-bg-primary rounded-full flex items-center justify-center">
                                                        8 <FiPlus />
                                                    </div>
                                                </div>
                                            </p>
                                            <label className="px-6">
                                                <div className="w-full px-8 text-center cursor-pointer">
                                                    <span className="inline-block w-full rounded-md py-2 px-3 text-xs font-semibold text-white bg-primary">Joined</span>
                                                </div>
                                            </label>
                                        </div>

                                        <div className='relative con-Shadow-Card rounded-xl min-w-max w-64 cursor-pointer'>
                                            <div className='flex flex-row justify-between items-center p-3'>
                                                <p className='font-sp-pro-text-bold text-lg text-text-color capitalize cursor-pointer'>KSHRD</p>
                                                <div>
                                                    <PlusCircleIcon className="w-8 h-8 text-green rounded-full" />
                                                </div>
                                            </div>
                                            <p className='break-all text-sm w-64 px-5 text-secondary text-opacity-80'>
                                                Lorem Ipsum is simply dummy text of the ...
                                            </p>
                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Date of create :
                                                <div className='font-sp-pro-text-light'>
                                                    <small>05 Apr 2023</small>
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Organization Owner :
                                                <div className="relative my-1 w-6 h-6 mr-[-10px] z-10">
                                                    <img
                                                        src={avatar01}
                                                        loading="lazy"
                                                        className="rounded-full h-full w-full"
                                                    />
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold'>
                                                Member : 12
                                                <div className='w-full flex justify-start my-1'>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-10">
                                                        <img
                                                            src={avatar01}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-20">
                                                        <img
                                                            src={avatar02}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-30">
                                                        <img
                                                            src={avatar03}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-40">
                                                        <img
                                                            src={avatar04}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-50 border-2 text-xs font-sp-pro-text-semibold bg-white  border-bg-primary rounded-full flex items-center justify-center">
                                                        8 <FiPlus />
                                                    </div>
                                                </div>
                                            </p>
                                            <label className="px-6">
                                                <div className="w-full px-8 text-center cursor-pointer">
                                                    <span className="inline-block w-full rounded-md py-2 px-3 text-xs font-semibold text-white bg-primary">Joined</span>
                                                </div>
                                            </label>
                                        </div>

                                        <div className='relative con-Shadow-Card rounded-xl min-w-max w-64 cursor-pointer'>
                                            <div className='flex flex-row justify-between items-center p-3'>
                                                <p className='font-sp-pro-text-bold text-lg text-text-color capitalize cursor-pointer'>KSHRD</p>
                                                <div>
                                                    <PlusCircleIcon className="w-8 h-8 text-green rounded-full" />
                                                </div>
                                            </div>
                                            <p className='break-all text-sm w-64 px-5 text-secondary text-opacity-80'>
                                                Lorem Ipsum is simply dummy text of the ...
                                            </p>
                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Date of create :
                                                <div className='font-sp-pro-text-light'>
                                                    <small>05 Apr 2023</small>
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Organization Owner :
                                                <div className="relative my-1 w-6 h-6 mr-[-10px] z-10">
                                                    <img
                                                        src={avatar01}
                                                        loading="lazy"
                                                        className="rounded-full h-full w-full"
                                                    />
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold'>
                                                Member : 12
                                                <div className='w-full flex justify-start my-1'>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-10">
                                                        <img
                                                            src={avatar01}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-20">
                                                        <img
                                                            src={avatar02}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-30">
                                                        <img
                                                            src={avatar03}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-40">
                                                        <img
                                                            src={avatar04}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-50 border-2 text-xs font-sp-pro-text-semibold bg-white  border-bg-primary rounded-full flex items-center justify-center">
                                                        8 <FiPlus />
                                                    </div>
                                                </div>
                                            </p>
                                            <label className="px-6">
                                                <div className="w-full px-8 text-center cursor-pointer">
                                                    <span className="inline-block w-full rounded-md py-2 px-3 text-xs font-semibold text-white bg-primary">Joined</span>
                                                </div>
                                            </label>
                                        </div>

                                        <div className='relative con-Shadow-Card rounded-xl min-w-max w-64 cursor-pointer'>
                                            <div className='flex flex-row justify-between items-center p-3'>
                                                <p className='font-sp-pro-text-bold text-lg text-text-color capitalize cursor-pointer'>KSHRD</p>
                                                <div>
                                                    <PlusCircleIcon className="w-8 h-8 text-green rounded-full" />
                                                </div>
                                            </div>
                                            <p className='break-all text-sm w-64 px-5 text-secondary text-opacity-80'>
                                                Lorem Ipsum is simply dummy text of the ...
                                            </p>
                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Date of create :
                                                <div className='font-sp-pro-text-light'>
                                                    <small>05 Apr 2023</small>
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Organization Owner :
                                                <div className="relative my-1 w-6 h-6 mr-[-10px] z-10">
                                                    <img
                                                        src={avatar01}
                                                        loading="lazy"
                                                        className="rounded-full h-full w-full"
                                                    />
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold'>
                                                Member : 12
                                                <div className='w-full flex justify-start my-1'>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-10">
                                                        <img
                                                            src={avatar01}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-20">
                                                        <img
                                                            src={avatar02}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-30">
                                                        <img
                                                            src={avatar03}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-40">
                                                        <img
                                                            src={avatar04}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-50 border-2 text-xs font-sp-pro-text-semibold bg-white  border-bg-primary rounded-full flex items-center justify-center">
                                                        8 <FiPlus />
                                                    </div>
                                                </div>
                                            </p>
                                            <label className="px-6">
                                                <div className="w-full px-8 text-center cursor-pointer">
                                                    <span className="inline-block w-full rounded-md py-2 px-3 text-xs font-semibold text-white bg-primary">Joined</span>
                                                </div>
                                            </label>
                                        </div>

                                        <div className='relative con-Shadow-Card rounded-xl min-w-max w-64 cursor-pointer'>
                                            <div className='flex flex-row justify-between items-center p-3'>
                                                <p className='font-sp-pro-text-bold text-lg text-text-color capitalize cursor-pointer'>KSHRD</p>
                                                <div>
                                                    <PlusCircleIcon className="w-8 h-8 text-green rounded-full" />
                                                </div>
                                            </div>
                                            <p className='break-all text-sm w-64 px-5 text-secondary text-opacity-80'>
                                                Lorem Ipsum is simply dummy text of the ...
                                            </p>
                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Date of create :
                                                <div className='font-sp-pro-text-light'>
                                                    <small>05 Apr 2023</small>
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold text-sm'>
                                                Organization Owner :
                                                <div className="relative my-1 w-6 h-6 mr-[-10px] z-10">
                                                    <img
                                                        src={avatar01}
                                                        loading="lazy"
                                                        className="rounded-full h-full w-full"
                                                    />
                                                </div>
                                            </p>

                                            <p className='px-5 mt-3 font-sp-pro-text-semibold'>
                                                Member : 12
                                                <div className='w-full flex justify-start my-1'>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-10">
                                                        <img
                                                            src={avatar01}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-20">
                                                        <img
                                                            src={avatar02}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-30">
                                                        <img
                                                            src={avatar03}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-40">
                                                        <img
                                                            src={avatar04}
                                                            loading="lazy"
                                                            className="rounded-full h-full w-full"
                                                        />
                                                    </div>
                                                    <div className="relative  w-6 h-6 mr-[-10px] z-50 border-2 text-xs font-sp-pro-text-semibold bg-white  border-bg-primary rounded-full flex items-center justify-center">
                                                        8 <FiPlus />
                                                    </div>
                                                </div>
                                            </p>
                                            <label className="px-6">
                                                <div className="w-full px-8 text-center cursor-pointer">
                                                    <span className="inline-block w-full rounded-md py-2 px-3 text-xs font-semibold text-white bg-primary">Joined</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className='w-full md:w-6/12 lg:w-4/12 m-auto'>
                                    <h2 className='text-center text-2xl font-sp-pro-text-bold my-5 pt-5'>Change Password</h2>
                                    <p className='mb-5'>Your password must be at least 8 characters, numbers, letters and special characters &#40;!$@%&#41;</p>
                                    <form onSubmit={formik.handleSubmit} className='space-y-5 py-8 rounded-lg'>
                                        <div className='text-left  w-full '>
                                            <label className="block mb-2 ml-1 text-sm">Current Password</label>
                                            <input
                                                type='number'
                                                onInput={handleInputChange}
                                                onChange={formik.handleChange}
                                                defaultValue={newData.oldPassword}
                                                name="password"
                                                className="text-sm border-[#E1E9EE] focus:border-primary w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
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
                                                className="text-sm border-[#E1E9EE] focus:border-primary w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
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
                                                className="text-sm border-[#E1E9EE] focus:border-primary     w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                                                placeholder="********"
                                            />
                                            {formik.touched.confirmNewPassword && formik.errors?.confirmNewPassword ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.confirmNewPassword}</p> : null}
                                        </div>
                                        <div className="text-left mb-4 mt-2 py-3">
                                            <button type='submit' className='w-full bg-primary text-white rounded-md py-2'>Save Changes</button>
                                        </div>
                                    </form>

                                    <div className='absolute top-14 left-14'>
                                        <img src={plans} />
                                    </div>
                                    <div className='absolute bottom-14 right-14'>
                                        <img src={coconut_trees} />
                                    </div>
                                    <div className='absolute top-14 rounded-full right-14 w-32 h-32 bg-primary bg-opacity-20'>
                                    </div>
                                    <div className='absolute bottom-14 rounded-full left-14 w-32 h-32 bg-primary bg-opacity-20'>
                                    </div>
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
        </>
    )
}

import React, { useEffect } from 'react'
import { HomeModernIcon } from '@heroicons/react/20/solid';
import upload_placeholder from '../../../../assets/images/placeholder/upload_placeholder.svg';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import OrganizationService from '../../../../redux/services/OrganizationService';
import { useNavigate } from 'react-router';
import { RiCloseFill } from 'react-icons/ri';
import { FiSave } from 'react-icons/fi';
import FileUploadService from '../../../../redux/services/FileUploadService';
import { useDispatch } from 'react-redux';
import { setItem } from '../../../../redux/slices/OrganizationSlice';

export default function CreateOrganizatoinComponent({ val, handleUpdateSuccess }) {

    const dispatch = useDispatch()
    const navigator = useNavigate()
    const [isUpdate, setIsUpdate] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [image, setImage] = useState()
    const [newData, setNewData] = useState({
        id: "",
        name: "",
        address: "",
        logo: ""
    })

    useEffect(() => {
        setIsSuccess(false)
        if (val) {
            setIsUpdate(true)
            setNewData({ ...val })
            if (val?.logo) {
                setImage(FileUploadService.getImage(val?.logo))
            }
        }
    }, [val, image])

    // Upload file
    let formData = new FormData()
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

    const handleInputChange = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value })
    };

    const handleSaveOrganization = () => {
        setIsUpdate(false)
        if (selectedFile) {
            formData.append("file", selectedFile)
            FileUploadService.storeFile(formData, localStorage.getItem("token")).then(res => {
                if (res.data.success) {
                    OrganizationService.saveOrganization({
                        name: newData.name,
                        address: newData.address,
                        logo: res.data.payload
                    }).then(res => {
                        if (res.data?.success) {
                            setImage("")
                            setIsSuccess(true)
                            // dispatch(setItem(res.data.payload))
                            // sessionStorage.setItem("organization", JSON.stringify(res.data.payload))
                            navigator("/organization", { state: { hideOrganizationBar: true } })
                        }
                    })
                }
            })
        } else {
            OrganizationService.saveOrganization(newData, localStorage.getItem("token")).then(res => {
                if (res.data?.success) {
                    setIsSuccess(true)
                    // dispatch(setItem(res.data.payload))
                    // sessionStorage.setItem("organization", JSON.stringify(res.data.payload))
                    navigator("/organization", { state: { hideOrganizationBar: true } })
                }
            })
        }

    }

    const handleUpdateOrganization = () => {
        if (selectedFile) {
            formData.append("file", selectedFile)
            FileUploadService.storeFile(formData, localStorage.getItem("token")).then(res => {
                if (res.data.success) {
                    OrganizationService.updateOrganization({
                        name: newData.name,
                        address: newData.address,
                        logo: res.data.payload
                    }, newData?.id).then(res => {
                        console.log(res.data)
                        if (res.data?.success) {
                            setIsSuccess(true)
                            setImage("")
                            // dispatch(setItem(res.data.payload))
                            // sessionStorage.setItem("organization", JSON.stringify(res.data.payload))
                            document.getElementById("create-organization").click()
                            handleUpdateSuccess(true)
                        }
                    })
                }
            })
        } else {
            OrganizationService.updateOrganization(newData, newData?.id).then(res => {
                if (res.data?.success) {
                    setIsSuccess(true)
                    setImage("")
                    // dispatch(setItem(res.data.payload))
                    // sessionStorage.setItem("organization", JSON.stringify(res.data.payload))
                    document.getElementById("create-organization").click()
                    handleUpdateSuccess(true)
                }
            })
        }
    }

    const formik = useFormik({
        initialValues: newData,
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Organization name is required"),
        }),
        onSubmit: (val, { resetForm }) => {
            isUpdate ? handleUpdateOrganization() : handleSaveOrganization()
            if (isSuccess) {
                resetForm(val = {
                    name: "",
                    address: "",
                    logo: ""
                })
                setNewData({
                    name: "",
                    address: "",
                    logo: ""
                })
            }
        }
    });

    useEffect(() => {
        formik.setValues(newData);
    }, [])

    useEffect(() => {
        formik.setValues(newData);
    }, [image])

    const handleHideModal = () => {
        setSelectedFile("")
        setImage("")
        setIsUpdate(false)
    }

    return (
        <>
            <input type="checkbox" id="create-organization" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-4xl relative">
                    <div className='absolute top-4 right-4'>
                        <label htmlFor="create-organization" onClick={handleHideModal}><RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" /></label>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <HomeModernIcon className="h-9 rounded-lg w-9 text-white bg-primary p-2" />
                            <p className='flex items-center font-sp-pro-text-bold text-xl pl-5 text-text-color'>Organization Information</p>
                        </div>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex flex-wrap md:flex-row mt-5 justify-center'>
                            <div className=''>
                                <div className="px-6">
                                    <div className='space-y-5 shadow p-10 rounded-md mb-1 relative'>
                                        <div className='border border-dashed py-8 border-primary block justify-center text-center p-4 rounded-lg'>
                                            <div className='w-44 h-20 relative'>
                                                {
                                                    selectedFile ? <img src={URL.createObjectURL(selectedFile)} className='h-full m-auto' />
                                                        : image ? <img src={image} className='h-full m-auto' />
                                                            : <img className="block m-auto " src={upload_placeholder} />
                                                }
                                            </div>
                                            <p className='mt-5 text-xs'>Upload Organzation Picture</p>
                                            <br />
                                            <label htmlFor='logo' className='cursor-pointer shadow-md rounded-md border border-bg-primary px-5 py-2 my-2 '>Browse</label>
                                            <input type="file" className='hidden' id='logo' onChange={handleFileSelect} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-grow mt-10 lg:mt-0'>
                                <div className="px-6">
                                    <div className='space-y-5 shadow px-10 py-8 rounded-md'>
                                        <div className='text-left'>
                                            <label className="block mb-2 ml-1 text-sm">Organization Name <span className='text-reject'>*</span></label>
                                            <input
                                                type='text'
                                                onInput={handleInputChange}
                                                onChange={formik.handleChange}
                                                value={newData.name}
                                                name="name"
                                                className="text-sm border-[#E1E9EE] w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                                                placeholder='Enter organization name...'
                                            />
                                            {formik.touched.name && formik.errors?.name ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.name}</p> : null}
                                        </div>

                                        <div className='relative'>
                                            <label className="block mb-2 ml-1 text-sm">Address</label>
                                            <textarea
                                                onInput={handleInputChange}
                                                onChange={formik.handleChange}
                                                value={newData.address}
                                                rows={5}
                                                name="address"
                                                className="text-sm border-[#E1E9EE] border w-full  rounded-lg block py-2 px-4 mb-1 outline-none"
                                                placeholder='Enter address...'
                                            >
                                            </textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <hr className='opacity-0 my-4' />
                        <div className='w-full flex justify-end gap-3'>

                            <label
                                onClick={handleHideModal}
                                htmlFor='create-organization'
                                className="rounded-md bg-bg-primary py-2 cursor-pointer px-5 text-sm font-sp-pro-text-medium text-text-color text-opacity-70 flex justify-center items-center gap-1"
                            >
                                <RiCloseFill className='text-lg' />
                                Cancel
                            </label>
                            <button
                                type="submit"
                                className={`${isUpdate ? "hover:bg-opacity-90 bg-accept" : "hover:bg-opacity-90 bg-primary"}  rounded-md cursor-pointer  py-2 px-5 text-sm font-sp-pro-text-medium text-white flex justify-center items-center gap-1`}
                            >
                                <FiSave className='text-lg' />
                                {isUpdate ? "Save changes" : "Save"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
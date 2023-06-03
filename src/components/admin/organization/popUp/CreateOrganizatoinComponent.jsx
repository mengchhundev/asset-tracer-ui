import React from 'react'
import { ChevronDownIcon, HomeModernIcon, TrashIcon, XCircleIcon } from '@heroicons/react/20/solid';
import upload from '../../../../assets/images/Room/Upload.png';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import OrganizationService from '../../../../redux/services/OrganizationService';
import { useNavigate } from 'react-router';
import { RiCloseFill } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineSave } from 'react-icons/ai';
import { FiSave } from 'react-icons/fi';

export default function CreateOrganizatoinComponent(props) {
    const navigator = useNavigate()
    const [newData, setNewData] = useState({
        name: "",
        address: "",
        logo: ""
    })

    const handleInputChange = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value })
        console.log(newData)
    };

    const hanndSaveOrganization = () => {
        OrganizationService.saveOrganization(newData, localStorage.getItem("token")).then(res => {
            if (res.data?.success) {
                navigator("/organization")
            }
        }, err => {
            console.log(err)
        })
    }

    const formik = useFormik({
        initialValues: newData,
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Organization name is required"),
        }),
        onSubmit: (val, { resetForm }) => {
            hanndSaveOrganization()
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
    });


    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="modal">
            <div className="modal-box max-w-4xl relative">
                <div className='absolute top-4 right-4'>
                    <label htmlFor="create-organization" ><RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" /></label>
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
                                <div className='space-y-5 shadow px-10 py-9 rounded-md mb-1 relative'>
                                    <div className='border border-dashed border-primary block justify-center text-center p-4 rounded-lg'>
                                        <div className='w-[220px] relative'>
                                            {
                                                file ? <img src={file} className='w-220px' />
                                                    : <img className="block m-auto" src={upload} alt="" />
                                            }
                                        </div>
                                        <p className='mt-5 text-xs'>Upload Invoice picture, max size 20MB</p>
                                        <br />
                                        <label htmlFor='image' className='cursor-pointer shadow-md rounded-md border border-bg-primary px-5 py-2 my-2 '>Browse</label>
                                        <input type="file" className='hidden' id='image' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <button className='shadow-sm rounded-md border border-none bg-reject-light w-full text-reject px-5 py-1.5 my-2 flex justify-center items-center gap-1'><BsTrash /> Remove</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex-grow mt-10 lg:mt-0'>
                            <div className="px-6">
                                <div className='space-y-5 shadow px-10 py-8 rounded-md'>
                                    <div className='text-left'>
                                        <label className="block mb-2 ml-1 text-sm">Organization Name</label>
                                        <input
                                            type='text'
                                            onInput={handleInputChange}
                                            onChange={formik.handleChange}
                                            value={newData.name}
                                            name="name"
                                            className="text-sm border-[#E1E9EE] w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                                            placeholder='Enter organization name'
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
                                            placeholder='Enter address'
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
                            htmlFor='create-organization'
                            className="rounded-md bg-bg-primary py-2 cursor-pointer px-5 text-sm font-sp-pro-text-medium text-text-color text-opacity-90 border border-slate-400 flex justify-center items-center gap-1"
                        >
                            <RiCloseFill className='text-lg' />
                            Cancel
                        </label>
                        <button
                            type="submit"
                            className="hover:bg-pending-hover rounded-md cursor-pointer bg-primary py-2 px-5 text-sm font-sp-pro-text-medium text-white flex justify-center items-center gap-1"
                        >
                            <FiSave className='text-lg' />
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
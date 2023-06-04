import { ChevronDownIcon, HomeModernIcon, TrashIcon, XCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';
import upload from '../../../../assets/images/Room/Upload.png';
import 'tailwindcss/tailwind.css';
import { Listbox, Transition } from '@headlessui/react';
import { useState } from 'react';
function AddOrgnizaation(props) {
    const Room = ["Sr Room", "Admin Room", "PP Room", "BTB Room", "Koskhobg Room", "PVH Room"];
    const floor = ["GF", "F1", "F2", "F3", "F4"];
    const createBy = ["Hong meng", "Meng hout", "MnoR"];
    const [selectedfloor, setSelectedfloor] = useState("Room floor");
    const [selectedCreate, setSelectedCreate] = useState("Room By");
    const [selectedRoom, setSelectedRoom] = useState("Room type");
    return (
        <>
            <div className="modal">
                <div className="bg-white rounded-lg text-opacity-90 p-10 font-sp-pro-text-regular xl:w-[1344px] max-h-[100vh] overflow-x-scroll " >
                    <div className='flex justify-between'>
                        <div className='flex '>
                            <HomeModernIcon className="h-10 rounded-lg w-10 text-white bg-primary p-2" />
                            <p className='flex items-center font-sp-pro-text-bold text-[20px] pl-5 text-text-color'>Organization Information</p>
                        </div>
                        <div>
                            <label htmlFor="my-modal-3" ><XCircleIcon className="cursor-pointer h-10 w-10 text-[#F90000] text-opacity-40 " /></label>
                        </div>
                    </div>
                    <div className='grid grid-cols-12  justify-around mt-7 font-sp-pro-text-regular'>
                        <div className='col-span-4'>
                            <div className='shadow-md py-5'>
                                <div className='border border-dotted block justify-center text-center m-10  p-5  border-primary rounded-lg'>
                                    <img className="block m-auto mt-5" src={upload} alt="" />
                                    <p className='mt-5'>Upload Invoice picture, max size 20MB</p>
                                    <button className='shadow-md px-5 py-2 text-12 mt-10'>Browse</button>
                                </div>
                            </div>
                            <div className="flex justify-center pt-5 w-full">
                                <div className="bg-primary bg-opacity-10  w-1/2 p-3 rounded-lg flex justify-center">
                                    <button className="flex justify-around text-red-300 font-sp-pro-text-regular text-[20px]"><TrashIcon className="h-6 w-6 text-red-300" />Remove</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-8'>
                            <div className=' ml-16'>
                                <div>
                                    <div className=" shadow-sm w-full">
                                        <div className="" >
                                            <div className="col-span-7 w-full xl:p-5 md:p-5 " >
                                                <label htmlFor="">Organization Name</label><br />
                                                <input className="border mt-2 text-text-color px-3 border-text-color border-opacity-30 w-full h-[39px] rounded-md p-2" type="text"
                                                    placeholder="Organization Name"
                                                />
                                            </div>
                                            <div className="w-full xl:p-5 mt-5 pt-3 md:p-5">
                                                <div className='flex justify-between'>
                                                    <p className="text-[14px]  text-text-color  font-sp-pro-text-regular">Address</p>
                                                    <p className="text-[14px]  text-text-color  font-sp-pro-text-regular">0/200 characters</p>
                                                </div>
                                                <textarea className="border border-text-color border-opacity-30 rounded-lg w-full" name="" id="" cols="20" rows="5"></textarea>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex mt-5 justify-end flex-row w-full">
                                        <div className="bg-slate-500 cursor-pointer px-7 p-3  rounded-lg flex justify-center">
                                            <button className="flex justify-around text-white font-sp-pro-text-regular items-center xl:text-[16px] text-[12px]">Cancel</button>
                                        </div>
                                        <div className="bg-primary cursor-pointer bg-opacity-20 ml-6 px-7 p-3 rounded-lg flex justify-center">
                                            <button className="flex  justify-around text-primary font-sp-pro-text-regular items-center text-[12px] xl:text-[16px]">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddOrgnizaation;
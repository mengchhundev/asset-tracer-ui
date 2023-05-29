import React from 'react'
import { ChevronDownIcon, HomeModernIcon, TrashIcon, XCircleIcon } from '@heroicons/react/20/solid';
import upload from '../../../../assets/images/Room/Upload.png';

export default function CreateOrganizatoinComponent(props) {
    return (
        <div className="modal">
            <div className="z-30 fixed top-0 left-0 font-sp-pro-text-regular right-0 bg-black transition-all duration-300 bg-opacity-5 bottom-0 flex items-center justify-center">
                <div className="bg-white rounded-xl p-6 py-8 w-2/3 z-10 border border-bg-primary shadow-xl" >
                    <div className='flex justify-between'>
                        <div className='flex '>
                            <HomeModernIcon className="h-9 rounded-lg w-9 text-white bg-primary p-2" />
                            <p className='flex items-center font-sp-pro-text-bold text-xl pl-5 text-text-color'>Organization Information</p>
                        </div>
                        <div>
                            <label htmlFor="create-organization" ><XCircleIcon className="cursor-pointer h-10 w-10 text-reject" /></label>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-full md:w-1/2 bg-green'>
                            hi
                        </div>
                        <div className='bg-blue-600'>
                            asd
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

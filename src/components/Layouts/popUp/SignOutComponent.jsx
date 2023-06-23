import React from 'react';
import { useNavigate } from 'react-router-dom';
import question from "../../../assets/images/auth/Exclamation-Mark-Symbol.png"
import { ExclamationCircleIcon, KeyIcon, LockClosedIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { AiOutlineWarning } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setItem } from '../../../redux/slices/OrganizationSlice';

function SignOutComponent(props) {
    const navigator = useNavigate()
    const dispatch = useDispatch()

    const handleSignOut = () => {
        localStorage.removeItem("token")
        sessionStorage.removeItem("organization")
        localStorage.removeItem("profileImage")
        localStorage.removeItem("profileImage")
        dispatch(setItem(null))
        navigator("/signin")
    }

    return (
        <>
            <div className="modal">
                <div className="bg-white modal-box max-w-lg rounded-xl " >
                    <div className='flex'>
                        <div>
                            <ExclamationCircleIcon className='flex w-14 h-14 p-2 rounded-full border-primary text-reject bg-reject bg-opacity-20' />
                        </div>
                        <div>
                            <h1 className=' font-sp-pro-text-semibold text-xl px-4'>Sign Out?</h1>
                            <p className='text-center font-sp-pro-text-regular px-4  leading-6 text-sm'>Are you sure you want to Sign Out?</p>
                        </div>
                    </div>

                    <div className='flex w-full pt-6 space-x-6 justify-end'>
                        <label htmlFor='my-modal' className='border w-1/5 p-2 px-4 border-black border-opacity-20 rounded-md text-center cursor-pointer hover:bg-bg-primary'>Cancel</label>
                        <div onClick={handleSignOut} className='border w-1/5 p-2 px-4 text-white bg-reject border-text-color border-opacity-20 rounded-md text-center'><button>Sign out</button></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SignOutComponent;
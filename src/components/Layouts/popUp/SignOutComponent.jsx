import React from 'react';
import { useNavigate } from 'react-router-dom';
import question from "../../../assets/images/auth/Exclamation-Mark-Symbol.png"
import { KeyIcon, LockClosedIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { AiOutlineWarning } from 'react-icons/ai';

function SignOutComponent(props) {
    const navigator = useNavigate()
    const handleSignOut = () => {
        localStorage.removeItem("token")
        sessionStorage.removeItem("organization")
        navigator("/signin")
    }

    return (
        <>
            <div className="modal">
                <div className="bg-white modal-box max-w-md rounded-lg " >
                <AiOutlineWarning className='flex w-28 h-28 p-2 rounded-full border-primary justify-center m-auto' />
                    {/* <img src={question} alt="" className='flex w-28 h-28 border p-3 rounded-full border-primary justify-center m-auto' /> */}
                    <h1 className='block  font-sp-pro-text-bold text-xl text-reject text-center m-2'>Are you sure you want to sign out?</h1>
                    <p className='text-center font-sp-pro-text-regular px-2 p-2 leading-6 text-sm'>The action you are going to perform is irreversible please confirm! are you  sure you want to sign out</p>
                    <div className='flex w-full pt-2 space-x-14 justify-center'>
                        <label htmlFor='my-modal' className='border w-1/3 p-2 px-4 border-black border-opacity-20 rounded-md text-center cursor-pointer hover:bg-bg-primary'>Cancel</label>
                        <div onClick={handleSignOut} className='border w-1/3 p-2 px-4 text-white bg-reject border-text-color border-opacity-20 rounded-md text-center'><button>Sign out</button></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SignOutComponent;
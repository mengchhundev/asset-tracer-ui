import React from 'react';
import { useNavigate } from 'react-router-dom';


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
                <div className="bg-white rounded-lg  " >
                    <div>      
                        <div className='p-6'>
                            <h1 className='block  font-sp-pro-text-bold text-[18px] text-text-color'>Sign out?</h1>
                            < hr className='my-2 border-text-color border-opacity-20' />
                            <p className=' text-center font-sp-pro-text-regular text-[16px] text-text-color'>Are you sure you want to Sign out?</p>     
                        </div>
                        <div className='flex w-full p-2 space-x-4 justify-center'>
                            <div className='border w-1/2 p-2 text-primary border-primary border-opacity-20 rounded-md text-center cursor-pointer'><label htmlFor='my-modal' >Cancel</label></div>
                            <div onClick={handleSignOut} className='border w-1/2 p-2 text-white bg-primary border-text-color border-opacity-20 rounded-md text-center'><button>Sign out</button></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SignOutComponent;
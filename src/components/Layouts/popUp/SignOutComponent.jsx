import { XCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import logo from '../../../assets/images/A_Tracer_logo1.png'
import { Link } from 'react-router-dom';

function SignOutComponent(props) {
    const handleSignOut = () => {
        localStorage.removeItem("token")
        sessionStorage.removeItem("organization")
        navigator("/signin")
    }

    return (
        <>
            <div className="modal">
                <div className="bg-white rounded-lg p-6 " >
                    <div>
                        {/* <div className=''>
                            <img src={logo} alt="" className="w-24 block m-auto" />
                        </div> */}
                        <div className=''>
                            <h1 className='block  font-sp-pro-text-bold text-[22px] text-text-color'>Sign out?</h1>
                            < hr className='my-1' />
                            <p className='block my-2 text-center font-sp-pro-text-regular text-[20px] p-2 text-text-color'>Are you sure you want to Sign out?</p>
                            
                        </div>
                        
                        <div className="flex mt-7 justify-end">
                            <label htmlFor="my-modal" className="mx-8 text-white bg-stone-500 py-3 px-7 rounded-3xl">Cancell</label>
                            <Link
                                to="/signin"
                                                      
                            >
                            <button 
                                onClick={handleSignOut}  className=" text-white bg-primary py-3 px-7 rounded-3xl">Sign out</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SignOutComponent;
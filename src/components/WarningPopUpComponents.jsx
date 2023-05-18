import React from 'react';
import false1 from '../assets/images/false.png'
import true1 from '../assets/images/success.png'

function WarningPopUpComponents({setIsShowErr}) {
    console.log(setIsShowErr);
    return (
        <>
          <div>
            <div className="fixed top-0 left-0 font-sp-pro-text-semibold right-0 bottom-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="bg-white rounded-3xl p-6 w-72 z-10 " >
                    <div className='flex flex-col justify-end'>
                        <div className="relative w-40 m-auto pb-7">
                            <img src={false1} alt="Signup Picture" className='w-full' />
                        </div>
                        <p className="text-3xl  text-red-400 mb-2">Ooop...</p>
                        <p className="text-lg font-sp-pro-text-regular text-text-color mt-6">Your email or password are incorected!</p>
                        <button onClick={() => setIsShowErr(false)} className="bg-red-400 text-white mt-14 py-2 px-4 rounded-2xl">
                            <span >Close </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
      </>
    )}
export default WarningPopUpComponents;
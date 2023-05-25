import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import key from '../../assets/images/forgotPassword/key.png'
import UpdatePassWordSuccessComponent from './popup/UpdatePassWordSuccessComponent';
import { Menu, Transition } from '@headlessui/react';
// import verify from '../../assets/images/forgotPassword/verify.png'

function ResetpasswordComponent(props) {
  let [isOpen, setIsOpen] = useState(false)
  function openDetail() {
    setIsOpen(true)
  }
  return (
    <div>
      <div>
        <section className="bg-gray-50">
          {/* <label htmlFor="my-modal" className="btn">open modal</label>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal rounded-sm ">
            <div className="modal-box">
            <div className="flex justify-center"> <img src={verify} width={50} alt=""/></div>                       
              <h2 className="mb-1 py-5 text-lg font-sp-pro-text-semibold leading-tight text-primary md:text-2xl text-center pt-[25px]">Password Reset</h2>
              <p className="mt-[60px] text-sm text-gray-500 text-center"> Your new password has been successfully reset.</p>
              <p className="text-center font-sp-pro-text-medium text-sm text-text-color">Click below to log in.</p>
              <div className="modal-action mt-[70px]">
                <label htmlFor="my-modal" className="inline-block w-full rounded text-center bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white">Continue</label>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md  sm:p-8">
              <div className="w-10/12 container m-auto">
                <div className='flex justify-center'>
                  <img src={key} width={50} height={50} alt="" />
                </div>
                <h2 className="mb-1 text-lg font-sp-pro-text-semibold leading-tight text-gray-900 md:text-2xl text-center text-primary pt-4">
                  Set New Password
                </h2>
                <p className="text-center text-sm text-text-color font-sp-pro-text-medium pt-3">
                  Your new password must be different to previously used password.
                </p>
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5 pt-5" action="#">
                  <div className='relative'>
                    <label
                      for="password"
                      className="absolute hidden font-sp-pro-text-semibold bg-white bottom-[28px] left-[10px] px-2 mb-2 text-sm text-text-color transition"
                    >
                      Set new password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="border-[2px] border-text-color border-opacity-20 text-text-color sm:text-sm rounded-lg focus:border-[2px] block w-full p-2.5"
                      placeholder='Set new password'
                      onFocus={(e) => {
                        e.target.previousSibling.style.display = 'block';
                        e.target.placeholder = '';
                      }}
                      onBlur={(e) => {
                        if (!e.target.value) {
                          e.target.previousSibling.style.display = 'none';
                          e.target.placeholder = 'Set new password';
                          border - primary
                        }
                      }}
                    />
                  </div>
                  <div className='relative pt-5 fo'>
                    <label
                      for="password"
                      name="confirmpassword"
                      className="absolute bottom-[28px]  left-[10px] px-2 font-sp-pro-text-semibold bg-white hidden mb-2 text-sm text-text-color"
                      style={{ display: 'none' }}
                    >
                      Confirm password
                    </label>
                    <input

                      type="confirm_password"
                      name="confirm_password"
                      id="password"
                      className="border-[2px] border-text-color border-opacity-20 text-text-color sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2.5"
                      placeholder='Confirm password'
                      onFocus={(e) => {
                        e.target.previousSibling.style.display = 'block';
                        e.target.placeholder = '';
                      }}
                      onBlur={(e) => {
                        if (!e.target.value) {
                          e.target.previousSibling.style.display = 'none';
                          e.target.placeholder = 'Confirm password';
                        }
                      }}
                    />
                  </div>
                  <div className="">
                    <Menu as="div" className="">
                      <div>
                        <Menu.Button className="justify-center">
                          <div
                            onClick={openDetail}
                            className="p-2 w-full  inline-block rounded text-start bg bg-primary hover:bg-primary hover:text-primary hover:bg-opacity-10 px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white"
                          >
                            Reset Password
                          </div>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items>
                          <UpdatePassWordSuccessComponent setIsOpen={setIsOpen} isOpen={isOpen} />
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="pt-3">

                  </div>

                  <p className="mt-2 mb-0 pt-1 text-sm text-text-color">
                    Remember the password?
                    <a className="ml-1 text-primary font-sp-pro-text-semibold">
                      <Link to={"/signin"}>Sign in</Link>
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ResetpasswordComponent;
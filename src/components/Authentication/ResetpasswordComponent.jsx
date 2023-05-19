import React from 'react';
import { Link } from 'react-router-dom';
import key from '../../assets/images/forgotPassword/key.png'
function ResetpasswordComponent(props) {
    return (
        <div>
            <div>
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md  sm:p-8">
          <div className="w-10/12 container m-auto">
          <div className='flex justify-center'>
                  <img src={key} width={50} height={50} alt=""/>
                </div>
            <h2 class="mb-1 text-lg font-sp-pro-text-semibold leading-tight text-gray-900 md:text-2xl text-center text-primary pt-4">
              Set New Password
            </h2>
            <p className="text-center text-sm text-text-color font-sp-pro-text-medium pt-3">
              Your new password must be different to previously used password.
            </p>
            <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5 pt-5" action="#">
            <div className='relative'>
                  <label
                    for="password"
                  class="absolute font-sp-pro-text-semibold bg-white bottom-[28px] left-[10px] px-2 block mb-2 text-sm text-text-color transition"
                  >
                    Set new password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                  class="border-[2px] border-text-color border-opacity-20 text-text-color sm:text-sm rounded-lg focus:border-[2px] block w-full p-2.5"
                  placeholder='new password'
                  onFocus={(e) => {
                    e.target.previousSibling.style.display = 'block';
                    e.target.placeholder = '';
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.previousSibling.style.display = 'none';
                      e.target.placeholder = 'Confirm password';
                      border-primary
                    }
                  }}
                  />
                </div>
                <div className='relative pt-5 fo'>
                  <label
                    for="password"
                    name ="confirmpassword"
                  class="absolute bottom-[28px]  left-[10px] px-2 font-sp-pro-text-semibold bg-white hidden mb-2 text-sm text-text-color"
                  style={{ display: 'none' }}
                  >
                    Confirm password
                  </label>
                  <input

                    type="confirm_password"
                    name="confirm_password"
                    id="password"
                    class="border-[2px] border-text-color border-opacity-20 text-text-color sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-6 p-2.5"
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
                <div className="pt-3">
                <button
                type="submit"
                className="inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white"
              >
                Reset Password
              </button>
                </div>
              
              <p class="mt-2 mb-0 pt-1 text-sm text-text-color">
                Remember the password?
                <a class="ml-1 text-primary font-sp-pro-text-semibold">
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
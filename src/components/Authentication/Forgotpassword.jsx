import React from 'react';
import { Link } from 'react-router-dom';
import key from '../../assets/images/key.png'
import vector from '../../assets/images/vector.png'
const Forgotpassword = () => {
    return (
        <div>
        <section>
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
              <div className='w-10/12 container m-auto'>
                <div className='flex justify-center'>
                  <img src={key} width={50} height={50} alt=""/>
                </div>
              <h2 class="mb-1 text-lg font-sp-pro-text-semibold leading-tight text-primary md:text-2xl text-center pt-4">
                Forgot Password
              </h2>
              <p className="text-center text-sm text-text-color font-sp-pro-text-medium pt-3">
                Please enter your email address.
              </p>
              <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5 pt-5" action="#">
                <div className='relative'>
                  <label
                    for="password"
                  class="absolute bg-white bottom-[28px] left-[15px] px-1 block mb-2 text-sm font-sp-pro-text-semibold text-text-color"
                  >
                    Email
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                  class="border-[2px] border-primary text-text-color sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div className='pt-3'>
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white"
                >
                  Send
                </button>
                </div>
                
                <div class="mt-2 mb-0 pt-1 text-sm text-center text-text-color hover:text-text-color font-sp-pro-text-medium ">
                  <a class="ml-1">
                    <Link to={"/signin"}><img className='inline-block pr-2 pb-1' src={vector} width={20}/>Back  to Sign in</Link>
                  </a>
                </div>
              </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Forgotpassword;


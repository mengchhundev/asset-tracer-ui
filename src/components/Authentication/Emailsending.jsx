import React from "react";
import { Link } from "react-router-dom";
import message from '../../assets/images/message.png'
import vector from '../../assets/images/vector.png'
const Emailsending = () => {
  return (
    <div>
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
            <div className="w-10/12 container m-auto">
            <div className='flex justify-center'>
            <img src={message} width={50} height={50} alt=""/>
          </div>
            <h2 class="mb-1 text-lg font-sp-pro-text-semibold text-primary leading-tight md:text-2xl text-center pt-4">
              Check your email
            </h2>
            <p className="text-center font-sp-pro-text-medium text-sm text-text-color pt-3">
              We sent a password reset link to
            </p>
            <p className="text-center font-sp-pro-text-medium text-sm text-text-color">test@gmail.com</p>
            <div className="py-5">
            <button
              type="submit"
              className="inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white"
            >
              Open Email
            </button>
            </div>
            <p class="mt-2 mb-0 pt-1 text-sm text-center text-text-color">
                        Din't recieve the email ?
                        <a
                          class="ml-1 text-primary font-sp-pro-text-semibold"
                        >
                           <Link to={"/"}>Click to resend</Link>
                        </a>
            </p>
            <div class="mt-2 mb-0 text-sm text-center text-text-color pt-5 font-sp-pro-text-medium ">
                  <a class="ml-1 hover:text-text-color">
                    <Link to={"/signin"}><img className='inline-block pr-2 pb-1' src={vector} width={20}/>Back  to Sign in</Link>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emailsending;

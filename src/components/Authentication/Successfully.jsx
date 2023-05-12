import React from "react";
import verify from '../../assets/images/verify.png'
const Successfully = () => {
  return (
    <div>
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
            <div className="w-10/12 container m-auto">
            <div className='flex justify-center'>
            <img src={verify} width={50} height={50} alt=""/>
          </div>
            <h2 class="mb-1 py-5 text-lg font-sp-pro-text-semibold leading-tight text-primary md:text-2xl text-center">
              Password Reset
            </h2>
            <p className="text-center font-sp-pro-text-medium text-text-color text-sm">
              Your new password has been successfully reset.
            </p>
            <p className="text-center font-sp-pro-text-medium text-sm text-text-color">Click below to log in.</p>
            <div className="pt-20">
            <button
              type="submit"
              className="inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white"
            >
              Continue
            </button>
            </div> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Successfully;

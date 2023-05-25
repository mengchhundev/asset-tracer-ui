import React, { useEffect, useState } from 'react';
import message from '../../assets/images/forgotPassword/message.png'
import vector from '../../assets/images/forgotPassword/vector.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
function EmailSendingComponent(props) {

  const [email, setEmail] = useState()
  const location = useLocation()

  useEffect(() => {
    console.log(location)
    setEmail(location.state?.email)
  }, [])


  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md sm:p-8">
            <div className="w-10/12 container m-auto">
              <div className='flex justify-center'>
                <img src={message} width={50} height={50} alt="" />
              </div>
              <h2 className="mb-1 text-lg font-sp-pro-text-semibold text-primary leading-tight md:text-2xl text-center pt-4">
                Check your email
              </h2>
              <p className="text-center font-sp-pro-text-medium text-sm text-text-color pt-3">
                We sent a password reset link to
              </p>
              <p className="text-center font-sp-pro-text-medium text-sm text-blue-700">{email}</p>
              <div className="py-5">
                <NavLink
                  to={"/signin"}
                  className="inline-block w-full text-center rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white"
                >
                  Back  to Sign in
                </NavLink>
              </div>
              <p className="mt-2 mb-0 pt-1 text-sm text-center text-text-color">
                Din't recieve the email ?
                <a
                  className="ml-1 text-primary font-sp-pro-text-semibold"
                >
                  <Link >Click to resend</Link>
                </a>
              </p>
              <div className="mt-2 mb-0 text-sm text-center text-text-color pt-5 font-sp-pro-text-medium ">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmailSendingComponent;
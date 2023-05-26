import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import key from '../../assets/images/forgotPassword/key.png'
import { useFormik } from 'formik';
import * as Yup from "yup";
import UserService from '../../redux/services/UserService';

function ResetPasswordComponent(props) {

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const code = urlParams.get('code');
  const navigator = useNavigate()
  const [isValidCode, setIsValidCode] = useState(false)
  const [newData, setNewData] = useState({
    newPassword: "", confirmNewPasswrod: ""
  })
  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value })
  };

  const handleCheckValidCode = () => {
    UserService.checkValidCode(id, code).then(res => {
      if (res.data?.success) {
        setIsValidCode(false)
      }
    })
  }

  const handleSetNewPassword = () => {
    UserService.setNewPassword(id, code, newData).then(res => {
      if (res.data?.success) {
        navigator("/signin")
      }
    })
  }

  useEffect(() => {
    handleCheckValidCode()
  }, [])

  // Change Password
  const formik = useFormik({
    initialValues: newData,
    validationSchema: Yup.object().shape({
      newPassword: Yup.string().required("New password is required"),
      confirmNewPasswrod: Yup.string().required("Confirm new password is required").oneOf([Yup.ref('newPassword'), null], 'Password not match'),
    }),
    onSubmit: (val, { resetForm }) => {
      handleSetNewPassword()
    }
  });


  return (
    <div>
      <div>
        <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md  sm:p-8">
              <div className="w-10/12 container m-auto">
                <div className='flex justify-center'>
                  <img src={key} width={80} height={80} alt="" />
                </div>
                <h2 className="mb-1 text-lg font-sp-pro-text-semibold leading-tight text-gray-900 md:text-2xl text-center text-primary pt-4">
                  Set New Password
                </h2>
                <p className="text-center text-sm text-text-color font-sp-pro-text-medium pt-3">
                  Your new password must be different to previously used password.
                </p>
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5 pt-5" onSubmit={formik.handleSubmit}>
                  <div className='relative'>
                    <label>
                      Set new password
                    </label>
                    <input
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newData.newPassword}
                      name="newPassword"
                      className="border-[2px] border-text-color border-opacity-20 text-text-color sm:text-sm rounded-lg focus:border-[2px] block w-full p-2.5"
                      placeholder='Set new password'
                    />
                    {formik.touched.newPassword && formik.errors?.newPassword ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.newPassword}</p> : null}
                  </div>
                  <div className='relative'>
                    <label>
                      Confirm password
                    </label>
                    <input
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newData.confirmNewPasswrod}
                      name="confirmNewPasswrod"
                      className="border-[2px] border-text-color border-opacity-20 text-text-color sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2.5"
                      placeholder='Confirm password'
                    />
                    {formik.touched.confirmNewPasswrod && formik.errors?.confirmNewPasswrod ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.confirmNewPasswrod}</p> : null}
                  </div>
                  <button type='submit' className='p-2 w-full text-center inline-block rounded bg-primary hover:bg-primary hover:text-primary hover:bg-opacity-10 px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white'> Reset Password</button>
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

export default ResetPasswordComponent;
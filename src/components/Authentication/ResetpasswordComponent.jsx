import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import key from '../../assets/images/forgotPassword/key.png'
import { useFormik } from 'formik';

function ResetPasswordComponent(props) {

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const code = urlParams.get('code');

  const [newData, setNewData] = useState({

  })
  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value })
  };

  // Change Password
  const formik = useFormik({
    initialValues: newData,
    validationSchema: Yup.object().shape({
      // newPassword: Yup.string().required("New password is required"),
      // confirmNewPasswrod: Yup.string().required("Confirm new password is required"),
    }),
    onSubmit: (val, { resetForm }) => {
      handleChangePassword()
      resetForm(val = { oldPassword: "", newPassword: "", confirmNewPasswrod: "" })
      setNewData({ oldPassword: "", newPassword: "", confirmNewPasswrod: "" })
    }
  });

  const handleResetPassword = () => {

  }

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
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5 pt-5" action="#">
                  <div className='relative'>
                    <label
                      htmlFor="password"
                      className="absolute hidden font-sp-pro-text-semibold bg-white bottom-[28px] left-[10px] px-2 mb-2 text-sm text-text-color transition"
                    >
                      Set new password
                    </label>
                    <input
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={profile.name}
                      type="password"
                      name="password"
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
                        }
                      }}
                    />
                  </div>
                  <div className='relative pt-2 fo'>
                    <label
                      htmlFor="password"
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
                  <button className='p-2 w-full text-center inline-block rounded bg-primary hover:bg-primary hover:text-primary hover:bg-opacity-10 px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white'> Reset Password</button>
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
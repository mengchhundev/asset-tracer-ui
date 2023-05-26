import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import key from '../../assets/images/forgotPassword/key.png'
import vector from '../../assets/images/forgotPassword/vector.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import UserService from '../../redux/services/UserService';
function ForgotPasswordComponent(props) {

    const navigator = useNavigate()

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required').test('has-com', 'Email must end with .com', (value) =>
            value.endsWith('.com')),
    });
    return (
        <div>
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-bg-primary">
                    <div className="w-full p-6 bg-white rounded-lg shadow-md md:mt-0 sm:max-w-md sm:p-8">
                        <div className='w-10/12 container m-auto'>
                            <div className='flex justify-center'>
                                <img src={key} width={80} height={80} alt="" />
                            </div>
                            <h2 className="mb-1 text-lg font-sp-pro-text-semibold leading-tight text-primary md:text-2xl text-center pt-4">
                                Forgot Password
                            </h2>
                            <p className="text-center text-sm text-text-color font-sp-pro-text-medium pt-3">
                                Please enter your email address.
                            </p>
                            <Formik
                                initialValues={{
                                    email: ''
                                }}
                                onSubmit={value => {
                                    UserService.forgotPassword(value.email).then(res => {
                                        if (res.data?.success) {
                                            navigator("/email-sending", { state: { email: value.email } })
                                        }
                                    })
                                }}
                                validationSchema={SignupSchema}
                            >
                                {({ }) => (
                                    <Form>
                                        <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5 pt-5">
                                            <div className='relative'>
                                                <label>Email</label>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    className="border-2 mb-2 mt-1 border-primary text-text-color sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 outline-none block w-full p-2.5"
                                                />
                                                <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />
                                            </div>
                                            <div className=''>
                                                <button
                                                    type="submit"
                                                    className="inline-block w-full rounded-lg bg-primary px-7 pt-3 pb-2.5 text-sm font-sp-pro-text-medium text-white"
                                                >
                                                    Send
                                                </button>
                                            </div>
                                            <div className="mb-0 pt-1 text-sm text-center text-text-color hover:text-text-color font-sp-pro-text-medium ">
                                                <a className="ml-1">
                                                    <Link to={"/signin"}><img className='inline-block pr-2 pb-1' src={vector} width={20} />Back  to Sign in</Link>
                                                </a>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ForgotPasswordComponent;
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from 'formik';
import signin from '../../assets/images/signin.png'
import WarningPopUpComponents from '../WarningPopUpComponents';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../redux/services/googleAuth/firebase';
export default function SignInComponent() {



    const SignInWithFirebase = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                if (result) {
                    console.log("result",result);
                    api.post("/users/registerWithGoogle", {
                        name: result.user.displayName,
                        email: result.user.email,
                        password: result.user.uid,
                    })
                        .then(res => {
                            localStorage.setItem("token", res.data.payload.token)
                            if (localStorage.getItem("token")) {
                                navigator("/dashboard");
                            }
                        })
                        .catch(err => {
                            console.log("Error occurred while registering user:", err);
                        });
                }
                else {

                    console.log("Sign-in result is undefined");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })
    const [message, setMessage] = useState('')
    const [isShowErr, setIsShowErr] = useState(false)
    const navigator = useNavigate();

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setUserInfo((prev) => ({ ...prev, [name]: value }));
    // }
    console.log(userInfo)

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    };

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required')
    });

    return (
        <>
            <div>
                <>
                    
                                <div className="h-screen w-full lg:container m-auto font-sp-pro-text-regular text-text-color">
                                    <div className="flex h-full flex-wrap flex-row-reverse md:flex-nowrap items-center justify-around px-10"> 
                                        <div className=' p-10 rounded-lg border-slate-200 border-2'>
                                        {isShowErr && (
                        <WarningPopUpComponents setIsShowErr={setIsShowErr} />
                    )}
                    <Formik initialValues={{ email: "" , password: "" }} onSubmit={values => {
                        // same shape as initial values
                        console.log("Value from user input", values);
                        // setUserInfo({...userInfo ,...values})
                        
                        api.post("/users/login", values).then(
                            res => {
                                console.log(res.data.payload);
                                localStorage.setItem("token", res.data.payload.token)
                                if (localStorage.getItem("token")) {
                                    navigator("/dashboard");
                                }
                                setIsShowErr(false)
                            },
                            err => {
                                if (err.response.data.status == 404) {
                                    setMessage(err.response.data.detail)
                                    setIsShowErr(true)
                                }
                                console.log(message);
                            }
                        ).catch(err => {
                            console.log(err);
                        })
                    }} 
                    validationSchema={SignupSchema}
                    validate={validate}>
                        {({ isSubmitting }) => (
                            <Form>
                                            <h2 className="text-3xl text-center font-sp-pro-text-bold text-text-color">
                                                Login Into Your Account
                                            </h2>
                                            <p className='text-sm text-left my-6'>Welcome back! Please enter your information</p>
                                            {/* input Email */}
                                            <div className="text-left mb-3">
                                                <label className="block mb-2 ml-1 text-sm">Email</label>
                                                <Field name="email" type="email"
                                                    className="text-sm border-slate-300 border-2 rounded-lg block w-full py-2.5 px-4 focus:border-2 focus:border-primary focus:outline-0 focus:bg-white focus:border-purple-500"
                                                    placeholder="Enter your email" />
                                                <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />
                                            </div>
                                            {/* Input Password */}
                                            <div className="text-left mb-3">
                                                <label className="block mb-2 ml-1 text-sm">Password</label>
                                                <Field name="password" type="password"
                                                    className="text-sm border-slate-300 border-2 rounded-lg block w-full py-2.5 px-4 focus:border-2 focus:border-primary focus:outline-0 focus:bg-white focus:border-purple-500"
                                                    placeholder="Enter your passowrd" />
                                                <ErrorMessage name="password" component="div" className="text-red-400 text-sm" />
                                            </div>
                                            <p class="text-sm flex justify-between my-5">
                                                <div class="flex items-center">
                                                    <input type="checkbox" value="" class="w-3.5 h-3.5 text-blue-600 bg-gray-100 border-gray-300 rounded-lg" />
                                                    <label for="checked-checkbox" class="ml-2 text-sm font-sm">Remember me</label>
                                                </div>
                                                <a
                                                    href="#"
                                                    class="text-primary"
                                                >
                                                    <Link to={"/signin"}>Forgot password?</Link>
                                                </a>
                                            </p>

                                            {/* <div className="my-6"> */}
                                            <button type="submit" class="bg-primary w-full text-white font-bold py-2 px-4 my-6 rounded">
                                                Sign in
                                            </button>
                                            {/* </div> */}

                                            <p class="text-sm flex justify-between z-0">
                                                <span className=''>
                                                    Don't have account?
                                                </span>
                                                <a
                                                    href="#"
                                                    class="text-primary"
                                                >
                                                    <Link to={"/signup"}>Sign Up</Link>
                                                </a>
                                            </p>

                                            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t-2 before:border-gray-light after:mt-0.5 after:flex-1 after:border-t-2 after:border-gray-light">
                                                <p className="mx-4 mb-0 text-center text-sm text-text-color ">
                                                    OR
                                                </p>
                                            </div>
                                            </Form>
                        )}
                    </Formik>
                                            <button className="font-sp-pro-text-regular border border-slate-300  flex items-center justify-center w-full rounded-lg py-2 text-sm text-gray-800">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="#FFC107"
                                                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                                    ></path>
                                                    <path
                                                        fill="#FF3D00"
                                                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                                    ></path>
                                                    <path
                                                        fill="#4CAF50"
                                                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                                    ></path>
                                                    <path
                                                        fill="#1976D2"
                                                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                                    ></path>
                                                </svg>
                                                <span className="ml-2 font-semibold" onClick={SignInWithFirebase} >Sign up with Google</span>
                                            </button>
                                        </div>
                                        <div className=" w-5/12 hidden md:block">
                                            <img src={signin} alt="Signup Picture" className='w-full' />
                                        </div>
                                    </div>
                                </div>
                            
                </>
            </div>
        </>
    )
}

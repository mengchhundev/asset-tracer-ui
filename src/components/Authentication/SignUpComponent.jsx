import React from 'react'
import { auth, provider } from '../../redux/services/googleAuth/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../redux/services/config/api';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import signup from '../../assets/images/signup.png'
// import { GoogleLogin } from 'react-google-login';

export default function SignUpComponent() {

    // useEffect(() => {
    //     api.get("/users/register/verify").then(
    //         res => {
    //             console.log(res);
    //         }
    //     )
    // }, [])
    const navigator = useNavigate();
    const provider = new GoogleAuthProvider();
    const [success, setSuccess] = useState(false);
    const [userInfo, setUserInfo] = useState({})


    const SignInWithFirebase = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                if (result) {
                    api.post("/users/registerWithGoogle", {
                        name: result._tokenResponse.displayName,
                        email: result._tokenResponse.email,
                        password: result._tokenResponse.idToken,
                    })
                        .then(res => {
                            console.log("this", res);
                            setSuccess(true);
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


    useEffect(() => {
        console.log("User Infor", userInfo);
    }, [userInfo])

    console.log(userInfo)

    const handleSignUp = async (userInfo) => {
        try {
            const respone = await api.post("/users/register", userInfo);
        } catch (e) {
            console.log("Error", e);
        }
    };

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('email Required').test('has-com', 'Email must end with .com', (value) =>
            value.endsWith('.com')
        ),
        password: Yup.string().required('password Required'),
        name: Yup.string().required('Name Required'),
    });
    return (
        <>
            <div>
                <>
                    {/* {isShowErr && (
                        <WarningPopUpComponents setIsShowErr={setIsShowErr} />
                    )} */}
                    <Formik
                        initialValues={{ email: "", name: "", password: "" }}
                        onSubmit={userInfo => {
                            handleSignUp(userInfo)
                        }}
                        validationSchema={SignupSchema}
                    // validate={validate}
                    >
                        {({  }) => (
                            <Form>
                                <div className="h-screen w-full lg:container m-auto font-sp-pro-text-regular text-text-color">
                                    <div className="flex h-full flex-wrap md:flex-nowrap items-center justify-around px-10">
                                        <div class="">
                                            <h2 className="text-3xl text-center font-sp-pro-text-bold text-text-color">
                                                Create Your Account
                                            </h2>

                                            <div className="my-5 flex font-sp-pro-text-regular text-sm items-center before:mt-0.5 before:flex-1 before:border-t-[4px] before:border-primary after:mt-0.5 after:flex-1 after:border-t after:border-transparent">
                                                <p className="mx-4 mb-0 text-center font-sp-pro-text-medium text-primary">
                                                    Sign up with
                                                </p>
                                            </div>
                                            <button className="font-sp-pro-text-regular border border-border-strock flex items-center justify-center w-full rounded-lg py-2 text-sm text-gray-800">
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
                                                <span className="ml-2 font-semibold" onClick={SignInWithFirebase}>Sign up with Google</span>



                                            </button>
                                            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t-2 before:border-gray-light after:mt-0.5 after:flex-1 after:border-t-2 after:border-gray-light">
                                                <p className="mx-4 mb-0 text-center text-sm text-text-color ">
                                                    OR
                                                </p>
                                            </div>
                                            <div className="text-left mb-3">
                                                <label className="block mb-2 ml-1 text-sm">Name</label>
                                                <Field name='name' type="text" className="text-sm border-border-strock border-2 rounded-lg block w-full py-2.5 px-4 focus:border-2 focus:border-gray  focus:outline-0 focus:bg-white focus:border-purple-500" placeholder="Enter your name" />
                                                <ErrorMessage name="name" component="div" className="text-red-400 text-sm" />

                                            </div>
                                            <div className="text-left mb-3">
                                                <label className="block mb-2 ml-1 text-sm">Email</label>
                                                <Field name='email' type="email" className="text-sm border-border-strock border-2 rounded-lg block w-full py-2.5 px-4 focus:border-2 focus:border-gray  focus:outline-0 focus:bg-white focus:border-purple-500" placeholder="Enter you email" />
                                                <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />

                                            </div>
                                            <div className="text-left mb-3">
                                                <label className="block mb-2 ml-1 text-sm">password</label>
                                                <Field type="password" name='password' className="text-sm border-border-strock border-2 rounded-lg block w-full py-2.5 px-4 focus:border-2 focus:border-gray  focus:outline-0 focus:bg-white focus:border-purple-500" placeholder="********" />
                                                <ErrorMessage name="password" component="div" className="text-red-400 text-sm" />
                                            </div>

                                            <div className="my-6">
                                                <button type="submit" class="bg-primary w-full text-white font-bold py-2 px-4 rounded">
                                                    Sign up
                                                </button>
                                            </div>
                                            <p class="text-sm flex justify-between">
                                                <span className='opacity-60'>
                                                    Already have an account?
                                                </span>
                                                <a
                                                    href="#"
                                                    class="text-primary"
                                                >
                                                    <Link to={"/signin"}>Sign In</Link>
                                                </a>
                                            </p>
                                        </div>
                                        <div className="relative w-6/12 hidden md:block">
                                            <img src={signup} alt="Signup Picture" className='w-full' />
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </>
            </div>
        </>
    )
}

import React from "react";
import {
    RiNotification3Line,
    RiArrowDownSLine,
    RiSettings3Line,
    RiLogoutCircleRLine,
    RiThumbUpLine,
    RiChat3Line,
    RiCloseLine,
    RiMenu3Line,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
import logo from '../../assets/images/A_Tracer_logo1.png'
import '../../style/navbar.css'
import SignOutComponent from "./popUp/SignOutComponent";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import hongmenng from "../../assets/images/Iconteam/hongmenng.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";


export default function NavbarComponent() {

    const item = useSelector(state => state.organization?.item)

    let session = sessionStorage.getItem("organization")
    if (session) {
        session = JSON.parse(session)
    }


    useEffect(() => {

    }, [item])

    return (
        <header className="flex-shrink-0 bg-white px-8 h-[3.8rem] flex flex-row items-center justify-between text-text-color" style={{ zIndex: "100", boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 5px" }}>
            <div className="flex items-center w-[16rem] lg:flex-shrink-0 invisible lg:visible">
                <img src={logo} alt="" className="w-14" />
                <h1 className="text-center text-xl font-sp-pro-text-bold">
                    Asset Tracer
                </h1>
            </div>

            <div className="flex items-center w-full justify-between">
                <div className="font-sp-pro-text-semibold text-lg invisible lg:visible flex items-center">
                    {/* <p className="text-xs text-slate-500 font-sp-pro-text-regular">Organization Name:</p> */}
                    {/* <span className="text-slate-500 text-sm font-sp-pro-text-regular">ORG: </span> */}
                    <HiOutlineBuildingLibrary className="mb-[2px] mr-1"/>
                    {session ? session.name : null}
                </div>
                <nav className="flex items-center gap-2 ">

                    <Menu
                        menuButton={
                            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                                <RiNotification3Line />
                                <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
                                    2
                                </span>
                            </MenuButton>
                        }
                        align="end"
                        arrow
                        transition
                        arrowClassName="bg-secondary-100"
                        menuClassName="bg-secondary-100 rounded-lg shadow-lg"
                    >
                        <div className="flex justify-between px-3">
                            <h1 className="flex  items-center ">
                                <span className="text-lg text-text-color font-sp-pro-text-bold">Notification</span> <span className="text-sm ml-3 ">(3)</span>
                            </h1>
                        </div>

                        <hr className="my-2 border-text-color border-opacity-20" />

                        <MenuItem className=" rounded-md py-3 my-2 hover:bg-bg-primary w-72">
                            <div className="w-full">
                                <Link
                                    to="/"
                                    className="text-gray-300 flex flex-1 items-center gap-3 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
                                >
                                    <img
                                        src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                                        className="w-8 h-8 object-cover rounded-full"
                                    />
                                    <div className="text-sm flex flex-col">
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="font-sp-pro-text-medium">Asset Tracer</span>
                                            <span className="text-[8px]">21/10/2022</span>
                                        </div>
                                        <p className="text-slate-600 text-xs">
                                            assettracerteam@gmail.com
                                        </p>

                                    </div>

                                </Link>

                                <div className="pl-16 flex gap-3">
                                    <button className="bg-green text-white p-1.5 px-2.5 text-xs rounded-md">Accept</button>
                                    <button className="bg-white text-reject border border-reject p-1.5 px-2.5 text-xs rounded-md">Reject</button>
                                </div>
                            </div>
                        </MenuItem>

                        <hr className="my-1 border-text-color border-opacity-10" />

                        <div className="px-4 py-1">
                            <MenuItem className="px-0 mt-3 py-1.5 flex hover:bg-blue-700 hover:text-white hover:border-blue-700 bg-white rounded-md border justify-center cursor-pointer" style={{ border: "1px solid gainsboro" }}>
                                <Link
                                    to="/"
                                    className="text-sm"
                                >
                                    View all notifications
                                </Link>
                            </MenuItem>
                        </div>
                    </Menu>
                    <Menu
                        menuButton={
                            <MenuButton className="flex font-sp-pro-text-medium items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                                <img
                                    src={hongmenng}
                                    className="w-6 h-6 object-cover rounded-full"
                                />
                                <span className="header">Leng Hongmeng</span>
                                <RiArrowDownSLine className="w-5" />
                            </MenuButton>
                        }
                        align="end"
                        arrow
                        transition
                        arrowClassName="bg-secondary-100 "
                        menuClassName="bg-secondary-100 px-4 rounded-lg border"
                    >
                        <MenuItem className="p-0 hover:bg-transparent">
                            <Link
                                to="/profile"
                                className="rounded-lg hover:bg-bg-primary mx-2 transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-3 px-6 flex-1"
                            >
                                <img
                                    src={hongmenng}
                                    className="w-8 h-8 object-cover rounded-full"
                                />
                                <div className="flex flex-col text-sm">
                                    <span className="text-sm font-sp-pro-text-medium">Leng Hongmeng</span>
                                    <span className="text-xs text-gray-500">assettracerteam@gmail.com</span>
                                </div>
                            </Link>
                        </MenuItem>
                        <hr className="my-4 border-text-color border-opacity-10" />

                        <MenuItem className="p-0 hover:bg-transparent">
                            {/* <Link
                                to="/cerrar-sesion"
                                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                            >
                                 Cerrar sesión
                            </Link> */}
                            <label htmlFor="my-modal" className="bg-white cursor-pointer justify-center my-1 border mx-3 text-reject hover:border-reject hover:bg-reject hover:text-white border-gray-light rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-2 font-sp-pro-text-medium py-1.5  flex-1"><ArrowRightOnRectangleIcon className="w-5 text-gray-500" />Singout</label>
                        </MenuItem>
                    </Menu>
                </nav>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <SignOutComponent className="modal" />
            </div>


        </header>
    );
}

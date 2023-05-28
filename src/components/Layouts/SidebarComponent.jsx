import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// Icons
import {
    RiBarChart2Line,
    RiEarthLine,
    RiCustomerService2Line,
    RiLogoutCircleRLine,
    RiArrowRightSLine,
    RiMenu3Line,
    RiCloseLine,
    RiNotification3Line,
    RiSettings4Fill,
} from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { useSelector } from "react-redux";
import dashboard_ico from '../../assets/icon/dashboard.svg';
import category_ico from '../../assets/icon/Category.svg';
import invoice_ico from '../../assets/icon/‌Invoice.svg';
import asset_ico from '../../assets/icon/Asset.svg';
import tracking_ico from '../../assets/icon/Tracking.svg';
import user_ico from '../../assets/icon/Users.svg';
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import SignOutComponent from "./popUp/SignOutComponent";
import { BuildingLibraryIcon } from "@heroicons/react/20/solid";
import { IoMdNotifications } from "react-icons/io";


export default function SidebarComponent() {
    const navigator = useNavigate()
    const [showMenu, setShowMenu] = useState(false);
    const [showOrganization, setShowOrganization] = useState(false);
    const activeStyle = "flex items-center my-2 py-2.5 px-4 rounded-xl transition-colors hover:bg-bg-primary text-white bg-primary";
    const inActiveStyle = "flex items-center my-2 py-2.5 px-4 rounded-xl transition-colors hover:bg-bg-primary";

    const [isShowOrganization, setIsShowOrganization] = useState(false)
    const activeStyleDropDown = "flex items-center justify-between py-2.5 px-4 rounded-xl transition-colors hover:bg-bg-primary text-white bg-primary";
    const inActiveStyleDropDown = "flex items-center justify-between py-2.5 px-4 rounded-xl transition-colors hover:bg-bg-primary";

    const [showCategory, setShowCategory] = useState(false);
    const [isShowCategory, setIsShowCategory] = useState(false);

    const location = useLocation();
    const organization = JSON.parse(sessionStorage.getItem("organization"))
    const item = useSelector(state => state.organization?.item)

    useEffect(() => {
        if (location.pathname == "/organization") {
            setShowOrganization(true)
            setIsShowOrganization(true)
        }

        if (location?.state?.hideOrganizationBar) {
            setIsShowOrganization(false)
            setShowOrganization(false)
        }
    }, [location])

    const handleSignOut = () => {
        localStorage.removeItem("token")
        sessionStorage.removeItem("organization")
        navigator("/signin")
    }

    return (
        <>
            <div
                className={`flex-shrink-0 text-sidebar font-sp-pro-text-medium overflow-y-scroll fixed lg:static z-50 w-[17rem] bg-secondary-100 py-10 px-8 flex flex-col justify-between bg-white ${showMenu ? "left-0" : "-left-full"
                    } transition-all duration-200`} style={{ boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px" }}
            >
                <div>
                    <ul>
                        <li>
                            <NavLink
                                onClick={() => setShowOrganization(!showOrganization)}
                                className={`${isShowOrganization ? "bg-primary hover:bg-primary" : ""} ${isShowOrganization ? activeStyleDropDown : inActiveStyleDropDown}`}
                            >
                                <span className="flex items-center justify-start">

                                    <img src={dashboard_ico} className="h-5" />
                                    <p className="ml-3">Organization</p>
                                </span>
                                <RiArrowRightSLine
                                    className={`${showOrganization && "rotate-90"
                                        } transition-all text-2xl`}
                                />
                            </NavLink>
                            <ul
                                className={` ${showOrganization ? "h-[80px]" : "h-0"
                                    } overflow-y-hidden transition-all mt-2`}
                            >
                                <li>
                                    <NavLink
                                        to="/organization"
                                        className={({ isActive }) => isActive ? `py-2.5 px-4 ml-8 block relative before:w-[9px] before:h-[9px] before:absolute before:bg-text-color before:rounded-full before:-left-[6px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors text-text-color font-sp-pro-text-medium` :
                                            `py-2.5 px-4 ml-8 block relative before:w-[9px] before:h-[9px] before:absolute before:bg-sidebar before:rounded-full before:-left-[6px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors  font-sp-pro-text-medium`}
                                        onClick={() => { setIsShowOrganization(true), setIsShowCategory(false), setShowCategory(false), setShowMenu(false) }}
                                    >
                                        Organization List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/organization-create"
                                        className={({ isActive }) => isActive ? `py-2.5 px-4 ml-8 block relative before:w-[9px] before:h-[9px] before:absolute before:bg-text-color before:rounded-full before:-left-[6px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors text-text-color font-sp-pro-text-medium` :
                                            `py-2.5 px-4 ml-8 block relative before:w-[9px] before:h-[9px] before:absolute before:bg-sidebar before:rounded-full before:-left-[6px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors  font-sp-pro-text-medium`}
                                        onClick={() => { setIsShowOrganization(true), setIsShowCategory(false), setShowCategory(false), setShowMenu(false) }}
                                    >
                                        Create or Join
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {organization != null || item != null ? <>
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) => isActive ? `bg-primary hover:bg-primary text-white ${activeStyle}` : inActiveStyle}
                                    onClick={() => { setIsShowCategory(false), setIsShowOrganization(false), setShowOrganization(false), setIsShowOrganization(false), setIsShowCategory(false), setShowCategory(false) }}
                                >
                                    <span className="flex items-center justify-start">
                                        <img src={dashboard_ico} className="h-5" />
                                        <p className="ml-3">Dashboard</p>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => setShowCategory(!showCategory)}
                                    className={`${isShowCategory ? "bg-primary hover:bg-primary" : ""} ${isShowCategory ? activeStyleDropDown : inActiveStyleDropDown}`}
                                >
                                    <span className="flex items-center justify-start">

                                        <img src={category_ico} className="h-5" />
                                        <p className="ml-3">Category</p>
                                    </span>
                                    <RiArrowRightSLine
                                        className={`${showCategory && "rotate-90"
                                            } transition-all text-2xl`}
                                    />
                                </NavLink>
                                <ul
                                    className={` ${showCategory ? "h-[80px]" : "h-0"
                                        } overflow-y-hidden transition-all mt-2`}
                                >
                                    <li>
                                        <NavLink
                                            to="/super-category"
                                            className={({ isActive }) => isActive ? `py-2.5 px-4 ml-8 block relative before:w-[9px] before:h-[9px] before:absolute before:bg-text-color before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors text-text-color font-sp-pro-text-medium` :
                                                `py-2.5 px-4 ml-8 block relative before:w-[9px] before:h-[9px] before:absolute before:bg-sidebar before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors font-sp-pro-text-medium`}
                                            onClick={() => { setIsShowCategory(true), setIsShowOrganization(false), setShowOrganization(false), setShowMenu(false) }}
                                        >
                                            Type Super
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/normal-category"
                                            className={({ isActive }) => isActive ? `py-2.5 px-4 ml-8 block relative before:w-[9px] before:h-[9px] before:absolute before:bg-text-color before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors text-text-color font-sp-pro-text-medium` :
                                                `py-2.5 px-4 ml-8 block relative before:w-[9px] before:h-[9px] before:absolute before:bg-sidebar before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors font-sp-pro-text-medium`}
                                            onClick={() => { setIsShowCategory(true), setIsShowOrganization(false), setShowOrganization(false), setShowMenu(false) }}
                                        >
                                            Type Normal
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink
                                    to="/invoice"
                                    className={({ isActive }) => isActive ? `bg-primary hover:bg-primary text-white ${activeStyle}` : inActiveStyle}
                                    onClick={() => { setIsShowCategory(false), setIsShowOrganization(false), setShowOrganization(false), setIsShowOrganization(false), setIsShowCategory(false), setShowCategory(false) }}
                                >

                                    <span className="flex items-center justify-start">

                                        <img src={invoice_ico} className="h-5" />
                                        <p className="ml-3">Invoice</p>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/asset"
                                    className={({ isActive }) => isActive ? `bg-primary hover:bg-primary text-white ${activeStyle}` : inActiveStyle}
                                    onClick={() => { setIsShowCategory(false), setIsShowOrganization(false), setShowOrganization(false), setIsShowOrganization(false), setIsShowCategory(false), setShowCategory(false) }}
                                >

                                    <span className="flex items-center justify-start">

                                        <img src={asset_ico} className="h-5" />
                                        <p className="ml-3">Asset</p>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/tracking"
                                    className={({ isActive }) => isActive ? `bg-primary hover:bg-primary text-white ${activeStyle}` : inActiveStyle}
                                    onClick={() => { setIsShowCategory(false), setIsShowOrganization(false), setShowOrganization(false), setIsShowOrganization(false), setIsShowCategory(false), setShowCategory(false) }}
                                >
                                    <span className="flex items-center justify-start">

                                        <img src={tracking_ico} className="h-5" />
                                        <p className="ml-3">Tracking</p>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/user"
                                    className={({ isActive }) => isActive ? `bg-primary hover:bg-primary text-white ${activeStyle}` : inActiveStyle}
                                    onClick={() => { setIsShowCategory(false), setIsShowOrganization(false), setShowOrganization(false), setIsShowOrganization(false), setIsShowCategory(false), setShowCategory(false) }}
                                >
                                    <span className="flex items-center justify-start">

                                        <img src={user_ico} className="h-5" />
                                        <p className="ml-3">User</p>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/room-list"
                                    className={({ isActive }) => isActive ? `bg-primary hover:bg-primary text-white ${activeStyle}` : inActiveStyle}
                                    onClick={() => { setIsShowCategory(false), setIsShowOrganization(false), setShowOrganization(false), setIsShowOrganization(false), setIsShowCategory(false), setShowCategory(false) }}
                                >
                                    <span className="flex items-center justify-start">

                                        <BuildingLibraryIcon class="h-6 w-6 text-gray-500" />
                                        <p className="ml-3">Room</p>
                                    </span>
                                </NavLink>
                            </li>
                        </> : null}
                    </ul>
                </div>
                <nav>
                    <NavLink
                        to="/"
                        className="flex items-center py-2.5 px-4 transition-colors"
                    >
                        <IoMdNotifications className="mr-3 text-lg" /> Notification
                    </NavLink>
                    <NavLink
                        to="/"
                        className="flex items-center py-2.5 px-4 transition-colors"
                    >
                        <RiSettings4Fill className="mr-3 text-lg" /> Setting
                    </NavLink>

                    <label htmlFor="my-modal" className="flex items-center py-2.5 px-4 transition-colors cursor-pointer">
                        <RiLogoutCircleRLine className="mr-3 text-lg" />
                        Singout
                    </label>

                    <div className="flex items-center py-2.5 transition-colors">
                        <img
                            src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                            className="w-10 h-10 object-cover rounded-full"
                        />
                        <span className="ml-3">
                            Asset Tracer<br />
                            <small>assettracerteam@gmail.com</small>
                        </span>
                    </div>
                </nav>
            </div>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="lg:hidden fixed top-3 left-4 text-text-color rounded-full bg-bg-primary outline-none p-2.5" style={{ zIndex: "200" }}
            >
                <RiMenu3Line />
            </button>

            {/* {showMenu ? <>
                <div className="transition-all z-40 duration-200 w-full h-screen bg-black opacity-10 absolute top-0 left-0"></div>
            </> : null} */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <SignOutComponent className="modal" />
        </>
    )
}

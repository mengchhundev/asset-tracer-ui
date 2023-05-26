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


export default function SidebarComponent() {
    const navigator = useNavigate()
    const [showMenu, setShowMenu] = useState(false);
    const [showOrganization, setShowOrganization] = useState(false);
    const activeStyle = "flex items-center my-2 py-2.5 px-5 rounded-2xl transition-colors hover:bg-bg-primary text-white bg-primary";
    const inActiveStyle = "flex items-center my-2 py-2.5 px-5 rounded-2xl transition-colors hover:bg-bg-primary";

    const [isShowOrganization, setIsShowOrganization] = useState(false)
    const activeStyleDropDown = "flex items-center justify-between py-2.5 px-5 rounded-2xl transition-colors hover:bg-bg-primary text-white bg-primary";
    const inActiveStyleDropDown = "flex items-center justify-between py-2.5 px-5 rounded-2xl transition-colors hover:bg-bg-primary";

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
                className={`h-[92vh] flex-shrink-0 text-sidebar overflow-y-scroll fixed lg:static z-50 w-72 bg-secondary-100 py-10 px-8 flex flex-col justify-between bg-white ${showMenu ? "left-0" : "-left-full"
                    } transition-all duration-200`} style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px" }}
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
                                    } overflow-y-hidden transition-all`}
                            >
                                <li>
                                    <NavLink
                                        to="/organization"
                                        className={({ isActive }) => isActive ? `py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-text-color before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors text-text-color font-sp-pro-text-semibold` :
                                            `py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-sidebar before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors`}
                                        onClick={() => { setIsShowOrganization(true), setIsShowCategory(false), setShowCategory(false), setShowMenu(false) }}
                                    >
                                        Organization List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/organization-create"
                                        className={({ isActive }) => isActive ? `py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-text-color before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors text-text-color font-sp-pro-text-semibold` :
                                            `py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-sidebar before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors`}
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
                                        } overflow-y-hidden transition-all`}
                                >
                                    <li>
                                        <NavLink
                                            to="/super-category"
                                            className={({ isActive }) => isActive ? `py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-text-color before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors text-text-color font-sp-pro-text-semibold` :
                                                `py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-sidebar before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors`}
                                            onClick={() => { setIsShowCategory(true), setIsShowOrganization(false), setShowOrganization(false), setShowMenu(false) }}
                                        >
                                            Type Super
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/normal-category"
                                            className={({ isActive }) => isActive ? `py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-text-color before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors text-text-color font-sp-pro-text-semibold` :
                                                `py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-sidebar before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors`}
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
                        </> : null}
                    </ul>
                </div>
                <nav>
                    <NavLink
                        to="/"
                        className="flex items-center py-2.5 px-5 transition-colors"
                    >
                        <RiLogoutCircleRLine className="mr-3" /> Notification
                    </NavLink>
                    <NavLink
                        to="/"
                        className="flex items-center py-2.5 px-5 transition-colors"
                    >
                        <RiLogoutCircleRLine className="mr-3" /> Setting
                    </NavLink>
                  
                    <label htmlFor="my-modal" className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"><ArrowRightOnRectangleIcon class="h-6 w-6 text-gray-500" />Singout</label>

                    <div className="flex items-center py-2.5 px-5 transition-colors">
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

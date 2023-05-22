import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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



export default function SidebarComponent() {
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
    
    useEffect(() => {
        if(location.pathname == "/organization") {
            setShowOrganization(true)
            setIsShowOrganization(true)
        }
    }, [])

    return (
        <>
            <div
                className={`h-[92vh] flex-shrink-0 text-sidebar overflow-y-scroll fixed lg:static z-50 w-72 bg-secondary-100 py-10 px-8 flex flex-col justify-between bg-white ${showMenu ? "left-0" : "-left-full"
                    } transition-all duration-300`}  style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px"}}
            >
                <div>
                    <ul>
                        <li>
                            <NavLink
                                onClick={() => setShowOrganization(!showOrganization)}
                                className={`${isShowOrganization ? "bg-primary hover:bg-primary" : ""} ${isShowOrganization ? activeStyleDropDown : inActiveStyleDropDown}`}
                            >
                                <span className="flex items-center justify-start">

                                    <svg width="20" height="28" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0888 1.19602L28.6435 7.88748V25.8636L15.0888 32.554L1.5341 25.863V7.88695L15.0888 1.19602ZM15.0888 0L0.392578 7.25467V26.4953L15.0888 33.75L29.785 26.4953V7.25467L15.0888 0Z" fill="#324C5B" />
                                        <path d="M15.7589 11.6562H14.4229V15.9517H15.7589V11.6562Z" fill="#324C5B" />
                                        <path d="M8.26477 19.6357H7.07227V14.7266H23.1045V19.5501H21.912V15.859H8.26477V19.6357Z" fill="#324C5B" />
                                        <path d="M11.749 6.75V11.6591H18.4291V6.75H11.749Z" fill="#324C5B" />
                                        <path d="M18.5039 19.3848V24.0828H25.8875V19.3848H18.5039Z" fill="#324C5B" />
                                        <path d="M4.2959 19.3848V24.0828H11.6795V19.3848H4.2959Z" fill="#324C5B" />
                                    </svg>
                                    <p className="ml-3">Organization</p>
                                </span>
                                <RiArrowRightSLine
                                    className={`${showOrganization && "rotate-90"
                                        } transition-all text-2xl`}
                                />
                            </NavLink>
                            <ul
                                className={` ${showOrganization ? "h-[100px]" : "h-0"
                                    } overflow-y-hidden transition-all`}
                            >
                                <li>
                                    <NavLink
                                        to="/organization"
                                        className={({ isActive }) => isActive ? `text-text-color py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-text-color before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors` :
                                            `py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-text-color before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors`}
                                        onClick={() => { setIsShowOrganization(true), setIsShowCategory(false), setShowCategory(false) }}
                                    >
                                        Organization List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/organization-create"
                                        className="py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-text-color before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors"
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive ? "#F8C400" : "",
                                            };
                                        }}
                                        onClick={() => { setIsShowOrganization(true), setIsShowCategory(false), setShowCategory(false) }}
                                    >
                                        Create or Join
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => isActive ? `bg-primary hover:bg-primary text-white ${activeStyle}` : inActiveStyle}
                                onClick={() => { setIsShowCategory(false), setIsShowOrganization(false), setShowOrganization(false), setIsShowOrganization(false), setIsShowCategory(false), setShowCategory(false) }}
                            >
                                <span className="flex items-center justify-start">
                                    <svg width="20" height="28" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0888 1.19602L28.6435 7.88748V25.8636L15.0888 32.554L1.5341 25.863V7.88695L15.0888 1.19602ZM15.0888 0L0.392578 7.25467V26.4953L15.0888 33.75L29.785 26.4953V7.25467L15.0888 0Z" fill="#324C5B" />
                                        <path d="M15.7589 11.6562H14.4229V15.9517H15.7589V11.6562Z" fill="#324C5B" />
                                        <path d="M8.26477 19.6357H7.07227V14.7266H23.1045V19.5501H21.912V15.859H8.26477V19.6357Z" fill="#324C5B" />
                                        <path d="M11.749 6.75V11.6591H18.4291V6.75H11.749Z" fill="#324C5B" />
                                        <path d="M18.5039 19.3848V24.0828H25.8875V19.3848H18.5039Z" fill="#324C5B" />
                                        <path d="M4.2959 19.3848V24.0828H11.6795V19.3848H4.2959Z" fill="#324C5B" />
                                    </svg>
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

                                    <svg width="20" height="28" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0888 1.19602L28.6435 7.88748V25.8636L15.0888 32.554L1.5341 25.863V7.88695L15.0888 1.19602ZM15.0888 0L0.392578 7.25467V26.4953L15.0888 33.75L29.785 26.4953V7.25467L15.0888 0Z" fill="#324C5B" />
                                        <path d="M15.7589 11.6562H14.4229V15.9517H15.7589V11.6562Z" fill="#324C5B" />
                                        <path d="M8.26477 19.6357H7.07227V14.7266H23.1045V19.5501H21.912V15.859H8.26477V19.6357Z" fill="#324C5B" />
                                        <path d="M11.749 6.75V11.6591H18.4291V6.75H11.749Z" fill="#324C5B" />
                                        <path d="M18.5039 19.3848V24.0828H25.8875V19.3848H18.5039Z" fill="#324C5B" />
                                        <path d="M4.2959 19.3848V24.0828H11.6795V19.3848H4.2959Z" fill="#324C5B" />
                                    </svg>
                                    <p className="ml-3">Category</p>
                                </span>
                                <RiArrowRightSLine
                                    className={`${showCategory && "rotate-90"
                                        } transition-all text-2xl`}
                                />
                            </NavLink>
                            <ul
                                className={` ${showCategory ? "h-[100px]" : "h-0"
                                    } overflow-y-hidden transition-all`}
                            >
                                <li>
                                    <NavLink
                                        to="/super-category"
                                        className="py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-text-color before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors"
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive ? "#F8C400" : "",
                                            };
                                        }}
                                        onClick={() => { setIsShowCategory(true), setIsShowOrganization(false), setShowOrganization(false) }}
                                    >
                                        Type Super
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/normal-category"
                                        className="py-2.5 px-4 ml-14 block relative before:w-2.5 before:h-2.5 before:absolute before:bg-text-color before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2  before:border-secondary-100 transition-colors"
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive ? "#F8C400" : "",
                                            };
                                        }}
                                        onClick={() => { setIsShowCategory(true), setIsShowOrganization(false), setShowOrganization(false) }}
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

                                    <svg width="20" height="28" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0888 1.19602L28.6435 7.88748V25.8636L15.0888 32.554L1.5341 25.863V7.88695L15.0888 1.19602ZM15.0888 0L0.392578 7.25467V26.4953L15.0888 33.75L29.785 26.4953V7.25467L15.0888 0Z" fill="#324C5B" />
                                        <path d="M15.7589 11.6562H14.4229V15.9517H15.7589V11.6562Z" fill="#324C5B" />
                                        <path d="M8.26477 19.6357H7.07227V14.7266H23.1045V19.5501H21.912V15.859H8.26477V19.6357Z" fill="#324C5B" />
                                        <path d="M11.749 6.75V11.6591H18.4291V6.75H11.749Z" fill="#324C5B" />
                                        <path d="M18.5039 19.3848V24.0828H25.8875V19.3848H18.5039Z" fill="#324C5B" />
                                        <path d="M4.2959 19.3848V24.0828H11.6795V19.3848H4.2959Z" fill="#324C5B" />
                                    </svg>
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

                                    <svg width="20" height="28" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0888 1.19602L28.6435 7.88748V25.8636L15.0888 32.554L1.5341 25.863V7.88695L15.0888 1.19602ZM15.0888 0L0.392578 7.25467V26.4953L15.0888 33.75L29.785 26.4953V7.25467L15.0888 0Z" fill="#324C5B" />
                                        <path d="M15.7589 11.6562H14.4229V15.9517H15.7589V11.6562Z" fill="#324C5B" />
                                        <path d="M8.26477 19.6357H7.07227V14.7266H23.1045V19.5501H21.912V15.859H8.26477V19.6357Z" fill="#324C5B" />
                                        <path d="M11.749 6.75V11.6591H18.4291V6.75H11.749Z" fill="#324C5B" />
                                        <path d="M18.5039 19.3848V24.0828H25.8875V19.3848H18.5039Z" fill="#324C5B" />
                                        <path d="M4.2959 19.3848V24.0828H11.6795V19.3848H4.2959Z" fill="#324C5B" />
                                    </svg>
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

                                    <BsGraphUp className="w-6 h-6" />
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

                                    <svg width="20" height="28" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0888 1.19602L28.6435 7.88748V25.8636L15.0888 32.554L1.5341 25.863V7.88695L15.0888 1.19602ZM15.0888 0L0.392578 7.25467V26.4953L15.0888 33.75L29.785 26.4953V7.25467L15.0888 0Z" fill="#324C5B" />
                                        <path d="M15.7589 11.6562H14.4229V15.9517H15.7589V11.6562Z" fill="#324C5B" />
                                        <path d="M8.26477 19.6357H7.07227V14.7266H23.1045V19.5501H21.912V15.859H8.26477V19.6357Z" fill="#324C5B" />
                                        <path d="M11.749 6.75V11.6591H18.4291V6.75H11.749Z" fill="#324C5B" />
                                        <path d="M18.5039 19.3848V24.0828H25.8875V19.3848H18.5039Z" fill="#324C5B" />
                                        <path d="M4.2959 19.3848V24.0828H11.6795V19.3848H4.2959Z" fill="#324C5B" />
                                    </svg>
                                    <p className="ml-3">User</p>
                                </span>
                            </NavLink>
                        </li>
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
                    <NavLink
                        to="/"
                        className="flex items-center py-2.5 px-5 transition-colors"
                    >
                        <RiLogoutCircleRLine className="mr-3" /> Sign Out
                    </NavLink>
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
                className="lg:hidden fixed top-3 left-4 text-white rounded-full bg-primary outline-none p-3" style={{zIndex: "200"}}
            >
                {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
        </>
    )
}

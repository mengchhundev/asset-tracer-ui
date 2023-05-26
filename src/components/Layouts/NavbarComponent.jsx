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

export default function NavbarComponent() {

    return (
        <header className="bg-white px-8 h-[8vh] flex flex-row items-center justify-between text-text-color" style={{ zIndex: "100", boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 5px" }}>
            <div className="flex items-center w-72 lg:flex-shrink-0 invisible lg:visible">
                <img src={logo} alt="" className="w-14" />
                <h1 className="text-center text-xl font-sp-pro-text-bold">
                    Asset Tracer
                </h1>
            </div>

            <div className="flex items-center w-full justify-between">
                <div className="font-sp-pro-text-semibold text-xl invisible lg:visible">
                    <p className="text-sm text-slate-400">Organization Name:</p>
                    KSHRD Center
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
                        menuClassName="bg-secondary-100 p-4"
                    >
                        <h1 className="text-gray-300 text-center font-medium">
                            Notificaciones (2)
                        </h1>
                        <hr className="my-6 border-gray-500" />
                        <MenuItem className="p-0 hover:bg-transparent">
                            <Link
                                to="/"
                                className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
                            >
                                <img
                                    src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                                    className="w-8 h-8 object-cover rounded-full"
                                />
                                <div className="text-sm flex flex-col">
                                    <div className="flex items-center justify-between gap-4">
                                        <span>Jorge Luis Trejo</span>{" "}
                                        <span className="text-[8px]">21/10/2022</span>
                                    </div>
                                    <p className="text-gray-500 text-xs">
                                        Lorem ipsum dolor sit amet...
                                    </p>
                                </div>
                            </Link>
                        </MenuItem>
                        <MenuItem className="p-0 hover:bg-transparent">
                            <Link
                                to="/"
                                className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
                            >
                                <RiThumbUpLine className="p-2 bg-blue-200 text-blue-700 box-content rounded-full" />
                                <div className="text-sm flex flex-col">
                                    <div className="flex items-center justify-between gap-4">
                                        <span>Nuevo like</span>{" "}
                                        <span className="text-[8px]">21/10/2022</span>
                                    </div>
                                    <p className="text-gray-500 text-xs">
                                        A Jorge Trejo le gusta tu pub...
                                    </p>
                                </div>
                            </Link>
                        </MenuItem>
                        <MenuItem className="p-0 hover:bg-transparent">
                            <Link
                                to="/"
                                className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
                            >
                                <RiChat3Line className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
                                <div className="text-sm flex flex-col">
                                    <div className="flex items-center justify-between gap-4">
                                        <span>Nuevo comentario</span>{" "}
                                        <span className="text-[8px]">21/10/2022</span>
                                    </div>
                                    <p className="text-gray-500 text-xs">
                                        Jorge Trejo ha comentado tu...
                                    </p>
                                </div>
                            </Link>
                        </MenuItem>
                        <hr className="my-6 border-gray-500" />
                        <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
                            <Link
                                to="/"
                                className="text-gray-400 text-sm hover:text-white transition-colors"
                            >
                                Todas las notificaciones
                            </Link>
                        </MenuItem>
                    </Menu>
                    <Menu
                        menuButton={
                            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                                <img
                                    src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                                    className="w-6 h-6 object-cover rounded-full"
                                />
                                <span className="header">Jorge Luis Trejo</span>
                                <RiArrowDownSLine className="w-14" />
                            </MenuButton>
                        }
                        align="end"
                        arrow
                        arrowClassName="bg-secondary-100"
                        transition
                        menuClassName="bg-secondary-100 p-4"
                    >
                        <MenuItem className="p-0 hover:bg-transparent">
                            <Link
                                to="/perfil"
                                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                            >
                                <img
                                    src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                                    className="w-8 h-8 object-cover rounded-full"
                                />
                                <div className="flex flex-col text-sm">
                                    <span className="text-sm">Jorge Luis Trejo</span>
                                    <span className="text-xs text-gray-500">jorge@gmail.com</span>
                                </div>
                            </Link>
                        </MenuItem>
                        <hr className="my-4 border-gray-500" />
                        <MenuItem className="p-0 hover:bg-transparent">
                            <Link
                                to="/configuracion"
                                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                            >
                                <RiSettings3Line /> Configuración
                            </Link>
                        </MenuItem>
                        <MenuItem className="p-0 hover:bg-transparent">
                            <Link
                                to="/cerrar-sesion"
                                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                            >
                                <RiLogoutCircleRLine /> Cerrar sesión
                            </Link>
                        </MenuItem>
                    </Menu>
                </nav>
            </div>


        </header>
    );
}

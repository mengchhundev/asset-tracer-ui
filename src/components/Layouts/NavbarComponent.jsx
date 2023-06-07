import React, { useState } from "react";
import { RiNotification3Line, RiArrowDownSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/A_Tracer_logo1.png";
import "../../style/navbar.css";
import SignOutComponent from "./popUp/SignOutComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrganizationService from "../../redux/services/OrganizationService";
import {
  setAllOrganization,
  setItem,
} from "../../redux/slices/OrganizationSlice";
import jwt_decode from "jwt-decode";
import FileUploadService from "../../redux/services/FileUploadService";
import placeholder from "../../assets/images/placeholder/placeholder.png";
import LoadingComponent from "../../components/LoadingComponent";

export default function NavbarComponent() {
  const [isShowLoading, setIsShowLoading] = useState(false);
  const item = useSelector((state) => state.organization.item);
  const organization = JSON.parse(sessionStorage.getItem("organization"));
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const organizations = useSelector((state) => state.organization.data);

  let session = sessionStorage.getItem("organization");
  if (session) {
    session = JSON.parse(session);
  }

  const token = localStorage.getItem("token");
  var decoded = jwt_decode(token);
  var userId = decoded.id;

  const getAllOrganizations = () => {
    OrganizationService.getAllOrganizations(userId).then(
      (res) => {
        console.log(res.data.payload);
        if (res.data?.success) {
          console.log(234);
          dispatch(setAllOrganization(res.data.payload));
        }
      },
      (err) => {
        dispatch(setAllOrganization([]));
      }
    );
  };

  useEffect(() => {
    getAllOrganizations();
  }, []);

  const handleShowOrganization = (val) => {
    setIsShowLoading(true);
    dispatch(setItem(val));
    sessionStorage.setItem("organization", JSON.stringify(val));
    setTimeout(() => {
      navigator("/dashboard", { state: { hideOrganizationBar: true } });
      setIsShowLoading(false);
    }, 1000);
  };

  return (
    <>
      {isShowLoading && <LoadingComponent />}
      <header
        className="flex-shrink-0 bg-white px-8 h-[4.3rem] flex flex-row items-center justify-between text-text-color"
        style={{
          zIndex: "100",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 5px",
        }}
      >
        <div className="flex items-center w-[16rem] lg:flex-shrink-0 invisible lg:visible">
          <img src={logo} alt="" className="w-16 h-16" />
          <h1 className="text-center text-xl font-sp-pro-text-bold">
            Asset Tracer
          </h1>
        </div>

        <div className="flex items-center w-full justify-between">
          <div className="font-sp-pro-text-semibold text-lg invisible lg:visible flex items-center rounded-md">
            {/* <HiOutlineBuildingLibrary className="h-7 rounded-md w-7 text-white bg-primary p-1 mr-2"/> */}
            {/* {session ? session.name : "No Organzation"} */}
          </div>
          <nav className="flex items-center gap-2 ">
            <Menu
              menuButton={
                <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                  <RiNotification3Line className="text-primary " />
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
              {/* router by menghout */}
              <Link to="/">
                <div className="flex justify-between px-3">
                  <h1 className="flex  items-center ">
                    <span className="text-lg text-text-color font-sp-pro-text-bold">
                      Notification
                    </span>{" "}
                    <span className="text-sm ml-3 ">(3)</span>
                  </h1>
                </div>
              </Link>

              <hr className="my-2 border-text-color border-opacity-20" />

              <MenuItem className=" rounded-md py-3 my-2 hover:bg-bg-primary w-72">
                <div className="w-full">
                  <Link
                    to="/"
                    className="text-gray-300 flex flex-1 items-center gap-3 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
                  >
                    <img
                      src={logo}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <div className="text-sm flex flex-col">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-sp-pro-text-medium">
                          Asset Tracer
                        </span>
                        <span className="text-[8px]">21/10/2022</span>
                      </div>
                      <p className="text-slate-600 text-xs">
                        assettracerteam@gmail.com
                      </p>
                    </div>
                  </Link>

                  <div className="pl-16 flex gap-3">
                    <button className="bg-green text-white p-1.5 px-2.5 text-xs rounded-md">
                      Accept
                    </button>
                    <button className="bg-white text-reject border border-reject p-1.5 px-2.5 text-xs rounded-md">
                      Reject
                    </button>
                  </div>
                </div>
              </MenuItem>

              <hr className="my-1 border-text-color border-opacity-10" />

              <div className="px-4 py-1">
                <MenuItem
                  className="px-0 mt-3 py-1.5 flex hover:bg-blue-700 hover:text-white hover:border-blue-700 bg-white rounded-md border justify-center cursor-pointer"
                  style={{ border: "1px solid gainsboro" }}
                >
                  <Link to="notification" className="text-sm">
                    View all notifications
                  </Link>
                </MenuItem>
              </div>
            </Menu>
            <Menu
              menuButton={
                <MenuButton className="flex font-sp-pro-text-medium items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                  {item != null ? (
                    <img
                      src={FileUploadService.getImage(item.logo)}
                      className="w-9 h-9 object-cover rounded-full"
                    />
                  ) : organization != null ? (
                    <img
                      src={FileUploadService.getImage(organization.logo)}
                      className="w-9 h-9 object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-9 h-9 bg-green rounded-full flex justify-center items-center m-auto">
                      {organization && (
                        <p className="font-sp-pro-text-bold text-2xl lg:text-2xl text-white">
                          {organization?.name.substring(0, 1)}
                        </p>
                      )}
                    </div>
                  )}
                  {organization ? (
                    <span className="header">{organization.name}</span>
                  ) : (
                    <span className="header">No Organization Selected</span>
                  )}

                  <RiArrowDownSLine className="w-5" />
                </MenuButton>
              }
              align="end"
              arrow
              transition
              arrowClassName="bg-secondary-100 "
              menuClassName="bg-bg-color px-4 rounded-lg border"
            >
              <MenuItem className="p-0 m-0 hover:bg-transparent">
                {organizations.length != 0 ? (
                  <>
                    <div className="w-60">
                      <div className="p-4">
                        <div className="relative text-sm border-[#edf0f1]  bg-[#F9FBFF]  border rounded-lg block w-full py-2 px-1  focus:border-primary">
                          <div className="absolute inset-y-0 flex items-center pl-2">
                            <svg
                              className="w-5 h-5 text-primary"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <input
                            className="w-full pl-10 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                            type="text"
                            name="search"
                            placeholder="Search..."
                          />
                        </div>
                      </div>
                      {organizations.map((list, index) => (
                        <label
                          key={index}
                          onClick={() => handleShowOrganization(list)}
                          className="rounded-0 hover:bg-bg-primary cursor-pointer w-full bg-bg-color  transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-2 py-1.5 px-6 flex-1"
                        >
                          {list?.logo ? (
                            <img
                              src={
                                list.logo != null
                                  ? FileUploadService.getImage(list.logo)
                                  : placeholder
                              }
                              className="w-7 h-7 object-cover rounded-full border-2 border-bg-feature shadow-md"
                            />
                          ) : (
                            <div className="w-7 h-7 bg-green rounded-full flex justify-center items-center">
                              <p className="font-sp-pro-text-bold text-xl  text-white">
                                {organization?.name.substring(0, 1)}
                              </p>
                            </div>
                          )}

                          <div className="flex flex-col">
                            <span className="text-xs text-text-color font-sp-pro-text-regular py-2">
                              {list.name}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </>
                ) : null}
              </MenuItem>
            </Menu>
          </nav>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <SignOutComponent className="modal" />
        </div>
      </header>
    </>
  );
}

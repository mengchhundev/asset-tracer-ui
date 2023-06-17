import React, { useState } from "react";
import { TbCalendarStats } from "react-icons/tb";
import { HiOutlineQrcode } from "react-icons/hi";
import { RiBarcodeFill, RiCloseFill } from "react-icons/ri";
import logo from "../../../../assets/images/A_Tracer_logo1.png";
import { BiCheck, BiHome } from "react-icons/bi";

import { BsGraphUp, BsHouseCheck } from "react-icons/bs";
import { RxCheck } from "react-icons/rx";

function AssetViewComponent({ viewAsset }) {
  const selectedImage =
    "https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004_960_720.jpg";
  const [topImage, setTopImage] = useState(selectedImage);

  // console.log("View Asset as props", viewAsset);
  const handleImageClick = (newImage) => {
    setTopImage(newImage);
  };
  const myBorderStyle = {
    display: "inline-block",
    marginTop: "10px",
    height: "85px",
    borderRight: "2px solid #ccc",
  };

  const [organization, setOrg] = useState([
    {
      id: 1,
      name: "KSHRD Center",
    },
  ]);
  const [user, setUser] = useState([
    {
      id: 1,
      profile: "SE",
      name: "Senglorn",
      email: "hrdcenter@gamil.com",
    },
    {
      id: 2,
      profile: "HO",
      name: "Hong Meng",
      email: "hrdcenter@gamil.com",
    },
    ,
    {
      id: 2,
      profile: "HO",
      name: "Hong Meng",
      email: "hrdcenter@gamil.com",
    },
    {
      id: 2,
      profile: "HO",
      name: "Hong Meng",
      email: "hrdcenter@gamil.com",
    },
  ]);
  return (
    <>
      <div className="modal">
        <div className="p-6 modal-box max-w-4xl">
          {/* header */}
          <div className="flex justify-between mb-5">
            <div className="flex">
              <span>
                <BsGraphUp className="w-8 h-8 bg-primary text-white" />
              </span>
              <span className="pl-3  text-text-color text-xl font-sp-pro-text-semibold">
                Asset Details
              </span>
            </div>
            <div className="flex">
              {/*  */}
              <label htmlFor="normalModal">
                <RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
              </label>
            </div>
          </div>

          <div className="lg:flex lg:space-x-8 md:space-x-0 sm:flex-row">
            <div className="w-1/2">
              {/* slide */}
              <div className=" ">
                <div className="rounded-lg border shadow-sm border-slate-200">
                  <div className="carousel flex top-1/2">
                    <div className="w-full">
                      <img
                        className="w-full h-full rounded-lg"
                        src="https://m.phnompenhpost.com/sites/default/files/styles/full-screen_watermarked/public/he-resort-also-has-a-riverside-beach-area-to-laze-about-on.-post-staff.jpg?itok=FoUkEx6S"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Serial code */}
              <div className="mt-5">
                <div className="mb-3">
                  <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                    Identifiers
                  </h1>
                </div>

                <div className="rounded-lg border shadow-sm border-slate-200 w-full">
                  <div className="flex justify-between px-2 py-2">
                    <div className="p-2 flex flex-row gap-3 items-center">
                      <div>
                        <HiOutlineQrcode className="w-14 h-14 text-primary" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-text-color font-sp-pro-text-medium text-base">
                          Asset Name
                        </span>
                        <span className="text-text-color font-sp-pro-text-regular text-xs">
                          Case Phone
                        </span>
                      </div>
                    </div>

                    <div className="p-2 flex flex-row gap-3 items-center">
                      <div>
                        <HiOutlineQrcode className="w-14 h-14 text-primary" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-text-color font-sp-pro-text-medium text-base">
                          Label code
                        </span>
                        <span className="text-text-color font-sp-pro-text-regular text-xs">
                          Y8R6E6N9Z3W
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Identifiers */}
            <div className="lg:mt-0 md:mt-4 mt-5 w-1/2">
              {/* Asset Information */}
              <div className="">
                <div className="">
                  <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                    Asset Information
                  </h1>
                  <div className="grid lg:grid-cols-2 rounded-lg border shadow-sm border-slate-200">
                    <div className="p-4 lg:border-r-2 md:border-r-none border-gray-light h-[180px] mt-[10px]">
                      <div className="mt-[-10px]">
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Category Type
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <span className="bg-blue-400 rounded-full p-2 flex justify-center">
                              <TbCalendarStats className="w-6 h-6 text-white" />
                            </span>
                            <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">
                              {viewAsset.superCategoryName}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 lg:mt-0 mt-[-90px]">
                      <div>
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Organization
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <span className="bg-lightorange rounded-full w-[40px] p-2 flex justify-center">
                              <BiHome className="w-6 h-6 text-yellow" />
                            </span>
                            <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">
                              {viewAsset.name}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-3">
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Room Name
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <span className="bg-lightorange rounded-full w-[40px] p-2 flex justify-center">
                              <BsHouseCheck className="w-6 h-6 text-yellow" />
                            </span>
                            <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">
                              {viewAsset.roomName}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Information */}
              <div className="col-span-6">
                <div className="mt-5">
                  <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                    Admin Information
                  </h1>
                  <div className="grid lg:grid-cols-2 rounded-lg border shadow-sm border-slate-200">
                    <div className="p-4 lg:border-r-2 md:border-r-none border-gray-light h-[85px] mt-[10px]">
                      <div className="mt-[-10px]">
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Create by
                        </label>
                        <div className="flex items-center mt-3">
                          <img
                            src={logo}
                            alt="background image"
                            className="h-12"
                          />
                          <div className="pl-2">
                            <span className="text-text-color font-sp-pro-text-regular text-sm">
                              {viewAsset.owner}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div>
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Create date
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <span className="bg-lightorange rounded-full w-[40px] p-2 flex justify-center">
                              <TbCalendarStats className="w-6 h-6 text-yellow" />
                            </span>
                            <span className="text-text-color text-sm font-sp-pro-text-regular pl-3">
                              {viewAsset.createdAt}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssetViewComponent;

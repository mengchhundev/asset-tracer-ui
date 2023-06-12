import React, { useState } from "react";
import { TbCalendarStats } from "react-icons/tb";
import { HiOutlineQrcode } from "react-icons/hi";
import { RiBarcodeFill } from "react-icons/ri";
import logo from "../../../../assets/images/A_Tracer_logo1.png";
import { BiCheck, BiHome } from "react-icons/bi";

import { BsGraphUp, BsHouseCheck } from "react-icons/bs";

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
  return (
    <>
      <div className="modal">
        <div className="bg-bg-primary p-6 modal-box w-11/12 max-w-5xl">
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
              <label
                htmlFor="normalModal"
                className="btn border-none bg-none text-text-color hover:bg-bg-primary hover:border-red-400 btn-sm btn-circle absolute right-4 top-4"
              >
                ✕
              </label>
            </div>
          </div>

          <div className="lg:flex lg:space-x-6 md:space-x-0 sm:flex-row">
            <div className="">
              {/* slide */}
              <div className=" ">
                <div className="col-span-6 rounded-lg border shadow-sm border-slate-200">
                  <div className="carousel w-full flex top-1/2">
                    <div
                      id="slide1"
                      className="carousel-item relative w-full flex justify-center"
                    >
                      <img src={logo} className="md:h-[300px] sm:h-[200px]" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                          href="#slide4"
                          className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center"
                        >
                          ❮
                        </a>
                        <a
                          href="#slide2"
                          className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center"
                        >
                          ❯
                        </a>
                      </div>
                    </div>

                    <div
                      id="slide2"
                      className="carousel-item relative w-full flex justify-center"
                    >
                      <img src={logo} className="md:h-[300px] sm:h-[200px]" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                          href="#slide1"
                          className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center"
                        >
                          ❮
                        </a>
                        <a
                          href="#slide3"
                          className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center"
                        >
                          ❯
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asset Information */}
              <div className="">
                <div className="mt-5">
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
            </div>

            {/* Identifiers */}
            <div className="lg:mt-0 md:mt-4 mt-5">
              <div className="col-span-6">
                <div className="mb-3">
                  <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                    Identifiers
                  </h1>
                  <div className="xl:flex md:flex-row rounded-lg border shadow-sm border-slate-200 ">
                    <div className="col-span-6 p-4 lg:border-r-2 md:border-r-none border-gray-light h-[80px] mt-[10px]">
                      <div className="mt-[-10px] ">
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color"
                        >
                          Label code
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <span className="pr-3">
                              <HiOutlineQrcode className="w-8 h-8  text-primary" />
                            </span>
                            <span className="text-text-color text-xs font-sp-pro-text-regular">
                              {viewAsset.labelCode}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-6 p-4">
                      <div>
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color"
                        >
                          Serial code
                        </label>
                        <div className="mt-3">
                          <p className="flex items-center">
                            <p className="pr-3">
                              <RiBarcodeFill className="w-8 h-8 text-primary" />{" "}
                            </p>
                            <p className="text-text-color text-xs font-sp-pro-text-regular flex flex-row">
                              {viewAsset.serialCode}
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Usage */}
                <div className="mt-5">
                  <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                    Usage
                  </h1>
                  <div className="grid lg:grid-cols-2 rounded-lg border shadow-sm border-slate-200">
                    <div className="p-4 lg:border-r-2 md:border-r-none border-gray-light h-[92px] mt-[10px]">
                      <div className="mt-[-10px]">
                        <label
                          htmlFor=""
                          className="font-sp-pro-text-medium text-text-color text-base"
                        >
                          Status
                        </label>
                        <div className="mt-3">
                          <div className=" bg-lightorange w-[85px] border border-yellow text-yellow rounded-lg p-1">
                            <span className="text-yellow flex">
                              <BiCheck className="w-6 h-6 flex pr-1" />
                              In use
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
                          Owner
                        </label>
                        <div className="flex items-center mt-2">
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
                              {viewAsset.createdAt}
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
                              {viewAsset.createdBy}
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

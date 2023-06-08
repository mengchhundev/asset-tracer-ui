import React, { useState } from "react";
import ItemComponent from "../asset/filtter/ItemComponent";
import CategoryComponent from "../normalCategory/NormalCategoryComponent";
import StatusComponent from "../asset/filtter/StatusComponent";
import RoomComponent from "../asset/filtter/RoomComponent";
import upload from "../../../assets/images/Room/Upload.png";
import { RiAddBoxFill } from "react-icons/ri";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function AddInvoiceComponent() {
  const [query, setQuery] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  return (
    <>
      <main
        className="overflow-y-auto bg-white rounded-xl relative"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
        }}
      >
        {/* Add invoice */}
        <div className="text-2xl font-sp-pro-text-bold text-text-color py-4 px-[40px]">
            <h1 className="flex items-center">
              <IoMdAddCircleOutline className="text-yellow w-5 h-5" /> &nbsp;Add
              Asset
            </h1>
          </div>

          <div className="w-full">
            <hr className="border-[#E1E9EE] border-1" />
          </div>
        <div className="flex justify-between">
          <div className="bg-white rounded-lg">
            {/* invoice detail */}
            <div className="text-base font-sp-pro-text text-text-color p-1 mt-5 px-[40px]">
              <h1>Invoice Detail</h1>
            </div>
            <div className="w-5/5 px-[40px]">
              <hr className="border-[#E1E9EE] border-spacing-y-10" />
            </div>
            {/* Supplier */}
            <div className="xl:w-5/5 md:w-full mt-none px-[40px] mt-7">
              <label
                htmlFor=""
                className="text-sm text-text-color font-sp-pro-text"
              >
                Supplier
              </label>
              <input
                className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                type="text"
                placeholder="supplier"
              />
            </div>
            {/* three invoice code in row */}

            <div className="lg:flex lg:flex-row md:flex-col sm:flex-col flex flex-row px-[40px] mt-7">
              {/* invoice code */}
              <div className=" xl:w-44 md:w-full ">
                <label
                  htmlFor=""
                  className="text-sm text-text-color font-sp-pro-text"
                >
                  Invoice code
                </label>
                <input
                  className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                  type="text"
                  placeholder="Room Name"
                />
              </div>

              {/* Purchase by */}
              <div className="lg:flex lg:flex-row xl:flex w-full​ flex-row space-x-10 ">
                <div className=" xl:w-64 md:w-full px-[40px]">
                  <label
                    htmlFor=""
                    className="text-sm text-text-color font-sp-pro-text"
                  >
                    Purchase by
                  </label>
                  <ItemComponent />
                </div>
              </div>

              {/* Purchase date */}
              <div className="">
                <label
                  htmlFor=""
                  className=" flex text-sm text-text-color font-sp-pro-text pb-1.5"
                >
                  Purchase date
                </label>

                <div className=" xl:flex w-full​ flex-row space-x-10 ">
                    <input type="date" className="text-primary border-[#E1E9EE] border rounded-lg py-1.5  px-4 w-full outline-none focus:border-primary" />
                  
                </div>
              </div>
            </div>
            {/* Asset with line */}
            <div className="text-base font-sp-pro-text text-text-color p-1 mt-5 px-[40px]">
              <h1>Asset</h1>
            </div>
            <div className="w-5/5 px-[40px]">
              <hr className="border-[#E1E9EE] border-spacing-y-10" />
            </div>

            {/* border 1 */}
            <div className="px-[40px] mt-7 ">
              <div className=" border rounded-lg border-primary shadow [box-shadow: 0px 0px 6px 0px]">
                {/* top item in border */}
                <div className="flex flex-row p-4 justify-between">
                  <div className="xl:w-64 md:w-full ">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text"
                    >
                      Invoice name
                    </label>
                    <input
                      className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                      type="text"
                      placeholder="Room Name"
                    />
                  </div>
                  <div className="xl:w-64 md:w-full ">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text"
                    >
                      Model
                    </label>
                    <input
                      className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                      type="text"
                      placeholder="Room Name"
                    />
                  </div>
                </div>

                {/* button item in border */}
                <div className="flex flex-row p-4 justify-between">
                  <div className="xl:w-44 md:w-full ">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text"
                    >
                      Unit price
                    </label>
                    <input
                      className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                      type="text"
                      placeholder="Room Name"
                    />
                  </div>

                  <div className="xl:w-44 md:w-full ">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text"
                    >
                      Discount price
                    </label>
                    <input
                      className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                      type="text"
                      placeholder="Room Name"
                    />
                  </div>
                  <div className="xl:w-44 md:w-full ">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text"
                    >
                      QTY
                    </label>
                    <input
                      className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                      type="text"
                      placeholder="Room Name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end px-10">
              <RiAddBoxFill className=" mt-6 h-6 w-6 rounded-lg" />
            </div>
          </div>
          {/* upload */}
          <div className="xl:w-5/12 md:w-6/12 sm:full">
            <div className="w-full">
              <div className="md:p-7 md:m-5 ">
                <div className="space-y-12 border border-dotted border-yellow px-10 md:py-20 rounded-md ">
                  <div className=" items-center block justify-center text-center p-3  rounded-lg">
                  <div className="">
                      <label
                        htmlFor="fileInput"
                        className="browseButton cursor-pointer"
                      >
                        {selectedFile && (
                          <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Selected File"
                            className={`${
                              imageDimensions.width > imageDimensions.height
                                ? "w-[300px]"
                                : "h-auto"
                            } ${
                              imageDimensions.width < imageDimensions.height
                                ? "h-[195px]"
                                : "w-auto"
                            } block rounded-md object-center justify-center  items-center`}
                          />
                        )}
                        {!selectedFile && (
                          <>
                            <CloudArrowUpIcon className="h-20 w-20 text-blue-200 hover:text-blue-300 m-auto" />
                          </>
                        )}
                      </label>
                      <div className="flex justify-center">
                        <label
                          htmlFor="fileInput"
                          className="browseButton text-text-color font-sp-pro-text-regular"
                        >
                          <p className="border w-min p-2 px-12 mt-3 border-[#E1E9EE] shadow-sm rounded-md text-text-color font-sp-pro-text-regular cursor-pointer hover:bg-bg-primary">
                            Browse
                          </p>
                          <input
                            id="fileInput"
                            type="file"
                            onChange={handleFileSelect}
                            accept="image/*"
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center flex-row">
                <div className="bg-slate-500 cursor-pointer  w-1/5 p-2  rounded-lg text-center">
                  <NavLink to={'/invoice'}>
                  <button className=" text-white font-sp-pro-text-regular">
                    Cancel
                  </button>
                  </NavLink>
                </div>

                <div className="bg-primary cursor-pointer bg-opacity-20 ml-6 w-1/5 p-2 rounded-lg text-center">
                  <button className=" text-primary font-sp-pro-text-regular  ">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

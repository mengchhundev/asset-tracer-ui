import {
  ChevronDownIcon,
  HomeIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import React, { Fragment, useEffect, useState } from "react";
import upload from "../../../assets/images/Room/Upload.png";
import { Combobox, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
import ItemComponent from "./filtter/ItemComponent";
import CategoryComponent from "./filtter/CategoryComponent";
import StatusComponent from "./filtter/StatusComponent";
import RoomComponent from "./filtter/RoomComponent";
import { BiSave } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { FiSave } from "react-icons/fi";

function AssetSetComponent(props) {
  const [query, setQuery] = useState("");
  //Upload image
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [selectedFile, setSelectedFile] = useState("");
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  let unique_id = "";
  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = new Image();
        image.onload = () => {
          setImageDimensions({
            width: image.width,
            height: image.height,
          });
        };
        image.src = event.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);
  const handleUpload = () => {
    unique_id = uuid();

    if (selectedFile) {
      const uploadTask = ref(storage, `images/${unique_id}`);
      uploadBytes(uploadTask, selectedFile).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <>
      <main
        className="overflow-y-auto  bg-white rounded-xl relative"
        style={{
          boxShadow: "0 1px 40px 0 rgb(0 0 0 / 0.06)",
          minHeight: "calc(100vh - 6.3rem)",
        }}
      >
        <div className="bg-white rounded-lg">
          <div className="text-2xl font-sp-pro-text-bold text-text-color py-4 px-[40px]">
            <h1 className="flex items-center">
              <IoMdAddCircleOutline className="text-yellow w-5 h-5" /> &nbsp;Set
              Asset
            </h1>
          </div>

          <div className="w-full">
            <hr className="border-[#E1E9EE] border-1" />
          </div>

          <div className="md:flex mt-1 sm:flex-row">
            <div className="xl:w-2/3 md:w-1/2 ">
              <div className="lg:mx-5 mx-0 p-5 rounded-md mb-1 text-text-color text-opacity-90 text-xs font-sp-pro-text-regular">
                <div className="xl:flex lg:flex-row justify-between lg:space-x-5">
                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Select Item <span className=" text-red-500">*</span>
                    </label>
                    <ItemComponent className="z-60" />
                  </div>

                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Owner <span className=" text-red-500">*</span>
                    </label>
                    <input
                      className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2.5 pl-3 pr-10 text-xs text-text-color outline-none focus:border-primary placeholder-text-color placeholder-opacity-50"
                      type="text"
                      placeholder="Room Name"
                    />
                  </div>
                </div>

                <div className="xl:flex lg:flex-row justify-between lg:space-x-5">
                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Label Code <span className=" text-red-500">*</span>
                    </label>
                    <input
                      className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2.5 pl-3 pr-10 text-text-color outline-none focus:border-primary placeholder-text-color placeholder-opacity-50 text-xs"
                      type="text"
                      placeholder="Label Code"
                    />
                  </div>

                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Serial Code <span className=" text-red-500">*</span>
                    </label>
                    <input
                      className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2.5 pl-3 pr-10  text-text-color outline-none focus:border-primary placeholder-text-color placeholder-opacity-50 text-xs"
                      type="text"
                      placeholder="Serial Code"
                    />
                  </div>
                </div>

                <div className="xl:flex lg:flex-row justify-between lg:space-x-5">
                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Select Category <span className=" text-red-500">*</span>
                    </label>
                    <CategoryComponent />
                  </div>

                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Select Status <span className=" text-red-500">*</span>
                    </label>
                    <StatusComponent />
                  </div>
                </div>

                <div className="xl:flex lg:flex-row justify-between lg:space-x-5">
                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Select Room <span className=" text-red-500">*</span>
                    </label>
                    <RoomComponent />
                  </div>

                  <div className="w-full xl:p-2 lg:py-2 p-2"></div>
                </div>

                <div className="w-full p-2 lg:mt-0 mt-[-15px]">
                  <label
                    for="message"
                    className="block mb-1 text-sm text-text-color font-sp-pro-text-regular"
                  >
                    Description <span className=" text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full border-[#E1E9EE] rounded-lg border text-text-color outline-none focus:border-primary placeholder-text-color placeholder-opacity-50 text-xs"
                    placeholder="Description..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 md:mt-6 mt-[-24px]">
              <div className="item-center w-full rounded-xl   ">
                <div className="block lg:mx-5 p-7">
                  <div className=" flex items-center justify-center text-center rounded-lg md:h-[390px] h-[250px] border border-dashed border-yellow">
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

                  {/* button */}
                  <div className="flex justify-end flex-row space-x-4 mt-10">
                    <div className="">
                      <Link to={"/asset"}>
                        <button class="rounded-md bg-bg-primary py-2 cursor-pointer px-5 text-sm font-sp-pro-text-medium text-text-color w-full flex items-center">
                          <RiCloseFill className="text-lg" /> &nbsp; Cancel
                        </button>
                      </Link>
                    </div>

                    <div className="">
                      <button class="hover:bg-pending-hover rounded-md cursor-pointer bg-primary py-2 px-5 text-sm font-sp-pro-text-medium text-white hover:opacity-90 w-full flex items-center">
                        <FiSave className="text-lg" /> &nbsp; Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AssetSetComponent;

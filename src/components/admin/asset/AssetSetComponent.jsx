import React, { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CloudArrowUpIcon } from "@heroicons/react/20/solid";
import { Link, NavLink } from "react-router-dom";
import SetAssetDropDownComponent from "./filtter/SetAssetDropDownComponent";
import { RiCloseFill } from "react-icons/ri";
import { FiSave } from "react-icons/fi";

export default function AssetSetComponent() {
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
        className="overflow-y-auto pb-20 bg-white rounded-xl relative"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
        }}
      >
        {/* Set Asset */}
        <div className="text-2xl font-sp-pro-text-bold text-text-color py-4 px-[40px]">
          <h1 className="flex items-center">
            <IoMdAddCircleOutline className="text-yellow w-5 h-5" /> &nbsp;Set
            Asset
          </h1>
        </div>

        <div className="w-full">
          <hr className="border-[#E1E9EE] border-1" />
        </div>

        <div className="flex justify-between px-[25px]">
          <div className="bg-white rounded-lg">
            {/* Assets name */}
            <div className="xl:w-5/5 lg:w-full md:w-full mt-none px-[40px] mt-6">
              <label
                htmlFor=""
                className="text-sm text-text-color font-sp-pro-text"
              >
                Asset Name
              </label>
              <input
                className="mt-2 w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                type="text"
                placeholder="name"
              />
            </div>

            {/* two asset info in row */}
            <div className=" lg:flex lg:flex-row md:flex-col sm:flex-col flex flex-row mt-4">
              {/* Purchase by */}
              <div className="lg:flex lg:flex-row xl:flex w-72​ flex-row space-x-10 ">
                <div className=" xl:w-80 md:w-full px-[40px]">
                  <label
                    htmlFor=""
                    className="text-sm text-text-color font-sp-pro-text"
                  >
                    Purchase by
                  </label>
                  <SetAssetDropDownComponent />
                </div>
              </div>

              {/* Purchase date */}
              <div>
                <label
                  htmlFor=""
                  className="text-center px-10 flex text-sm text-text-color font-sp-pro-text pb-1.5"
                >
                  Purchase date
                </label>

                <div className="px-10  xl:flex w-full​ flex-row space-x-10">
                  <input
                    type="date"
                    className="text-center w-64 p-2 text-primary border-[#E1E9EE] border rounded-lg py-1.5 outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* border 1 */}
            <div className="px-[20px] mt-4 ">
              <div className=" ">
                {/* top item in border */}
                <div className="flex flex-row px-4 justify-between">
                  <div className="xl:w-[245px] md:w-full ">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text"
                    >
                      Unit Price
                    </label>
                    <input
                      className="mt-2 w-full border-[#E1E9EE] border rounded-lg py-3 pl-2 pr-10 text-xs text-text-color outline-none focus:border-primary"
                      type="text"
                      placeholder="unit price"
                    />
                  </div>
                  <div className="xl:w-[265px] md:w-full ">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text"
                    >
                      QTY
                    </label>
                    <input
                      className="mt-2 w-full border-[#E1E9EE] border rounded-lg py-3 pl-2 pr-10 text-xs text-text-color outline-none focus:border-primary"
                      type="text"
                      placeholder="qty"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* upload */}
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
                          className={`${imageDimensions.width > imageDimensions.height
                              ? "w-[300px]"
                              : "h-auto"
                            } ${imageDimensions.width < imageDimensions.height
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
      </main>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import ItemComponent from "./filtter/ItemComponent";
import { RiAddBoxFill } from "react-icons/ri";
import { CloudArrowUpIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import SetAssetDropDownComponent from "./filtter/SetAssetDropDownComponent";

export default function AssetAddComponent() {
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
        {/* Add Asset */}
        <div className="text-2xl font-sp-pro-text-bold text-text-color py-4 px-[40px]">
          <h1 className="flex items-center">
            <IoMdAddCircleOutline className="text-yellow w-5 h-5" /> &nbsp;Add
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
                            className={`${imageDimensions.width > imageDimensions.height
                                ? "w-[300px]"
                                : "h-atuo"
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
                          <p className="border w-min p-2 px-12 mt-2 border-[#E1E9EE] shadow-sm rounded-md text-text-color font-sp-pro-text-regular cursor-pointer hover:bg-bg-primary">
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

              <div className="flex justify-end flex-row p-10">
                <div className="bg-slate-500 cursor-pointer  w-1/5 p-2  rounded-lg text-center">
                  <NavLink to={"/asset"}>
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

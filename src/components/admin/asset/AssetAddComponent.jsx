import {
  ChevronDownIcon,
  HomeIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";
import upload from "../../../assets/images/Room/Upload.png";
import { Combobox, Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import ItemComponent from "./filtter/ItemComponent";
import CategoryComponent from "./filtter/CategoryComponent";
import StatusComponent from "./filtter/StatusComponent";
import RoomComponent from "./filtter/RoomComponent";
import { BiSave } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";

function AssetAddComponent(props) {
  const [query, setQuery] = useState("");

  return (
    <>
      <main
        className="overflow-y-auto  bg-white rounded-xl relative"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
          minHeight: "calc(100vh - 6.3rem)",
        }}
      >
        <div className="bg-white rounded-lg">
          <div className="text-2xl font-sp-pro-text-bold text-text-color py-4 px-[40px]">
            <h1>Add Asset</h1>
          </div>

          <div className="w-full">
            <hr className="border-[#E1E9EE] border" />
          </div>

          <div className="md:flex sm:flex-row px-[40px] mt-7 space-x-5">
            <div className="xl:w-7/12 md:w-6/12 sm:w-full">
              <div className="xl:flex mt-1 w-full​ flex-row space-x-10">
                <div className="xl:w-1/2 md:w-full">
                  <label
                    htmlFor=""
                    className="text-sm text-text-color font-sp-pro-text-medium"
                  >
                    Select Item
                  </label>
                  <ItemComponent />
                </div>

                <div className="xl:w-1/2 md:w-full mt-none">
                  <label
                    htmlFor=""
                    className="text-sm text-text-color font-sp-pro-text-medium"
                  >
                    Owner
                  </label>
                  <input
                    className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                    type="text"
                    placeholder="Room Name"
                  />
                </div>
              </div>

              <div className="xl:flex w-full​ flex-row space-x-10 mt-5">
                <div className="xl:w-1/2 md:w-full mt-none">
                  <label
                    htmlFor=""
                    className="text-sm text-text-color font-sp-pro-text-medium"
                  >
                    Label Code
                  </label>
                  <input
                    className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                    type="text"
                    placeholder="Label Code"
                  />
                </div>

                {/* owner */}
                <div className="xl:w-1/2 md:w-full mt-none">
                  <label
                    htmlFor=""
                    className="text-sm text-text-color font-sp-pro-text-medium"
                  >
                    Serial Code
                  </label>
                  <input
                    className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                    type="text"
                    placeholder="Serial Code"
                  />
                </div>
              </div>

              <div className="xl:flex w-full​ flex-row space-x-10 mt-5">
                <div className="xl:w-1/2 md:w-full">
                  <label
                    htmlFor=""
                    className="text-sm text-text-color font-sp-pro-text-medium"
                  >
                    Select Category
                  </label>
                  <CategoryComponent />
                </div>

                <div className="xl:w-1/2 md:w-full">
                  <label
                    htmlFor=""
                    className="text-sm text-text-color font-sp-pro-text-medium"
                  >
                    Select Status
                  </label>
                  <StatusComponent />
                </div>
              </div>

              <div className="xl:flex w-full​ flex-row space-x-10 mt-7">
                <div className="xl:w-1/2 md:w-full">
                  <label
                    htmlFor=""
                    className="text-sm text-text-color font-sp-pro-text-medium"
                  >
                    Select Room
                  </label>
                  <RoomComponent />
                </div>

                <div className="xl:w-1/2 md:w-full"></div>
              </div>

              {/*  */}
              <div className="mt-5">
                <div className="md:w-full">
                  <label
                    for="message"
                    className="block mb-1 text-sm text-text-color font-sp-pro-text-medium"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="block p-2.5 w-full text-sm border-[#E1E9EE] rounded-lg border text-text-color outline-none focus:border-primary"
                    placeholder="Description..."
                  ></textarea>
                </div>
              </div>
              {/*  */}
            </div>

            <div className="xl:w-5/12 md:w-6/12 sm:full">
              <div className="w-full">
                <div className="md:p-3 md:m-5 item-center w-full">
                  <div className="border border-dashed border-yellow md:py-20 py-5 rounded-md mb-1 h-[450px]">
                    <div className="flex flex-col justify-center text-center">
                      <div>
                        <img className="block m-auto " src={upload} alt="" />
                      </div>
                      <div>
                        <p className="mt-3 text-xs">
                          Upload Invoice picture, max size 20MB
                        </p>
                      </div>
                      <div className="mt-3">
                        <button className=" ">
                          <input
                            class="block w-full text-sm text-gray-900 cursor-pointer shadow-sm rounded-md border border-bg-primary my-2"
                            id="file_input"
                            type="file"
                          ></input>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex mt-1 justify-end flex-row space-x-6">
                  <div className="w-1/5">
                    <Link to={"/asset"}>
                      <button class="text-white py-1.5 px-2 bg-slate-500 hover:bg-slate-500 hover:opacity-90 cursor-pointer p-1.5 rounded-md text-sm w-full flex items-center">
                        <MdClear className="w-4 h4" /> &nbsp; Cancel
                      </button>
                    </Link>
                  </div>
                  <div className="w-1/5">
                    <button class="text-white py-1.5 px-4 bg-primary cursor-pointer hover:bg-primary hover:opacity-90 p-1.5 rounded-md text-sm w-full flex items-center">
                      <BiSave className="w-4 h4" /> &nbsp; Save
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

export default AssetAddComponent;

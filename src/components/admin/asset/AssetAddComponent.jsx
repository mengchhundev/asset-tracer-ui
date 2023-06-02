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
function AssetAddComponent(props) {
  const [query, setQuery] = useState("");

  return (
    <>
      <main
        className="overflow-y-auto  bg-white rounded-xl relative"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
          minHeight: "calc(100vh - 6.3rem)"
        }}
      >
        <div className="bg-white rounded-lg">
          <div className="text-2xl font-sp-pro-text-bold text-text-color py-11 px-[60px]">
            <h1>Add Asset</h1>
          </div>

          <div className="w-full">
            <hr className="border-[#E1E9EE] border" />
          </div>

          <div className="md:flex sm:flex-row px-[60px] mt-7">
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

              <div className="xl:flex w-full​ flex-row space-x-10 mt-7">
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

              <div className="xl:flex w-full​ flex-row space-x-10 mt-7">
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
              <div className="mt-7">
                <div className="md:w-full">
                  <label
                    for="message"
                    class="block mb-1 text-sm text-text-color font-sp-pro-text-medium"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    class="block p-2.5 w-full text-sm text-gray-900 border-[#E1E9EE] rounded-lg border text-text-color outline-none focus:border-primary"
                    placeholder="Description..."
                  ></textarea>
                </div>
              </div>
              {/*  */}
            </div>

            <div className="xl:w-5/12 md:w-6/12 sm:full">
              <div className="w-full">
                <div className="md:p-3 md:m-5 item-center w-full ">
                  <div className="space-y-10 border border-dashed border-yellow px-10 md:py-20 py-5 rounded-md mb-1">
                    <div className=" items-center block justify-center text-center p-3  rounded-lg">
                      <div>
                        <img className="block m-auto " src={upload} alt="" />
                        <p className="mt-3 text-xs">
                          Upload Invoice picture, max size 20MB
                        </p>
                        <button className="shadow-sm rounded-md border border-bg-primary px-5 py-1.5 my-2 ">
                          Browse
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="flex mt-3 justify-end flex-row w-full">
                  <div className="bg-slate-500 cursor-pointer  w-1/5 p-2  rounded-lg">
                    <button className="flex justify-around text-white font-sp-pro-text-regular items-center text-sm ">
                      Cancel
                    </button>
                  </div>

                  <div className="bg-primary cursor-pointer bg-opacity-20 ml-6 w-1/5 p-2 rounded-lg">
                    <button className="flex  justify-around text-primary font-sp-pro-text-regular items-center text-sm">
                      Save
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

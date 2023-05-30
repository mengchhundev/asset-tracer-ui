import {
  ChevronDownIcon,
  HomeIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";
import upload from "../../../assets/images/Room/Upload.png";
import { Listbox, Transition } from "@headlessui/react";
import ItemComponent from "./filtter/ItemComponent";
import CategoryComponent from "./filtter/CategoryComponent";
import StatusComponent from "./filtter/StatusComponent";
import RoomComponent from "./filtter/RoomComponent";
function AssetAddComponent(props) {
  const Room = [
    "Sr Room",
    "Admin Room",
    "PP Room",
    "BTB Room",
    "Koskhobg Room",
  ];
  const [selectedRoom, setSelectedRoom] = useState("");

  return (
    <>
      <div className="">
        <div className="bg-white p-10 rounded-lg ">
          <div className=" text-xl font-sp-pro-text-bold text-text-color text-opacity-90">
            <p>Update Asset</p>
          </div>
          <hr className="border border-text-color border-opacity-40 my-5" />
          <form action="" method="post">
            <div className="grid grid-cols-12">
              <div className="col-span-7">
                <div className="grid grid-cols-11 mt-5">
                  <div className="col-span-5 w-full">
                    <label htmlFor="" className="">
                      Select item
                    </label>
                    <span className="pt-2 bg-red-500">
                      <ItemComponent />
                    </span>
                  </div>

                  <div className="col-span-5 w-full ml-20">
                    <label htmlFor="">Owner</label>
                    <br />
                    <input
                      className="border mt-2 text-text-color px-3 border-text-color border-opacity-30 w-full h-[39px] rounded-md p-2 focus:outline-yellow"
                      type="text"
                      placeholder="Room Name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-11 mt-5">
                  <div className="col-span-5 w-full">
                    <label htmlFor="">Lable Code</label>
                    <br />
                    <input
                      className="border mt-2 text-text-color px-3 border-text-color border-opacity-30 w-full h-[39px] rounded-md p-2 focus:outline-yellow"
                      type="text"
                      placeholder="Room Name"
                    />
                  </div>

                  <div className="col-span-5 w-full ml-20">
                    <label htmlFor="">Serial Code</label>
                    <br />
                    <input
                      className="border mt-2 text-text-color px-3 border-text-color border-opacity-30 w-full h-[39px] rounded-md p-2 focus:outline-yellow"
                      type="text"
                      placeholder="Room Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-11 mt-5">
                  <div className=" col-span-5 w-full ">
                    <label htmlFor="" className="">
                      Select Category
                    </label>
                    <span>
                      <CategoryComponent />
                    </span>
                  </div>

                  <div className=" col-span-5 w-full ml-20">
                    <label htmlFor="" className="">
                      Select Status
                    </label>
                    <span>
                      <StatusComponent />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-11 mt-5">
                  <div className=" col-span-5 w-full ">
                    <label htmlFor="" className="text-text-color font-sp-pro-text-regular">
                      Select Room
                    </label>
                    <span>
                      <RoomComponent />
                    </span>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <h1 className="text-text-color font-sp-pro-text-regular">
                  Description
                  </h1>
                  <textarea
                    className="border border-text-color border-sh rounded-lg w-full focus:outline-yellow mt-2"
                    name=""
                    id=""
                    cols="20"
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <div className="col-span-5">
                <div className="w-2/3 mx-40 h-5/6">
                  <div
                    className="m-5 rounded-md h-[520px] p-5 border-primary border-dashed border-3 border-opacity-30 flex flex-col items-center"
                    style={{ border: "1px dotted #F8C400" }}
                  >
                    <img
                      className="w-3/4 px-20 pt-20 pb-5"
                      src={upload}
                      alt=""
                    />
                    <p className="text-center">
                      Upload Room picture, max size 2MB
                    </p>
                    <button className="p-4 m-10 center text-center w-28 shadow-md">
                      Browse
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 flex flex-row justify-end space-x-5">
                  <span className="border border-slate-200 bg-bg-main text-text-color font-sp-pro-text-medium p-1.5 px-5 rounded-md">
                    Cancel
                  </span>
                  <spann className="border border-red-500 bg-reject-light text-reject font-sp-pro-text-medium p-1.5 px-5 rounded-md">
                    Delete
                  </spann>
                </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AssetAddComponent;

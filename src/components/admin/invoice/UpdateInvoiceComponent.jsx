import React from 'react'
import ItemComponent from '../asset/filtter/ItemComponent'
import { RiAddBoxFill } from 'react-icons/ri'
import upload from "../../../assets/images/Room/Upload.png";
export default function UpdateInvoiceComponent() {
  return (
    <>
      <main
        className="overflow-y-auto  bg-white rounded-xl relative"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
          minHeight: "calc(95vh - 6rem)",
        }}
      >
        {/* Add invoice */}
        <div className="text-lg font-sp-pro-text-semibold text-text-color py-6 px-[40px]">
          <h1>Update Invoice</h1>
        </div>
        <div className="w-full px-[40px]">
          <hr className="border-[#E1E9EE]" />
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

            <div className="flex flex-row px-[40px] mt-7">
              {/* invoice code */}
              <div className="xl:w-44 md:w-full ">
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
              <div className=" xl:flex w-full​ flex-row space-x-10 ">
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
                  className=" flex text-sm text-text-color font-sp-pro-text pb-1"
                >
                  Purchase date
                </label>

                <div className=" xl:flex w-full​ flex-row space-x-10 border-[#E1E9EE] border rounded-lg text-right">
                  <div className=" xl:w-40 md:w-full px-[20px] pt-3.5">
                    <input type="date" className="text-primary " />
                  </div>
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
                      Invoice code
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
                      Invoice code
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
                      Invoice code
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
                      Invoice code
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
                      Invoice code
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
            {/* <div className="flex justify-end px-10">
              <RiAddBoxFill className=" mt-6 h-6 w-6 rounded-lg" />
            </div> */}
          </div>
          {/* upload */}
          <div className="xl:w-5/12 md:w-6/12 sm:full">
            <div className="w-full">
              <div className="md:p-7 md:m-5 ">
                <div className="space-y-12 border border-dotted border-yellow px-10 md:py-20 rounded-md ">
                  <div className=" items-center block justify-center text-center p-3  rounded-lg">
                    <div>
                      <img className="block m-auto " src={upload} alt="" />
                      <p className="mt-3 text-xs">
                        Upload Invoice picture, max size 20MB
                      </p>
                      <button className="shadow-sm rounded-md border border-bg-primary px-3 py-1.5 my-2 ">
                        Browse
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center flex-row">
                <div className="bg-slate-500 cursor-pointer  w-1/5 p-2  rounded-lg text-center">
                  <button className=" text-white font-sp-pro-text-regular">
                    Cancel
                  </button>
                </div>

                <div className="bg-primary cursor-pointer bg-opacity-20 ml-6 w-1/5 p-2 rounded-lg text-center">
                  <button className=" text-primary font-sp-pro-text-regular  ">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

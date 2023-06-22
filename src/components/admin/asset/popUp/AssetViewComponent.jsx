import React, { Fragment, useState } from "react";
import { TbCalendarStats } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai"; 
import { Tab } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import placeholder_square from "../../../../assets/images/placeholder/placeholder_square.jpg";
// import InvoiceService from "../../../../redux/services/InvoiceService";
import { useEffect } from "react";
import InvoiceService from "../../../../redux/services/InvoiceService";
function AssetViewComponent() {

  let itemDetail = useSelector(state => state.itemDetail.itemDetail)
  console.log(itemDetail)
  const dispatch = useDispatch();
  const selectedImage =
    "https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004_960_720.jpg";
  const [topImage, setTopImage] = useState(selectedImage);

  const handleImageClick = (newImage) => {
    setTopImage(newImage);
  };
console.log(itemDetail)

  const handleGetinvoice = () => {
    InvoiceService.getAllInvoices().then(res =>{
      if(res.data.success){
        dispatch(setAllInvoice(res.data.payload));
      }
    })
  }

  useEffect(() => {
    handleGetinvoice();
  }, []);

  return (
    <>
      <div className="modal">
        <div className="p-6 modal-box max-w-4xl">
          {/* header */}
          <div className="flex justify-between mb-5">
            <div className="flex flex-row items-end space-x-2">
              <span>
                <BsGraphUp className="w-8 h-8 bg-primary text-white" />
              </span>
              <span className="text-text-color text-xl font-sp-pro-text-semibold">
                Asset Details
              </span>
            </div>

            <div className="flex">
              {/*  */}
              <label htmlFor="view-asset">
                <RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
              </label>
            </div>
          </div>

          <div className="lg:flex lg:space-x-8 md:space-x-0 sm:flex-row w-full">
            <div className="w-1/2 md:w-full">
              {/* slide */}
              <div className="">
                <div className="rounded-lg border shadow-sm border-slate-200">
                  <div className="carousel flex top-1/2">
                    <div className="">
                      <img
                        className="w-full h-full rounded-lg"
                        src= {(itemDetail.image ? `http://localhost:8080/api/v1/files/getFile?fileName=${itemDetail.image}`: placeholder_square)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Information */}
              <div className="col-span-6">
                <div className="mt-5">
                  <h1 className="font-sp-pro-text-semibold text-base mb-2 text-text-color">
                    Asset Information
                  </h1>
                  <div className="grid md:grid-cols-2 rounded-lg border shadow-sm border-gray-light border-opacity-50">
                    <div className="p-3 px-5 md:border-r-2 md:border-r-none border-gray-light border-opacity-50">
                      <p className="font-sp-pro-text-regular text-text-color text-sm">
                        Organization
                      </p>
                      <div className="flex flex-row items-end space-x-2 mt-3">
                        <span className="rounded-full">
                          <BiHome className="w-6 h-6 text-yellow" />
                        </span>
                        <span className="text-text-color text-xs font-sp-pro-text-regular text-opacity-70">
                          KSGA
                        </span>
                      </div>
                    </div>

                    <div className="p-3 px-5">
                      <p className="font-sp-pro-text-regular text-text-color text-sm">
                        Category Type
                      </p>
                      <div className="flex flex-row items-end space-x-2 mt-3">
                        <span className="rounded-full">
                          <AiOutlineShopping className="w-6 h-6 text-yellow" />
                        </span>
                        <span className="text-text-color text-xs font-sp-pro-text-regular text-opacity-70">
                          {itemDetail.normalCategoryName}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 rounded-lg border shadow-sm border-gray-light border-opacity-50 mt-5">
                    <div className="p-3 px-5 md:border-r-2 md:border-r-none border-gray-light border-opacity-50">
                      <p className="font-sp-pro-text-regular text-text-color text-sm">
                        QTY
                      </p>
                      <div className="flex flex-row items-end space-x-2 mt-3">
                        <span className="rounded-full">
                          <TbCalendarStats className="w-6 h-6 text-yellow" />
                        </span>
                        <span className="text-text-color text-xs font-sp-pro-text-regular text-opacity-70">
                          {itemDetail.qty}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 px-5">
                      <p className="font-sp-pro-text-regular text-text-color text-sm">
                        UnitPrice
                      </p>
                      <div className="flex flex-row items-end space-x-2 mt-3">
                        <span className="rounded-full">
                          <HiOutlineCurrencyDollar className="w-6 h-6 text-yellow" />
                        </span>
                        <span className="text-text-color text-xs font-sp-pro-text-regular text-opacity-70">
                          {itemDetail.unitPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Asset Label code */}
            <div className="lg:mt-0 md:mt-5 mt-5 w-full">
              <div className="w-full">
                <Tab.Group>
                  <div
                    className="gap-6 bg-white rounded-lg overflow-hidden"
                    style={{
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px",
                    }}
                  >
                    <Tab.List className="flex space-x-1 text-text-color">
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`px-4 py-3 w-1/2 rounded-sm outline-none border-b-4 border-white ${
                              selected
                                ? "bg-custom-yellow-showdow-light border-b-primary"
                                : ""
                            }`}
                          >
                            Already Set (
                            <span className="text-red-500 font-sp-pro-text-regular">
                              2
                            </span>
                            )
                          </button>
                        )}
                      </Tab>

                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`px-4 py-3 w-1/2 rounded-sm outline-none border-b-4 border-white ${
                              selected
                                ? "bg-custom-yellow-showdow-light border-b-primary"
                                : ""
                            }`}
                          >
                            Unset Label (
                            <span className="text-red-500 font-sp-pro-text-regular">
                              1
                            </span>
                            )
                          </button>
                        )}
                      </Tab>
                    </Tab.List>
                  </div>
                  <div className="my-5">
                    <Tab.Panels>
                      <Tab.Panel>
                        {/* table */}
                        {/* <div
                          className="bg-white p-4 rounded-lg overflow-y-auto h-[440px]"
                          style={{
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px",
                          }}
                        >
                          {itemDetail.map((item) => (
                            <div className="w-full grid grid-cols-4 gap-2 mb-5 border-b-2 border-[#6DB33F] p-3 rounded-lg">
                              <div className="flex flex-col space-y-3">
                                <span className="text-text-color font-sp-pro-text-regular text-sm">
                                  Owner
                                </span>
                                <span className="text-text-color font-sp-pro-text-regular text-xs text-opacity-70">
                                  {item.name}
                                </span>
                              </div>

                              <div className="flex flex-col space-y-3">
                                <span className="text-text-color font-sp-pro-text-regular text-sm">
                                  Room
                                </span>
                                <span className="text-text-color font-sp-pro-text-regular text-xs text-opacity-70">
                                  SR Class
                                </span>
                              </div>

                              <div className="flex flex-col space-y-3">
                                <span className="text-text-color font-sp-pro-text-regular text-sm">
                                  Label Code
                                </span>
                                <span className="text-text-color font-sp-pro-text-regular text-xs text-opacity-70">
                                  Y8R6E6N9
                                </span>
                              </div>

                              <div className="flex flex-col space-y-3">
                                <span className="text-text-color font-sp-pro-text-regular text-sm">
                                  Serial Code
                                </span>
                                <span className="text-text-color font-sp-pro-text-regular text-xs text-opacity-70">
                                  216066
                                </span>
                              </div>
                            </div>
                          ))}
                        </div> */}
                      </Tab.Panel>

                      {/* Unset lable */}
                      <Tab.Panel>
                        {/* <div
                          className="bg-white p-4 rounded-lg overflow-y-auto h-[440px]"
                          style={{
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 10px",
                          }}
                        >
                          <div className="grid grid-cols-2 gap-2">
                            {invoice.map((item) => (
                              <div className="w-full gap-2 mb-5 border-b-2 border-[#2076FF] p-3 rounded-lg">
                                <div className="flex flex-row space-x-3 items-end pb-1.5">
                                  <span className="text-text-color font-sp-pro-text-regular text-sm">
                                    Owner :
                                  </span>
                                  <span className="text-text-color font-sp-pro-text-regular text-xs text-opacity-70">
                                    {item.name}
                                  </span>
                                </div>

                                <div className="flex flex-row space-x-3 items-end py-1.5">
                                  <span className="text-text-color font-sp-pro-text-regular text-sm">
                                    Room :
                                  </span>
                                  <span className="text-text-color font-sp-pro-text-regular text-xs text-opacity-70"></span>
                                </div>

                                <div className="flex flex-row space-x-3 items-end py-1.5">
                                  <span className="text-text-color font-sp-pro-text-regular text-sm">
                                    Label Code :
                                  </span>
                                  <span className="text-text-color font-sp-pro-text-regular text-xs text-opacity-70"></span>
                                </div>

                                <div className="flex flex-row space-x-3 items-end py-1.5">
                                  <span className="text-text-color font-sp-pro-text-regular text-sm">
                                    Serial Code :
                                  </span>
                                  <span className="text-text-color font-sp-pro-text-regular text-xs text-opacity-70"></span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div> */}
                      </Tab.Panel>
                    </Tab.Panels>
                  </div>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssetViewComponent;
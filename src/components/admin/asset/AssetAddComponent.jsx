import React, { useEffect, useState } from "react";
import '../../../style/shadow.css'
import { IoMdAddCircleOutline } from "react-icons/io";
import ItemComponent from "./filtter/ItemComponent";
import { RiAddBoxFill } from "react-icons/ri";
import { CloudArrowUpIcon } from "@heroicons/react/20/solid";
import { NavLink, useNavigate } from "react-router-dom";
import SetAssetDropDownComponent from "./filtter/SetAssetDropDownComponent";
import { FaFileInvoice } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import '../../../style/shadow.css'
import { AiOutlineFileAdd, AiOutlinePlus } from "react-icons/ai";
import upload_placeholder from '../../../assets/images/placeholder/upload_placeholder.svg';
import { RiCloseFill } from 'react-icons/ri';
import * as Yup from "yup";
import { FiSave } from "react-icons/fi";
import InvoiceService from "../../../redux/services/InvoiceService";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import AssetService from "../../../redux/services/AssetService";

export default function AssetAddComponent() {


  const [normalCategoryName, setNormalCategoryName] = useState([]);
  const navigator = useNavigate()

  //combobox
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  let organization = JSON.parse(sessionStorage.getItem("organization"))

  // Upload file
  let formData = new FormData()
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState()

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value })
  };

  const [newAsset, setNewAsset] = useState({
    name: "",
    image: "",
    qty: "",
    unitPrice: "",
    discount: "0",
    normalCategoryId: "",
    organizationId: organization.id
  })

  const formik = useFormik({
    initialValues: newAsset,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Item name is required"),
      qty: Yup.string().required("QTY is required"),
      normalCategoryId: Yup.string().required("Category is required"),
    }),
    onSubmit: (val, { resetForm }) => {
      // handleSaveAsset()
      console.log(newAsset)
    }
  });

  const handleSaveAsset = () => {
    AssetService.saveAsset(newAsset).then(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }


  return (
    <>
      <main className="overflow-y-auto bg-white rounded-xl relative con-Shadow text-text-color">
        <div className="text-2xl font-sp-pro-text-bold py-4 px-10">
          <h1 className="flex items-center">
            <HiTemplate /> &nbsp; Add Asset
          </h1>
        </div>
        <hr className="border-[#E1E9EE] border-1" />

        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap-reverse xl:flex-nowrap justify-between w-full p-5 md:p-10 pb-5">
            <div className="w-full md:w-7/12 lg:w-full xl:w-7/12 mx-auto">
              <section className="">
                <div className="flex w-full gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Asset Name <span className='text-reject'>*</span></label>
                    <input
                      type='text'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newAsset.invoiceCode}
                      name="invoiceCode"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                      placeholder='Enter invoice name'
                    />
                    {/* {formik.touched.invoiceCode && formik.errors?.invoiceCode ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.invoiceCode}</p> : null} */}
                  </div>
                </div>
                <div className="flex w-full gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">QTY  <span className='text-reject'>*</span></label>
                    <input
                      type='number'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newAsset.invoiceCode}
                      name="invoiceCode"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                      placeholder='Enter QTY'
                    />
                    {/* {formik.touched.invoiceCode && formik.errors?.invoiceCode ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.invoiceCode}</p> : null} */}
                  </div>
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Unit Price</label>
                    <input
                      type='text'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newAsset.invoiceCode}
                      name="invoiceCode"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                      placeholder='Enter unit price'
                    />
                    {/* {formik.touched.invoiceCode && formik.errors?.invoiceCode ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.invoiceCode}</p> : null} */}
                  </div>
                </div>
                <div className="flex w-full gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Purchase by</label>
                    <input
                      type='text'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newAsset.invoiceCode}
                      name="invoiceCode"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                      placeholder='Enter purchase by'
                    />
                    {/* {formik.touched.invoiceCode && formik.errors?.invoiceCode ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.invoiceCode}</p> : null} */}
                  </div>
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Purchase Date <span className='text-reject'>*</span></label>
                    <input
                      type='date'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newAsset.purchaseDate}
                      name="purchaseDate"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                    // placeholder="Date"
                    />
                    {/* {formik.touched.purchaseDate && formik.errors?.purchaseDate ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.purchaseDate}</p> : null} */}
                  </div>
                </div>
                <div className="flex w-full lg:w-1/2 gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Category <span className='text-reject'>*</span></label>
                    <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                      <Combobox
                        // onChange={(e) => handleSelectionChangeItem(e, index)}
                        className="z-20"
                      >
                        <div className="relative z-20">
                          <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                            <Combobox.Input
                              className="w-full border-[#E1E9EE] placeholder-black placeholder-opacity-20 border rounded-lg bg-[#F9FBFF] py-2  pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                              displayValue={(val) => val.name}
                              // onChange={(e) => { setQuery(e.target.value), (e) => handleSelectionChangeItem(e, index) }}
                              placeholder='Select Category'
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronUpDownIcon
                                className="h-5 w-5 text-text-color"
                                aria-hidden="true"
                              />
                            </Combobox.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-10sp0"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery("")}
                          >
                            {/* <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {filteredCategoryName.length === 0 && query !== "" ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                  Nothing found.
                                </div>
                              ) : (
                                filteredCategoryName.map((val, index) => (
                                  <Combobox.Option
                                    key={index}
                                    className={({ active }) =>
                                      `relative cursor-pointer select-none py-2 px-5 text-text-color ${active ? "bg-custom-yellow-showdow-light" : ""}`
                                    }
                                    value={val}
                                  >
                                    {val.name}
                                  </Combobox.Option>
                                ))
                              )}
                            </Combobox.Options> */}
                          </Transition>
                        </div>
                      </Combobox>
                    </div>
                    {formik.touched?.newAsset && formik.errors?.newAsset && formik.errors?.newAsset[index]?.normalCategoryId ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors?.newAsset[index].normalCategoryId}</p> : null}
                  </div>
                </div>
              </section>
            </div>

            <div className="w-[24rem] md:w-[22rem] lg:w-[24rem] mx-auto">
              <div className="md:px-5 my-5 flex">
                <div className='w-full shadow p-5 rounded-md mb-1 relative mx-auto'>
                  <div className='border border-dashed py-2 border-primary block justify-center text-center rounded-lg'>
                    <div className='w-full min-h-[14rem] flex p-5 relative'>
                      {
                        selectedFile ? <img src={URL.createObjectURL(selectedFile)} className='h-full m-auto' />
                          : <img className="block m-auto h-32" src={upload_placeholder} />
                      }
                    </div>
                    <p className='mt-5 text-xs'>Upload Asset Picture</p>
                    <br />
                    <label htmlFor='logo' className='cursor-pointer shadow-md rounded-md border border-bg-primary px-5 py-2 my-2 '>Browse</label>
                    <input type="file" className='hidden' id='logo' onChange={handleFileSelect} />
                    <br /><br />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='w-full flex justify-end gap-x-3 px-5 lg:px-10 xl:px-16 mb-10'>

            <label
              htmlFor='create-organization'
              className="rounded-md bg-bg-primary py-2 cursor-pointer px-3 text-sm font-sp-pro-text-medium text-text-color text-opacity-70 flex justify-center items-center gap-1"
            >
              <RiCloseFill className='text-lg' />
              Cancel
            </label>
            <button
              type="submit"
              className={`hover:bg-opacity-90 bg-primary  rounded-md cursor-pointer  py-2 px-5 text-sm font-sp-pro-text-medium text-white flex justify-center items-center gap-1`}
            >
              <FiSave className='text-lg' /> Add
            </button>
          </div>
        </form>

      </main>
    </>
  );
}

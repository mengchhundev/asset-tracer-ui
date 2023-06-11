import React, { Fragment, useState } from "react";
import ItemComponent from "../asset/filtter/ItemComponent";
import { RiAddBoxFill } from "react-icons/ri";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";
import '../../../style/shadow.css'
import { AiOutlineFileAdd, AiOutlinePlus } from "react-icons/ai";
import upload_placeholder from '../../../assets/images/placeholder/upload_placeholder.svg';
import { RiCloseFill } from 'react-icons/ri';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { FiSave } from "react-icons/fi";
import InvoiceService from "../../../redux/services/InvoiceService";
import { Combobox, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 1, name: "Asset" },
  { id: 2, name: "HDMI" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Mango" },
];

export default function AddInvoiceComponent() {

  const navigator = useNavigate()
  //combobox
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  // const date = moment().format("MMM Do YY");
  let organization = JSON.parse(sessionStorage.getItem("organization"))
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState()
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [newData, setNewData] = useState({
    invoiceCode: "",
    purchaseBy: "",
    purchaseDate: "",
    image: "",
    organizationId: organization.id,
    supplier: "",
    itemDetailRequests: []
  })

  const [newItem, setNewItem] = useState([
    {
      name: "",
      image: "",
      qty: "",
      unitPrice: "",
      discount: "",
      normalCategoryId: "9d3b3886-1483-4004-af9c-0465147ac03b",
      organizationId: organization.id
    }
  ])

  const handleAddMoreItem = () => {
    setNewItem([...newItem, {
      name: "",
      model: "",
      qty: "",
      unitPrice: "",
      discount: "",
      normalCategoryId: "9d3b3886-1483-4004-af9c-0465147ac03b",
      organizationId: organization.id
    }])
  }

  const handleDeleteItem = (i) => {
    const val = [...newItem]
    val.splice(i, 1)
    setNewItem(val)
  }

  const handleInputChangeItem = (e, index) => {
    const { name, value } = e.target
    const onChangeVal = [...newItem]
    onChangeVal[index][name] = value
    setNewItem(onChangeVal)
    console.log(newItem)
  }

  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value })
    console.log(newData)
  };

  const handleSaveInvoice = () => {
    InvoiceService.saveInvoice({
      invoiceCode: newData.invoiceCode,
      purchaseBy: newData.purchaseBy,
      purchaseDate: newData.purchaseDate,
      organizationId: newData.organizationId,
      supplier: newData.supplier,
      itemDetailRequests: newItem
    }).then(res => {
      if(res.data.success) {
        navigator("/invoice")
      }
    }, err => {
      console.log(err)

    })


  }

  const formik = useFormik({
    initialValues: newData,
    validationSchema: Yup.object().shape({
      invoiceCode: Yup.string().required("Invoice code is required"),
      purchaseDate: Yup.string().required("Purchase date is required"),
      purchaseBy: Yup.string().required("Purchase by is required"),
    }),
    onSubmit: (val, { resetForm }) => {
      handleSaveInvoice()
      setNewData({
        invoiceCode: "",
        purchaseBy: "",
        purchaseDate: "",
        image: "",
        organizationId: organization.id,
        supplier: "",
        itemDetailRequests: []
      })
      setNewItem([
        {
          name: "",
          image: "",
          qty: "",
          unitPrice: "",
          discount: "",
          normalCategoryId: "",
          organizationId: organization.id
        }
      ])
    }
  });


  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
        person.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );


  return (
    <>
      <main className="overflow-y-auto bg-white rounded-xl relative con-Shadow text-text-color">
        <div className="text-2xl font-sp-pro-text-bold py-4 px-10">
          <h1 className="flex items-center">
            <FaFileInvoice /> &nbsp;Add Invoice
          </h1>
        </div>
        <hr className="border-[#E1E9EE] border-1" />

        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap-reverse xl:flex-nowrap justify-between w-full p-10 pb-5">
            <div className="w-full md:w-7/12 lg:w-full xl:w-7/12 mx-auto">
              <div className="text-base font-sp-pro-text-semibold w-full ">
                <h1>Invoice Detail</h1>
              </div>
              <hr className="border-[#E1E9EE] border-spacing-y-10 mb-5" />

              <section className="p-3 ">
                <div className="flex w-full gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Invoice Code <span className='text-reject'>*</span></label>
                    <input
                      type='text'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newData.invoiceCode}
                      name="invoiceCode"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                      placeholder='Enter invoice no...'
                    />
                    {formik.touched.invoiceCode && formik.errors?.invoiceCode ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.invoiceCode}</p> : null}
                  </div>
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Purchase Date <span className='text-reject'>*</span></label>
                    <input
                      type='date'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newData.purchaseDate}
                      name="purchaseDate"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                      placeholder='Enter invoice no...'
                    />
                    {formik.touched.purchaseDate && formik.errors?.purchaseDate ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.purchaseDate}</p> : null}
                  </div>
                </div>

                <div className="flex w-full gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Purchase By</label>
                    <input
                      type='text'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newData.purchaseBy}
                      name="purchaseBy"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                      placeholder='Enter purchaser name...'
                    />
                    {formik.touched.purchaseBy && formik.errors?.purchaseBy ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.purchaseBy}</p> : null}
                  </div>
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Supplier</label>
                    <input
                      type='text'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newData.supplier}
                      name="supplier"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                      placeholder='Enter supplier name...'
                    />
                    {formik.touched.supplier && formik.errors?.supplier ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.supplier}</p> : null}
                  </div>
                </div>
              </section>

              <div className="text-base font-sp-pro-text-semibold w-full mt-5">
                <h1>Item Detail</h1>
              </div>
              <hr className="border-[#E1E9EE] border-spacing-y-10 mb-5" />

              {newItem.map((list, index) => (

                <section className={`relative border rounded-md px-3 shadow-sm mt-5 ${index % 2 != 0 ? "bg-bg-color border-bg-primary-strock" : "border-primary"}`} key={index}>
                  {index != 0 &&
                    <div className='absolute -top-3 -right-3'>
                      <label onClick={() => handleDeleteItem(index)}><RiCloseFill className="cursor-pointer bg-white border border-bg-primary-strock h-6 w-6 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" /></label>
                    </div>
                  }
                  <div className="flex w-full gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                    <div className='text-left w-full'>
                      <label className="block mb-2 ml-1 text-sm">Item <span className='text-reject'>*</span></label>
                      <input
                        type='text'
                        onInput={(e) => handleInputChangeItem(e, index)}
                        onChange={formik.handleChange}
                        value={newItem.name}
                        name="name"
                        className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                        placeholder='Item name'
                      />
                      {/* {formik.touched.name && formik.errors?.name ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.name}</p> : null} */}
                    </div>
                    <div className='text-left w-full'>
                      <label className="block mb-2 ml-1 text-sm"> QTY <span className='text-reject'>*</span></label>
                      <input
                        type='number'
                        onInput={(e) => handleInputChangeItem(e, index)}
                        onChange={formik.handleChange}
                        value={newItem.qty}
                        name="qty"
                        className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                        placeholder='0'
                      />
                      {/* {formik.touched.name && formik.errors?.name ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.name}</p> : null} */}
                    </div>
                    <div className='text-left w-full'>
                      <label className="block mb-2 ml-1 text-sm">Unit Price <span className='text-reject'>*</span></label>
                      <input
                        type='number'
                        onInput={(e) => handleInputChangeItem(e, index)}
                        onChange={formik.handleChange}
                        value={newItem.unitPrice}
                        name="unitPrice"
                        className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                        placeholder='0'
                      />
                      {/* {formik.touched.name && formik.errors?.name ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.name}</p> : null} */}
                    </div>
                    
                  </div>
                  <div className="flex w-full gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                  <div className='text-left w-full'>
                      <label className="block mb-2 ml-1 text-sm">Discount</label>
                      <input
                        type='number'
                        onInput={(e) => handleInputChangeItem(e, index)}
                        onChange={formik.handleChange}
                        value={newItem.discount}
                        name="discount"
                        className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                        placeholder='0'
                      />
                      {/* {formik.touched.name && formik.errors?.name ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.name}</p> : null} */}
                    </div>
                    <div className='text-left w-full'>
                      <label className="block mb-2 ml-1 text-sm">Model</label>
                      <input
                        type='text'
                        onInput={(e) => handleInputChangeItem(e, index)}
                        onChange={formik.handleChange}
                        value={newItem.model}
                        name="model"
                        className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                        placeholder='Enter model name...'
                      />
                      {/* {formik.touched.name && formik.errors?.name ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.name}</p> : null} */}
                    </div>
                    <div className='text-left w-full'>
                      <label className="block mb-2 ml-1 text-sm">Category <span className='text-reject'>*</span></label>

                      <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                        <Combobox
                          value={selected}
                          onChange={setSelected}
                          className="z-20"
                        >
                          <div className="relative z-20">
                            <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                              <Combobox.Input
                                className="w-full border-[#E1E9EE] border rounded-lg bg-[#F9FBFF] py-2  pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                                displayValue={(person) => person.name}
                                onChange={(event) => setQuery(event.target.value)}
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
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                              afterLeave={() => setQuery("")}
                            >
                              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {filteredPeople.length === 0 && query !== "" ? (
                                  <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                    Nothing found.
                                  </div>
                                ) : (
                                  filteredPeople.map((person) => (
                                    <Combobox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                          ? "bg-hover-yellow text-text-color"
                                          : "text-text-color"
                                        }`
                                      }
                                      value={person}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <span
                                            className={`block truncate ${selected ? "font-medium" : "font-normal"
                                              }`}
                                          >
                                            {person.name}
                                          </span>
                                          {selected ? (
                                            <span
                                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active
                                                ? "text-white"
                                                : "text-text-color"
                                                }`}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Combobox.Option>
                                  ))
                                )}
                              </Combobox.Options>
                            </Transition>
                          </div>
                        </Combobox>
                      </div>
                      {/* {formik.touched.name && formik.errors?.name ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.name}</p> : null} */}
                    </div>
                  </div>
                </section>
              ))}

              <label onClick={handleAddMoreItem}>
                <span className="flex flex-row mt-2 items-center cursor-pointer text-blue-500 p-3 py-1.5 rounded-md border   hover:text-opacity-90 float-right">
                  <AiOutlinePlus className="text-xl mr-1"/> Add item
                </span>
                {/* <RiAddBoxFill className=" mt-2 cursor-pointer h-9 w-9 text-green hover:text-opacity-90 float-right" /> */}
              </label>
            </div>

            <div className="w-9/12 md:w-[22rem] lg:w-[24rem] mx-auto">
              <div className="px-5 my-5 flex">
                <div className='w-full shadow p-5 rounded-md mb-1 relative mx-auto'>
                  <div className='border border-dashed py-2 border-primary block justify-center text-center rounded-lg'>
                    <div className='w-full h-80 flex p-5 relative'>
                      {
                        selectedFile ? <img src={URL.createObjectURL(selectedFile)} className='h-full m-auto' />
                          : image ? <img src={image} className='h-full m-auto' />
                            : <img className="block m-auto h-32" src={upload_placeholder} />
                      }
                    </div>
                    <p className='mt-5 text-xs'>Upload Invoice Picture</p>
                    <br />
                    <label htmlFor='logo' className='cursor-pointer shadow-md rounded-md border border-bg-primary px-5 py-2 my-2 '>Browse</label>
                    <input type="file" className='hidden' id='logo' onChange={handleFileSelect} />
                    <br /><br />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='w-full flex justify-end gap-x-3 px-16 mb-10'>

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

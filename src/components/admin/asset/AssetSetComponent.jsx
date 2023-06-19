import React, { useEffect, useState } from "react";
import upload_placeholder from "../../../assets/images/placeholder/upload_placeholder.svg";
import { RiCloseFill } from "react-icons/ri";
import { FiSave } from "react-icons/fi";
import * as Yup from "yup";
import { useFormik } from "formik";
import FileUploadService from "../../../redux/services/FileUploadService";
import { HiDocumentText } from "react-icons/hi";
import { Combobox, Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import placeholder from "../../../assets/images/placeholder/placeholder-image.png"
import ItemDetailService from "../../../redux/services/ItemDetailService";
import RoomService from "../../../redux/services/RoomService";

const status = [
  { id: "in_stock", name: "In Stock" },
]

export default function AssetSetComponent() {

  const organization = JSON.parse(sessionStorage.getItem("organization"))
  const orgId = organization.id
  const [newData, setNewData] = useState({
    itemDetailId: "",
    labelCode: "",
    serialCode: "",
    owner: "",
    status: "",
    roomId: "",
    description: "",
    organizationId: orgId,
  })

  const [items, setItems] = useState([])
  const [rooms, setRooms] = useState([])

  const [selectedItem, setSelectedItem] = useState()
  const [selectedRoom, setSelectedRoom] = useState()
  const [selectedFile, setSelectedFile] = useState()
  const [selectedStatus, setSelectedStatus] = useState()
  const [image, setImage] = useState()

  const handleInputChange = (e) => {
    // setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    ItemDetailService.getAllItemByOrg(orgId).then(res => {
      if (res.data.success) {
        setItems(res.data.payload)
      }
    })

    RoomService.getAllRoomByOrgId(orgId).then(res => {
      if (res.data.success) {
        setRooms(res.data.payload)
      }
    })
  }, [])

  const formik = useFormik({
    initialValues: newData,
    validationSchema: Yup.object().shape({
      itemDetailId: Yup.string().required("Item is required"),
      status: Yup.string().required("Status is required"),
    }),
    onSubmit: (val, { resetForm }) => {

    }
  });

  const [queryItem, setQueryItem] = useState("");
  const filteredItem =
    queryItem === ""
      ? items
      : items.filter((list) =>
        list.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(queryItem.toLowerCase().replace(/\s+/g, ""))
      );

  const [queryRoom, setQueryRoom] = useState("");
  const filteredRoom =
    queryRoom === ""
      ? rooms
      : rooms.filter((list) =>
        list.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(queryRoom.toLowerCase().replace(/\s+/g, ""))
      );

  const handleSelectedItem = (val) => {
    if (val.image != null && val.image != "") {
      setImage(val.image)
    } else {
      setImage(null)
    }
    setNewData({ ...newData, itemDetailId: val.id })
  }

  const handleSelectedRoom = (val) => {
    setSelectedRoom(val)
    setNewData({ ...newData, roomId: val.id })
  }

  const handleSelectedStatus = (val) => {
    setSelectedStatus(val)
    setNewData({ ...newData, status: val })
  }


  console.log(newData)
  return (
    <>
      <main className="overflow-y-auto bg-white rounded-xl relative con-Shadow text-text-color">
        <div className="text-2xl font-sp-pro-text-bold py-4 px-10">
          <h1 className="flex items-center">
            <HiDocumentText /> &nbsp; Set Asset
          </h1>
        </div>
        <hr className="border-[#E1E9EE] border-1" />

        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap xl:flex-nowrap justify-between w-full p-5 md:p-10 pb-5">
            <div className="w-full md:w-7/12 lg:w-full xl:w-7/12 mx-auto">
              <section className="">
                <div className="flex w-full gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Select Item <span className='text-reject'>*</span></label>
                    <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                      <Combobox
                        value={selectedItem}
                        onChange={handleSelectedItem}
                        className="z-20"
                      >
                        <div className="relative z-50">
                          <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                            <Combobox.Input
                              className="w-full border-[#E1E9EE] placeholder-black placeholder-opacity-20 border rounded-lg bg-[#F9FBFF] py-2  pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                              displayValue={(val) => val.name}
                              onChange={(e) => setQueryItem(e.target.value)}
                              placeholder='Select item'
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
                            afterLeave={() => setQueryItem("")}
                          >
                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {filteredItem.length == 0 && queryItem !== "" ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                  Nothing found.
                                </div>
                              ) : (
                                filteredItem.map((val, index) => (
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
                            </Combobox.Options>
                          </Transition>
                        </div>
                      </Combobox>
                    </div>
                    {formik.touched.itemDetailId && formik.errors?.itemDetailId ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.itemDetailId}</p> : null}
                  </div>
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Select Status <span className='text-reject'>*</span></label>
                    <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                      <Listbox as="div" value={selectedStatus} onChange={handleSelectedStatus}>
                        {({ open }) => (
                          <>
                            <div className="relative z-30">
                              <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                                <Listbox.Button className="pl-3 py-2 w-full text-left focus:outline-none focus:shadow-outline-blue relative border border-slate-200 bg-bg-main rounded-md text-gray-800">
                                  {selectedStatus ? <span className="block truncate text-sm text-text-color">
                                  {selectedStatus == "in_stock" ? "In Stock" : ""}
                                  </span> : <span className="block truncate text-sm text-black text-opacity-20">Select status</span>}

                                  <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                      className="h-5 w-5 text-text-color"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>
                              </div>
                              <Transition
                                show={open}
                                leave=""
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options
                                  static
                                  className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                >
                                  {status.length == 0 ? (
                                    <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                      Nothing found.
                                    </div>
                                  ) : (
                                    status.map((val, index) => (
                                      <Listbox.Option key={index} value={val.id}
                                        className={({ active }) =>
                                          `relative cursor-pointer select-none py-2 px-5 text-text-color ${active ? "bg-custom-yellow-showdow-light" : ""}`
                                        }
                                      >
                                        {val.name}
                                      </Listbox.Option>
                                    ))
                                  )}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                    {formik.touched.status && formik.errors?.status ? <p className="text-reject text-xs mt-2 pl-1">{formik.errors.status}</p> : null}
                  </div>
                </div>
                <div className="flex w-full gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Label Code</label>
                    <input
                      type='text'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newData.labelCode}
                      name="qty"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                      placeholder='Enter label code'
                    />
                  </div>
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Serial Code</label>
                    <input
                      type='text'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newData.serialCode}
                      name="unitPrice"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                      placeholder='Enter serial code'
                    />
                  </div>
                </div>
                <div className="flex w-full gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Owner</label>
                    <input
                      type='text'
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newData.owner}
                      name="owner"
                      className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none"
                      placeholder='Enter owner'
                    />
                  </div>
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Select Room</label>
                    <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                      <Combobox
                        value={selectedRoom}
                        onChange={handleSelectedRoom}
                        className="z-20"
                      >
                        <div className="relative z-20">
                          <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                            <Combobox.Input
                              className="w-full border-[#E1E9EE] placeholder-black placeholder-opacity-20 border rounded-lg bg-[#F9FBFF] py-2  pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                              displayValue={(val) => val.name}
                              onChange={(e) => setQueryRoom(e.target.value)}
                              placeholder='Select room'
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
                            afterLeave={() => setQueryRoom("")}
                          >
                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {filteredRoom.length == 0 && queryItem !== "" ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                  Nothing found.
                                </div>
                              ) : (
                                filteredRoom.map((val, index) => (
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
                            </Combobox.Options>
                          </Transition>
                        </div>
                      </Combobox>
                    </div>
                  </div>
                </div>
                <div className="flex w-full gap-x-6 gap-y-3 flex-col lg:flex-row my-3">
                  <div className='text-left w-full'>
                    <label className="block mb-2 ml-1 text-sm">Description</label>
                    <textarea name="description" value={newData.description} onInput={handleInputChange} rows="5" className="text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  w-full border rounded-lg block py-2 px-4 mb-1 outline-none" placeholder="Enter description"></textarea>
                  </div>
                </div>
              </section>
            </div>

            <div className="w-[24rem] md:w-[22rem] lg:w-[24rem] mx-auto">
              <div className="md:px-5 my-5 flex">
                <div className='w-full shadow p-5 rounded-md mb-1 relative mx-auto'>
                  <div className='py-2 block justify-center text-center rounded-lg'>
                    <div className='w-full min-h-[20rem] flex p-5 relative'>
                      {image != null ?
                        <img className="block m-auto h-56" src={FileUploadService.getImage(image)} />
                        :
                        <>
                          <div>
                            <img className="block m-auto h-56" src={placeholder} />
                            <h1 className="text-md">No Image</h1>
                          </div>
                        </>
                      }
                    </div>
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
              <FiSave className='text-lg' /> Set
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
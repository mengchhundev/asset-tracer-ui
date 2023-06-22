import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import trash from "../../../assets/images/trash.png";
import electronic from "../../../assets/icon/electronic.svg";
import addIcon from "../../../assets/icon/addIcon.svg";
import furniture from "../../../assets/images/furniture.png";
import office from "../../../assets/icon/office.svg";
import placeImg from "../../../assets/icon/placeImg.svg";
import gift from "../../../assets/images/gift.png";
import trash_ico from "../../../assets/images/trash.png";
import placeholder_square from "../../../assets/images/placeholder/placeholder_square.jpg"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { BsPlus } from "react-icons/bs";
import { Combobox, Dialog, Listbox, Transition } from "@headlessui/react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseFill } from "react-icons/ri";
import * as Yup from "yup";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileUploadService from "../../../redux/services/FileUploadService";
import AddNormalCategory from "./popUp/AddNormalCategory";
import { setNormalCategories } from "../../../redux/slices/NormalCategorySlice";
import NormalCategoryService from "../../../redux/services/NormalCategoryService";
import NormalCategoryAddComponent from "./popUp/NormalCategoryAddComponent";

const sort = [
  {
    id: "", name: "Default"
  },
  {
    id: "name", name: "Name"
  },
  {
    id: "created_at", name: "Created Date"
  },
];

export default function CategoryComponent() {

  const [selectedSort, setSelectedSort] = useState(sort[0].name)
  const [i, setI] = useState(1);
  const dispatch = useDispatch();

  const [itemName, setItemName] = useState("")
  const [selectedPage, setSelectedPage] = useState(1)
  const organization = JSON.parse(sessionStorage.getItem("organization"));
  const orgId = organization.id;

  const [isUpdate, setIsUpdate] = useState(false);
  let totalRow = useSelector(state => state.superCategory.totalRow)
  let countCurrentRow = useSelector(state => state.superCategory.countCurrentRow)
  let pageCount = useSelector(state => state.superCategory.pageCount)
  let formData = new FormData();
  const [selectedFile, setSelectedFile] = useState("")
  const [selectedImg, setSeletedImg] = useState("")

  const [updateNormal, setupdateNormal] = useState("");
  const [categoryUpdate, setCategoryUpdate] = useState({});
  const [deleteCategory, setDeleteCategory] = useState();
  const [getNormalName, setGetNormalName] = useState("");

  // get all normal category
  const normalCategories = useSelector(state => state.normalCategory.normalCategories);

  const handleGetAllNormalCategories = (page = 1, name = "", sort = "") => {
    NormalCategoryService.getAllNormalCategory(orgId, page, 8, name, sort).then((res) => {
      if (res.data.success) {
        dispatch(setNormalCategories(res.data.payload));
      }
    })
  };

  useEffect(() => {
    handleGetAllNormalCategories();
  }, []);

  const handleSelectedSort = (val) => {
    setSelectedSort(val)
  }

  const handleSelectedFile = (val) => {
    setSelectedFile(val)
    setNewData({ ...newData, icon: val })
  }

  const handlePageClick = (event) => {
    getAllSuperCategory(event.selected + 1);
    setI(event.selected * 8 + 1);
  };

  const handleNormalSuccess = () =>
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 10000,
    });

  return (
    <main className="px-4 lg:px-10 py-6 bg-white rounded-2xl relative">
      <div className="gap-6 z-10">
        <div className="xl:flex xl:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 mb-5 ">
          {/* header */}
          <div className="md:pb-0 sm:pb-2 min-w-max mb-4 xl:mb-0">
            <h2 className="text-2xl font-sp-pro-text-semibold">
              All <span className="text-pending">Normal</span> Management
            </h2>
            <p className="font-sp-pro-text-regular text-sm text-green">
              Active categories
            </p>
          </div>

          {/* search */}
          <div className="md:flex md:flex-row justify-start gap-10">
            <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
              <div className="relative text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20  bg-[#F9FBFF]  border rounded-lg block w-full py-2 px-1 mb-1 ">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  className="w-full pl-10 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  name="search"
                  placeholder="Search..."
                />
              </div>
            </div>

            {/* filter */}
            <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
              <Listbox as="div" value={selectedSort} onChange={handleSelectedSort}>
                {({ open }) => (
                  <>
                    <div className="relative z-30">
                      <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                        <Listbox.Button className="w-full border-[#E1E9EE] border rounded-lg bg-[#F9FBFF] py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary">
                          {selectedSort ? <span className={`block truncate text-sm w-full md:w-32 lg:w-full xl:w-32 text-left text-text-color ${selectedSort == "Default" ? "text-black text-opacity-20" : ""}`}><span className="text-black text-opacity-20">Sort by: </span>{selectedSort == "Default" ? "" : selectedSort}</span> : <span className="block w-full md:w-32 lg:w-full xl:w-32 text-left truncate text-sm text-black text-opacity-20">Sort by</span>}

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
                          {sort.length == 0 ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                              Nothing found.
                            </div>
                          ) : (
                            sort.map((val, index) => (
                              <Listbox.Option key={index} value={val.id}
                                className={({ active }) =>
                                  `relative cursor-pointer select-none py-2 px-5 text-text-color ${active ? "bg-custom-yellow-showdow-light" : ""}`
                                }
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"} ${index == 0 ? "text-black text-opacity-20" : ""}`}
                                    >
                                      {val.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={`${active ? "text-primary" : "text-primary"
                                          } absolute inset-y-0 left-0 flex items-center pl-2`}
                                      >
                                      </span>
                                    ) : null}
                                  </>
                                )}
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

            {/* add modal */}
            <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
              <label
                htmlFor="add-normal-category"
                className="border border-opacity-70 w-max mr-auto md:min-w-max cursor-pointer border-yellow text-yellow hover:bg-primary hover:bg-opacity-10 p-[5px] pr-3 rounded-lg font-sp-pro-text-medium text-sm flex items-center uppercase"
              >
                <BsPlus className="w-6 h-6" />
                &nbsp;Add Normal Category
              </label>
            </div>
          </div>
        </div>

        <NormalCategoryAddComponent className="modal" />

        <div className="flex flex-col min-h-[calc(100vh-19rem)]">
          {/* table */}
          <div className="px-5 z-0 flex-grow overflow-x-scroll">
            <table className="table w-full">
              <tbody className="">
                <tr className="text-sm font-sp-pro-text-semibold text-opacity-90 divide-none sticky top-0 z-50">
                  <td className="w-1/12 bg-bg-main py-3 text-center">No</td>
                  <td className="w-3/12 bg-bg-main py-3">
                    Normal Category Name
                  </td>
                  <td className="w-2/12 bg-bg-main py-3">
                    Super Category Name
                  </td>
                  <td className="w-2/12 bg-bg-main py-3 text-center">
                    Created Date
                  </td>
                  <td className="w-2/12 bg-bg-main py-3 text-center">Action</td>
                </tr>
                {normalCategories.length != 0 ? normalCategories.map((item, index) => (
                  <tr
                    key={index}
                    className="text-sm font-sp-pro-text-regular text-center"
                  >
                    <td className="py-3 text-center ">{index + 1}</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="relative  mr-3 w-9 h-9 ">
                          <img
                            className="h-9 rounded-full w-9"
                            src={placeholder_square}
                            loading="lazy"
                          />
                        </div>
                        <div>{item.name}</div>
                      </div>
                    </td>
                    <td className="w-2/12 py-3">
                      <div className="flex items-center m-auto space-x-3">
                        <div>
                          <img
                            className="rounded-full w-9"
                            src={placeholder_square}
                            loading="lazy"
                          />
                        </div>
                        <span className="text-sm">
                          {item.superCategoryName}
                        </span>
                      </div>
                    </td>
                    <td className="py-3">
                      {moment(item.createdAt).format("MMM DD YYYY")}
                    </td>
                    <td className="py-3">
                      <div className="flex items-center space-x-4 justify-center">
                        {/* edit */}
                        <label
                          htmlFor="modalEdit"
                          onClick={() =>
                            handleUpdateNormalCategory(item)
                          }
                          className="flex items-center border border-accept text-accept w-[90px] justify-center px-5 py-1 hover:bg-green hover:bg-opacity-10 cursor-pointer leading-5 rounded-md"
                          aria-label="Edit"
                        >
                          Edit
                        </label>
                        {/* delete */}
                        <label
                          htmlFor="modalDelete"
                          onClick={() => handleDeletNormalCategory(item)}
                          className="flex items-center border border-reject text-reject w-[90px] justify-center px-5 hover:bg-reject py-1 hover:bg-opacity-10 cursor-pointer  leading-5 rounded-md"
                          aria-label="Delete"
                        >
                          Delete
                        </label>
                      </div>
                    </td>
                  </tr>
                )) : null}
              </tbody>
            </table>
          </div>

          {/* pagination */}
          <div className="w-full flex justify-between items-center text-sm  font-sp-pro-text-medium text-gray-500 flex-grow-0 px-7 mt-3 h-10">
            <div className="font-sp-pro-text-regular opacity-90">
              Showing data 1 to {countCurrentRow} of {totalRow} entries
            </div>
            <div id="react-paginate">
              <ReactPaginate
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< "
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        </div>

        {/* Edit and update Popup */}
        {/* <input type="checkbox" id="modalEdit" className="modal-toggle" />
        <div className="modal">
          <div className=" modal-box relative rounded-lg">
            <div className="absolute top-7 right-7">
              <label htmlFor="modalEdit">
                <RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
              </label>
            </div>
            <div className=" flex justify-between">
              <div className="flex">
                <img src={gift} className="h-12 rounded-lg w-12 " />
                <p className="mt-2 flexF items-center font-sp-pro-text-medium text-xl pl-6  text-text-color">
                  Update Normal Category
                </p>
              </div>
            </div>

            <div className=" border border-bg-primary rounded-md p-3 my-3">
              <div className="flex flex-row gap-4">
                <div className="flex flex- justify-between">
                  <div className="p-2">
                    <label>
                      {selectedFile ? (
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          className="h-14 rounded-full w-14 "
                        />
                      ) : (
                        <img className="h-14 rounded-lg w-14" src={placeImg} />
                      )}
                    </label>
                  </div>
                  <div className="p-2 mt-4">
                    <label>
                      <img src={electronic} className="h-9 rounded-lg w-9 " />
                    </label>
                  </div>
                  <div className="p-2 mt-4">
                    <label>
                      <img src={office} className="h-9 rounded-lg w-9 " />
                    </label>
                  </div>

                  <div className="p-2 mt-4">
                    <label>
                      <img src={furniture} className="h-9 rounded-lg w-9 " />
                    </label>
                  </div>

                  <div className="p-2 mt-4">
                    <label>
                      <input
                        type="file"
                        className="hidden"
                        id="logo"
                        onChange={handleFileSelect}
                      />
                      <img src={addIcon} className="h-9 rounded-lg w-9 " />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="EditSuperCategory"
                className="flex text-sm text-text-color font-sp-pro-text-regular py-2"
              >
                Name
              </label>
              <input
                value={updateNormal.name}
                name="name"
                onInput={handleUpdateCategory}
                className=" w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                type="text"
                placeholder={categoryUpdate.name}
              />
            </div>

            <div className="flex justify-end flex-row space-x-4 mt-10">
              <div className="">
                <label
                  htmlFor="modalEdit"
                  className="rounded-md bg-bg-primary py-2 cursor-pointer px-5 text-sm font-sp-pro-text-medium text-text-color w-full flex items-center"
                >
                  <RiCloseFill className="cursor-pointer h-5 w-5 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
                  &nbsp; Cancel
                </label>
              </div>

              <div className="">
                <label
                  htmlFor="modalEdit"
                  onClick={() => handleSubmit()}
                  className="hover:bg-green hover:bg-opacity-90 rounded-md cursor-pointer bg-green py-2 px-5 text-sm font-sp-pro-text-medium text-white hover:opacity-90 w-full flex items-center"
                >
                  <FiSave className="text-lg" /> &nbsp; Update Change
                </label>
              </div>
            </div>
          </div>
        </div> */}

        {/* delete */}
        <input type="checkbox" id="modalDelete" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <div className="absolute right-4 top-3 hover:bg-bg-primary w-8 h-8 flex justify-center rounded-full items-center cursor-pointer">
              <label htmlFor="modalDelete">
                <RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
              </label>
            </div>
            <div className="flex justify-start">
              <div>
                <img
                  src={trash_ico}
                  width={55}
                  height={55}
                  className="inline-block"
                />
              </div>
              <div className="pl-3 leading-none">
                <h3 className="font-sp-pro-text-bold text-xl">Delete</h3>
                <p className="pt-1 py-5">
                  Are you sure want to delete{" "}
                  <span className="font-sp-pro-text-medium text-base">
                    {" "}
                    {getNormalName}{" "}
                  </span>
                  this normal category?
                </p>
              </div>
            </div>
            <br />
            <div className="flex justify-end space-x-4">
              <label
                htmlFor="modalDelete"
                className="rounded-md bg-bg-primary py-2 cursor-pointer px-5 text-sm font-sp-pro-text-medium text-text-color text-opacity-90 border border-[#D0D5DD] flex justify-center items-center gap-1"
              >
                Cancel
              </label>
              <label
                htmlFor="modalDelete"
                // onClick={}
                type="button"
                className="bg-opacity-10 rounded-md cursor-pointer bg-reject border border-reject py-2 px-5 text-sm font-sp-pro-text-medium text-reject flex justify-center items-center gap-1"
              >
                Delete
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

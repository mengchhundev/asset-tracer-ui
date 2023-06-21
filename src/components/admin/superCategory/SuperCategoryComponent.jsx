import React from "react";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import ReactPaginate from "react-paginate";
import "../../../style/pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Combobox, Transition } from "@headlessui/react";
import SuperCategoryService from "../../../redux/services/SuperCategoryService";
import { setAllSuperCategory } from "../../../redux/slices/SuperCategorySlice";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { BsPlus } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import addIcon from "../../../assets/icon/addIcon.svg";
import gift from "../../../assets/icon/gift.svg";
import electronic from "../../../assets/icon/electronic.svg";
import furniture from "../../../assets/icon/furniture.svg";
import office from "../../../assets/icon/office.svg";
import placeImg from "../../../assets/icon/placeImg.svg";
import { FiSave, FiTrash2 } from "react-icons/fi";
import trash_ico from "../../../assets/images/trash.png";
import moment from "moment";
import FileUploadService from "../../../redux/services/FileUploadService";
import { list } from "postcss";
import placeholder_square from "../../../assets/images/placeholder/placeholder_square.jpg"
const people = [
  { id: 1, name: "Room" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];
const serverLocation = "http://localhost:8080/api/v1/files/getFile?fileName=";

export default function SuperCategoryComponent() {
  const [selected, setSelected] = useState(people[0]);
  const [i, setI] = useState(1);
  const dispatch = useDispatch();
  const getAllSuperCategores = useSelector((state) => state.superCategory.data);
  const [pageCount, setPageCount] = useState(2);
  const organization = JSON.parse(sessionStorage.getItem("organization"));
  const organizationId = organization.id;
  const [isUpdate, setIsUpdate] = useState(false);
  let formData = new FormData();
  const [selectedFile, setSelectedFile] = useState("");
  const [newData, setData] = useState({
    id: "",
    name: "",
    icon: "",
    organizationId: organizationId,
  });

  // select file
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    formData.append("file", event.target.files[0]);

    FileUploadService.storeFile(formData, localStorage.getItem("token"))
      .then((res) => {
        setData({ ...newData, icon: res.data.payload });
      })
  };

  // function get all super category
  const handleGetAllSuperCategory = (page = 1, name = "", sort = "") => {
    SuperCategoryService.getSuperCategories(organizationId, page, 8, name, sort).then((res) => {
      if (res.data.success) {
        dispatch(setAllSuperCategory(res.data.payload));
      }
    });
  };

  // function delete SuperCategory
  const handlDeleteSuperCategory = () => {
    SuperCategoryService.deleteSuperCategory(newData.id).then((res) => {
      if (res.data.success) {
        handleGetAllSuperCategory();
      }
    });
  };

  // function ADD super category
  const handleSaveSuperCategory = () => {
    SuperCategoryService.saveSuperCategory(newData).then((res) => {
      if (res.data.success) {
        document.getElementById("btn-super-category").click();
        handleGetAllSuperCategory();
      }
    });
  };
  const handleUpdateSuperCategory = () => {
    SuperCategoryService.updateSuperCategory(newData.id, newData).then(
      (res) => {
        if (res.data.success) {
          document.getElementById("btn-super-category").click();
          handleGetAllSuperCategory();
        }
      }
    );
  };

  useEffect(() => {
    handleGetAllSuperCategory();
  }, []);

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      organizationId,
    }));
  }, []);

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
        person.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  const formik = useFormik({
    initialValues: newData,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
    }),
    onSubmit: (val, { resetForm }) => {
      isUpdate ? handleUpdateSuperCategory() : handleSaveSuperCategory();
      resetForm((val = { id: "", name: "", organizationId: "" }));
      setData({ id: "", name: "", organizationId: "" });
      formik.setValues({ id: "", name: "", organizationId: "" });
    },
  });

  useEffect(() => {
    if (!isUpdate) {
      formik.setValues({ id: "", name: "", organizationId: "" });
    }
  }, [isUpdate]);

  const handleShowSuperCategory = (val) => {
    setIsUpdate(true);
    setData({ ...val, organizationId: organizationId });
    formik.setValues(val);
  };

  const handleHideModal = () => {
    setTimeout(() => {
      setIsUpdate(false);
    }, 100);
    setData({
      id: "",
      name: "",
      icon: "",
      organizationId: organizationId,
    });
    formik.setValues({ id: "", name: "", organizationId: "" });
  };

  return (
    <main className="overflow-y-auto px-10 py-6 bg-white rounded-xl relative lg:px-10 con-Shadow min-h-[calc(100vh-9rem)]">
      <div className="gap-6 overflow-hidden z-10">
        <div className="lg:flex lg:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 mb-5 text">
          {/* header */}
          <div className="md:pb-0 sm:pb-2 min-w-max mb-4 xl:mb-0 text-text-colors">
            <h2 className="text-2xl font-sp-pro-text-semibold text-text-color">
              All <span className="text-pending">Super</span> Management
            </h2>
            <p className="font-sp-pro-text-regular text-sm text-green">
              Active categories
            </p>
          </div>

          {/* search */}
          <div className="md:flex md:flex-row justify-start gap-10">
            <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
              <div className="relative text-sm border-[#E1E9EE] placeholder-black placeholder-opacity-20   bg-[#F9FBFF]  border rounded-lg block w-full py-2 px-1 mb-1  focus:border-primary">
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
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
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

            {/* add */}
            <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
              <label
                htmlFor="superCategory"
                className="border border-opacity-70 w-max mr-auto md:min-w-max cursor-pointer border-yellow text-yellow hover:bg-primary hover:bg-opacity-10 p-[5px] pr-3 rounded-lg font-sp-pro-text-medium text-sm flex items-center uppercase"
              >
                <BsPlus className="w-6 h-6" />
                &nbsp;Add Super Category
              </label>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="flex flex-col min-h-[calc(100vh-19rem)] overflow-x-auto  flex-grow">
          <div className="px-5 z-0 flex-grow">
            <table className="table w-full">
              <tbody className="">
                <tr className="text-sm font-sp-pro-text-semibold text-opacity-90 divide-none sticky top-0 z-50">
                  <td className="w-1/5 bg-bg-main">No</td>
                  <td className="w-2/5 bg-bg-main">Super Category Name</td>
                  <td className="w-2/5 bg-bg-main">Created Date</td>
                  <td className="w-1/5 bg-bg-main text-center">Action</td>
                </tr>
                {getAllSuperCategores.map((list, index) => (
                  <tr key={index} className="text-sm font-sp-pro-text-regular">
                    <td className="w-1/5 ">{index + i}</td>

                    <td className="w-2/5 ">
                      <div className="flex items-center space-x-5">
                        <img
                          className="h-9 rounded-full w-9"
                          src={list.icon ?`${serverLocation}${list.icon}`:placeholder_square}
                        ></img>
                        <span className="text-sm ">{list.name}</span>
                      </div>
                    </td>
                    <td className="w-2/5 py-3 text-sm font-sp-pro-text-regular p-2.5">
                      <div className="flex items-center space-x-5">
                        <span className="text-sm ">
                          {moment(list.createAt).format("MMM DD YYYY")}
                        </span>
                      </div>
                    </td>
                    <td className="w-1/5 py-3">
                      <div className="flex items-center space-x-4 justify-center">
                        {/* Edit */}
                        <label
                          onClick={() => handleShowSuperCategory(list)}
                          htmlFor="superCategory"
                          className="flex items-center border border-accept text-accept w-[90px] justify-center px-5 py-1 hover:bg-green hover:bg-opacity-10 cursor-pointer leading-5 rounded-md"
                          aria-label="Edit"
                        >
                          Edit
                        </label>
                        {/* Delete */}
                        <label
                          onClick={() => handleShowSuperCategory(list)}
                          htmlFor="modalDelete"
                          className="flex items-center border border-reject text-reject w-[90px] justify-center px-5 hover:bg-reject py-1 hover:bg-opacity-10 cursor-pointer  leading-5 rounded-md"
                          aria-label="Delete"
                        >
                          Delete
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* pagination */}
          <div className="w-full flex justify-between items-center text-sm  font-sp-pro-text-medium text-gray-500 flex-grow-0 px-7">
            <div className="font-sp-pro-text-regular opacity-90">
              Showing data 1 to 8 of 256K entries
            </div>
            <div id="react-paginate" className="">
              <ReactPaginate
                nextLabel=" >"
                // onPageChange={handlePageClick}
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

        {/* Modal Add normal category */}
        <input type="checkbox" id="superCategory" className="modal-toggle" />
        <div className=" modal">
          <div className=" modal-box relative rounded-lg">
            <div className="absolute top-7 right-7">
              <label
                htmlFor="superCategory"
                id="btn-super-category"
                onClick={handleHideModal}
              >
                <RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
              </label>
            </div>
            <div className=" flex justify-between">
              <div className="flex">
                <img src={gift} className="h-12 rounded-lg w-12 " />
                <p className="mt-2 flexF items-center font-sp-pro-text-regular text-xl pl-6  text-text-color">
                  Create Super Category
                </p>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className=" border border-bg-primary rounded-md p-3 my-3">
                <div className="flex flex-row gap-4">
                  <div>
                    <p className="text-center">Choose Icon</p>
                    <div className="flex flex- justify-between">
                      <div className="p-2">
                        <label>
                          {selectedFile ? (
                            <img
                              src={URL.createObjectURL(selectedFile)}
                              className="h-14 rounded-full w-14 "
                            />
                          ) : (
                            <img
                              className="h-14 rounded-lg w-14"
                              src={placeImg}
                            />
                          )}
                        </label>
                      </div>
                      <div className="p-2 mt-4">
                        <label>
                          <img
                            src={electronic}
                            className="h-9 rounded-lg w-9 "
                          />
                        </label>
                      </div>
                      <div className="p-2 mt-4">
                        <label>
                          <img src={office} className="h-9 rounded-lg w-9 " />
                        </label>
                      </div>

                      <div className="p-2 mt-4">
                        <label>
                          <img
                            src={furniture}
                            className="h-9 rounded-lg w-9 "
                          />
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
              </div>

              <label
                htmlFor=""
                className="flex text-sm text-text-color font-sp-pro-text-regular py-2"
              >
                Name
              </label>
              <input
                value={newData.name}
                onInput={handleInputChange}
                onChange={formik.handleChange}
                name="name"
                className=" w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                type="text"
                placeholder="super category"
              />
              {formik.touched.name && formik.errors?.name ? (
                <p className="text-reject text-xs mt-2 pl-1">
                  {formik.errors.name}
                </p>
              ) : null}
              <div className="flex justify-end flex-row space-x-4 mt-10">
                <div className="">
                  <label
                    htmlFor="superCategory"
                    onClick={handleHideModal}
                    className="rounded-md bg-bg-primary py-2 cursor-pointer px-5 text-sm font-sp-pro-text-medium text-text-color w-full flex items-center"
                  >
                    <RiCloseFill className="cursor-pointer h-5 w-5 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
                    &nbsp;Cancel
                  </label>
                </div>

                <div className="">
                  <button
                    type="submit"
                    className={`${isUpdate
                      ? "hover:bg-green bg-green"
                      : "hover:bg-primary bg-primary"
                      }  hover:bg-opacity-90 rounded-md cursor-pointer py-2 px-5 text-sm font-sp-pro-text-medium text-white hover:opacity-90 w-full flex items-center`}
                  >
                    <FiSave className="text-lg" /> &nbsp;{" "}
                    {isUpdate ? "Save change" : "Add"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* medal Delete */}
        <input type="checkbox" id="modalDelete" className="modal-toggle" />
        {/* <div className="modal">
          <div className="modal-box relative">
            <div className="flex justify-start">
              <div className="pl-2">
                <span className="flex justify-start text-[14px] font-sp-pro-text-semibold items-center gap-2 ">
                  <FiTrash2 /> Delete
                </span>
                <p className="pt-1 ">Are you sure want to delete this post?</p>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <div className="modal-action">
                <label
                  htmlFor="modalDelete"
                  className="bg-[#F4F4F4] font-light text-text-color hover:bg-[#F4F4F4] border-2 border-[#D0D5DD] btn"
                >
                  Cancel
                </label>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="modalDelete"
                  onClick={handlDeleteSuperCategory}
                  className="bg-[#FFC5C5] font-light text-reject border-2 border-reject hover:bg-[#FFC5C5] btn"
                >
                  Delete
                </label>
              </div>
            </div>
          </div>
        </div> */}
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
                  Are you sure want to delete{"  "}
                  <span className="font-sp-pro-text-medium text-base">
                    {"  "}
                    {newData.name}{"  "}
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
                onClick={handlDeleteSuperCategory}
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

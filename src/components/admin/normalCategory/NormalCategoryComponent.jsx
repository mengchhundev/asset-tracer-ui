import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import trash from "../../../assets/images/trash.png";
import electronic from "../../../assets/icon/electronic.svg";
import addIcon from "../../../assets/icon/addIcon.svg";
import furniture from "../../../assets/images/furniture.png";
import office from "../../../assets/icon/office.svg";
import gift from "../../../assets/images/gift.png";
import trash_ico from "../../../assets/images/trash.png";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { BsPlus } from "react-icons/bs";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import NormalCategoryService, {
  updateNormalCategory,
} from "../../../redux/services/NormalCategoryService";
import AddNormalCategory from "./popUp/AddNormalCategory";
import { RiCloseFill } from "react-icons/ri";
import { FiSave } from "react-icons/fi";
import {
  setAllCategory,
  setDeletNormalCategory,
  setUpdateNormalCategory,
} from "../../../redux/slices/NormalCategorySlice";
import * as Yup from "yup";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const people = [
  { id: 1, name: "Sort By", unavailable: false },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
];

export default function CategoryComponent() {
  const [selected, setSelected] = useState(people[0]);
  const [state, setState] = useState([]);
  const [query, setQuery] = useState("");
  const [pageCount, setPageCount] = useState(2);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [updateNormal, setupdateNormal] = useState("");
  const [categoryUpdate, setCategoryUpdate] = useState({});
  const [deleteCategory, setDeleteCategory] = useState();
  const [getNormalName, setGetNormalName] = useState("");
  // console.log("Get name : ", getNormalName);

  // organization id
  const organization = sessionStorage.getItem("organization");
  const getOrganizationDetail = JSON.parse(organization);
  const orgId = getOrganizationDetail.id;

  // get all normal category
  const data = useSelector((state) => state.normalCategory.data);
  const dispatch = useDispatch();

  const getAllNormalCategory = () => {
    NormalCategoryService.getAllNormalCategory(orgId)
      .then((res) => {
        dispatch(setAllCategory(res.data.payload));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllNormalCategory();
  });

  // update normal category
  const handleUpdateNormalCategory = (item) => {
    setCategoryUpdate(item);
  };

  const handleUpdateCategory = (e) => {
    setupdateNormal({ ...updateNormal, [e.target.name]: e.target.value });
  };
  // update
  const handleSubmit = () => {
    const updateCategory = {
      ...updateNormal,
      organizationId: orgId,
      icon: "string",
      superCategoryId: "2604b0c0-7070-492d-8d45-0fc42b2abe37",
    };
    console.log("Final value", updateCategory);
    updateNormalCategory(categoryUpdate.id, updateCategory).then((r) =>
      dispatch(setUpdateNormalCategory(r.data.payload))
    );

    handleNormalSuccess();
  };

  // delete
  const handleDeletNormalCategory = (item) => {
    setDeleteCategory(item);
    console.log(item.name);
    setGetNormalName(item.name);
  };

  const handleClickDelete = () => {
    NormalCategoryService.deleteNormalCategory(deleteCategory, orgId)
      .then((res) => {
        dispatch(setDeletNormalCategory(item.id));
      })
      .finally(() => alert("deleted successfully"));
  };

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    getAllSuperCategory(event.selected + 1);
    setI(event.selected * 10 + 1);
  };

  useEffect(() => {
    getMethod();
  }, []);

  const getMethod = () => {
    axios
      .get("http://localhost:8080/api/v1/normal-categories?page=1&size=4")
      .then((data) => {
        console.log(data.data.payload);
        console.log("state", state);
        setState(data.data.payload[0]);
      });
  };
  // const showToastMessage = () => {
  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //     autoClose: 3000,
  //   });
  // };

  const handleNormalSuccess = () =>
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 10000,
    });

  return (
    <main className="px-4 lg:px-10 py-6 bg-white rounded-2xl relative">
      <div>
        <button onClick={handleNormalSuccess}>Notify!</button>
        <ToastContainer />
      </div>
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
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-hover-yellow text-text-color"
                                  : "text-text-color"
                              }`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-text-color"
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
                htmlFor="addnormalCategory"
                className="border border-opacity-70 w-max mr-auto md:min-w-max cursor-pointer border-yellow text-yellow hover:bg-primary hover:bg-opacity-10 p-[5px] pr-3 rounded-lg font-sp-pro-text-medium text-sm flex items-center uppercase"
              >
                <BsPlus className="w-6 h-6" />
                &nbsp;Add Normal Category
              </label>
            </div>
          </div>
        </div>

        {/* add modal */}
        <input
          type="checkbox"
          id="addnormalCategory"
          className="modal-toggle"
        />
        <AddNormalCategory className="modal" />

        <div className="flex flex-col justify-between relative overflow-x-auto">
          {/* table */}
          <div className="px-5 flex-grow">
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
                {data.map((item, index) => (
                  <tr className="text-sm font-sp-pro-text-regular text-center">
                    <td className="w-1/12 py-3 text-center ">{index + 1}</td>
                    <td className="w-3/12 py-3">
                      <div className="flex items-center">
                        <div className="relative  mr-3 w-8 h-8 ">
                          <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            className="rounded-full h-full w-full"
                          />
                        </div>
                        <div>{item.name}</div>
                      </div>
                    </td>
                    <td className="w-2/12 py-3">
                      <div className="flex items-center m-auto space-x-3">
                        <span className="w-8 h-8 overflow-hidden rounded-full bg-red-100 flex items-center justify-center font-sp-pro-text-regular text-red-500 text-sm">
                          {item.profile}
                        </span>
                        <span className="text-sm ">
                          {item.superCategoryName}
                        </span>
                      </div>
                    </td>
                    <td className="w-2/12 py-3 text-sm font-sp-pro-text-medium  p-2.5">
                      {moment(item.createdAt).format("MMM DD YYYY")}
                    </td>
                    <td className="w-2/12 py-3">
                      <div className="flex items-center space-x-4 justify-center">
                        {/* edit */}
                        <label
                          htmlFor="modalEdit"
                          onClick={() => handleUpdateNormalCategory(item)}
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
                ))}
              </tbody>
            </table>
          </div>

          {/* pagination */}
          <div className="w-full flex justify-between items-center text-sm py-2 font-sp-pro-text-medium text-gray-500 flex-grow-0 px-7">
            <div className="font-sp-pro-text-regular opacity-90">
              Showing data 1 to 8 of 256K entries
            </div>
            <div id="react-paginate" className="">
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
        <input type="checkbox" id="modalEdit" className="modal-toggle" />
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

            {/* Choose Icon */}
            <div className=" border border-bg-primary rounded-md p-3 my-3">
              <div className="flex flex-row gap-4">
                <div>
                  <p className="text-center">Choose Icon</p>
                  <div className="flex flex- justify-between">
                    <div className="p-2">
                      <img src={electronic} className="h-14 rounded-lg w-14 " />
                    </div>
                    <div className="p-2 mt-4">
                      <img src={electronic} className="h-9 rounded-lg w-9 " />
                    </div>
                    <div className="p-2 mt-4">
                      <img src={office} className="h-9 rounded-lg w-9 " />
                    </div>
                    <div className="p-2 mt-4">
                      <img src={furniture} className="h-9 rounded-lg w-9 " />
                    </div>

                    <div className="p-2 mt-4">
                      <img src={addIcon} className="h-9 rounded-lg w-9 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* input field */}
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

            {/* Action */}
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
        </div>

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
                onClick={handleClickDelete}
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

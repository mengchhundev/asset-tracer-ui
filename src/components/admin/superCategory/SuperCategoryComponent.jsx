import React from "react";

import { useEffect, useState } from "react";
import { Fragment } from "react";
import ReactPaginate from "react-paginate";
import "../../../style/pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import SuperCategoryService from "../../../redux/services/SuperCategoryService";
// import { Dialog, Transition } from "@headlessui/react";
import { setAllSuperCategory } from "../../../redux/slices/SuperCategorySlice";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { BsPlus } from "react-icons/bs";

const people = [
  { id: 1, name: "Room" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

export default function SuperCategoryComponent() {

  const [user, setUser] = useState([
    {
      id: 1,
      profile: "SE",
      name: "Senglorn",
      date: "09 June 2023",

      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF38z4yXEJCseD5dYN08fHuNTgDeFlxZkohQ&usqp=CAU",
    },
    {
      id: 2,
      profile: "HO",
      name: "Hong Meng",
      date: "09 June 2023",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF38z4yXEJCseD5dYN08fHuNTgDeFlxZkohQ&usqp=CAU",
    },
    {
      id: 3,
      profile: "ME",
      name: "Keo Mony",
      date: "09 June 2023",

      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 4,
      profile: "ME",
      name: "Keo Mony",
      date: "09 June 2023",

      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 5,
      profile: "ME",
      name: "Keo Mony",
      date: "09 June 2023",

      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    }
  ]);

  const [selected, setSelected] = useState(people[0]);
  const [i, setI] = useState(1);
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.superCategory.data);
  const [pageCount, setPageCount] = useState(2);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [isShowError, setIsShowError] = useState(false);
  const [superCategoryId, setSuperCategoryId] = useState("");
  const organization = JSON.parse(sessionStorage.getItem("organization"));

  const [newData, setNewData] = useState({
    id: "",
    name: "",
  });

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

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    getAllSuperCategory(event.selected + 1);
    setI(event.selected * 10 + 1);
  };

  // Modal
  function closeModalCreateSuperCategory() {
    setIsOpenModalCreate(false);
    setNewData({ id: "", name: "" });
  }

  function openModalCreateSuperCategory() {
    setIsOpenModalCreate(true);
  }

  function closeModalDeleteSuperCategory() {
    setIsOpenModalDelete(false);
  }

  function openModalDeleteSuperCategory(id) {
    setSuperCategoryId(id);
    setIsOpenModalDelete(true);
  }

  const getAllSuperCategory = (page = 1, size = 10, name) => {
    SuperCategoryService.getAllSuperCategory(page, size, name).then(
      (res) => {
        if (res?.data?.success) {
          dispatch(setAllSuperCategory(res.data.payload));
        }
      },
      (err) => {
        if (err.response.data.status == 400) {
          dispatch(setAllSuperCategory([]));
        }
      }
    );
  };

  useEffect(() => {
    getAllSuperCategory(1);
  }, []);

  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleSaveSuperCategory = () => {
    SuperCategoryService.saveSuperCategory(newData).then((res) => {
      if (res?.data?.success) {
        getAllSuperCategory(1);
      }
    });
  };

  const formik = useFormik({
    initialValues: newData,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
    }),
    onSubmit: (val, { resetForm }) => {
      isUpdate ? handleUpdateSuperCategory() : handleSaveSuperCategory();
      setIsUpdate(false);
      setIsOpenModalCreate(false);
      resetForm((val = { id: "", name: "" }));
      setNewData({ id: "", name: "" });
    },
  });

  const handleSearchSuperCategory = (e) => {
    getAllSuperCategory(1, 10, e.target.value);
  };

  const handleDeleteSuperCategory = () => {
    SuperCategoryService.deleteSuperCategory(superCategoryId).then((res) => {
      if (res?.data?.success) {
        getAllSuperCategory(1);
        closeModalDeleteSuperCategory();
      }
    });
  };

  const handleShowSuperCategory = (val) => {
    setIsUpdate(true);
    openModalCreateSuperCategory(true);
    setNewData(val);
    setSuperCategoryId(val.id);
    formik.setValues(val);
  };

  const handleUpdateSuperCategory = () => {
    SuperCategoryService.updateSuperCategory(superCategoryId, newData).then(
      (res) => {
        if (res?.data?.success) {
          getAllSuperCategory(1);
        }
      }
    );
  };

  return (
    <main className="px-4 lg:px-10 py-6 bg-white rounded-2xl relative overflow-hidden h-[83vh]">
      <div className="gap-6 z-10">
        <div className="xl:flex xl:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 mb-5 text">

          {/* header */}
          <div className="md:pb-0 sm:pb-2 min-w-max mb-4 xl:mb-0">
            <h2 className="text-2xl font-sp-pro-text-semibold">
              All <span className="text-pending">Super</span> Management
            </h2>
            <p className="font-sp-pro-text-regular text-sm text-green">
              Active categories
            </p>
          </div>

          {/* search */}
          <div className="md:flex md:flex-row justify-start gap-10">
            <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
              <div className="relative text-sm border-[#E1E9EE]  bg-[#F9FBFF]  border rounded-lg block w-full py-2 px-1 mb-1  focus:border-primary">
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
                htmlFor="normalCategory"
                className="border border-opacity-70 w-max mr-auto md:min-w-max cursor-pointer border-yellow text-yellow hover:bg-primary hover:bg-opacity-10 p-[5px] pr-3 rounded-lg font-sp-pro-text-medium text-sm flex items-center uppercase"
              >
                <BsPlus className="w-6 h-6" />&nbsp;Add Super Category
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-[64vh] relative">
          {/* table */}

          <div
            className="overflow-scroll px-5 flex-grow"
          // style={
          //   {
          //     minHeight: "calc(100vh - 40rem)",
          //   }
          // }
          >
            <table className="table w-full">
              <tbody className="">
                <tr className="text-sm font-sp-pro-text-semibold text-opacity-90 divide-none sticky top-0 z-50">
                  <td className="w-2/12 bg-bg-main py-3 text-left pl-10">No</td>
                  <td className="w-2/12 bg-bg-main py-3">
                    Super Category Name
                  </td>
                  <td className="w-2/12 bg-bg-main py-3 text-center">
                    Created Date
                  </td>
                  <td className="w-2/12 bg-bg-main py-3 text-center">
                    Action
                  </td>
                </tr>
                {user.map((users) => (
                  <tr className="text-sm font-sp-pro-text-regular text-center">
                    <td className="w-2/12 py-3 text-left pl-10">
                      {users.id}
                    </td>

                    <td className="w-2/12 py-3">
                      <div className="flex items-center m-auto space-x-3">
                        <span className="w-8 h-8 overflow-hidden rounded-full bg-red-100 flex items-center justify-center font-sp-pro-text-regular text-red-500 text-sm">
                          {users.profile}
                        </span>
                        <span className="text-sm ">
                          {users.name}
                        </span>
                      </div>
                    </td>
                    <td className="w-2/12 py-3 text-sm font-sp-pro-text-medium  p-2.5">
                      {users.date}
                    </td>
                    <td className="w-2/12 py-3">
                      <div className="flex items-center space-x-4 justify-center">
                        {/* Edit */}
                        <label
                          htmlFor="modalEdit"
                          className="flex items-center border border-accept text-accept w-[90px] justify-center px-5 py-1 hover:bg-green hover:bg-opacity-10 cursor-pointer leading-5 rounded-md"
                          aria-label="Edit"
                        >
                          Edit
                        </label>
                        {/* Delete */}
                        <label
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
            <div className="font-sp-pro-text-regular opacity-90">Showing data 1 to 8 of 256K entries</div>
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

        {/* Modal Add normal category */}
        <input type="checkbox" id="normalCategory" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="normalCategory"
              className="font-semibold text-xl absolute right-8 top-8"
            >
              ✕
            </label>
            <div className="flex justify-start items-center pb-8">
              {/* <img src={gift} width={50} /> */}
              <h3 className="text-lg font-bold  pl-5">
                Create Normal Category
              </h3>
            </div>
            <div className="border py-5 px-5 flex justify-start items-center">
              {/* <img src={furniture} width={70} /> */}
              <div className="flex pl-5 flex-col justify-start">
                <p className="pb-3">Choose Icon</p>
                <div className="flex space-x-5">
                  {/* <button>
                    <img src={pc} width={50} />
                  </button>
                  <button>
                    <img src={furniture} width={50} />
                  </button>
                  <button>
                    <img src={book} width={50} />
                  </button>
                  <button>
                    <img src={cross} width={50} />
                  </button> */}
                </div>
              </div>
            </div>
            <select className="select select-bordered w-full ">
              <option disabled selected>
                Super Category
              </option>
              <option>Normal Apple</option>
              <option>Normal Orange</option>
              <option>Normal Tomato</option>
            </select>
            <div className="mb-6">
              <label className="block mb-2 text-lg mt-4 font-medium  float-left">
                Name
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-gray-50 border text-sm rounded-lg  block w-full p-2.5"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <div className="modal-action">
                <label
                  htmlFor="normalCategory"
                  className="bg-[#F4F4F4]  font-light hover:bg-[#F4F4F4] border-2 border-[#D0D5DD] btn"
                >
                  Cancel
                </label>
              </div>
              <div className="modal-action">
                <label className="bg-pending text-[#F4F4F4] font-light border-2 border-pending hover:bg-pending btn">
                  Save
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Popup */}
        <input type="checkbox" id="modalEdit" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="modalEdit"
              className="font-semibold text-xl absolute right-8 top-8"
            >
              ✕
            </label>
            <div className="flex justify-start items-center pb-8">
              {/* <img src={gift} width={50} /> */}
              <h3 className="text-lg font-bold  pl-5">
                Update Normal Category
              </h3>
            </div>
            <div className="border py-5 px-5 flex justify-start items-center">
              {/* <img src={furniture} width={70} /> */}
              <div className="flex pl-5 flex-col justify-start">
                <p className="pb-3">Choose Icon</p>
                <div className="flex space-x-5">
                  {/* <button>
                    <img src={pc} width={50} />
                  </button>
                  <button>
                    <img src={furniture} width={50} />
                  </button>
                  <button>
                    <img src={book} width={50} />
                  </button>
                  <button>
                    <img src={cross} width={50} />
                  </button> */}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-lg pt-5 font-medium ">
                Name
              </label>
              <input
                type="text"
                className="border text-lg rounded-lg w-full py-3 px-3"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <div className="modal-action">
                <label
                  htmlFor="modalEdit"
                  className="bg-[#F4F4F4]  font-light hover:bg-[#F4F4F4] border-2 border-[#D0D5DD] btn"
                >
                  Cancel
                </label>
              </div>
              <div className="modal-action">
                <label className="bg-accept text-[#F4F4F4] font-light border-2 border-accept hover:bg-accept btn">
                  Save Change
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Popup */}
        <input type="checkbox" id="modalDelete" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <div className="flex justify-start">
              {/* <img src={trash} width={50} className="inline-block" /> */}
              <div className="pl-2">
                <h3 className="text-lg font-bold ">Delete</h3>
                <p className="pt-1 ">
                  Are you sure want to delete this post?
                </p>
              </div>
            </div>
            <label
              htmlFor="modalDelete"
              className="font-semibold text-xl absolute right-8 top-6"
            >
              ✕
            </label>

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
                <label className="bg-[#FFC5C5] font-light text-reject border-2 border-reject hover:bg-[#FFC5C5] btn">
                  Delete
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}

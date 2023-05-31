import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import trash from "../../../assets/images/trash.png";
import pc from "../../../assets/images/pc.png";
import furniture from "../../../assets/images/furniture.png";
import gift from "../../../assets/images/gift.png";
import book from "../../../assets/images/book.png";
import cross from "../../../assets/images/cross.png";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { BsPlus } from "react-icons/bs";
import { Combobox, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const people = [
  { id: 1, name: "Sort By" },
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

  return (
    <main
      className="overflow-y-auto p-5 bg-white rounded-xl relative"
      style={{
        boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
        height: "calc(100vh - 6rem)",
      }}
    >
      <div className="gap-6 overflow-hidden">
        <div className="lg:flex lg:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 text">
          <div className="md:pb-0 sm:pb-2 text-text-colors">
            <h2 className="text-2xl font-sp-pro-text-semibold">
              All <span className="text-pending">Normal</span> Category
            </h2>
            <p className="font-sp-pro-text-regular text-sm text-green">
            <p className="font-sp-pro-text-regular text-sm text-green">
              Active categories
            </p>
            </p>
          </div>

          {/* search */}
          <div className="flex flex-row justify-center gap-5">
            <div>
              <div className="relative text-sm border-[#E1E9EE] border rounded-lg block w-full py-1.5 px-1 mb-1  focus:border-primary">
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
            <div className="z-50">
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative z-50">
                  <div className="z-50 relative w-full cursor-default overflow-hidden text-left rounded-md">
                    <Combobox.Input
                      className="w-full border-[#E1E9EE] border rounded-md py-1.5  pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
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
                    <Combobox.Options
                      className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                      style={{ zIndex: "10000000" }}
                    >
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
            <div className="block ">
              <div>
                <button
                  type="button"
                  className="border ml-auto border-yellow text-yellow p-1 px-2 rounded-md font-sp-pro-text-regular text-sm  w-32 flex items-center"
                //   {/* className="bg-primary text-white py-2 px-4 rounded-md max-w-max" */}
                >
                  <BsPlus className="w-6 h-6" /> &nbsp; Create New
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* table */}
        <div className="overflow-x-auto px-5">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="w-1/12 bg-bg-primary rounded-none py-3">No</th>
                <th className="w-3/12 bg-bg-primary py-3">Normal Category Name</th>
                <th className="w-3/12 bg-bg-primary py-3">Super Category Name</th>
                <th className="w-3/12 bg-bg-primary py-3">Created Date</th>
                <th className="w-2/12 bg-bg-primary rounded-none py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y dark:divide-gray-700">
              <tr className="font-md text-text-color">
                <th className="bg-white">1</th>
                <td>
                  <div className="flex items-center">
                    <div className="relative  w-8 h-8 mr-3 rounded-full">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src={gift}
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>Phone</div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="relative  w-8 h-8 mr-3 rounded-full">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src={gift}
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>Electronic</div>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="flex flex-row gap-4">
                    <button
                      className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm border-accept hover:bg-gray-50 sm:mt-0 sm:w-auto text-accept"
                    >
                      Edit
                    </button>
                    <button
                      className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm border-reject hover:bg-gray-50 sm:mt-0 sm:w-auto text-reject"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full flex justify-between items-center px-8 py-5 text-sm text-gray-500 uppercase absolute bottom-0 left-0">
          <div className="">Showing 21-30 of 100</div>
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

      <Transition appear show={isOpenModalCreate} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all text-text-color w-full lg:w-4/12 xl:w-3/12 md:w-6/12 sm:w-8/12">
                  <div className="min-h-full p-4 text-center font-sp-pro-text-regular">
                    <div className="relative transform sm:w-full">
                      <div className="sm:flex sm:items-center">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg
                            className="h-6 w-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <h3
                            className="text-lg font-medium leading-6 text-gray-900 font-sp-pro-text-semibold"
                            id="modal-title"
                          >
                            Create Super Category
                          </h3>
                        </div>
                      </div>

                      <form >
                        <div className="mt-10 my-4">
                          <div className="text-left mb-4 mt-2">
                            <label className="block text-md ml-1 font-medium leading-6 text-gray-900">
                              Name
                            </label>
                            <div className="relative w-full  mt-1 focus-within:text-black border rounded-lg p-2 border-slate-200 bg-bg-main">
                              <input
                                name="name"
                                // onInput={handleInputChange}
                                // onChange={formik.handleChange}
                                // value={newData.name}
                                className="w-full px-2 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-border-gray-light focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                type="text"
                                placeholder="Input name..."
                              />
                            </div>
                            {/* {formik.touched.name && formik.errors?.name ? (
                              <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">
                                {formik.errors.name}
                              </p>
                            ) : null} */}
                          </div>
                        </div>
                        <div className="bg-gray-50 sm:flex sm:flex-row-reverse mt-7 gap-4">
                          <button
                            type="submit"
                            className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm border-primary bg-primary hover:bg-gray-50 sm:mt-0 sm:w-auto  text-white "
                          >
                            {/* {isUpdate ? "Save Changes" : "Save"} */}
                          </button>
                          <button
                            type="button"
                            // onClick={closeModalCreateSuperCategory}
                            className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm  hover:bg-gray-50 sm:mt-0 sm:w-auto border-bg-primary-strock bg-bg-primary"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isOpenModalDelete} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 font-sp-pro-text-regular">
                    <div className="relative transform sm:w-full sm:max-w-lg">
                      <div className="sm:flex sm:items-center">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg
                            className="h-6 w-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <h3
                            className="text-lg font-medium leading-6 text-gray-900 font-sp-pro-text-semibold"
                            id="modal-title"
                          >
                            Delete Super Category
                          </h3>
                          <div className="mt-1 opacity-90">
                            <p className="text-sm text-gray-500">
                              Are you sure you want to delete this super
                              cateogory?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 sm:flex sm:flex-row-reverse mt-7 gap-4">
                        <button
                          type="button"
                          // onClick={handleDeleteSuperCategory}
                          className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm border-reject hover:bg-gray-50 sm:mt-0 sm:w-auto bg-reject-light text-reject"
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          // onClick={closeModalDeleteSuperCategory}
                          className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm  hover:bg-gray-50 sm:mt-0 sm:w-auto border-bg-primary-strock bg-bg-primary"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
}

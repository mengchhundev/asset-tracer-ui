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
import { Combobox, Dialog, Transition } from "@headlessui/react";
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

  const [user, setUser] = useState([
    {
      id: 1,
      profile: "SE",
      name: "Senglorn",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF38z4yXEJCseD5dYN08fHuNTgDeFlxZkohQ&usqp=CAU",
    },
    {
      id: 2,
      profile: "HO",
      name: "Hong Meng",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF38z4yXEJCseD5dYN08fHuNTgDeFlxZkohQ&usqp=CAU",
    },
    {
      id: 3,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 4,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 5,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 6,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 7,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
  
    {
      id: 8,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 9,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
    {
      id: 10,
      profile: "ME",
      name: "Keo Mony",
      number: "09464",
      email: "hrdcenter@gamil.com",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmf-JQD46GCkUA6YNG_CGGbHqdBlfq2T9xUYRNWsipJt2PHoBqJYirwKApTFTmlXlA0&usqp=CAU",
    },
  ]);

  return (
    
    <main
      className="overflow-y-auto p-8 bg-white rounded-xl relative"
      style={{
        boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
        minHeight: "calc(100vh - 6.3rem)",
      }}
    >
      <div className="gap-6 overflow-hidden z-10">
        <div className="lg:flex lg:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 mb-5 text">
          {/* header */}
          <div className="md:pb-0 sm:pb-2 text-text-colors">
            <h2 className="text-2xl font-sp-pro-text-semibold">
              All <span className="text-pending">Normal</span> Category
            </h2>
            <p className="font-sp-pro-text-regular text-sm text-green">
              Active categories
            </p>
          </div>

          {/* search */}
          <div className="flex flex-row justify-center gap-10">
            <div>
              <div className="relative text-sm border-[#E1E9EE]  bg-[#F9FBFF]  border rounded-lg block w-full py-1.5 px-1 mb-1  focus:border-primary">
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
            <div className="z-20">
              <Combobox
                value={selected}
                onChange={setSelected}
                className="z-20"
              >
                <div className="relative z-20">
                  <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                    <Combobox.Input
                      className="w-full border-[#E1E9EE] border rounded-lg bg-[#F9FBFF] py-1.5  pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
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
            <div className="block ">
              <label
                htmlFor="normalCategory"
                className="border-2 ml-auto cursor-pointer border-yellow text-yellow p-1 px-2 rounded-lg font-sp-pro-text-regular text-sm flex items-center uppercase"
              >
                <BsPlus className="w-6 h-6" /> &nbsp; Add Normal Category
              </label>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-between"
          style={{
            minHeight: "calc(100vh - 12rem)",
          }}
        >
          {/* table */}

          <div
            className="overflow-x-auto px-5 flex-grow"
            style={
              {
                // minHeight: "calc(100vh - 12rem)",
              }
            }
          >
            <table className="table w-full">
              <tbody className="divide divide-slate-800">
              <tr className="text-text-color ">
                  <td className="w-1/12 bg-[#F9FAFB]">No</td>
                  <td className="w-3/12 bg-[#F9FAFB]">
                    Normal Category Name
                  </td>
                  <td className="w-3/12 bg-[#F9FAFB]">
                    Super Category Name
                  </td>
                  <td className="w-3/12 bg-[#F9FAFB]">Created Date</td>
                  <td className="w-2/12 bg-[#F9FAFB]">
                    Action
                  </td>
                </tr>
                {user.map((users) => (
                  <tr className="font-md text-text-color border-none">
                    <td className="p-2.5">{users.id}</td>
                    <td className="p-2.5">
                      <div className="flex items-center">
                        <div className="relative  mr-3 w-8">
                          <img
                            src={users.src}
                            alt={users.title}
                            loading="lazy"
                            className="rounded-full h-8"
                          />
                        </div>
                        <div>{users.name}</div>
                      </div>
                    </td>
                    <td className="p-2.5">
                      <div className="flex items-center m-auto space-x-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-sp-pro-text-regular text-red-500 text-sm">
                          {users.profile}
                        </span>
                        <span className="font-sp-pro-text-medium text-sm text-text-color">
                          {users.name}
                        </span>
                      </div>
                    </td>
                    <td className=" text-text-color p-2.5">
                      <div className="flex items-center">
                        <div className="relative  mr-3 w-8 ">
                          <img
                            src={users.src}
                            alt={users.title}
                            loading="lazy"
                            className="rounded-full h-8"
                          />
                        </div>
                        <div>{users.name}</div>
                      </div>
                    </td>
                    <td className="p-2.5">
                      <div className="flex items-center space-x-4">
                        {/* Edit */}
                        <label
                        htmlFor="modalEdit"
                        className="flex items-center border border-accept text-accept min-w-min px-5 py-1 leading-5 rounded-md"
                        aria-label="Edit"
                      >
                        Edit
                      </label>
                        {/* Delete */}
                        <label
                        htmlFor="modalDelete"
                        className="flex items-center border border-reject text-reject min-w-min px-5 py-1 leading-5 rounded-md"
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
          <div className="w-full flex justify-between items-center px-8 text-sm text-text-color font-sp-pro-text-medium text-gray-500 h-14 flex-grow-0">
            <div className="">Showing data 1 to 8 of  256K entries</div>
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
              <img src={gift} width={50} />
              <h3 className="text-lg font-bold text-text-color pl-5">
                Create Normal Category
              </h3>
            </div>
            <div className="border py-5 px-5 flex justify-start items-center">
              <img src={furniture} width={70} />
              <div className="flex pl-5 flex-col justify-start">
                <p className="pb-3">Choose Icon</p>
                <div className="flex space-x-5">
                  <button>
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
                  </button>
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
              <label className="block mb-2 text-lg mt-4 font-medium text-text-color float-left">
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
                  className="bg-[#F4F4F4] text-text-color font-light hover:bg-[#F4F4F4] border-2 border-[#D0D5DD] btn"
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
              <img src={gift} width={50} />
              <h3 className="text-lg font-bold text-text-color pl-5">
                Update Normal Category
              </h3>
            </div>
            <div className="border py-5 px-5 flex justify-start items-center">
              <img src={furniture} width={70} />
              <div className="flex pl-5 flex-col justify-start">
                <p className="pb-3">Choose Icon</p>
                <div className="flex space-x-5">
                  <button>
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
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-lg pt-5 font-medium text-text-color">
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
                  className="bg-[#F4F4F4] text-text-color font-light hover:bg-[#F4F4F4] border-2 border-[#D0D5DD] btn"
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
              <img src={trash} width={50} className="inline-block" />
              <div className="pl-2">
                <h3 className="text-lg font-bold text-text-color">Delete</h3>
                <p className="pt-1 text-text-color">
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

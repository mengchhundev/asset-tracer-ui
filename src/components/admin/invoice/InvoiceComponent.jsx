import React, { Fragment, useState } from "react";
import { BiCheck, BiDotsHorizontalRounded } from "react-icons/bi";
import { BsDot, BsGraphUp, BsPlus } from "react-icons/bs";
import { EyeIcon } from "@heroicons/react/24/outline";
import gift from "../../../assets/images/gift.png";
import trash from "../../../assets/images/trash.png";
import pc from "../../../assets/images/pc.png";
import cross from "../../../assets/images/cross.png";
import furniture from "../../../assets/images/furniture.png";
import book from "../../../assets/images/book.png";
//import combobox
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
const people = [
  { id: 1, name: "Asset" },
  { id: 2, name: "HDMI" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Mango" },
];

export default function AssetComponent() {
  const [invoices, setInvioce] = useState([
    {
      id: 1,
      invoice: "10",
      supplier:
        "https://i.pinimg.com/474x/3e/38/f7/3e38f7c56ac9417e522b06df784ffb84.jpg",
      purchaser:
        "https://i.pinimg.com/474x/79/78/b3/7978b3b8a8ce9965dc4b02761af1f19f.jpg",
      date: "12-27-2023",
      quantity: "40",
      totalPrice: "700",
    },
    {
      id: 1,
      invoice: "10",
      supplier:
        "https://i.pinimg.com/474x/3e/38/f7/3e38f7c56ac9417e522b06df784ffb84.jpg",
      purchaser:
        "https://i.pinimg.com/474x/79/78/b3/7978b3b8a8ce9965dc4b02761af1f19f.jpg",
      date: "12-27-2023",
      quantity: "40",
      totalPrice: "700",
    },
    {
      id: 1,
      invoice: "10",
      supplier:
        "https://i.pinimg.com/474x/3e/38/f7/3e38f7c56ac9417e522b06df784ffb84.jpg",
      purchaser:
        "https://i.pinimg.com/474x/79/78/b3/7978b3b8a8ce9965dc4b02761af1f19f.jpg",
      date: "12-27-2023",
      quantity: "40",
      totalPrice: "700",
    },
    {
      id: 1,
      invoice: "10",
      supplier:
        "https://i.pinimg.com/474x/3e/38/f7/3e38f7c56ac9417e522b06df784ffb84.jpg",
      purchaser:
        "https://i.pinimg.com/474x/79/78/b3/7978b3b8a8ce9965dc4b02761af1f19f.jpg",
      date: "12-27-2023",
      quantity: "40",
      totalPrice: "700",
    },
    {
      id: 1,
      invoice: "10",
      supplier:
        "https://i.pinimg.com/474x/3e/38/f7/3e38f7c56ac9417e522b06df784ffb84.jpg",
      purchaser:
        "https://i.pinimg.com/474x/cc/e2/ec/cce2ec22b072d3b11b8a83d942457d00.jpg",
      date: "12-27-2023",
      quantity: "40",
      totalPrice: "700",
    },
    {
      id: 1,
      invoice: "10",
      supplier:
        "https://i.pinimg.com/474x/3e/38/f7/3e38f7c56ac9417e522b06df784ffb84.jpg",
      purchaser:
        "https://i.pinimg.com/474x/cc/e2/ec/cce2ec22b072d3b11b8a83d942457d00.jpg",
      date: "12-27-2023",
      quantity: "40",
      totalPrice: "700",
    },
  ]);
  //combobox
  const [selected, setSelected] = useState(people[0]);
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

  // pagination
  const [pageCount, setPageCount] = useState(2);
  let [isOpen, setIsOpen] = useState(false);
  function openDetail() {
    setIsOpen(true);
  }
  const handlePageClick = (event) => {
    getAllSuperCategory(event.selected + 1);
    setI(event.selected * 10 + 1);
  };

  return (
    <main
      className="overflow-y-auto px-10 py-6 bg-white rounded-xl relative"
      style={{
        boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
      }}
    >
      <div className="gap-6 overflow-hidden z-10">
        <div className="lg:flex lg:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 mb-5 text">
          {/* header */}
          <div className="md:pb-0 sm:pb-2 text-text-colors">
            <h2 className="text-2xl font-sp-pro-text-semibold text-text-color">
              All <span className="text-pending">Invoice</span>
            </h2>
            <p className="font-sp-pro-text-regular text-sm text-green">
              Active Invoice
            </p>
          </div>

          {/* search */}
          <div className="flex flex-row justify-center gap-10">
            <div>
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
            <div className="z-20">
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
            <div className="block ">
              <label
                htmlFor="my-modal-3"
                className="border ml-auto cursor-pointer border-yellow text-yellow p-1.5 pr-3 rounded-lg font-sp-pro-text-medium text-sm flex items-center uppercase hover:bg-custom-yellow-showdow-light"
              >
                <BsPlus className="w-6 h-6" /> &nbsp; Add invoice
              </label>
            </div>
          </div>
        </div>

        {/* table */}
        <div
          className="overflow-x-auto px-5 z-0"
          style={
            {
              // minHeight: "calc(100vh - 15rem)",
            }
          }
        >
          <table className="table w-full">
            <tbody className="divide divide-slate-800">
              <tr className="text-sm font-sp-pro-text-semibold text-text-color">
                <td className="w-1/14  bg-bg-main py-3 ">No</td>
                <td className="w-1/14 bg-bg-main py-3 ">Invoice</td>
                <td className="w-1/14 bg-bg-main py-3 ">Supplier</td>
                <td className="w-2/14 bg-bg-main py-3">Purchase</td>
                <td className="w-4/14 bg-bg-main py-3 text-center">Date</td>
                <td className="w-4/14 bg-bg-main py-3 ">Quantity</td>
                <td className="w-2/14 bg-bg-main py-3 ">
                  Total Price
                </td>
                <td className=" bg-bg-main text-center">More</td>
              </tr>
              {invoices.map((invoice) => (
                <tr className="text-sm font-sp-pro-text-regular text-text-color text-center">
                  <td className="w-2/12 py-2 text-text-color text-left">
                    {invoice.id}
                  </td>
                  <td className="w-2/12 py-2">
                    <div className="flex text-center">
                      {invoice.invoice}
                    </div>
                        
                    
                  </td>
                  <td className="w-2/12 py-2">
                    
                      <div className="relative  mr-8 w-12 h-12 ">
                          <img
                          src={invoice.supplier}
                          loading="lazy"
                          className="rounded-full h-full w-full"
                        />
                    </div>
                  </td>
                  <td className="w-1.5/12 py-2 ">
                    
                      <div className="relative  mr-8 w-12 h-12 mx-auto ">
                        <img
                          src={invoice.purchaser}
                          loading="lazy"
                          className="rounded-full h-full w-full"
                        />
                      
                    </div>
                  </td>
                  <td className="w-3/12 py-3 text-sm font-sp-pro-text-regular text-text-color p-2.5">
                    {invoice.date}
                  </td>

                  <td className="w-2/12 py-3 text-sm font-sp-pro-text-regular text-text-color p-2.5">
                    {invoice.quantity}
                  </td>

                  <td className="w-2/12 py-3 text-sm font-sp-pro-text-regular text-text-color p-2.5">
                    {invoice.totalPrice}
                  </td>

                  <td className="w-2/12 py-3">
                    {/* <div className="flex items-center space-x-4 justify-center"> */}
                      {/* Edit */}
                      {/* <label
                        htmlFor="modalEdit"
                        className="flex items-center border border-accept text-accept w-[90px] justify-center px-5 py-1 leading-5 rounded-md"
                        aria-label="Edit"
                      >
                        Accept
                      </label> */}
                      {/* Delete */}
                      {/* <label
                        htmlFor="modalDelete"
                        className="flex items-center border border-reject text-reject w-[90px] justify-center px-5 py-1 leading-5 rounded-md"
                        aria-label="Delete"
                      >
                        Reject
                      </label>
                    </div> */}
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Model Delete */}
        <input type="checkbox" id="deleteAsset" className="modal-toggle" />
        <div className="modal">
          <div className="bg-bg-primary w-1/4 rounded-lg relative">
            {/* header */}
            <div className="mb-5">
              <div>
                <label
                  htmlFor="deleteAsset"
                  className="btn border-red-500 bg-white text-red-500 hover:bg-white hover:border-red-400 btn-sm btn-circle absolute right-4 top-4"
                >
                  ✕
                </label>
              </div>
            </div>

            {/* content */}
            <div className="">
              <div className="flex-row">
                <div className="md:w-12 md:h-12 lg:w-14 lg:h-14 bg-reject-light rounded-full flex justify-center items-center m-auto">
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 5.49935H4.16667M4.16667 5.49935H17.5M4.16667 5.49935V17.166C4.16667 17.608 4.34226 18.032 4.65482 18.3445C4.96738 18.6571 5.39131 18.8327 5.83333 18.8327H14.1667C14.6087 18.8327 15.0326 18.6571 15.3452 18.3445C15.6577 18.032 15.8333 17.608 15.8333 17.166V5.49935H4.16667ZM6.66667 5.49935V3.83268C6.66667 3.39065 6.84226 2.96673 7.15482 2.65417C7.46738 2.34161 7.89131 2.16602 8.33333 2.16602H11.6667C12.1087 2.16602 12.5326 2.34161 12.8452 2.65417C13.1577 2.96673 13.3333 3.39065 13.3333 3.83268V5.49935M8.33333 9.66602V14.666M11.6667 9.66602V14.666"
                        stroke="#C52222"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className="text-center px-5 my-5">
                  <h1 className="text-text-color font-sp-pro-text-medium text-lg">
                    You want to delete?
                  </h1>
                  <p className="text-text-color font-sp-pro-text-regular text-sm mt-1">
                    Do you really want to delete these organization? This
                    process cannot be undone.
                  </p>
                </div>

                <div className="w-full">
                  <hr className="border-gray-light" />
                </div>

                <div className="p-5 flex flex-row justify-center space-x-5">
                  <span className="border border-slate-200 bg-bg-main text-text-color font-sp-pro-text-medium p-1.5 px-5 rounded-md">
                    Cancel
                  </span>
                  <spann className="border border-red-500 bg-reject-light text-reject font-sp-pro-text-medium p-1.5 px-5 rounded-md">
                    Delete
                  </spann>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/****/}

        {/* pagination */}
        <div className="w-full flex justify-between items-center text-sm text-text-color font-sp-pro-text-medium text-gray-500 h-14 flex-grow-0 px-7">
          <div className="">Showing data 1 to 8 of 256K entries</div>
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

      {/* Modal Add notification */}
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
              Invite user
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
    </main>
  );
}

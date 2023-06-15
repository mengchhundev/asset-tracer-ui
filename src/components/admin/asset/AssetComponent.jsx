import React, { Fragment, useEffect, useState } from "react";
import { BsDot, BsPlus } from "react-icons/bs";
import { EyeIcon } from "@heroicons/react/24/outline";
import AssetViewComponent from "./popUp/AssetViewComponent";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import moment from "moment";
import DeleteComponent from "../../modalDelete/DeleteComponent";
import AssetService from "../../../redux/services/AssetService";
import { useDispatch, useSelector } from "react-redux";
import ItemDetailService from "../../../redux/services/ItemDetailService";
import { setItemDetails } from "../../../redux/slices/ItemDetailSlice";

const people = [
  { id: 1, name: "Asset" },
  { id: 2, name: "HDMI" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Mango" },
];

export default function AssetComponent() {

  const organization = JSON.parse(sessionStorage.getItem("organization"))
  const dispatch = useDispatch();
  const getAllItems = useSelector((state) => state.itemDetail.itemDetails);
  const [totalRow, setTotalRow] = useState(0);
  const [i, setI] = useState(1);

  //combobox
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");
  const [asset, setAsset] = useState({});

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
        person.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  const handleGetAllAssets = () => {
    ItemDetailService.getAllItems(organization.id).then(res => {
      if (res.data.success) {
        dispatch(setItemDetails(res.data.payload))
      }
    })
  }

  // pagination
  const [pageCount, setPageCount] = useState(4);
  let [isOpen, setIsOpen] = useState(false);
  function openDetail() {
    setIsOpen(true);
  }
  const handlePageClick = (event) => {
    handleGetAllInvoices(event.selected + 1)
    setI(event.selected * 8 + 1);
  };

  useEffect(() => {
    handleGetAllAssets()
  }, [])

  return (
    <>
      <main className="overflow-y-auto px-10 py-6 bg-white rounded-xl relative lg:px-10 con-Shadow min-h-[calc(100vh-9rem)]">
        <div className="gap-6 overflow-hidden z-10">
          <div className="lg:flex lg:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 mb-5 text">
            {/* header */}
            <div className="md:pb-0 sm:pb-2 min-w-max mb-4 xl:mb-0">
              <h2 className="text-2xl font-sp-pro-text-semibold">
                All <span className="text-pending">Assets</span> Items
              </h2>
              <p className="font-sp-pro-text-regular text-sm text-green">
                Active Assets
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
                                  ? "bg-custom-yellow-showdow-light text-text-color"
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
                                      className={`${active ? "text-primary" : "text-primary"
                                        } absolute inset-y-0 left-0 flex items-center pl-2`}
                                    >
                                      {/* <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    /> */}
                                      <svg
                                        className="h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
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
              <div>
                <Link to={"/asset-add"}>
                  <div className="block w-max">
                    <label
                      htmlFor="my-modal-3"
                      className="border ml-auto cursor-pointer border-yellow text-yellow p-1.5 pr-3 rounded-lg font-sp-pro-text-medium text-sm flex items-center uppercase hover:bg-custom-yellow-showdow-light"
                    >
                      <BsPlus className="w-6 h-6" />
                      &nbsp; Add New Asset
                    </label>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col min-h-[calc(100vh-19rem)] overflow-x-auto  flex-grow">
            {/* table */}
            <div className="px-5 z-0 flex-grow ">
              <table className="table w-full">
                <tbody>
                  <tr className="text-sm font-sp-pro-text-semibold text-opacity-90 divide-none text-text-color">
                    <td className="w-1/12 bg-bg-main py-3">No</td>
                    <td className="w-2/12 bg-bg-main py-3">
                      Name
                    </td>
                    <td className="w-2/12 bg-bg-main py-3">
                      QTY
                    </td>
                    <td className="w-2/12 bg-bg-main py-3">
                      Unit Price
                    </td>
                    <td className="w-2/12 bg-bg-main py-3">Invoice Code</td>
                    <td className="w-2/12 bg-bg-main py-3">Created At</td>
                    <td className="w-2/12 bg-bg-main py-3 text-center">Action</td>
                  </tr>
                  {getAllItems != 0 ? getAllItems.map((list, index) => (
                    <tr
                      key={index}
                      className="text-sm font-sp-pro-text-regular"
                    >
                      <td className="py-3">{index + i}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 overflow-hidden rounded-full bg-bg-primary-strock flex items-center justify-center font-sp-pro-text-regular text-red-500 text-sm">
                            <img
                              // src={}
                              loading="lazy"
                              className="rounded-full h-full w-full"
                            />
                          </span>

                          {list.name}
                        </div>
                      </td>
                      <td className="py-3">{list.qty}</td>
                      <td className="py-3">{list.unitPrice}</td>
                      <td className="py-3">{list.discount}</td>
                      <td className="py-3">{moment(list.createdAt).format("MMM DD YYYY")}</td>
                      <td>
                        <div className="flex flex-rol space-x-3 items-center justify-center">
                          <span className="w-6 h-6 ">
                            <label
                              htmlFor="modalDelete"
                              className="cursor-pointer"
                            >
                              <svg
                                width="20"
                                height="21"
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
                            </label>
                          </span>

                          <span>
                            <Link to={`/asset/update/${list.id}`}>
                              <svg
                                width="24"
                                height="20"
                                viewBox="0 0 22 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  // opacity="0.3"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.334 1.14809C15.4658 0.283508 14.0587 0.284038 13.1912 1.14927L6.48127 7.84251C5.94461 8.37774 5.62909 9.09424 5.59716 9.85021L5.50164 12.1116C5.45815 13.1414 6.28405 13.9999 7.31823 13.9999L9.54314 14C10.36 14 11.1423 13.6714 11.7127 13.0887L18.3685 6.26724C19.2182 5.39909 19.2093 4.01137 18.3485 3.15417L16.334 1.14809ZM14.0486 2.00316C14.443 1.60987 15.0826 1.60963 15.4772 2.00262L17.4917 4.0087C17.883 4.39834 17.887 5.02912 17.5008 5.42373C16.7644 6.17612 15.5558 6.18388 14.8099 5.441L14.0496 4.68396C13.3073 3.9447 13.3068 2.74298 14.0486 2.00316ZM13.5891 5.9331C12.6262 4.97424 11.0691 4.97494 10.1071 5.93466L7.33874 8.6964C7.01674 9.01754 6.82743 9.44744 6.80827 9.90102L6.71275 12.1624C6.69825 12.5057 6.97355 12.7918 7.31828 12.7919L9.54319 12.792C10.0333 12.792 10.5027 12.5948 10.8449 12.2452L13.6153 9.4016C14.5584 8.43356 14.5467 6.88677 13.5891 5.9331Z"
                                  fill="#6DB33F"
                                />
                                <path
                                  d="M17.2 10.4008V15.5008C17.2 17.1576 15.8569 18.5008 14.2 18.5008H4C2.34314 18.5008 1 17.1576 1 15.5008V5.30078C1 3.64393 2.34315 2.30078 4 2.30078H9.1"
                                  stroke="#6DB33F"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </Link>
                          </span>

                          <span className="w-6 h-6 ">
                            <label
                              htmlFor="normalModal"
                              onClick={() => setAsset(asset)}
                            >
                              <EyeIcon className="cursor-pointer h-6 w-6 text-gray-500 text-[#2076FF]" />
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                  )) : <>
                    <tr>
                      <td colSpan={99} className="text-center">No Data</td>
                    </tr>
                  </>}
                </tbody>
              </table>
            </div>

            {/* pagination */}
            <div className="w-full flex justify-between items-center text-sm  font-sp-pro-text-medium text-gray-500 flex-grow-0 px-7 mt-3 h-10">
              <div className="font-sp-pro-text-regular opacity-90">
                Showing data 1 to 8 of 10 entries
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
        </div>

        {/* Model Delete */}
        <input
          type="checkbox"
          id="modalDelete"
          className="modal-toggle"
        />
        <DeleteComponent className="modal" getAllAssetData={getAllItems} />

        {/* view */}
        <input
          type="checkbox"
          id="normalModal"
          className="modal-toggle"
        />
        <AssetViewComponent viewAsset={asset} className="modal" />
      </main>
    </>
  );
}

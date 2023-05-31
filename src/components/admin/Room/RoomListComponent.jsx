import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllRoom } from "../../../redux/slices/RoomSlice";
import RoomService from "../../../redux/services/RoomService";
import DetailComponent from "./popUpRoom/DetailComponent";
import AddComponent from "./popUpRoom/AddComponent";
import ReactPaginate from "react-paginate";
import UpdateComponent from "./popUpRoom/UpdateComponent";
// import { Fragment, useState } from 'react'
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon, EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { BsPlus } from "react-icons/bs";
const people = [
  { id: 1, name: "Room" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];
{
  /* <EllipsisVerticalIcon className="h-6 w-6 text-gray-500" /> */
}

function RoomListComponent(props) {
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
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.room.data);
  const divClassName =
    "flex items-center col-span-12 md:col-span-6 lg:col-span-3 mt-1";
  const startIndex = divClassName.indexOf("Showing ") + 8;
  const endIndex = divClassName.indexOf("-");
  const index = divClassName.substring(startIndex, endIndex).trim();
  const [pageCount, setPageCount] = useState(2);
  const getAllRoom = () => {
    RoomService.getAllRoom().then((res) => {
      if (res?.data?.success) {
        dispatch(setAllRoom(res.data.payload));
      }
    });
  };
  useEffect(() => {
    getAllRoom();
  }, []);

  // pagination
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
      className="overflow-y-auto p-5 bg-white rounded-xl relative"
      style={{
        boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
        minHeight: "calc(100vh - 6.3rem)",
      }}
    >
      <div className="gap-6 overflow-hidden z-10">
        <div className="lg:flex lg:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 text">
          <div className="md:pb-0 sm:pb-2 text-text-colors">
            <h2 className="text-2xl font-sp-pro-text-semibold">
              All <span className="text-primary">Room</span> Management
            </h2>
            <p className="font-sp-pro-text-regular text-sm text-green">
              Active Categories
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
            <div className="z-20">
              <Combobox
                value={selected}
                onChange={setSelected}
                className="z-20"
              >
                <div className="relative z-20">
                  <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
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
            <div className="block ">
              <label
                htmlFor="my-modal-3"
                className="border ml-auto cursor-pointer border-yellow text-yellow p-1 px-2 rounded-md font-sp-pro-text-regular text-sm  w-32 flex items-center uppercase"
              >
                <BsPlus className="w-6 h-6" /> &nbsp; Add Room
              </label>
            </div>
          </div>
        </div>

        <div
          className="overflow-x-auto px-5 z-0"
          style={{
            minHeight: "calc(100vh - 15rem)",
          }}
        >
          <table className="table w-full">
            <thead>
              <tr>
                <th className="w-1/8 bg-bg-primary rounded-none py-3">No</th>
                <th className="w-2/8 bg-bg-primary py-3">Room Name</th>
                <th className="w-1/8 bg-bg-primary py-3">Type</th>
                <th className="w-1/8 bg-bg-primary py-3">Floor</th>
                <th className="w-2/8 bg-bg-primary py-3">Description</th>
                <th className="w-1/8 bg-bg-primary rounded-none py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="">
              {getData.map((item, index) => (
                <tr className=" bg-bg-primary text-sidebar border-b border-gray border-opacity-20" key={index}>
                  <td className="w-1/8 px-10">{index + 1}</td>
                  <td className="w-2/8"><span className={`bg-accept p-2 bg-opacity-20 text-accept rounded-full m-5`}>{item.name.substring(0, 2)}</span>{item.name}</td>
                  <td className="w-1/8">{item.type}</td>
                  <td className="w-1/8">{item.floor}</td>
                  <td className="w-2/8">{item.description}</td>
                  <td className="w-1/8">
                    <div className="dropdown dropdown-left">
                      <EllipsisVerticalIcon tabIndex={0} className="cursor-pointer h-7 w-7 text-gray-500 bg-slate-100 rounded-full" />
                      <ul tabIndex={0} className="z-50 dropdown-content menu p-2 shadow bg-base-100 rounded-sm w-52">
                        <li>
                          <label htmlFor="my-modal-6" className='hover:bg-primary cursor-pointer hover:bg-opacity-10 p-4' >View Room Detail</label>
                        </li>
                        <li className=''>
                          <label htmlFor="my-modal-5" className="hover:bg-primary hover:bg-opacity-10 p-4 cursor-pointer">Update Room</label>
                          </li> 
                      <li className='hover:bg-primary hover:bg-opacity-10 p-4 cursor-pointer'>Delete Room</li>
                    </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <DetailComponent className="modal" />
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <AddComponent className="modal" />
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <UpdateComponent className="modal" />
        </div>
        <DetailComponent setIsOpen={setIsOpen} isOpen={isOpen} />

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
    </main >
  );
}

export default RoomListComponent;
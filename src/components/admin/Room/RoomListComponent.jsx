import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllRoom } from '../../../redux/slices/RoomSlice';
import RoomService from '../../../redux/services/RoomService';
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import DetailComponent from './popUpRoom/DetailComponent';
import AddComponent from './popUpRoom/AddComponent';
import ReactPaginate from 'react-paginate';
import UpdateComponent from './popUpRoom/UpdateComponent';
// import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
const people = [
  { id: 1, name: 'Room' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]
{/* <EllipsisVerticalIcon className="h-6 w-6 text-gray-500" /> */}


function RoomListComponent(props) {
    const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople = query === '' ? people : people.filter((person) =>
    person.name
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(query.toLowerCase().replace(/\s+/g, ''))
  )
    const dispatch = useDispatch();
    const getData = useSelector(state => state.room.data);
    const divClassName = "flex items-center col-span-12 md:col-span-6 lg:col-span-3 mt-1";
    const startIndex = divClassName.indexOf("Showing ") + 8;
    const endIndex = divClassName.indexOf("-");
    const index = divClassName.substring(startIndex, endIndex).trim();
    const [pageCount, setPageCount] = useState(2);
    const getAllRoom = () => {
        RoomService.getAllRoom()
            .then((res) => {
                if (res?.data?.success) {
                    dispatch(setAllRoom(res.data.payload))
                }

            })
    }
    useEffect(() => {
        getAllRoom()
    }, [])

    let [isOpen, setIsOpen] = useState(false)
    function openDetail() {
        setIsOpen(true)
    }
    const handlePageClick = (event) => {
        getAllSuperCategory(event.selected + 1)
        setI((event.selected * 10) + 1)
    };

    return (
        <div>
            <div className="z-0 mx-5 mt-5 p-10 gap-6 bg-white rounded-3xl overflow-x-scroll">
                <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl  text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
                            All <span className='text-primary'>Room</span> Management
                        </h2>
                        <p className='font-sp-pro-text-medium text-[14px] text-accept'>active Rooms</p>
                    </div>
                    <div className="w-full sm:w-full md:w-6/12 xl:w-5/12">
                        <div className="relative w-full focus-within:text-black border rounded-xl p-2 border-slate-200 bg-bg-main">
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
                    <Combobox value={selected} onChange={setSelected}>
                    <div className="relative mt-1 z-20">
                      <div className="relative w-full cursor-default overflow-hidden text-left shadow-md rounded-md">
                        <Combobox.Input
                          className="w-full border border-slate-200 bg-bg-main rounded-md py-2 pl-3 pr-10 text-sm leading-5 text-text-color focus:outline-yellow"
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
                        afterLeave={() => setQuery('')}
                      >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {filteredPeople.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                              Nothing found.
                            </div>
                          ) : (
                            filteredPeople.map((person) => (
                              <Combobox.Option
                                key={person.id}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-hover-yellow text-white' : 'text-gray-900'
                                  }`
                                }
                                value={person}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                      }`}
                                    >
                                      {person.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                          active ? 'text-white' : 'text-text-color'
                                        }`}
                                      >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
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


                    <label htmlFor="my-modal-3" className="bg-primary text-white py-2 px-4 items-center flex rounded-lg max-w-max">Create New</label>
                </div>

                <div className="w">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-bg-primary text-sidebar ">
                                <th className="w-1/8 px-10">No</th>
                                <th className="w-2/8">Room Name</th>
                                <th className="w-1/8">Type</th>
                                <th className="w-1/8">Floor</th>
                                <th className="w-2/8">Description</th>
                                <th className="w-1/8">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-gray-700">
                        </tbody>

                        <tbody>
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
                                                    <label htmlFor="my-modal" className='hover:bg-primary cursor-pointer hover:bg-opacity-10 p-4' >View Room Detail</label>
                                                </li>
                                                <li className=''>
                                                    <label htmlFor="my-modal-5" className="hover:bg-primary hover:bg-opacity-10 p-4 cursor-pointer">Update Room</label></li>
                                                <li className='hover:bg-primary hover:bg-opacity-10 p-4 cursor-pointer'>Delete Room</li>
                                            </ul>

                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <DetailComponent className="modal" />
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <AddComponent className="modal" />
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <UpdateComponent className="modal" />
                </div>
                <DetailComponent setIsOpen={setIsOpen} isOpen={isOpen} />
                <div className="z-0 grid grid-cols-12 px-4 py-5 text-sm text-gray-500 uppercase">
                    <div className="flex items-center col-span-12 md:col-span-6 lg:col-span-3 mt-1">Showing 1 to 2 of 2</div>
                    <div id="react-paginate" className="col-span-12 md:col-span-7 ml-auto">
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
                    <div id="react-paginate" className="col-span-12 md:col-span-7 ml-auto">
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RoomListComponent;
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllRoom } from '../../../redux/slices/RoomSlice';
import RoomService from '../../../redux/services/RoomService';
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import DetailComponent from './popUpRoom/DetailComponent';
import { Menu, Transition } from '@headlessui/react';
<EllipsisVerticalIcon className="h-6 w-6 text-gray-500" />


function RoomListComponent(props) {
    const dispatch = useDispatch();
    const getData = useSelector(state => state.room.data);
    const divClassName = "flex items-center col-span-12 md:col-span-6 lg:col-span-3 mt-1";
    const startIndex = divClassName.indexOf("Showing ") + 8;
    const endIndex = divClassName.indexOf("-");
    const index = divClassName.substring(startIndex, endIndex).trim();
    console.log(index);
    const getAllRoom = () => {
        RoomService.getAllRoom()
            .then((res) => {
                if (res?.data?.success) {
                    dispatch(setAllRoom(res.data.payload))
                    console.log("this data", res.data.payload);
                }

            })
            .catch(e => {
                console.log(e)
            })
    }
    useEffect(() => {
        getAllRoom()
    }, [])

    let [isOpen, setIsOpen] = useState(false)
    function openDetail() {
        setIsOpen(true)
    }
    return (
        <div>
            <div className="z-0 mx-5 mt-5 p-10 gap-6 bg-white rounded-3xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
                    <h2 className="text-2xl  text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
                        All <span className='text-primary'>Room</span> Management
                    </h2>
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
                    <button
                        type="button"
                        className="bg-primary text-white py-2 px-4 rounded-lg max-w-max"
                    >
                        Create New
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-bg-primary text-sidebar">
                                <th className="">No</th>
                                <th className="w-2/12">Room Name</th>
                                <th className="w-2/12">Type</th>
                                <th className="w-2/12">Floor</th>
                                <th className="w-3/12">Description</th>
                                <th className="w-1/12">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-gray-700">
                        </tbody>

                        <tbody>
                            {getData.map((item, index) => (
                                <tr className=" bg-bg-primary text-sidebar border-b border-gray border-opacity-20" key={index}>
                                    <td>{index + 1}</td>
                                    <td className="w-2/12">{item.name}</td>
                                    <td className="w-2/12">{item.type}</td>
                                    <td className="w-2/12">{item.floor}</td>
                                    <td className="w-3/12">{item.description}</td>
                                    <td className="w-1/12">
                                        <div className="">
                                            <Menu as="div" className="">
                                                <div>
                                                    <Menu.Button className="justify-center">
                                                        <EllipsisVerticalIcon className="h-7 w-7 text-gray-500 bg-slate-100 rounded-full" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="fixed right-[9%] mt-[0.5%] w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="px-4 py-2 ">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        onClick={openDetail}
                                                                        className="p-2 w-full text-start hover:bg-primary hover:bg-opacity-10"
                                                                    >
                                                                        View Room Detail
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        className="hover:bg-primary hover:bg-opacity-10 group flex w-full items-center p-2"
                                                                    >
                                                                        Update Room
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        className="p-2 w-full text-start hover:bg-primary hover:bg-opacity-10"
                                                                    >
                                                                        Download Invoice
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <DetailComponent setIsOpen={setIsOpen} isOpen={isOpen}/>
                <div className="grid grid-cols-12 px-4 py-5 text-sm text-gray-500 uppercase">
                    <div className="flex items-center col-span-12 md:col-span-6 lg:col-span-3 mt-1">Showing {index} of </div>
                    <div className="col-span-2"></div>
                    <div id="react-paginate" className="col-span-12 md:col-span-7 ml-auto">
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RoomListComponent;
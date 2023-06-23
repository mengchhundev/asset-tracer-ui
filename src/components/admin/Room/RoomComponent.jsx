import React, { Fragment, useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Combobox, Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemDetailService from "../../../redux/services/ItemDetailService";
import { setItemDetails } from "../../../redux/slices/ItemDetailSlice";
import placeholder_square from "../../../assets/images/placeholder/placeholder_square.jpg"
import FileUploadService from '../../../redux/services/FileUploadService';
import RoomAddComponent from "./popUpRoom/RoomAddComponent";
import RoomService from "../../../redux/services/RoomService";
import { TbListDetails } from "react-icons/tb";
import { FiTrash2 } from "react-icons/fi";
import DeletemodalComponent from "../../modalDelete/DeletemodalComponent";
import DetailComponent from "./popUpRoom/DetailComponent";
import { setRoom, setRoomDetail, setRooms } from "../../../redux/slices/RoomSlice";
import RoomUpdateComponent from "./popUpRoom/RoomUpdateComponent";
import RoomDeleteComponent from "./popUpRoom/RoomDeleteComponent";


const sort = [
    {
        id: "", name: "Default"
    },
    {
        id: "name", name: "Name"
    },
    {
        id: "type", name: "Room Type"
    },
    {
        id: "floor", name: "Floor"
    }
];

export default function RoomComponent() {

    const [selectedSort, setSelectedSort] = useState(sort[0].name)
    const [selectedPage, setSelectedPage] = useState(1)
    const organization = JSON.parse(sessionStorage.getItem("organization"))
    const dispatch = useDispatch();
    const getAllRooms = useSelector((state) => state.room.rooms);
    const [totalRow, setTotalRow] = useState(0);
    const [countCurrentRow, setCountCurrentRow] = useState(0);
    const [i, setI] = useState(1);

    const [isCreateSuccess, setIsCreateSuccess] = useState(false)
    const [isUpdateSuccess, setIsUpdateSuccess] = useState(false)
    const [roomId, setRoomId] = useState();
    
    const handleIsCreateSuccess = (val) => {
        setIsCreateSuccess(val)
    }

    const handleIsUpdateSuccess = (val) => {
        setIsUpdateSuccess(val)
    }

    const handleSetRoomId = (val) => {
        setRoomId(val)
    }

    //combobox
    const [itemName, setItemName] = useState();

    const handleGetAllRooms = (selectedPage = 1, search = "", sort = "") => {
        RoomService.getAllRooms(organization.id, selectedPage, 8, search, sort).then(res => {
            if (res.data.success) {
                dispatch(setRooms(res.data.payload))
                setTotalRow(res.data.totalData)
            }
        }, err => {
            dispatch(setRooms([]))
            setTotalRow(1)
        })
    }

    // pagination
    const [pageCount, setPageCount] = useState(4);

    const handlePageClick = (event) => {
        setSelectedPage(event.selected + 1)
        setI(event.selected * 8 + 1);
        setPageCount(Math.ceil(totalRow / 8));
    };

    useEffect(() => {

        setCountCurrentRow(getAllRooms.length)

        if (itemName != null || selectedSort != null) {
            setSelectedPage(1)
            handleGetAllRooms(selectedPage, itemName, selectedSort)
        }

        if (isCreateSuccess || isUpdateSuccess) {
            handleGetAllRooms(1)
        }

    }, [itemName, selectedSort, isCreateSuccess, isUpdateSuccess])

    useEffect(() => {
        // setPageCount(Math.ceil(totalRow / 8));
    }, [])

    const handleInputSearch = (e) => {
        setItemName(e.target.value)
    };

    const handleSelectedSort = (val) => {
        setSelectedSort(val)
    }

    // Get image detail
    const handleShowRoomDetail = (item) => {
        dispatch(setRoomDetail(item))
    }

    const handleShowRoom = (val) => {
        dispatch(setRoom(val))
    }

    return (
        <>
            <main className="px-10 py-6 bg-white rounded-xl relative lg:px-10 con-Shadow min-h-[calc(100vh-9rem)]">
                <div className="gap-6 overflow-hidden z-10">
                    <div className="flex lg:flex-col xl:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 mb-5 text">

                        {/* header */}
                        <div className="md:pb-0 sm:pb-2 min-w-max mb-4 xl:mb-0">
                            <h2 className="text-2xl font-sp-pro-text-semibold">
                                All <span className="text-pending">Rooms</span> Management
                            </h2>
                            <p className="font-sp-pro-text-regular text-sm text-green">
                                Active Rooms
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
                                        className="placeholder:text-black placeholder:text-opacity-20 w-full pl-10 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:text-gray-200 focus:placeholder-gray-500   focus:outline-none"
                                        type="text"
                                        name="search"
                                        placeholder="Search..."
                                        onInput={handleInputSearch}
                                    />
                                </div>
                            </div>
                            <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                                <Listbox as="div" value={selectedSort} onChange={handleSelectedSort}>
                                    {({ open }) => (
                                        <>
                                            <div className="relative z-30">
                                                <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                                                    <Listbox.Button className="w-full border-[#E1E9EE] border rounded-lg bg-[#F9FBFF] py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary">
                                                        {selectedSort ? <span className={`block truncate text-sm w-full md:w-32 lg:w-full xl:w-32 text-left text-text-color ${selectedSort == "Default" ? "text-black text-opacity-20" : ""}`}><span className="text-black text-opacity-20">Sort by: </span>{selectedSort == "Default" ? "" : selectedSort}</span> : <span className="block w-full md:w-32 lg:w-full xl:w-32 text-left truncate text-sm text-black text-opacity-20">Sort by</span>}

                                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                            <ChevronUpDownIcon
                                                                className="h-5 w-5 text-text-color"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </Listbox.Button>
                                                </div>
                                                <Transition
                                                    show={open}
                                                    leave=""
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options
                                                        static
                                                        className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                                    >
                                                        {sort.length == 0 ? (
                                                            <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                                                Nothing found.
                                                            </div>
                                                        ) : (
                                                            sort.map((val, index) => (
                                                                <Listbox.Option key={index} value={val.id}
                                                                    className={({ active }) =>
                                                                        `relative cursor-pointer select-none py-2 px-5 text-text-color ${active ? "bg-custom-yellow-showdow-light" : ""}`
                                                                    }
                                                                >
                                                                    {({ selected, active }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${selected ? "font-medium" : "font-normal"} ${index == 0 ? "text-black text-opacity-20" : ""}`}
                                                                            >
                                                                                {val.name}
                                                                            </span>
                                                                            {selected ? (
                                                                                <span
                                                                                    className={`${active ? "text-primary" : "text-primary"
                                                                                        } absolute inset-y-0 left-0 flex items-center pl-2`}
                                                                                >
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))
                                                        )}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                            </div>

                            {/* add */}
                            <div>
                                <div className="block w-max">
                                    <label
                                        htmlFor="create-room"
                                        className="border ml-auto cursor-pointer border-yellow text-yellow p-1.5 pr-3 rounded-lg font-sp-pro-text-medium text-sm flex items-center uppercase hover:bg-custom-yellow-showdow-light"
                                    >
                                        <BsPlus className="w-6 h-6" />
                                        &nbsp; Add New Room
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col min-h-[calc(100vh-19rem)]">
                        {/* table */}
                        <div className="px-5 z-0 flex-grow overflow-x-scroll">
                            <table className="table w-full">
                                <tbody>
                                    <tr className="text-sm font-sp-pro-text-semibold text-opacity-90 divide-none text-text-color">
                                        <td className="w-1/12 bg-bg-main py-3">No</td>
                                        <td className="w-2/12 bg-bg-main py-3">
                                            Room Name
                                        </td>
                                        <td className="w-2/12 bg-bg-main py-3">
                                            Type
                                        </td>
                                        <td className="w-2/12 bg-bg-main py-3">
                                            Floor
                                        </td>
                                        <td className="w-2/12 bg-bg-main py-3">Description</td>
                                        <td className="w-1/12 bg-bg-main py-3 text-center">Action</td>
                                    </tr>
                                    {getAllRooms.length != 0 ?
                                        getAllRooms.map((list, index) => (
                                            <tr key={index}>
                                                <td className="py-3">{index + i}</td>
                                                <td className="py-3">
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-8 h-8 overflow-hidden rounded-full bg-bg-primary-strock flex items-center justify-center font-sp-pro-text-regular text-red-500 text-sm">
                                                            <img

                                                                src={list.image ? FileUploadService.getImage(list.image) : placeholder_square}
                                                                loading="lazy"
                                                                className="rounded-full h-full w-full"
                                                            />
                                                        </span>
                                                        {list.name}
                                                    </div>
                                                </td>
                                                <td className="py-3">{list.type}</td>
                                                <td className="py-3">{list.floor}</td>
                                                <td className="py-3">{list.description}</td>
                                                <td className="py-3 text-center">
                                                    <Listbox as="div">
                                                        {({ open }) => (
                                                            <>
                                                                <div className="relative">
                                                                    <span className="">
                                                                        <Listbox.Button className="h-7 w-7 p-1 text-gray-500 bg-slate-100 rounded-full hover:bg-bg-primary-strock cursor-pointer">
                                                                            <EllipsisVerticalIcon />
                                                                        </Listbox.Button>
                                                                    </span>
                                                                    <Transition
                                                                        show={open}
                                                                        leave=""
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options
                                                                            static
                                                                            className="border border-bg-primary mt-1  bg-white shadow-md rounded-md absolute right-5 z-50 w-48 p-2"
                                                                        >
                                                                            <Listbox.Option className="flex flex-col">
                                                                                <label
                                                                                    htmlFor="detail"
                                                                                    onClick={() => handleShowRoomDetail(list)}
                                                                                    className={`cursor-pointer text-text-color hover:bg-bg-primary hover:bg-opacity-50 inline-block select-none relative py-2 p-4 w-full text-gray-900 rounded-md `}
                                                                                >
                                                                                    <span className='flex justify-start text-[14px] font-sp-pro-text-semibold items-center gap-2'>
                                                                                        <TbListDetails />  View Room Detail
                                                                                    </span>
                                                                                </label>
                                                                                <label
                                                                                    htmlFor='edit-room'
                                                                                    onClick={() => handleShowRoom(list)}
                                                                                    className={`cursor-pointer text-green hover:bg-green hover:bg-opacity-10 inline-block select-none relative py-2 p-4 w-full text-gray-900 rounded-md `}
                                                                                >
                                                                                    <span className='flex justify-start text-[14px] font-sp-pro-text-semibold items-center gap-2'>
                                                                                        <FiTrash2 /> Edit
                                                                                    </span>
                                                                                </label>
                                                                                <label
                                                                                    htmlFor="delete-room"
                                                                                    onClick={() => handleShowRoom(list)}
                                                                                    className={`cursor-pointer text-reject hover:bg-reject hover:bg-opacity-10 inline-block select-none relative py-2 p-4 w-full  text-gray-900 rounded-md `}
                                                                                >
                                                                                    <span className='flex justify-start text-[14px] font-sp-pro-text-semibold items-center gap-2'>
                                                                                        <FiTrash2 /> Delete
                                                                                    </span>
                                                                                </label>

                                                                            </Listbox.Option>
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                </td>
                                            </tr>
                                        ))
                                        :
                                        <tr>
                                            <td colSpan={99} className="text-center">No Data</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* pagination */}
                        <div className="w-full flex justify-between items-center text-sm  font-sp-pro-text-medium text-gray-500 flex-grow-0 px-7 mt-3 h-10">
                            <div className="font-sp-pro-text-regular opacity-90">
                                Showing data 1 to {countCurrentRow} of {totalRow} entries
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
                                    onClick={(clickEvent) => {
                                        console.log('onClick', clickEvent);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <input type="checkbox" id="detail" className="modal-toggle" />
            <DetailComponent className="modal" />
            <RoomAddComponent className="modal" handleIsCreateSuccess={handleIsCreateSuccess} />
            <RoomUpdateComponent className="modal" handleIsUpdateSuccess={handleIsUpdateSuccess} />
            <RoomDeleteComponent className="modal" handleSetRoomId={handleSetRoomId} />
        </>
    )
}

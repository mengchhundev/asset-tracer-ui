import React, { Fragment, useEffect, useState } from "react";
//import combobox
import { Combobox, Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ReactPaginate from "react-paginate";
import avatar01 from "../../../assets/images/tracking/chair.png";
import NormalCategoryService from "../../../redux/services/NormalCategoryService";
import RoomService from "../../../redux/services/RoomService";
import AssetService from "../../../redux/services/AssetService";
import { setAssets, setCountCurrentRow, setTotalRow } from "../../../redux/slices/AssetSlice";
import { useDispatch, useSelector } from "react-redux";
import ViewDetailComponent from "./ViewDetailComponent";
import no_data_pic from "../../../assets/images/empty_box.png";

const status = [
  { id: "", name: "Default" },
  { id: "in_stock", name: "In Stock" },
  { id: "in_used", name: "In Used" },
  { id: "damage", name: "Damaged" },
  { id: "donated", name: "Donated" },
  { id: "lost", name: "Lost" },
  { id: "broken", name: "Broken" }
];

const sort = [
  {
    id: "",
    name: "Default",
  },
  {
    id: "name",
    name: "Name",
  },
  {
    id: "type",
    name: "Room Type",
  },
  {
    id: "floor",
    name: "Floor",
  },
];

export default function TrackingComponent() {
  const dispatch = useDispatch();
  const organization = JSON.parse(sessionStorage.getItem("organization"));
  const orgId = organization.id;
  const assets = useSelector((state) => state.asset.assets);

  const [itemName, setItemName] = useState("");

  // combo box room
  const [roomName, setRoomName] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState();
  const [queryRoom, setQueryRoom] = useState("");
  const [i, setI] = useState(1);

  let totalRow = useSelector((state) => state.asset.totalRow);
  let countCurrentRow = useSelector(
    (state) => state.asset.countCurrentRow
  );

  const filteredRoom =
    queryRoom === ""
      ? roomName
      : roomName.filter((list) =>
        list.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(queryRoom.toLowerCase().replace(/\s+/g, ""))
      );

  const [normalCategoryName, setNormalCategoryName] = useState([]);
  const [selectedNormalCategory, setSelectedNormalCategory] = useState({});
  const [selectedNormalCategoryName, setSelectedNormalCategoryName] = useState("")
  const handleSetSeletedNormalCategory = (val) => {
    if (val.name != "Default") {
      setSelectedNormalCategory(val)
      setSelectedNormalCategoryName(val.name)
    } else {
      setSelectedNormalCategoryName("")
      setSelectedNormalCategory({})
    }
  }


  const [queryNormalCategory, setQueryNormalCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(status[0].name);

  const [selectedPage, setSelectedPage] = useState(1);

  useEffect(() => {
    NormalCategoryService.getAllNormalCategoryName(orgId).then((res) => {
      if (res.data.success) {
        setNormalCategoryName([{ id: "", name: "Default" }, ...res.data.payload]);
      }
    });

    RoomService.getAllRoomByOrgId(orgId).then((res) => {
      if (res.data.success) {
        setRoomName(res.data.payload);
      }
    });
  }, []);

  const filteredNormalCategory =
    queryNormalCategory === ""
      ? normalCategoryName
      : normalCategoryName.filter((list) =>
        list.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(queryNormalCategory.toLowerCase().replace(/\s+/g, ""))
      );

  // pagination
  const [pageCount, setPageCount] = useState(2);

  const handlePageClick = (event) => {
    getAllSuperCategory(event.selected + 1);
    setI(event.selected * 10 + 1);
  };

  const handleInputSearch = (e) => {
    setItemName(e.target.value);
  };

  const handleSelectedStatus = (val) => {
    setSelectedStatus(val);
  };

  const handleGetAllAssets = (page = 1, assetName = "", status = "", room = "", normalCategoryName = "c") => {
    AssetService.getAllAssets(orgId, page, 8, assetName, status, room, normalCategoryName).then(
      (res) => {
        if (res.data.success) {
          dispatch(setAssets(res.data.payload));
          dispatch(setTotalRow(res.data.totalData))
          dispatch(setCountCurrentRow(res.data.payload.length));
        }
      },
      (err) => {
        dispatch(setAssets([]));
        dispatch(setTotalRow(0))
      }
    );
  };

  useEffect(() => {
    if (itemName != null || selectedStatus != null || selectedRoom != null || selectedNormalCategoryName != null) {
      handleGetAllAssets(
        1,
        itemName,
        selectedStatus,
        selectedRoom,
        selectedNormalCategoryName
      );
    }

    setPageCount(Math.ceil(totalRow / 8));
  }, [itemName]);

  useEffect(() => {
    handleGetAllAssets(1)
  }, [])


  return (
    <main className="px-4 lg:px-10 py-6 bg-white rounded-2xl relative overflow-hidden h-[calc(100vh-7.8rem)]">
      <div className="gap-6 overflow-hidden z-10">
        <div className="flex-col justify-between gap-4 p-5 mb-5 text">
          <div className="md:pb-0 sm:pb-2 min-w-max mb-4">
            <h2 className="text-2xl font-sp-pro-text-semibold">All <span className="text-primary">Tracking</span></h2>
          </div>

          <div className="grid grid-cols-4 gap-x-10 gap-y-5">
            <div className="col-span-4 md:col-span-2 xl:col-span-1">
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
                  className="w-full placeholder-black placeholder-opacity-20 pl-10 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  name="search"
                  onInput={handleInputSearch}
                  placeholder="Search..."
                />
              </div>
            </div>

            {/* <div className="col-span-4 md:col-span-2 xl:col-span-1">
              <div className="z-20 ">
                <Combobox
                  value={selectedNormalCategory}
                  onChange={handleSetSeletedNormalCategory}
                  className="z-20"
                >
                  <div className="relative z-20">
                    <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                      <Combobox.Input
                        className={`text-text-color w-full placeholder-black placeholder-opacity-20 border-[#E1E9EE] border rounded-lg bg-[#F9FBFF] py-2  pl-3 pr-10 text-sm  outline-none focus:border-primary`}
                        displayValue={(list) => list.name}
                        onChange={(event) =>
                          setQueryNormalCategory(event.target.value)
                        }
                        placeholder="Select Normal Category"
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
                      afterLeave={() => setQueryNormalCategory("")}
                    >
                      <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredNormalCategory.length === 0 &&
                          queryNormalCategory !== "" ? (
                          <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                            Nothing found.
                          </div>
                        ) : (
                          filteredNormalCategory.map((list, index) => (
                            <Combobox.Option
                              key={index}
                              className={({ active }) =>
                                `relative cursor-pointer select-none py-2 px-5 text-text-color ${active ? "bg-custom-yellow-showdow-light" : ""
                                }`
                              }
                              value={list}
                            >
                              {list.name == "Default" ?
                                <span className="text-black text-opacity-20">
                                  {list.name}
                                </span>
                                :
                                list.name
                              }
                            </Combobox.Option>
                          ))
                        )}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </Combobox>
              </div>
            </div> */}

            {/* <div className="col-span-4 md:col-span-2 xl:col-span-1">
              <div className="z-20">
                <Combobox
                  value={selectedRoom}
                  onChange={setSelectedRoom}
                  className="z-20"
                >
                  <div className="relative z-20">
                    <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                      <Combobox.Input
                        className={`text-text-color w-full placeholder-black placeholder-opacity-20 border-[#E1E9EE] border rounded-lg bg-[#F9FBFF] py-2  pl-3 pr-10 text-sm  outline-none focus:border-primary`}
                        displayValue={(list) => list.name}
                        onChange={(event) => setQueryRoom(event.target.value)}
                        placeholder="Select Room"
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
                      afterLeave={() => setQueryRoom("")}
                    >
                      <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredNormalCategory.length === 0 &&
                          queryNormalCategory !== "" ? (
                          <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                            Nothing found.
                          </div>
                        ) : (
                          filteredRoom.map((list, index) => (
                            <Combobox.Option
                              key={index}
                              className={({ active }) =>
                                `relative cursor-pointer select-none py-2 px-5 text-text-color ${active ? "bg-custom-yellow-showdow-light" : ""
                                }`
                              }
                              value={list}
                            >
                              {list.name}
                            </Combobox.Option>
                          ))
                        )}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </Combobox>
              </div>
            </div> */}

            {/* <div className="col-span-4 md:col-span-2 xl:col-span-1">
              <div className="z-20 ">
                <Listbox as="div" value={selectedStatus} onChange={handleSelectedStatus}>
                  {({ open }) => (
                    <>
                      <div className="relative z-30">
                        <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                          <Listbox.Button className="w-full border-[#E1E9EE] border rounded-lg bg-[#F9FBFF] py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary">
                            {selectedStatus ? <span className={`block truncate text-sm w-full md:w-32 lg:w-full xl:w-32 text-left text-text-color ${selectedStatus == "Default" ? "text-black text-opacity-20" : ""}`}><span className="text-black text-opacity-20">Status: </span>{selectedStatus == "Default" ? "" : selectedStatus == "in_stock" ? "In Stock" : selectedStatus == "in_used" ? "In Used" : selectedStatus == "damaged" ? "Damaged" : selectedStatus == "donated" ? "Donated" : selectedStatus == "lost" ? "Lost" : selectedStatus == "broken" ? "Broken" : ""}</span> : <span className="block w-full md:w-32 lg:w-full xl:w-32 text-left truncate text-sm text-black text-opacity-20">Status</span>}

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
                            {status.length == 0 ? (
                              <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                Nothing found.
                              </div>
                            ) : (
                              status.map((val, index) => (
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
            </div> */}
          </div>
        </div>

        {assets.length != 0 ? (
          <div className="flex flex-col min-h-[calc(100vh-19rem)]">
            {/* table */}
            <div className="px-5 z-0 flex-grow overflow-x-scroll">
              <table className="table w-full">
                <tbody className="">
                  <tr className="text-sm font-sp-pro-text-semibold text-opacity-90 divide-none">
                    <td className="bg-bg-main py-3">No</td>
                    <td className="w-2/12 bg-bg-main py-3">Asset Name</td>
                    <td className="w-2/12 bg-bg-main py-3">Label Code</td>

                    <td className="w-2/12 bg-bg-main py-3">Category</td>
                    <td className="w-2/12 bg-bg-main py-3">Status</td>
                    <td className="w-2/12 bg-bg-main py-3">Owner</td>
                    <td className="w-2/12 bg-bg-main py-3">Room</td>
                    <td className="w-1/12 bg-bg-main py-3 text-center">
                      Action
                    </td>
                  </tr>
                  {assets.map((list, index) => (
                    <tr
                      key={index}
                      className="text-sm font-sp-pro-text-regular"
                    >
                      <td className="py-3 ">{index + i}</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="relative mr-2 w-8 h-8 ">
                            {list.itemDetail.image ? (
                              <img src={avatar01} loading="lazy" />
                            ) : null}
                          </div>
                          <div>{list.itemDetail.name}</div>
                        </div>
                      </td>
                      <td className="py-3 ">{list.labelCode}</td>
                      <td className="py-3 ">
                        {list.itemDetail.normalCategoryName}
                      </td>
                      <td>
                        <div className="flex items-center">
                          <label
                            htmlFor="modalEdit"
                            className={`flex items-center border bg-opacity-10 justify-center px-5 py-1 cursor-pointer leading-5 rounded-full ${list.status == "in_stock"
                              ? "bg-blue-700 border-blue-700 text-blue-700"
                              : list.status == "in_used"
                                ? "bg-accept border-apbg-accept text-apbg-accept"
                                : "bg-reject border-reject text-reject"
                              }`}
                            aria-label="Edit"
                          >
                            {list.status == "in_stock"
                              ? "In Stock"
                              : list.status == "in_used"
                                ? "In Used"
                                : ""}
                          </label>
                        </div>
                      </td>
                      <td>{list.owner}</td>
                      <td>{list.roomName}</td>
                      <td>
                        <label
                          htmlFor="view-detail"
                          className="px-3 py-2 bg-primary bg-opacity-10 rounded-md border border-primary text-primary"
                        >
                          View Detail
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* pagination */}

            <div className="w-full flex justify-between items-center text-sm  font-sp-pro-text-medium text-gray-500 flex-grow-0 px-7 mt-3 h-10">
              <div className="font-sp-pro-text-regular opacity-90">
                Showing data 1 to {countCurrentRow} of {totalRow} entries
              </div>
              <div id="react-paginate">
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
        ) : (
          <div className="text-center w-full col-span-12 h-[calc(100vh-18.5rem)] flex justify-center items-center">
            <div className="mt-[-6rem]">
              <img src={no_data_pic} className="w-2/6 xl:w-3/6 m-auto pb-5" />
              <h2 className="text-2xl text-gray font-sp-pro-text-bold ">
                No Data Traking
              </h2>
            </div>
          </div>
        )}
      </div>
      <ViewDetailComponent className="modal" />
    </main>
  );
}

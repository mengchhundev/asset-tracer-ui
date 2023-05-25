import { Combobox, Dialog, Listbox, Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import ReactPaginate from "react-paginate";
import '../../style/pagination.css'
import SuperCategoryService from "../../redux/services/SuperCategoryService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setAllSuperCategory } from "../../redux/slices/SuperCategorySlice";
import { useFormik } from 'formik';
import * as Yup from "yup"
import moment from "moment";
// import SyncLoader from "react-spinners/SyncLoader";


export default function ListComponent() {
    const [i, setI] = useState(1);
    const [isUpdate, setIsUpdate] = useState(false);
    const dispatch = useDispatch();
    const getData = useSelector(state => state.superCategory.data)
    const [pageCount, setPageCount] = useState(2);
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(false)
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
    const [isShowError, setIsShowError] = useState(false)
    const [superCategoryId, setSuperCategoryId] = useState("")
    const [newData, setNewData] = useState({
        id: "", name: ""
    })

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        getAllSuperCategory(event.selected + 1)
        setI((event.selected * 10) + 1)
    };

    // Modal 
    function closeModalCreateSuperCategory() {
        setIsOpenModalCreate(false)
        setNewData({ id: "", name: "" })
    }

    function openModalCreateSuperCategory() {
        setIsOpenModalCreate(true)
    }

    function closeModalDeleteSuperCategory() {
        setIsOpenModalDelete(false)
    }

    function openModalDeleteSuperCategory(id) {
        setSuperCategoryId(id)
        setIsOpenModalDelete(true)
    }

    const getAllSuperCategory = (page = 1, size = 10, name) => {
        SuperCategoryService.getAllSuperCategory(page, size, name).then((res) => {
            if (res?.data?.success) {
                dispatch(setAllSuperCategory(res.data.payload))
            }
        }, (err) => {
            console.log(err)
            if (err.response.data.status == 400) {
                dispatch(setAllSuperCategory([]))
            }
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAllSuperCategory(1)
    }, [])

    const handleInputChange = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value })
    };

    const handleSaveSuperCategory = () => {
        SuperCategoryService.saveSuperCategory(newData).then(res => {
            if (res?.data?.success) {
                getAllSuperCategory(1)
            }
        })
    }

    const formik = useFormik({
        initialValues: newData,
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name is required"),
        }),
        onSubmit: (val, { resetForm }) => {
            isUpdate ? handleUpdateSuperCategory() : handleSaveSuperCategory();
            setIsUpdate(false)
            setIsOpenModalCreate(false)
            resetForm(val = { id: "", name: "" })
            setNewData({ id: "", name: "" })
        }
    });

    const handleSearchSuperCategory = (e) => {
        getAllSuperCategory(1, 10, e.target.value)
    }

    const handleDeleteSuperCategory = () => {
        SuperCategoryService.deleteSuperCategory(superCategoryId).then(res => {
            if (res?.data?.success) {
                getAllSuperCategory(1)
                closeModalDeleteSuperCategory()
            }
        })
    }

    const handleShowSuperCategory = (val) => {
        setIsUpdate(true)
        openModalCreateSuperCategory(true)
        setNewData(val)
        setSuperCategoryId(val.id)
        formik.setValues(val)
    }

    const handleUpdateSuperCategory = () => {
        SuperCategoryService.updateSuperCategory(superCategoryId, newData).then(res => {
            if (res?.data?.success) {
                getAllSuperCategory(1)
            }
        }, err => {
            console.log(err)
        })
    }

    return (
        <main className="overflow-y-auto">
            <div className="mx-5 mt-5 p-10 gap-6 bg-white rounded-3xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
                    <h2 className="text-2xl  text-gray-700 dark:text-border-gray-light font-sp-pro-text-semibold">
                        All Super Category
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
                                className="w-full pl-10 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-border-gray-light focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                type="text"
                                name="search"
                                placeholder="Search..."
                                onInput={handleSearchSuperCategory}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={openModalCreateSuperCategory}
                        className="bg-primary text-white py-2 px-4 rounded-lg max-w-max"
                    >
                        Create New
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-bg-primary text-sidebar">
                                <th className="bg-bg-primary">No</th>
                                <th className="w-4/12">Name</th>
                                <th className="w-4/12">Created Date</th>
                                <th className="w-1/12">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-gray-700">
                            {getData.length != 0 ? getData.map((list, index) => (
                                <tr className="font-md text-text-color" key={list.id}>
                                    <th className="bg-white">{i + index}</th>
                                    <td>
                                        <div className="flex items-center">
                                            <div className="relative  w-8 h-8 mr-3 rounded-full">
                                                <img
                                                    className="object-cover w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <div
                                                    className="absolute inset-0 rounded-full shadow-inner"
                                                    aria-hidden="true"
                                                ></div>
                                            </div>
                                            <div>{list.name}</div>
                                        </div>
                                    </td>
                                    <td>{moment(list.createdAt).format("DD MMM YYYY")}</td>
                                    <td>
                                        <div className="flex flex-row gap-4">
                                            <button onClick={() => handleShowSuperCategory(list)} className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm border-accept hover:bg-gray-50 sm:mt-0 sm:w-auto text-accept">Edit</button>
                                            <button onClick={() => openModalDeleteSuperCategory(list.id)} className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm border-reject hover:bg-gray-50 sm:mt-0 sm:w-auto text-reject">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )) :
                                <tr className="font-md text-text-color">
                                    <td colSpan={4} className="text-center">
                                        No Data
                                    </td>
                                </tr>
                            }

                        </tbody>

                    </table>
                </div>

                <div className="grid grid-cols-12 px-4 py-5 text-sm text-gray-500 uppercase">
                    <div className="flex items-center col-span-12 md:col-span-6 lg:col-span-3 mt-1">Showing 21-30 of 100</div>
                    <div className="col-span-2"></div>

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
                                                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                                    </svg>
                                                </div>
                                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                    <h3 className="text-lg font-medium leading-6 text-gray-900 font-sp-pro-text-semibold" id="modal-title">Create Super Category</h3>
                                                </div>
                                            </div>

                                            <form onSubmit={formik.handleSubmit}>
                                                <div className="mt-10 my-4">
                                                    <div className="text-left mb-4 mt-2">
                                                        <label className="block text-md ml-1 font-medium leading-6 text-gray-900">Name</label>
                                                        <div className="relative w-full  mt-1 focus-within:text-black border rounded-lg p-2 border-slate-200 bg-bg-main">
                                                            <input
                                                                name="name"
                                                                onInput={handleInputChange}
                                                                onChange={formik.handleChange}
                                                                value={newData.name}
                                                                className="w-full px-2 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-border-gray-light focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                                                type="text"
                                                                placeholder="Input name..."
                                                            />
                                                        </div>
                                                        {formik.touched.name && formik.errors?.name ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.name}</p> : null}
                                                    </div>
                                                </div>
                                                <div className="bg-gray-50 sm:flex sm:flex-row-reverse mt-7 gap-4">

                                                    <button type="submit" className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm border-primary bg-primary hover:bg-gray-50 sm:mt-0 sm:w-auto  text-white ">{isUpdate ? "Save Changes" : "Save"}</button>
                                                    <button type="button" onClick={closeModalCreateSuperCategory} className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm  hover:bg-gray-50 sm:mt-0 sm:w-auto border-bg-primary-strock bg-bg-primary">Cancel</button>
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
                                                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                                    </svg>
                                                </div>
                                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                    <h3 className="text-lg font-medium leading-6 text-gray-900 font-sp-pro-text-semibold" id="modal-title">Delete Super Category</h3>
                                                    <div className="mt-1 opacity-90">
                                                        <p className="text-sm text-gray-500">Are you sure you want to delete this super cateogory?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 sm:flex sm:flex-row-reverse mt-7 gap-4">

                                                <button type="button" onClick={handleDeleteSuperCategory} className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm border-reject hover:bg-gray-50 sm:mt-0 sm:w-auto bg-reject-light text-reject">Delete</button>
                                                <button type="button" onClick={closeModalDeleteSuperCategory} className="mt-3 inline-flex w-full justify-center rounded-md border px-3 py-1.5 text-md text-gray-900 shadow-sm  hover:bg-gray-50 sm:mt-0 sm:w-auto border-bg-primary-strock bg-bg-primary">Cancel</button>
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
    )
}

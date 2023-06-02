import React from 'react'
import { Combobox } from "@headlessui/react";
import logo from '../../../../src/assets/images/A_Tracer_logo1.png';
import * as Yup from "yup";
// // combobox import
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronUpDownIcon, EllipsisVerticalIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { HiChevronDown, HiOutlineCheck } from 'react-icons/hi';
import AddOrgnizaation from './popUp/AddOrgnizaation';
import { useFormik } from 'formik';
import OrganizationService from '../../../redux/services/OrganizationService';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '../../../redux/slices/OrganizationSlice';
import { useNavigate } from 'react-router-dom';
import CreateOrganizatoinComponent from './popUp/CreateOrganizatoinComponent';
import organization_pic from '../../../assets/images/organization.png'
import { BsPlus } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
import gift from "../../../assets/images/gift.png";
import book from "../../../assets/images/book.png";
import '../../../style/shadow.css';

const people = [
  { id: 1, name: 'Short by' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
]

let organizationList = [
  {
    id: 1,
    name: "HRD Center",
    owner: "Sok Polen",
    memebers: [

    ]
  },
  {
    id: 1,
    name: "HRD Center",
    owner: "Sok Polen",
    memebers: [

    ]
  },
  {
    id: 1,
    name: "HRD Center",
    owner: "Sok Polen",
    memebers: [

    ]
  },
  {
    id: 1,
    name: "HRD Center",
    owner: "Sok Polen",
    memebers: [

    ]
  },
  {
    id: 1,
    name: "HRD Center",
    owner: "Sok Polen",
    memebers: [

    ]
  }
]

export default function OrganzationCreateOrJoinComponent() {
  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState("")
  const [message, setMessage] = useState()
  const [newData, setNewData] = useState({ code: "" })
  const dispatch = useDispatch()
  const organizations = useSelector(state => state.organization.data)
  const item = useSelector(state => state.organization?.item)
  const organization = JSON.parse(sessionStorage.getItem("organization"))
  const navigator = useNavigate()


  const [pageCount, setPageCount] = useState(2);

  const handleJoinOrganization = () => {
    OrganizationService.joinOrganization(newData, localStorage.getItem("token")).then(res => {
      if (res.data?.success) {
        dispatch(setItem(res.data.payload))
        sessionStorage.setItem("organization", JSON.stringify(res.data.payload))
        navigator("/dashboard", { state: { hideOrganizationBar: true } })
      }
    }, err => {
      console.log(err)
    })
  }

  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value })
    console.log(newData)
  };

  const formik = useFormik({
    initialValues: newData,
    validationSchema: Yup.object().shape({
      code: Yup.string().required("Code is required"),
    }),
    onSubmit: (val, { resetForm }) => {
      handleJoinOrganization()
    }
  });

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
        person.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )


  const handlePageClick = (event) => {
    getAllSuperCategory(event.selected + 1);
    setI(event.selected * 10 + 1);
  };


  return (


    <>
      <main className="overflow-y-auto pb-4 ">
        <div className="gap-6 bg-white rounded-xl overflow-hidden mb-5 p-10 px-5 md:px-10 lg:px-20 con-Shadow">
          <div className='grid grid-cols-2 w-full gap-3 md:gap-8 py-4'>
            <label htmlFor="create-organization" className="min-h-[9rem] col-span-2 xl:col-span-1 lg:col-span-2 md:col-span-1 px-10 w-full mb-4 hover:border-green hover:border-opacity-40 hover:bg-green hover:bg-opacity-10 md:mb-0 border border-bg-primary outline-none text-center rounded-xl flex justify-center cursor-pointer shadow-md items-center">
              <div>
                <PlusCircleIcon className="w-12 h-12 text-green rounded-full m-auto mb-2" />
                <p className='text-lg font-sp-pro-text-bold text-green'>Add Organization</p>
              </div>
            </label>
            <div className='w-full col-span-2 xl:col-span-1 lg:col-span-2 md:col-span-1 border border-bg-primary outline-none text-green text-center py-6 rounded-md shadow-md px-8'>
              <div className='flex gap-6'>
                <img src={organization_pic} className='w-16 h-16 mt-2' />

                <form onSubmit={formik.handleSubmit} className='flex-grow justify-start'>
                  <div className="text-left">
                    <label className="block text-md ml-1 leading-6 text-secondary font-sp-pro-text-semibold">Join organization with a code</label>
                    <input
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newData.code}
                      name="code"
                      type='number'
                      placeholder='Enter code...'
                      className='relative text-secondary focus:border-primary px-3 w-full outline-none mt-2 border rounded-lg p-2 border-slate-200 bg-bg-main '
                    />
                    {formik.touched.code && formik.errors?.code ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.code}</p> : null}
                  </div>
                  <div className='w-full flex justify-start'>
                    <button type='submit' className="mt-3 rounded text-center hover:bg-opacity-80 bg-primary px-10 py-1.5 text-sm font-sp-pro-text-medium text-white cursor-pointer">Join</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <input type="checkbox" id="create-organization" className="modal-toggle" />
        <CreateOrganizatoinComponent className="modal" />
      </main>

      <main className="px-4 lg:px-10 py-6 bg-white rounded-2xl relative overflow-hidden">
        <div className="gap-6 overflow-hidden z-10">
          <div className="xl:flex xl:flex-row md:flex-col sm:flex-col justify-between gap-4 p-5 mb-5 text">

            {/* header */}
            <div className="md:pb-0 sm:pb-2 min-w-max mb-4 xl:mb-0">
              <h2 className="text-2xl font-sp-pro-text-semibold">
                All Organization Invited
              </h2>
            </div>

            {/* search */}
            <div className="md:flex md:flex-row justify-start gap-10">
              <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
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
            </div>
          </div>

          <div className="flex flex-col justify-between ">
            {/* table */}

            <div
              className="overflow-scroll px-5 flex-grow"
            // style={
            //   {
            //     minHeight: "calc(100vh - 40rem)",
            //   }
            // }
            >
              <table className="table w-full">
                <tbody className="">
                  <tr className="text-sm font-sp-pro-text-regular text-opacity-90  divide-none">
                    <td className="w-1/12 bg-bg-main py-3 text-center">No</td>
                    <td className="w-3/12 bg-bg-main py-3 text-center">
                      Organization Name
                    </td>
                    <td className="w-2/12 bg-bg-main py-3 text-center">
                      Owner
                    </td>
                    <td className="w-2/12 bg-bg-main py-3 text-center">
                      Member
                    </td>
                    <td className="w-2/12 bg-bg-main py-3 text-center">
                      Action
                    </td>
                  </tr>
                  {organizationList.map(list => (
                    <tr className="text-sm font-sp-pro-text-regular text-center">
                      <td className="w-1/12 py-3 text-center ">
                        1
                      </td>
                      <td className="w-3/12 py-3 pl-20">
                        <div className="flex items-center">
                          <div className="relative  mr-3 w-8 h-8 ">
                            <img
                              loading="lazy"
                              className="rounded-full h-full w-full"
                            />
                          </div>
                          <div>Electronic</div>
                        </div>
                      </td>
                      <td className="w-2/12 py-3">
                        Sok polen
                      </td>

                      <td className="w-2/12 py-3 p-2.5 m-auto">
                        <div className='w-full flex justify-center'>
                          <div className="relative  w-8 h-8 ">
                            <img
                              loading="lazy"
                              className="rounded-full h-full w-full"
                            />
                          </div>
                          <div className="relative  w-8 h-8 ">
                            <img
                              loading="lazy"
                              className="rounded-full h-full w-full"
                            />
                          </div>
                          <div className="relative  w-8 h-8 ">
                            <img
                              loading="lazy"
                              className="rounded-full h-full w-full"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="w-2/12 py-3">
                        <div className="flex items-center space-x-4 justify-center">
                          {/* Edit */}
                          <label
                            htmlFor="modalEdit"
                            className="flex items-center border bg-accept bg-opacity-10 border-accept text-accept w-[90px] justify-center px-5 py-1 hover:bg-green hover:bg-opacity-10 cursor-pointer leading-5 rounded-full"
                            aria-label="Edit"
                          >
                            Accept
                          </label>

                        </div>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

            {/* pagination */}
            <div className="w-full flex justify-between items-center text-sm  font-sp-pro-text-medium text-gray-500 h-14 flex-grow-0 px-7">
              <div className="font-sp-pro-text-regular opacity-90">Showing data 1 to 8 of 256K entries</div>
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
      </main>
    </>
  )
}

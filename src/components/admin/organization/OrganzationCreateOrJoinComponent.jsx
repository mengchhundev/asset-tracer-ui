import React from 'react'
import { Combobox } from "@headlessui/react";
import logo from '../../../../src/assets/images/A_Tracer_logo1.png';
import * as Yup from "yup";
// // combobox import
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronUpDownIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { HiChevronDown, HiOutlineCheck } from 'react-icons/hi';
import AddOrgnizaation from './popUp/AddOrgnizaation';
import { useFormik } from 'formik';
import OrganizationService from '../../../redux/services/OrganizationService';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '../../../redux/slices/OrganizationSlice';
import { useNavigate } from 'react-router-dom';

const people = [
  { id: 1, name: 'Short by' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
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

  return (
    <main className="overflow-y-auto pb-4">
      <div className="gap-6 bg-white rounded-xl overflow-hidden shadow-sm mb-5" style={{ boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px" }}>
        <div className="flex flex-col px-5 pt-5 sm:flex-row justify-between mb-5 gap-4">
          <div className='flex flex-nowrap justify-around w-full gap-6 mx-10 my-2'>
            <label htmlFor="my-modal-3" className="w-1/2 border border-bg-primary-strock mx-10 text-center py-6 rounded-xl flex justify-center cursor-pointer shadow-md items-center">
              <div>
                <PlusCircleIcon className="w-12 h-12 text-green rounded-full m-auto mb-3" />
                <p className='text-lg font-sp-pro-text-bold text-green'>Add Organization</p>
              </div>
            </label>
            <div className='w-1/2 border border-bg-primary-strock mx-10 text-green text-center py-6 rounded-md px-8'>
              <form onSubmit={formik.handleSubmit}>
                <div className="text-left mb-4 w-2/3 m-auto">
                  <label className="block text-md ml-1 font-medium leading-6 text-text-color">Join organization with a code</label>
                  <input
                    onInput={handleInputChange}
                    onChange={formik.handleChange}
                    value={newData.code}
                    name="code"
                    type='number'
                    placeholder='Enter code...'
                    className='relative text-text-color w-full px-3 outline-none mt-1 border rounded-lg p-2 border-slate-200 bg-bg-main '
                  />
                  {formik.touched.code && formik.errors?.code ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.code}</p> : null}
                </div>
                <button type='submit' className="w-2/3 rounded text-center bg-primary px-7 py-2 text-sm font-sp-pro-text-medium text-white cursor-pointer">Join</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className=" p-10 bg-white rounded-xl overflow-hidden" style={{ boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px" }}>
        <div className="flex justify-between mb-8 mt-3">
          <div className="flex">
            <h2 className="text-2xl  text-text-color font-sp-pro-text-semibold">
              All Super Category
            </h2>
          </div>

          <div className="flex">
            <div className="grid grid-cols-2 gap-10">
              <div className="col-span-1">
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
                    placeholder="Enter code..."
                  />
                </div>
              </div>

              {/* Sort by */}
              <div className="col-span-1">
                <div className="col-span-2">
                  <Combobox value={selected} onChange={setSelected}>
                    <div className="relative mt-1 z-10">
                      <div className="relative w-full cursor-default bg-white text-left rounded-lg">
                        <Combobox.Input
                          className="w-full py-2 pl-3 pr-10 text-sm text-text-color font-sp-pro-text-regular rounded-lg overflow-hidden border bg-bg-main border-slate-200 focus:outline-primary"
                          displayValue={(person) => person.name}
                          onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
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
                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700 text-text-color font-sp-pro-text-regular">
                              Nothing found.
                            </div>
                          ) : (
                            filteredPeople.map((person) => (
                              <Combobox.Option
                                key={person.id}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-lightorange text-text-color' : 'text-gray-900'
                                  }`
                                }
                                value={person}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                        }`}
                                    >
                                      {person.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-text-color' : 'text-primary'
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
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* data table */}
        <div className="overflow-x-auto text-text-color">
          <table className="table w-full z-0">
            <thead>
              <tr className="text-md tracking-wide text-left ">
                <th>No</th>
                <th>Organizatio Name</th>
                <th>Owner</th>
                <th>Members</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td>
                  <div className="flex items-center">
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
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
                    <div className="text-red-500">KSHRD Center</div>
                  </div>
                </td>
                <td>Sok Polen</td>
                <td>
                  <div className="flex -space-x-3 mt-1">
                    <img className="w-8 h-8 border-[1px] border-gray rounded-full " src="https://api.time.com/wp-content/uploads/2018/05/forest-bathing.jpg" alt="" />
                    <img className="w-8 h-8 border-[1px] border-gray rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11rJ-R6DhFRerxO-IYOYXyrQy2_y2bojiUw&usqp=CAU" alt="" />
                    <img className="w-8 h-8 border-[1px] border-gray rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOeLsKN5saZ4NETws6P8-9Gqhn28_wwmnLw&usqp=CAU" alt="" />
                    <a className="bg-white flex items-center justify-center w-8 h-8 text-xs font-medium text-text-color font-sp-pro-text-regular bg-gray-700 border-[1px] border-gray rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                  </div>
                </td>
                <td>
                  <div className=" bg-lightgreen w-[115px] text-green rounded-lg flex justify-between items-center py-1 px-3">
                    <span className="text-green flex items-center">Accept</span>
                    <span><HiChevronDown className="w-6 h-6 flex" /></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid px-4 py-5 text-sm tracking-wide text-gray-500 uppercase border-t dark:border-y-bg-primary bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          <span className="flex items-center col-span-3">
            Showing 21-30 of 100
          </span>
          <span className="col-span-2"></span>
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button
                    className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                    aria-label="Previous"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-primary border text-white border-slate-200 mx-2">
                    1
                  </button>
                </li>
                <li>
                  <button className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                    2
                  </button>
                </li>
                <li>
                  <button className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                    4
                  </button>
                </li>
                <li>
                  <span className="p-2.5">...</span>
                </li>
                <li>
                  <button className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                    8
                  </button>
                </li>
                <li>
                  <button className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                    9
                  </button>
                </li>
                <li>
                  <button
                    className="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                    aria-label="Next"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
        {/* navigation  */}
      </div>
      {/* table */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <AddOrgnizaation className="modal" />
    </main>
  )
}

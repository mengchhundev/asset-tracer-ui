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
    <main className="overflow-y-auto pb-4 ">
      <div className="mt-5 gap-6 bg-white rounded-xl overflow-hidden mb-5 p-10 px-20 con-Shadow">
        <div className='flex flex-col md:flex-row relative justify-center w-full gap-10 py-4'>
          <label htmlFor="create-organization" className="min-h-[9rem] md:w-1/2 w-full mb-4 hover:border-green hover:border-opacity-40 hover:bg-green hover:bg-opacity-10 md:mb-0 border border-bg-primary outline-none text-center rounded-xl flex justify-center cursor-pointer shadow-md items-center">
            <div>
              <PlusCircleIcon className="w-12 h-12 text-green rounded-full m-auto mb-2" />
              <p className='text-lg font-sp-pro-text-bold text-green'>Add Organization</p>
            </div>
          </label>
          <div className='md:w-1/2 w-full border border-bg-primary outline-none text-green text-center py-6 rounded-md shadow-md px-8'>
            <div className='flex gap-6'>
              <img src={organization_pic} className='w-20 h-20 mt-2' />

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
                    className='relative text-secondary px-3 w-full outline-none mt-2 border rounded-lg p-2 border-slate-200 bg-bg-main '
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
  )
}

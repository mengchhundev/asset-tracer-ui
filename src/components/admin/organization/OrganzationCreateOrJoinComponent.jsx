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
import CreateOrganizatoinComponent from './popUp/CreateOrganizatoinComponent';
import organization_pic from '../../../assets/images/organization.png'

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
      <div className="mt-5 gap-6 bg-white rounded-xl overflow-hidden shadow-sm mb-5" style={{ boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px" }}>
        <div className="flex flex-col px-5 pt-5 sm:flex-row justify-between mb-5 gap-4">
          <div className='flex md:flex-row flex-wrap justify-around w-full gap-6 mx-10 my-2 py-4'>
            <label htmlFor="create-organization" className="lg:w-1/3 min-h-[9rem] mb-4 md:mb-0 md:w-1/2 w-full mx-10 border border-bg-primary outline-none text-center rounded-xl flex justify-center cursor-pointer shadow-md items-center">
              <div>
                <PlusCircleIcon className="w-8 h-8 text-green rounded-full m-auto mb-2" />
                <p className='text-lg font-sp-pro-text-bold text-green'>Add Organization</p>
              </div>
            </label>
            <div className='lg:w-1/3 md:w-1/2 w-full border border-bg-primary outline-none mx-10 text-green text-center py-6 rounded-md shadow-md px-8'>
              <div className='flex gap-6'>
                <img src={organization_pic} className='w-20 h-20 mt-2' />

                <form onSubmit={formik.handleSubmit} className='flex flex-wrap gap-4'>
                  <div className="text-left">
                    <label className="block text-md ml-1 font-semibold leading-6 text-text-color">Join organization with a code</label>
                    <input
                      onInput={handleInputChange}
                      onChange={formik.handleChange}
                      value={newData.code}
                      name="code"
                      type='number'
                      placeholder='Enter code...'
                      className='relative text-text-color w-full px-3 outline-none mt-2 border rounded-lg p-2 border-slate-200 bg-bg-main '
                    />
                    {formik.touched.code && formik.errors?.code ? <p className="text-reject font-sp-pro-text-regular text-sm mt-2 pl-1">{formik.errors.code}</p> : null}
                  </div>
                  <button type='submit' className=" rounded text-center bg-primary px-7 py-2 text-sm font-sp-pro-text-medium text-white cursor-pointer">Join</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

 
      <input type="checkbox" id="create-organization" className="modal-toggle" />
      <CreateOrganizatoinComponent className="modal" />
    </main>
  )
}

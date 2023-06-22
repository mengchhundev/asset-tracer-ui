import React, { Fragment, useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import gift from "../../../../assets//icon/gift.svg";
import electronic from "../../../../assets//icon/electronic.svg";
import office from "../../../../assets//icon/office.svg";
import furniture from "../../../../assets//icon/furniture.svg";
import addIcon from "../../../../assets//icon/addIcon.svg";
import placeImg from "../../../../assets/icon/placeImg.svg";
import { FiSave } from "react-icons/fi";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setAllSuperCategory } from "../../../../redux/slices/SuperCategorySlice";
import FileUploadService from "../../../../redux/services/FileUploadService";

const sort = [
  {
    id: "", name: "Default"
  },
  {
    id: "name", name: "Name"
  },
  {
    id: "created_at", name: "Created Date"
  },
];


export default function AddNormalCategory() {

  const dispatch = useDispatch();
  const organization = JSON.parse(sessionStorage.getItem("organization"));
  const orgId = organization.id;

  let formData = new FormData();

  const [selectedFile, setSelectedFile] = useState("");
  const [newData, setNewData] = useState({
    id: "",
    name: "",
    icon: "",
    superCategoryId: "",
    organizationId: orgId,
  });

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    formData.append("file", event.target.files[0]);
  };

  const handleGetAllSuperCategory = () => {
    SuperCategoryService.getAllSuperCategores().then((res) => {
      if (res.data.success) {
        dispatch(setAllSuperCategory(res.data.payload));
      }
    });
  };

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSelectedSort = (val) => {
    setSelectedSort(val)
  }

  const handleInputSearch = (e) => {
    setItemName(e.target.value)
  };

  const formik = useFormik({
    initialValues: newData,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
    }),

    onSubmit: (val, { resetForm }) => {
     
      resetForm((val = { id: "", name: "", organizationId: "" }));
      setNewData({ id: "", name: "", organizationId: "" });
      formik.setValues({ id: "", name: "", organizationId: "" });
    },
  });

  return (
    <>
      <div className="modal">
        <div className=" modal-box relative rounded-lg">
          <div className="absolute top-7 right-7">
            <label htmlFor="addnormalCategory">
              <RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
            </label>
          </div>
          <div className=" flex justify-between">
            <div className="flex">
              <img src={gift} className="h-12 rounded-lg w-12 " />
              <p className="mt-2 items-center font-sp-pro-text-semibold text-lg pl-3 text-text-color">
                Create Normal Category
              </p>
            </div>
          </div>
          <div className=" border border-bg-primary rounded-md p-3 my-3">

            <div>
              <p className="text-center">Choose Icon</p>
              <div className="flex">
                <div className="p-2">
                  <label>
                    {selectedFile ? (
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        className="h-14 rounded-full w-14 "
                      />
                    ) : (
                      <img className="h-14 rounded-lg w-14" src={placeImg} />
                    )}
                  </label>
                </div>
                <div className="p-2 mt-4">
                  <label>
                    <img src={electronic} className="h-9 rounded-lg w-9 " />
                  </label>
                </div>
                <div className="p-2 mt-4">
                  <label>
                    <img src={office} className="h-9 rounded-lg w-9 " />
                  </label>
                </div>

                <div className="p-2 mt-4">
                  <label>
                    <img src={furniture} className="h-9 rounded-lg w-9 " />
                  </label>
                </div>

                <div className="p-2 mt-4">
                  <label>
                    <input
                      type="file"
                      className="hidden"
                      id="logo"
                      onChange={handleFileSelect}
                    />
                    <img src={addIcon} className="h-9 rounded-lg w-9 " />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="pt-2">
            <div className="space-y-5">
              




              <div className="z-20 mb-2 md:mb-0 lg:mb-0 xl:mb-0">
                <label
                  htmlFor=""
                  className="flex text-sm text-text-color font-sp-pro-text-regular px-1 py-2"
                >
                  Normal Category
                </label>
                <input
                  // onInput={}
                  // onChange={formik.handleChange}
                  // value={addNormal.name}
                  name="name"
                  className=" w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                  type="text"
                  placeholder="Normal category"
                />
              </div>
            </div>

            <div className="flex justify-end flex-row space-x-4 mt-10">
              <div className="">
                <label
                  htmlFor="addnormalCategory"
                  class="rounded-md bg-bg-primary py-2 cursor-pointer px-5 text-sm font-sp-pro-text-medium text-text-color w-full flex items-center"
                >
                  <RiCloseFill className="cursor-pointer h-5 w-5 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
                  &nbsp; Cancel
                </label>
              </div>

              <div className="">
                <button type="submit">
                  <label
                    htmlFor="addnormalCategory"
                    class="hover:bg-green hover:bg-opacity-90 rounded-md cursor-pointer bg-green py-2 px-5 text-sm font-sp-pro-text-medium text-white hover:opacity-90 w-full flex items-center"
                  >
                    <FiSave className="text-lg" /> &nbsp; Add
                  </label>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
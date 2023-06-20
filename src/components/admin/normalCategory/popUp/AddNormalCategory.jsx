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
import NormalCategoryService, {
  addNormalCategory,
} from "../../../../redux/services/NormalCategoryService";
import SuperCategoryService, {
  getAllSuperCategory,
} from "../../../../redux/services/SuperCategoryService";
import { postNormalCategory } from "../../../../redux/slices/NormalCategorySlice";

function AddNormalCategory({ props, val }) {
  const dispatch = useDispatch();
  //organization Id
  const organization = JSON.parse(sessionStorage.getItem("organization"));
  const orgId = organization.id;
  let formData = new FormData();
  const [selectedFile, setSelectedFile] = useState("");
  const [newData, setData] = useState('');

  const handleGetAllSuperCategory = () => {
    SuperCategoryService.getAllSuperCategores().then((res) => {
      if (res.data.success) {
        console.log(res);
        dispatch(setAllSuperCategory(res.data.payload));
      }
    });
  };

  useEffect(() => {
    handleGetAllSuperCategory();
  }, []);

  //superCategory
  const superCategory = useSelector((state) => state?.superCategory?.data);

  const [selected, setSelected] = useState(superCategory);
  useEffect(() => {
    console.log("Selected Super", selected);
  }, [selected]);

  //   input value
  const [addNormal, setAddNormal] = useState({
    name: "",
    icon: "",
  });

  const handleNormalInputChang = (e) => {
    setAddNormal({ ...addNormal, name : e.target.value ,icon : newData });
  };

  //post to endpoint
  const handlePostNormalCategory = () => {
    addNormalCategory(addNormal, selected, orgId).then((r) =>
      dispatch(postNormalCategory(r?.data?.payload))
    );
  };

  // select file
  const handleFileSelect = (event) => {
    console.log("File : ", event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    formData.append("file", event.target.files[0]);
    FileUploadService.storeFile(formData, localStorage.getItem("token"))
      .then(
        (res) => {
          console.log("res : ", res);
          setData(res.data.payload );
        },
        (e) => console.log(e)
      )
      .catch((e) => console.log("Error upload file", e));
  };
  console.log("Selected file : ", formData);
  console.log("New Data : ", newData);

  const formik = useFormik({
    initialValues: addNormal,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
    }),
    onSubmit: (val, { resetForm }) => {
      resetForm(
        (val = {
          name: "",
          icon: "",
          superCategoryId: "",
          organizationId: orgId,
        })
      );
      handlePostNormalCategory();
      console.log("after submit");
      setAddNormal({
        name: "",
        icon: "",
        superCategoryId: "",
        organizationId: orgId,
      });
    },
  });
  useEffect(() => {
    formik.setValues(addNormal);
  }, []);

  const [query, setQuery] = useState("");

  const filteredsuperCategory =
    query === ""
      ? superCategory
      : superCategory.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <>
      <div className=" modal">
        <div className=" modal-box relative rounded-lg">
          <div className="absolute top-7 right-7">
            <label htmlFor="addnormalCategory">
              <RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
            </label>
          </div>
          <div className=" flex justify-between">
            <div className="flex">
              <img src={gift} className="h-12 rounded-lg w-12 " />
              <p className="mt-2 flexF items-center font-sp-pro-text-regular text-xl pl-6  text-text-color">
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
              <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                <label className="py-1">Super-Category</label>
                <Combobox
                  value={selected}
                  onChange={setSelected}
                  className="z-20"
                >
                  <div className="relative z-20">
                    <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                      <Combobox.Input
                        className="w-full border-[#E1E9EE] border rounded-lg bg-[#F9FBFF] py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                        displayValue={(item) => item.name}
                        onInput={handleNormalInputChang}
                        // onChange={formik.handleChange}
                        // value={addNormal.superCategoryId}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Super-category" // Add placeholder attribute
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
                        {filteredsuperCategory.length === 0 && query !== "" ? (
                          <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                            Nothing found.
                          </div>
                        ) : (
                          filteredsuperCategory.map((item, index) => (
                            <Combobox.Option
                              key={index + 1}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "text-primary bg-custom-yellow-showdow-light"
                                    : "text-text-color"
                                }`
                              }
                              value={item}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {item.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active
                                          ? "text-white"
                                          : "text-text-color"
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

              <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                <label
                  htmlFor=""
                  className="flex text-sm text-text-color font-sp-pro-text-regular py-1"
                >
                  Normal Category
                </label>
                <input
                  onInput={handleNormalInputChang}
                  onChange={formik.handleChange}
                  value={addNormal.name}
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
export default AddNormalCategory;
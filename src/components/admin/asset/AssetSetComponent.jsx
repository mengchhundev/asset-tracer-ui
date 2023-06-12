import React, { useEffect, useState } from "react";
import upload_placeholder from "../../../assets/images/placeholder/upload_placeholder.svg";

import ItemComponent from "./filtter/ItemComponent";
import CategoryComponent from "./filtter/CategoryComponent";
import StatusComponent from "./filtter/StatusComponent";
import RoomComponent from "./filtter/RoomComponent";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { FiSave } from "react-icons/fi";
import * as Yup from "yup";
import { useFormik } from "formik";
import { addAsset } from "../../../redux/services/AssetService";


function AssetAddComponent(props) {
  // organization id
  const organization = sessionStorage.getItem("organization");
  const getOrganizationDetail = JSON.parse(organization);
  const orgId = getOrganizationDetail.id;

  // Id item detail
  const itemId = "e00005d4-f6ab-437e-a46d-dac94ead68a0";

  //post data
  const [assetNewData, setAssetNewData] = useState({
    owner: "",
    status: "",
    labelCode: "",
    serialCode: "",
    description: "",
    itemDetailId: itemId,
    organizationId: orgId,
  });
  // console.log("data : ", assetNewData);

  //value input
  const handleAssetInputChange = (e) => {
    setAssetNewData({ ...assetNewData, [e.target.name]: e.target.value });
  };

  const handleInputAsset = () => {
    addAsset(assetNewData);
  };

  const formik = useFormik({
    initialValues: assetNewData,
    validationSchema: Yup.object().shape({
      owner: Yup.string().required("Name is required"),
      labelCode: Yup.string().required("label code is required"),
      serialCode: Yup.string().required("Serial code is requirred"),
    }),
    onSubmit: (val, { resetForm }) => {
      resetForm(
        (val = {
          owner: "",
          labelCode: "",
          serialCode: "",
          description: "",
          itemDetailId: itemId,
          organizationId: orgId,
        })
      );
      handleInputAsset();
      console.log("after submit");
      setAssetNewData({
        owner: "",
        labelCode: "",
        serialCode: "",
        description: "",
        itemDetailId: itemId,
        organizationId: orgId,
      });
    },
  });

  useEffect(() => {
    formik.setValues(assetNewData);
  }, []);

  const [query, setQuery] = useState("");
  //Upload image
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [selectedFile, setSelectedFile] = useState("");
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  let unique_id = "";
  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = new Image();
        image.onload = () => {
          setImageDimensions({
            width: image.width,
            height: image.height,
          });
        };
        image.src = event.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);
  const handleUpload = () => {
    unique_id = uuid();

    if (selectedFile) {
      const uploadTask = ref(storage, `images/${unique_id}`);
      uploadBytes(uploadTask, selectedFile).then((res) => {
        console.log(res);
      });
    }
  };
  return (
    <>
      <main
        className="overflow-y-auto pb-20 bg-white rounded-xl relative"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
        }}
      >
        {/* Add Asset */}
        <div className="text-2xl font-sp-pro-text-bold text-text-color py-4 px-[40px]">
          <h1 className="flex items-center">
            <IoMdAddCircleOutline className="text-yellow w-5 h-5" /> &nbsp;Add
            Asset
          </h1>
        </div>

        <div className="w-full">
          <hr className="border-[#E1E9EE] border-1" />
        </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="md:flex mt-1 sm:flex-row">
            <div className="xl:w-2/3 md:w-1/2 ">
              <div className="lg:mx-5 mx-0 p-5 rounded-md mb-1 text-text-color text-opacity-90 text-xs font-sp-pro-text-regular">
                <div className="xl:flex lg:flex-row justify-between lg:space-x-5">
                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Select Item
                      <span className="text-red-500">*</span>
                    </label>
                    <ItemComponent className="z-60" />
                  </div>

                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Owner <span className=" text-red-500">*</span>
                    </label>
                    <input
                      className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2.5 pl-3 pr-10 text-xs text-text-color outline-none focus:border-primary placeholder-text-color placeholder-opacity-50"
                      type="text"
                      onInput={handleAssetInputChange}
                      onChange={formik.handleChange}
                      value={assetNewData.owner}
                      name="owner"
                      placeholder="Owner Name"
                    />
                    {formik.touched.owner && formik.errors?.owner ? (
                      <p className="text-reject text-xs mt-2 pl-1">
                        {formik.errors.owner}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="xl:flex lg:flex-row justify-between lg:space-x-5">
                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Label Code
                      <span className=" text-red-500">*</span>
                    </label>
                    <input
                      className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2.5 pl-3 pr-10 text-text-color outline-none focus:border-primary placeholder-text-color placeholder-opacity-50 text-xs"
                      type="text"
                      onInput={handleAssetInputChange}
                      onChange={formik.handleChange}
                      value={assetNewData.labelCode}
                      name="labelCode"
                      placeholder="Label Code"
                    />
                    {formik.touched.labelCode && formik.errors?.labelCode ? (
                      <p className="text-reject text-xs mt-2 pl-1">
                        {formik.errors.labelCode}
                      </p>
                    ) : null}
                  </div>

                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Serial Code <span className=" text-red-500">*</span>
                    </label>
                    <input
                      className="mt-1 w-full border-[#E1E9EE] border rounded-lg py-2.5 pl-3 pr-10  text-text-color outline-none focus:border-primary placeholder-text-color placeholder-opacity-50 text-xs"
                      type="text"
                      onInput={handleAssetInputChange}
                      onChange={formik.handleChange}
                      value={assetNewData.serialCode}
                      name="serialCode"
                      placeholder="Serial Code"
                    />
                    {formik.touched.serialCode && formik.errors?.serialCode ? (
                      <p className="text-reject text-xs mt-2 pl-1">
                        {formik.errors.serialCode}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="xl:flex lg:flex-row justify-between lg:space-x-5">
                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Select Category <span className=" text-red-500">*</span>
                    </label>
                    <CategoryComponent />
                  </div>

                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Select Status <span className=" text-red-500">*</span>
                    </label>
                    <StatusComponent />
                  </div>
                </div>

                <div className="xl:flex lg:flex-row justify-between lg:space-x-5">
                  <div className="w-full xl:p-2 lg:py-2 p-2">
                    <label
                      htmlFor=""
                      className="text-sm text-text-color font-sp-pro-text-regular"
                    >
                      Select Room <span className=" text-red-500">*</span>
                    </label>
                    <RoomComponent />
                  </div>

                  <div className="w-full xl:p-2 lg:py-2 p-2"></div>
                </div>

                <div className="w-full p-2 lg:mt-0 mt-[-15px]">
                  <label
                    for="message"
                    onInput={handleAssetInputChange}
                    value={assetNewData.description}
                    className="block mb-1 text-sm text-text-color font-sp-pro-text-regular"
                  >
                    Description <span className=" text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full border-[#E1E9EE] rounded-lg border text-text-color outline-none focus:border-primary placeholder-text-color placeholder-opacity-50 text-xs"
                    placeholder="Description..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 md:mt-6 mt-[-24px]">
              <div className="item-center w-full rounded-xl   ">
                <div className="block lg:mx-5 p-7">
                  <div className=" flex items-center justify-center text-center rounded-lg md:h-[390px] h-[250px] border border-dashed border-yellow">
                    <div className="">
                      <div className="w-52 relative">
                        {selectedFile ? (
                          <img
                            src={URL.createObjectURL(selectedFile)}
                            className="h-full m-auto"
                          />
                        ) : (
                          <img
                            className="block m-auto "
                            src={upload_placeholder}
                            alt=""
                          />
                        )}
                      </div>
                      <div className="flex justify-center">
                        <label
                          htmlFor="fileInput"
                          className="browseButton text-text-color font-sp-pro-text-regular"
                        >
                          <p className="border w-min p-2 px-12 mt-3 border-[#E1E9EE] shadow-sm rounded-md text-text-color font-sp-pro-text-regular cursor-pointer hover:bg-bg-primary">
                            Browse
                          </p>
                          <input
                            id="fileInput"
                            type="file"
                            onChange={handleFileSelect}
                            accept="image/*"
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* button */}
                  <div className="flex justify-end flex-row space-x-4 mt-10">
                    <div className="">
                      <Link to={"/asset"}>
                        <button class="rounded-md bg-bg-primary py-2 cursor-pointer px-5 text-sm font-sp-pro-text-medium text-text-color w-full flex items-center">
                          <RiCloseFill className="text-lg" /> &nbsp; Cancel
                        </button>
                      </Link>
                    </div>

                    <div className="">
                      <button
                        type="submit"
                        class="hover:bg-pending-hover rounded-md cursor-pointer bg-primary py-2 px-5 text-sm font-sp-pro-text-medium text-white hover:opacity-90 w-full flex items-center"
                      >
                        <FiSave className="text-lg" />
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      </main>
    </>
  );
}

export default AssetAddComponent;
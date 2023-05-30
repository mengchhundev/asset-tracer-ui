import { Listbox, Transition } from "@headlessui/react";
import axios from "axios";
import { Container } from "postcss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import trash from "../../../assets/images/trash.png";
import pc from "../../../assets/images/pc.png";
import furniture from "../../../assets/images/furniture.png";
import gift from "../../../assets/images/gift.png";
import book from "../../../assets/images/book.png";
import cross from "../../../assets/images/cross.png";

export default function CategoryComponent() {
  const [state, setState] = useState([]);
  useEffect(() => {
    getMethod();
  }, []);

  const getMethod = () => {
    axios
      .get("http://localhost:8080/api/v1/normal-categories?page=1&size=4")
      .then((data) => {
        console.log(data.data.payload);
        console.log("state", state);
        setState(data.data.payload[0]);
      });
  };

  // const postMethod = () =>{
  //   axios.post("http://localhost:8080/api/v1/normal-categories").then((data) => {
  //     console.log(data)
  //   })
  // }

  return (
    <main className="h-full overflow-y-auto">
      <div className="mt-5 p-10  gap-6 bg-white rounded-3xl overflow-hidden">
        <div className="grid grid-flow-row grid-cols-12">
          <div className="col-span-3">
            <h2 className="text-xl text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
              All <span className="text-pending">Normal</span> Category
            </h2>
            <h4 className="mb-8 mt-3  text-green dark:text-gray-300">
              Active categories
            </h4>
          </div>

          <div className="col-span-9 grid grid-cols-12">
            <div className="col-span-6">
              <div className="relative w-full max-w-md">
                <div className="relative w-full max-w-md mr-6 focus-within:text-black border rounded-lg p-2 border-slate-200 bg-bg-main">
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
                    placeholder="Search..."
                    aria-label="Search"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-6 text-right">
              {/* Button Create */}
              <label
                onClick={getMethod}
                htmlFor="my-modal-1"
                className="border-primary border-2 text-primary hover:text-text-color bg-bl py-2 px-4 uppercase rounded-xl"
                aria-label="Edit"
              >
                Add Normal Category
              </label>
              <input type="checkbox" id="my-modal-1" className="modal-toggle" />
              {/* Create Popup */}
              <div className="modal">
                {/* start of modal box  */}
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-1"
                    className="font-semibold text-xl absolute right-8 top-8"
                  >
                    ✕
                  </label>
                  <div className="flex justify-start items-center pb-8">
                    <img src={gift} width={50} />
                    <h3 className="text-lg font-bold text-text-color pl-5">
                      Create Normal Category
                    </h3>
                  </div>
                  <div className="border py-5 px-5 flex justify-start items-center">
                    <img src={furniture} width={70} />
                    <div className="flex pl-5 flex-col justify-start">
                      <p className="pb-3">Choose Icon</p>
                      <div className="flex space-x-5">
                        <button>
                          <img src={pc} width={50} />
                        </button>
                        <button>
                          <img src={furniture} width={50} />
                        </button>
                        <button>
                          <img src={book} width={50} />
                        </button>
                        <button>
                          <img src={cross} width={50} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <select className="select select-bordered w-full ">
                    <option disabled selected>
                      Super Category
                    </option>
                    <option>Normal Apple</option>
                    <option>Normal Orange</option>
                    <option>Normal Tomato</option>
                  </select>
                  <div className="mb-6">
                    <label className="block mb-2 text-lg mt-4 font-medium text-text-color float-left">
                      Name
                    </label>
                    <input
                      type="text"
                      id="base-input"
                      className="bg-gray-50 border text-sm rounded-lg  block w-full p-2.5"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <div className="modal-action">
                      <label
                        htmlFor="my-modal-1"
                        className="bg-[#F4F4F4] text-text-color font-light hover:bg-[#F4F4F4] border-2 border-[#D0D5DD] btn"
                      >
                        Cancel
                      </label>
                    </div>
                    <div className="modal-action">
                      <label className="bg-pending text-[#F4F4F4] font-light border-2 border-pending hover:bg-pending btn">
                        Save
                      </label>
                    </div>
                  </div>
                </div>
                {/* end of modal box */}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto text-text-color">
          <table className="table w-full">
            <thead>
              <tr className="text-md tracking-wide text-left">
                <th className="bg-white">No</th>
                <th className="bg-white">Normal Category Name</th>
                <th className="bg-white">Super Category</th>
                <th className="bg-white">Created Date</th>
                <th className="bg-white">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
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
                    <div>gjf</div>
                  </div>
                </td>
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
                    <div>khjkgj</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>
                  <div className="flex items-center space-x-4 w-20">
                    {/* Button Edit */}
                    <label
                      htmlFor="my-modal-2"
                      className="flex items-center border-2 hover:font-semibold hover:text-text-color border-accept text-accept px-10 justify-between py-2 font-semibold leading-5 rounded-lg"
                      aria-label="Edit"
                    >
                      Edit
                    </label>

                    {/* Edit Popup */}
                    <input
                      type="checkbox"
                      id="my-modal-2"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <label
                          htmlFor="my-modal-2"
                          className="font-semibold text-xl absolute right-8 top-8"
                        >
                          ✕
                        </label>
                        <div className="flex justify-start items-center pb-8">
                          <img src={gift} width={50} />
                          <h3 className="text-lg font-bold text-text-color pl-5">
                            Update Normal Category
                          </h3>
                        </div>
                        <div className="border py-5 px-5 flex justify-start items-center">
                          <img src={furniture} width={70} />
                          <div className="flex pl-5 flex-col justify-start">
                            <p className="pb-3">Choose Icon</p>
                            <div className="flex space-x-5">
                              <button>
                                <img src={pc} width={50} />
                              </button>
                              <button>
                                <img src={furniture} width={50} />
                              </button>
                              <button>
                                <img src={book} width={50} />
                              </button>
                              <button>
                                <img src={cross} width={50} />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <label className="block mb-2 text-lg pt-5 font-medium text-text-color">
                            Name
                          </label>
                          <input
                            type="text"
                            className="border text-lg rounded-lg w-full py-3 px-3"
                          />
                        </div>
                        <div className="flex justify-end space-x-4">
                          <div className="modal-action">
                            <label
                              htmlFor="my-modal-2"
                              className="bg-[#F4F4F4] text-text-color font-light hover:bg-[#F4F4F4] border-2 border-[#D0D5DD] btn"
                            >
                              Cancel
                            </label>
                          </div>
                          <div className="modal-action">
                            <label className="bg-accept text-[#F4F4F4] font-light border-2 border-accept hover:bg-accept btn">
                              Save Change
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Button Delete */}
                    <label
                      htmlFor="my-modal-3"
                      className="flex items-center border-2 bg-[#FFC5C5] hover:text-text-color hover:font-semibold hover:bg-[#FFC5C5] border-reject text-reject justify-between px-8 py-2 font-semibold leading-5 text-purple-600 rounded-lg"
                      aria-label="Delete"
                    >
                      Delete
                    </label>

                    {/* Delete Popup */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <div className="flex justify-start">
                          <img
                            src={trash}
                            width={50}
                            className="inline-block"
                          />
                          <div className="pl-2">
                            <h3 className="text-lg font-bold text-text-color">
                              Delete
                            </h3>
                            <p className="pt-1 text-text-color">
                              Are you sure want to delete this post?
                            </p>
                          </div>
                        </div>
                        <label
                          htmlFor="my-modal-3"
                          className="font-semibold text-xl absolute right-8 top-6"
                        >
                          ✕
                        </label>

                        <div className="flex justify-end space-x-4">
                          <div className="modal-action">
                            <label
                              htmlFor="my-modal-3"
                              className="bg-[#F4F4F4] font-light text-text-color hover:bg-[#F4F4F4] border-2 border-[#D0D5DD] btn"
                            >
                              Cancel
                            </label>
                          </div>
                          <div className="modal-action">
                            <label className="bg-[#FFC5C5] font-light text-reject border-2 border-reject hover:bg-[#FFC5C5] btn">
                              Delete
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>1</td>
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
                    <div>Electronic</div>
                  </div>
                </td>
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
                    <div>Electronic</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>
                  <div className="flex items-center space-x-4 w-20">
                    {/* Button Edit */}
                    <label
                      htmlFor="my-modal-2"
                      className="flex items-center border-2 hover:font-semibold hover:text-text-color border-accept text-accept px-10 justify-between py-2 font-semibold leading-5 rounded-lg"
                      aria-label="Edit"
                    >
                      Edit
                    </label>

                    {/* Edit Popup */}
                    <input
                      type="checkbox"
                      id="my-modal-2"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <label
                          htmlFor="my-modal-2"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          Congratulations random Internet user!
                        </h3>
                        <p className="py-4">
                          You've been selected for a chance to get one year of
                          subscription to use Wikipedia for free!
                        </p>
                      </div>
                    </div>
                    {/* Button Delete */}
                    <label
                      htmlFor="my-modal-3"
                      className="flex items-center border-2 bg-[#FFC5C5] hover:text-text-color hover:font-semibold hover:bg-[#FFC5C5] border-reject text-reject justify-between px-8 py-2 font-semibold leading-5 text-purple-600 rounded-lg"
                      aria-label="Delete"
                    >
                      Delete
                    </label>

                    {/* Delete Popup */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <div>
                          <h3 className="text-lg font-bold">Delete</h3>
                          <p className="py-4">
                            Are you sure want to delete this post?
                          </p>
                        </div>
                        <label
                          htmlFor="my-modal-3"
                          className="font-semibold text-xl absolute right-8 top-6"
                        >
                          ✕
                        </label>

                        <div className="flex justify-end space-x-4">
                          <div className="modal-action">
                            <button href="#" className="btn">
                              Cancel
                            </button>
                          </div>
                          <div className="modal-action">
                            <a href="#" className="btn">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
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
                    <div>Electronic</div>
                  </div>
                </td>
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
                    <div>Electronic</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>
                  <div className="flex items-center space-x-4 w-20">
                    {/* Button Edit */}
                    <label
                      htmlFor="my-modal-2"
                      className="flex items-center border-2 hover:font-semibold hover:text-text-color border-accept text-accept px-10 justify-between py-2 font-semibold leading-5 rounded-lg"
                      aria-label="Edit"
                    >
                      Edit
                    </label>

                    {/* Edit Popup */}
                    <input
                      type="checkbox"
                      id="my-modal-2"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <label
                          htmlFor="my-modal-2"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          Congratulations random Internet user!
                        </h3>
                        <p className="py-4">
                          You've been selected for a chance to get one year of
                          subscription to use Wikipedia for free!
                        </p>
                      </div>
                    </div>
                    {/* Button Delete */}
                    <label
                      htmlFor="my-modal-3"
                      className="flex items-center border-2 bg-[#FFC5C5] hover:text-text-color hover:font-semibold hover:bg-[#FFC5C5] border-reject text-reject justify-between px-8 py-2 font-semibold leading-5 text-purple-600 rounded-lg"
                      aria-label="Delete"
                    >
                      Delete
                    </label>

                    {/* Delete Popup */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <div>
                          <h3 className="text-lg font-bold">Delete</h3>
                          <p className="py-4">
                            Are you sure want to delete this post?
                          </p>
                        </div>
                        <label
                          htmlFor="my-modal-3"
                          className="font-semibold text-xl absolute right-8 top-6"
                        >
                          ✕
                        </label>

                        <div className="flex justify-end space-x-4">
                          <div className="modal-action">
                            <a href="#" className="btn">
                              Cancel
                            </a>
                          </div>
                          <div className="modal-action">
                            <a href="#" className="btn">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
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
                    <div>Electronic</div>
                  </div>
                </td>
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
                    <div>Electronic</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>
                  <div className="flex items-center space-x-4 w-20">
                    {/* Button Edit */}
                    <label
                      htmlFor="my-modal-2"
                      className="flex items-center border-2 hover:font-semibold hover:text-text-color border-accept text-accept px-10 justify-between py-2 font-semibold leading-5 rounded-lg"
                      aria-label="Edit"
                    >
                      Edit
                    </label>

                    {/* Edit Popup */}
                    <input
                      type="checkbox"
                      id="my-modal-2"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <label
                          htmlFor="my-modal-2"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          Congratulations random Internet user!
                        </h3>
                        <p className="py-4">
                          You've been selected for a chance to get one year of
                          subscription to use Wikipedia for free!
                        </p>
                      </div>
                    </div>
                    {/* Button Delete */}
                    <label
                      htmlFor="my-modal-3"
                      className="flex items-center border-2 bg-[#FFC5C5] hover:text-text-color hover:font-semibold hover:bg-[#FFC5C5] border-reject text-reject justify-between px-8 py-2 font-semibold leading-5 text-purple-600 rounded-lg"
                      aria-label="Delete"
                    >
                      Delete
                    </label>

                    {/* Delete Popup */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <div>
                          <h3 className="text-lg font-bold">Delete</h3>
                          <p className="py-4">
                            Are you sure want to delete this post?
                          </p>
                        </div>
                        <label
                          htmlFor="my-modal-3"
                          className="font-semibold text-xl absolute right-8 top-6"
                        >
                          ✕
                        </label>

                        <div className="flex justify-end space-x-4">
                          <div className="modal-action">
                            <a href="#" className="btn">
                              Cancel
                            </a>
                          </div>
                          <div className="modal-action">
                            <a href="#" className="btn">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
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
                    <div>Electronic</div>
                  </div>
                </td>
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
                    <div>Electronic</div>
                  </div>
                </td>
                <td>6/10/2020</td>
                <td>
                  <div className="flex items-center space-x-4 w-20">
                    {/* Button Edit */}
                    <label
                      htmlFor="my-modal-2"
                      className="flex items-center border-2 hover:font-semibold hover:text-text-color border-accept text-accept px-10 justify-between py-2 font-semibold leading-5 rounded-lg"
                      aria-label="Edit"
                    >
                      Edit
                    </label>

                    {/* Edit Popup */}
                    <input
                      type="checkbox"
                      id="my-modal-2"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <label
                          htmlFor="my-modal-2"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold">
                          Congratulations random Internet user!
                        </h3>
                        <p className="py-4">
                          You've been selected for a chance to get one year of
                          subscription to use Wikipedia for free!
                        </p>
                      </div>
                    </div>
                    {/* Button Delete */}
                    <label
                      htmlFor="my-modal-3"
                      className="flex items-center border-2 bg-[#FFC5C5] hover:text-text-color hover:font-semibold hover:bg-[#FFC5C5] border-reject text-reject justify-between px-8 py-2 font-semibold leading-5 text-purple-600 rounded-lg"
                      aria-label="Delete"
                    >
                      Delete
                    </label>

                    {/* Delete Popup */}
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
                        <div>
                          <h3 className="text-lg font-bold">Delete</h3>
                          <p className="py-4">
                            Are you sure want to delete this post?
                          </p>
                        </div>
                        <label
                          htmlFor="my-modal-3"
                          className="font-semibold text-xl absolute right-8 top-6"
                        >
                          ✕
                        </label>

                        <div className="flex justify-end space-x-4">
                          <div className="modal-action">
                            <a href="#" className="btn">
                              Cancel
                            </a>
                          </div>
                          <div className="modal-action">
                            <a href="#" className="btn">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid px-4 py-5 text-sm tracking-wide text-gray-500 uppercase border-t dark:border-y-bg-primary bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          <span className="flex items-center col-span-3">Showing 21-30 of 100</span>
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
      </div>
    </main>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";

const InvoiceComponent = () => {
  const [dropdown, setDropdown] = useState();
  return (
    <div>
      <main className="h-full overflow-y-auto">
        <div className="mx-5 mt-5 p-10 gap-6 bg-white rounded-3xl overflow-hidden">
          <div className="grid grid-flow-row grid-cols-12">
            <div className="col-span-3">
              <h2 className="text-xl text-gray-700 dark:text-gray-200 font-sp-pro-text-semibold">
                All Invoice
              </h2>
              <h4 className="mb-8 mt-3  text-green dark:text-gray-300">
                Active Invoice
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
                  class="border-primary border-2 text-primary hover:text-text-color bg-bl py-2 px-4 uppercase rounded-xl"
                  aria-label="Edit"
                >
                  Add Invoice
                </label>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto text-text-color">
            <table className="table w-full">
              <thead className="text-md tracking-wide text-center">
                <tr>
                  <th className="bg-white">No</th>
                  <th className="bg-white">Invoice</th>
                  <th className="bg-white">Suplier</th>
                  <th className="bg-white">Purchase</th>
                  <th className="bg-white">Date</th>
                  <th className="bg-white">Quantity</th>
                  <th className="bg-white">Total Price</th>
                  <th className="bg-white">More</th>
                </tr>
              </thead>
              <tbody className="text-md tracking-wide text-center">
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>phone</td>
                  <td>
                    <div class="flex items-center">
                      <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          class="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>khjkgj</div>
                    </div>
                  </td>
                  <td>6/10/2020</td>
                  <td>4</td>
                  <td>2000$</td>
                  <td>
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <label
                        tabIndex={0}
                        className="bg-bg-primary w-7 h-7 rounded-full flex justify-center cursor-pointer items-center hover:bg-bg-primary-strock focus:bg-bg-primary-strock focus:text-text-color text-text-color hover:text-text-color"
                      >
                        <BiDotsHorizontalRounded className="w-6 h-6 rotate-90" />
                      </label>
                      <ul className="dropdown-content right-3 menu p-2 shadow bg-base-100 rounded-md mt-2 w-52">
                        <li>
                          <Link
                            to={"/view-invoice"}
                            className="hover:bg-primary"
                          >
                            View invoice
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/update-invoice"}
                            className="hover:bg-primary"
                          >
                            Update invoice
                          </Link>
                        </li>
                        <li>
                          <Link className="hover:bg-primary">
                            Download invoice
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>Laptop</td>
                  <td>
                    <div class="flex items-center">
                      <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          class="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>khjkgj</div>
                    </div>
                  </td>
                  <td>6/10/2020</td>
                  <td>4</td>
                  <td>2000$</td>
                  <td>
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <label tabIndex={0} className="btn m-1">
                        <BiDotsHorizontalRounded className="w-6 h-6 rotate-90" />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <Link
                            to={"/view-invoice"}
                            className="hover:bg-primary"
                          >
                            View invoice
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/update-invoice"}
                            className="hover:bg-primary"
                          >
                            Update invoice
                          </Link>
                        </li>
                        <li>
                          <Link className="hover:bg-primary">
                            Download invoice
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="grid px-4 py-5 text-sm tracking-wide text-gray-500 uppercase border-t dark:border-y-bg-primary bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
            <span class="flex items-center col-span-3">
              Showing 21-30 of 100
            </span>
            <span class="col-span-2"></span>
            <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Table navigation">
                <ul class="inline-flex items-center">
                  <li>
                    <button
                      class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                      aria-label="Previous"
                    >
                      <svg
                        class="w-4 h-4 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-primary border text-white border-slate-200 mx-2">
                      1
                    </button>
                  </li>
                  <li>
                    <button class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      2
                    </button>
                  </li>
                  <li>
                    <button class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      4
                    </button>
                  </li>
                  <li>
                    <span class="p-2.5">...</span>
                  </li>
                  <li>
                    <button class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      8
                    </button>
                  </li>
                  <li>
                    <button class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2">
                      9
                    </button>
                  </li>
                  <li>
                    <button
                      class="w-9 h-9 flex justify-center items-center rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple bg-bg-primary border border-slate-200 mx-2"
                      aria-label="Next"
                    >
                      <svg
                        class="w-4 h-4 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
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
    </div>
  );
};

export default InvoiceComponent;

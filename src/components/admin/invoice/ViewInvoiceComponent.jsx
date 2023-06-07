import React from "react";
import upload from "../../../assets/images/Room/Upload.png";
import { Link } from "react-router-dom";

export default function ViewInvoiceComponent() {
  return (
    <>
      <main
        className="overflow-y-auto px-10 py-6 bg-white rounded-xl relative lg:px-10"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
        }}
      >
        {/* Invoice Detail */}
        <div className="gap-6 overflow-hidden z-10">
        <div className="flex justify-between p-4 px-[40px]">
          <div className="text-lg font-sp-pro-text-semibold text-text-color  ">
            <h1>View Invoice</h1>
          </div>
          <Link to={"/invoice"}>
            <button className="bg-primary px-2 py-1 rounded-lg opacity-60 text-text-color hover:bg-primary hover:bg-opacity-60 cursor-pointer">
              Back
            </button>
          </Link>
        </div>
        <div className="w-full px-[40px]">
          <hr className="border-[#E1E9EE]" />
        </div>
        {/* invoice detail */}
        <div className="flex mt-4 text-base font-sp-pro-text text-text-color p-1 px-[40px]">
          <h1>Invoice Detail</h1>
        </div>
        <div className="w-2.5/5 px-[40px]">
          <hr className="border-[#E1E9EE] border-spacing-y-10" />
        </div>
        {/* header flex */}
        <div className="flex flex-row">
          {/* table flex */}
          <div className="mt-10 px-[40px]">
            {/* table 1 */}
            <table className="table w-full">
              <thead>
                <tr>
                  <td className="w-3/12 bg-primary text-center">Invoice</td>
                  <td className="w-3/12 bg-primary text-center">Supplier</td>
                  <td className="w-3/12 bg-primary text-center">Date</td>
                  <td className="w-3/12 bg-primary text-center">Purchaser</td>
                  <td className="w-3/12 bg-primary text-center">Purchaser</td>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>#1540</td>
                  <td>Computer shop</td>
                  <td>Jan 6 2020</td>
                  <td>10</td>
                  <td>
                    <div className="flex items-center">
                      <div className="relative  mr-4 w-8 h-8 ">
                        <img
                          src={
                            "https://i.pinimg.com/474x/c9/b2/56/c9b25648b56a4fc34eca507e47c20c72.jpg"
                          }
                          loading="lazy"
                          className="rounded-full h-full w-full"
                        />
                      </div>
                      <div>Menghout</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="w-5/5">
          <hr className="border-[#E1E9EE] border-spacing-y-10" />
        </div>

        <div className="flex mt-4 text-base font-sp-pro-text text-text-color">
          <h1>Asset</h1>
        </div>

            {/* table 2 */}
            <table className="table w-full mt-6">
              <thead>
                <tr className="text-center">
                  <td className="bg-gray-light text-center">Name</td>
                  <td className="bg-gray-light text-center">Quantity</td>
                  <td className="bg-gray-light text-center">Unit price</td>
                  <td className="bg-gray-light text-center">Discount price</td>
                  <td className="bg-gray-light text-center">Total price</td>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>
                    <div className="flex items-center">
                      <div className="relative  mr-4 w-8 h-8 ">
                        <img
                          src={
                            "https://em-content.zobj.net/socialmedia/apple/271/desktop-computer_1f5a5-fe0f.png"
                          }
                          loading="lazy"
                          className="rounded-full h-full w-full"
                        />
                      </div>
                      <div>Computer</div>
                    </div>
                  </td>
                  <td>15</td>
                  <td className="text-green">$ 1500</td>
                  <td className="text-yellow">10 %</td>
                  <td className="text-green">$ 22500 </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <div className="relative  mr-4 w-8 h-8 ">
                        <img
                          src={
                            "https://em-content.zobj.net/socialmedia/apple/271/desktop-computer_1f5a5-fe0f.png"
                          }
                          loading="lazy"
                          className="rounded-full h-full w-full"
                        />
                      </div>
                      <div>Computer</div>
                    </div>
                  </td>
                  <td>15</td>
                  <td className="text-green">$ 1500</td>
                  <td className="text-yellow">10 %</td>
                  <td className="text-green">$ 22500 </td>
                </tr>

                <tr>
                  <td>
                    <div className="flex items-center">
                      <div className="relative  mr-4 w-8 h-8 ">
                        <img
                          src={
                            "https://em-content.zobj.net/socialmedia/apple/271/desktop-computer_1f5a5-fe0f.png"
                          }
                          loading="lazy"
                          className="rounded-full h-full w-full"
                        />
                      </div>
                      <div>Computer</div>
                    </div>
                  </td>
                  <td>15</td>
                  <td className="text-green">$ 1500</td>
                  <td className="text-yellow">10 %</td>
                  <td className="text-green">$ 22500 </td>
                </tr>

                <tr>
                  <td>
                    <div className="flex items-center">
                      <div className="relative  mr-4 w-8 h-8 ">
                        <img
                          src={
                            "https://em-content.zobj.net/socialmedia/apple/271/desktop-computer_1f5a5-fe0f.png"
                          }
                          loading="lazy"
                          className="rounded-full h-full w-full"
                        />
                      </div>
                      <div>Computer</div>
                    </div>
                  </td>
                  <td>15</td>
                  <td className="text-green">$ 1500</td>
                  <td className="text-yellow">10 %</td>
                  <td className="text-green">$ 22500 </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* upload form invoice */}
          <div className="xl:w-5/12 md:w-5/6/12 sm:full mb-20">
            <div className="w-full">
              <div className="md:p-4 md:m-8 ">
                <div className=" border border-dotted border-yellow px-5 md:py-28 rounded-md ">
                  <div className=" items-center block justify-center text-center p-3  rounded-lg">
                    <div>
                      <img className="block m-auto " src={upload} alt="" />
                      <p className="mt-3 text-xs">
                        Upload Invoice picture, max size 20MB
                      </p>
                      <button className="shadow-sm rounded-md border border-bg-primary px-3 py-1.5 my-2 ">
                        Browse
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center flex-row">
                <div className=" cursor-pointer  w-4/5 p-2  rounded-lg text-center bg-primary">
                  <button className=" text-white font-sp-pro-text-regular">
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </>
  );
}

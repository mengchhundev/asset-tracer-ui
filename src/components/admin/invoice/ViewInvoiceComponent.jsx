import React from "react";
import upload from "../../../assets/images/Room/Upload.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaFileInvoice } from "react-icons/fa";
import upload_placeholder from '../../../assets/images/placeholder/upload_placeholder.svg';

export default function ViewInvoiceComponent(props) {

  const getInvoiceDetail = useSelector(state => console.log(state.invoice.invoiceDetail))

  return (
    <>
      <main className="overflow-x-hidden bg-white rounded-xl relative con-Shadow text-text-color">
        <div className="text-2xl font-sp-pro-text-bold py-4 px-10">
          <h1 className="flex items-center">
            <FaFileInvoice /> &nbsp;View Invoice
          </h1>
        </div>
        <hr className="border-[#E1E9EE] border-1" />


        <div className="flex flex-wrap-reverse xl:flex-nowrap justify-between w-full p-10 pb-5">
          <div className="w-full md:w-7/12 lg:w-full xl:w-7/12">
            <div className="text-base font-sp-pro-text-semibold w-full ">
              <h1>Invoice Detail</h1>
            </div>
            <hr className="border-[#E1E9EE] border-spacing-y-10 mb-5" />

            <section className="overflow-x-scroll">
              <table className="table w-full">
                <tbody className="">
                  <tr className="text-sm font-sp-pro-text-semibold text-opacity-90 divide-none text-white">
                    <td className="w-3/12  bg-primary py-3">Invoice Code</td>
                    <td className="w-3/12 bg-primary py-3">
                      Purchse By
                    </td>
                    <td className="w-3/12 bg-primary py-3">
                      Supplier
                    </td>
                    <td className="w-3/12 bg-primary py-3">
                      Purchaser Date
                    </td>

                  </tr>
                  <tr>
                    <td className="w-3/12 py-3 text-blue-700">#3061</td>
                    <td className="w-3/12 py-3">
                      Boeurn Mnor
                    </td>
                    <td className="w-3/12 py-3">
                      Computer Shop
                    </td>
                    <td className="w-3/12 py-3">
                      Jan 6 2023
                    </td>

                  </tr>
                </tbody>
              </table>
            </section>

            <br />
            <div className="text-base font-sp-pro-text-semibold w-full ">
              <h1>Item</h1>
            </div>
            <hr className="border-[#E1E9EE] border-spacing-y-10 mb-5" />

            <section className="overflow-x-scroll">
              <table className="table w-full">
                <tbody className="">
                  <tr className="text-sm font-sp-pro-text-semibold text-opacity-90 divide-none text-white">
                    <td className="w-3/12  bg-primary py-3">Name</td>
                    <td className="w-3/12 bg-primary py-3">
                      QTY
                    </td>
                    <td className="w-3/12 bg-primary py-3">
                      Unit Price
                    </td>
                    <td className="w-3/12 bg-primary py-3">
                      Discount
                    </td>
                    <td className="w-3/12 bg-primary py-3">
                      Total
                    </td>
                  </tr>
                  <tr>
                    <td className="w-3/12 py-3">Computer</td>
                    <td className="w-3/12 py-3">
                      10
                    </td>
                    <td className="w-3/12 py-3">
                      1200
                    </td>
                    <td className="w-3/12 py-3">
                      0
                    </td>
                    <td className="w-3/12 py-3">
                      12000
                    </td>
                  </tr>
                  <tr>
                    <td className="w-3/12 py-3">Computer</td>
                    <td className="w-3/12 py-3">
                      10
                    </td>
                    <td className="w-3/12 py-3">
                      1200
                    </td>
                    <td className="w-3/12 py-3">
                      0
                    </td>
                    <td className="w-3/12 py-3">
                      12000
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          <div className="w-9/12 md:w-[22rem] lg:w-[24rem] mx-auto">
            <div className="px-5 my-5 flex">
              <div className='w-full shadow p-5 rounded-md mb-1 relative mx-auto'>
                <div className='border border-dashed py-2 border-primary block justify-center text-center rounded-lg'>
                  <div className='w-full h-80 flex p-5 relative'>
                    <img className="block m-auto h-32" src={upload_placeholder}/>
                  </div>
                  <br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}

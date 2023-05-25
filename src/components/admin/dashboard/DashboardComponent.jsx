import React from 'react'
import logo from '../../../assets/images/A_Tracer_logo1.png';


// import icon from react icon
import { BiCheck, BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { TiExportOutline } from 'react-icons/ti';
import { MdArrowForwardIos } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

export default function DashboardComponent() {

  return (
    <>
      <main className="lg:h-full md:h-[205vh] overflow-y-auto">
        <div className="mt-1 p-10 bg-white rounded-3xl overflow-hidden">
          {/* header */}
          <div className='mb-3'>
            <h2 className="text-2xl text-text-color font-sp-pro-text-semibold">
              KSHRD Center
            </h2>
          </div>

          {/* Card Box1 */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  gap-5">
            {/* total user */}
            <div className="border-border-gray-light rounded-lg shadow-sm border p-5">
              <div>
                <h1 className='text-gray font-sp-pro-text-regular text-sm uppercase'>total users</h1>
              </div>
              <div className='flex justify-between items-center font-sp-pro-text-regular mt-5'>
                <span className='text-base text-text-color'>50</span>
                <span className='text-green flex items-center'>+ 36% <BiUpArrowAlt className="w-6 h-6" /></span>
              </div>
            </div>

            {/* total asset */}
            <div className="border-border-gray-light rounded-lg shadow-sm border p-5">
              <div>
                <h1 className='text-gray font-sp-pro-text-regular text-sm uppercase'>total assets</h1>
              </div>
              <div className='flex justify-between items-center font-sp-pro-text-regular mt-5'>
                <span className='text-base text-text-color'>1200</span>
                <span className='text-red-500 flex items-center'>+ 14% <BiDownArrowAlt className="w-6 h-6" /></span>
              </div>
            </div>

            {/* total room */}
            <div className="border-border-gray-light rounded-lg shadow-sm border p-5">
              <div>
                <h1 className='text-gray font-sp-pro-text-regular text-base uppercase'>total rooms</h1>
              </div>
              <div className='flex justify-between items-center font-sp-pro-text-regular mt-5'>
                <span className='text-base text-text-color'>100</span>
                <span className='text-green flex items-center'>+ 36% <BiUpArrowAlt className="w-6 h-6" /></span>
              </div>
            </div>

            {/* total invoice */}
            <div className="border-border-gray-light rounded-lg shadow-sm border p-5">
              <div>
                <h1 className='text-gray font-sp-pro-text-regular text-base uppercase'>total user</h1>
              </div>
              <div className='flex justify-between items-center font-sp-pro-text-regular mt-5'>
                <span className='text-base text-text-color'>33, 493</span>
                <span className='text-green flex items-center'>+ 36% <BiUpArrowAlt className="w-6 h-6" /></span>
              </div>
            </div>
          </div>

          {/* Card Box2 */}
          <div className="grid md:grid-cols-12 sm:grid-cols-2 gap-5 mt-8">
            <div className="lg:col-span-8 md:col-span-12 sm:col-span-12  border-border-gray-light rounded-lg shadow-sm border p-5">
              {/* header */}
              <div className='flex md:justify-between md:flex-row flex-col'>
                <div className='float-left flex'>
                  <div>
                    <h2 className='text-text-color font-sp-pro-text-medium text-base'>Asset / Category</h2>
                    <p className='text-gray font-sp-pro-text-regular text-sm mt-2'>Assets Summery</p>
                  </div>
                </div>

                <div className='flex'>
                  <div>
                    <a className="mt-3 sm:mt-0 flex items-center rounded-lg px-3 py-1 bg-bg-main border border-slate-200 text-text-color font-sp-pro-text-regular text-sm cursor-pointer">
                      <TiExportOutline className="w-5 h-5 flex pr-1" />
                      Export
                    </a>
                  </div>
                </div>
              </div>

              {/* Card  */}
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-8">
                {/* 1 */}
                <div className="border-border-gray-light bg-red-100  rounded-lg shadow-sm border p-5">
                  <div>
                    <img className="w-8 h-8 rounded-full " src="https://api.time.com/wp-content/uploads/2018/05/forest-bathing.jpg" alt="" />
                  </div>
                  <div className='font-sp-pro-text-regular mt-3 flex flex-col'>
                    <span className='font-sp-pro-text-semibold text-base text-text-color'>50</span>
                    <span className='font-sp-pro-text-regular text-sm text-gray my-2 '>Desktop</span>
                    <span className='font-sp-pro-text-regular text-xs  text-blue-500'>+ 36% from yesterday</span>
                  </div>
                </div>

                {/* 2 */}
                <div className="border-border-gray-light bg-amber-100  rounded-lg shadow-sm border p-5">
                  <div>
                    <img className="w-8 h-8 rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaw1JlRIUksyVhNsChhKSO00_CaV8YjwA-Cw&usqp=CAU" alt="" />
                  </div>
                  <div className='font-sp-pro-text-regular mt-3 flex flex-col'>
                    <span className='font-sp-pro-text-semibold text-base text-text-color'>50</span>
                    <span className='font-sp-pro-text-regular text-sm text-gray my-2 '>Desktop</span>
                    <span className='font-sp-pro-text-regular text-xs  text-blue-500'>+ 36% from yesterday</span>
                  </div>
                </div>

                {/* 3 */}
                <div className="border-border-gray-light bg-lime-100  rounded-lg shadow-sm border p-5">
                  <div>
                    <img className="w-8 h-8 rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZrgMv-OIpXZmg3tbA4xJ48mWvYvDYMhNTw&usqp=CAU" alt="" />
                  </div>
                  <div className='font-sp-pro-text-regular mt-3 flex flex-col'>
                    <span className='font-sp-pro-text-semibold text-base text-text-color'>50</span>
                    <span className='font-sp-pro-text-regular text-sm text-gray my-2 '>Desktop</span>
                    <span className='font-sp-pro-text-regular text-xs  text-blue-500'>+ 36% from yesterday</span>
                  </div>
                </div>

                {/* 4 */}
                <div className="border-border-gray-light bg-indigo-200  rounded-lg shadow-sm border p-5">
                  <div>
                    <img className="w-8 h-8 rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66g4ybmDvkvLDa-2p_k9PQFmLXx1nyTo0_w&usqp=CAU" alt="" />
                  </div>
                  <div className='font-sp-pro-text-regular mt-3 flex flex-col'>
                    <span className='font-sp-pro-text-semibold text-base text-text-color'>50</span>
                    <span className='font-sp-pro-text-regular text-sm text-gray my-2 '>Desktop</span>
                    <span className='font-sp-pro-text-regular text-xs  text-blue-500'>+ 36% from yesterday</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Member */}
            <div className="lg:col-span-4 md:col-span-12 sm:col-span-12 md:w-full border-border-gray-light rounded-lg shadow-sm border relative h-72 p-5">
              <div className=''>
                <div>
                  <h2 className='text-base font-sp-pro-text-regular text-text-color'>Recent Member</h2>
                  <span className='text-sm font-sp-pro-text-regular text-gray'>Lorem ipsum dolor sit ametis.</span>
                </div>
              
                <div className='flex justify-between my-3'>
                  <div className="flex items-center">
                    <img className="w-8 h-8 rounded-full " src="https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.6435-9/61986384_2354319471487802_278763666935906304_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeESiwUxPDjhxv_qjTN7rixloVVTAGwNJHGhVVMAbA0kcVd6in6B9L03S2MpH2w8hnAWWvwDArx_RLL-n_QA5pgs&_nc_ohc=wxZfDrNarDsAX8B3PUa&_nc_ht=scontent.fpnh8-1.fna&oh=00_AfA3GShamkHCPZVfb4PDgQ0T-uwcGiWQFS6gQ-4-mzunYQ&oe=64920173" alt="" />
                    <div className="pl-2 flex flex-col">
                      <span className="text-blue-500 font-sp-pro-text-medium text-sm mb-1">Rotanakosal</span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">w.lawson@example.com</span>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className="flex flex-col">
                      <span className="text-text-color font-sp-pro-text-regular text-sm mb-1">$11,234</span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">Austin</span>
                    </div>
                  </div>
                </div>

                <div className='flex justify-between my-3'>
                  <div className="flex items-center">
                    <img className="w-8 h-8 rounded-full " src="https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.6435-9/61986384_2354319471487802_278763666935906304_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeESiwUxPDjhxv_qjTN7rixloVVTAGwNJHGhVVMAbA0kcVd6in6B9L03S2MpH2w8hnAWWvwDArx_RLL-n_QA5pgs&_nc_ohc=wxZfDrNarDsAX8B3PUa&_nc_ht=scontent.fpnh8-1.fna&oh=00_AfA3GShamkHCPZVfb4PDgQ0T-uwcGiWQFS6gQ-4-mzunYQ&oe=64920173" alt="" />
                    <div className="pl-2 flex flex-col">
                      <span className="text-blue-500 font-sp-pro-text-medium text-sm mb-1">Rotanakosal</span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">w.lawson@example.com</span>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className="flex flex-col">
                      <span className="text-text-color font-sp-pro-text-regular text-sm mb-1">$11,234</span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">Austin</span>
                    </div>
                  </div>
                </div>

                <div className='flex justify-between my-3'>
                  <div className="flex items-center">
                    <img className="w-8 h-8 rounded-full " src="https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.6435-9/61986384_2354319471487802_278763666935906304_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeESiwUxPDjhxv_qjTN7rixloVVTAGwNJHGhVVMAbA0kcVd6in6B9L03S2MpH2w8hnAWWvwDArx_RLL-n_QA5pgs&_nc_ohc=wxZfDrNarDsAX8B3PUa&_nc_ht=scontent.fpnh8-1.fna&oh=00_AfA3GShamkHCPZVfb4PDgQ0T-uwcGiWQFS6gQ-4-mzunYQ&oe=64920173" alt="" />
                    <div className="pl-2 flex flex-col">
                      <span className="text-blue-500 font-sp-pro-text-medium text-sm mb-1">Rotanakosal</span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">w.lawson@example.com</span>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className="flex flex-col">
                      <span className="text-text-color font-sp-pro-text-regular text-sm mb-1">$11,234</span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">Austin</span>
                    </div>
                  </div>
                </div>
              </div>

              
            
              <div className='absolute bottom-0 left-0 p-5'>
                <h2 className='text-gray font-sp-pro-text-regular text-sm uppercase flex flex-row'>see all user <MdArrowForwardIos className="w-6 h-4 pl-3" /></h2>
              </div>
            </div>
          </div>
          {/* Card Box2 */}


          {/* Card Box3 */}
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-8 lg:mb-0 overflow-auto">
            <div className="border-border-gray-light rounded-lg shadow-sm border p-5 w-[295px] sm:w-auto">
              <h1 className='text-base font-sp-pro-text-regular text-text-color'>3 lastest invoice</h1>
              {/* data table */}
              <div className="text-text-color mt-3 overflow-auto ">
                <table className="table w-full z-0 ">
                  <thead>
                    <tr className="tracking-wide text-left ">
                      <th className='text-text-color font-sp-pro-text-regular text-xs'>No</th>
                      <th className='text-text-color font-sp-pro-text-regular text-xs'>Supplier</th>
                      <th className='text-text-color font-sp-pro-text-regular text-xs'>Qty</th>
                      <th className='text-text-color font-sp-pro-text-regular text-xs'>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-text-color font-sp-pro-text-regular text-xs'>1</td>
                      <td className='text-text-color font-sp-pro-text-regular text-xs'>Electronic</td>
                      <td className='text-text-color font-sp-pro-text-regular text-xs'>100</td>
                      <td className='text-text-color font-sp-pro-text-regular text-xs'>$220</td>
                    </tr>

                    <tr>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>1</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>Electronic</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>100</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>$220</td>
                    </tr>

                    <tr>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>1</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>Electronic</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>100</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>$220</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>



            <div className="border-border-gray-light rounded-lg shadow-sm border p-5 w-[295px] sm:w-auto">
              <h1 className='text-base font-sp-pro-text-regular text-text-color'>3 lastest invoice</h1>
              {/* data table */}
              <div className="text-text-color mt-3 overflow-auto ">
                <table className="table w-full z-0 ">
                  <thead>
                    <tr className="tracking-wide text-left ">
                      <th className='text-text-color font-sp-pro-text-regular text-xs'>No</th>
                      <th className='text-text-color font-sp-pro-text-regular text-xs'>Name</th>
                      <th className='text-text-color font-sp-pro-text-regular text-xs'>Purchase Date</th>
                      <th className='text-text-color font-sp-pro-text-regular text-xs'>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-text-color font-sp-pro-text-regular text-xs'>1</td>
                      <td className='text-text-color font-sp-pro-text-regular text-xs'>Electronic</td>
                      <td className='text-text-color font-sp-pro-text-regular text-xs'>100</td>
                      <td className='text-text-color font-sp-pro-text-regular text-xs'>$220</td>
                    </tr>

                    <tr>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>1</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>Electronic</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>100</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>$220</td>
                    </tr>

                    <tr>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>1</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>Electronic</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>100</td>
                      <td className='text-text-color font-sp-pro-text-regular text-sm'>$220</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

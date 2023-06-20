import React from "react";
import logo from "../../../assets/images/A_Tracer_logo1.png";

// import icon from react icon
import { BiCheck, BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { TiExportOutline } from "react-icons/ti";
import { MdArrowForwardIos } from "react-icons/md";
import { useLocation } from "react-router-dom";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import DashboardService from "../../../redux/services/DashboardService";
import { setTotalInvoices, setTotalItems, setTotalRooms, setTotalUsers } from "../../../redux/slices/DashboardSlice";
import { useEffect } from "react";
import { useState } from "react";
export default function DashboardComponent() {
  
  const CurrentOrg = JSON.parse(sessionStorage.getItem("organization"));

  // const itemsDetail = useSelector((state) => state.items.itemsDetail)
  const totalUsers = useSelector((state) => state.dashboard.data)
  const totalItems = useSelector((state) => state.dashboard.items)
  const totalRooms = useSelector((state) => state.dashboard.rooms)
  const totalInvoice = useSelector((state) => state.dashboard.invoices)
  const dispath = useDispatch();
  
  // ============ Get Total Users =============
  const getTotalUserInOrg = () => {
    DashboardService.getTotalUserInOrg(CurrentOrg.id).then(
      (res) => {
        if(res.data?.success){
          dispath(setTotalUsers(res.data.payload));
        }
      },
    );
  };
 
  // ============ Get Total Items =============
  const getTotalItems = () => {
    DashboardService.getTotalAssetInOrg(CurrentOrg.id).then(
      (res) => {  
        if(res.data?.payload){
          dispath(setTotalItems(res.data.payload))
        }
      }
    )
  }
  // ============ Get Total Rooms =============
  const getTotalRooms = () => {
    DashboardService.getTotalRoomInOrg(CurrentOrg.id).then(
      (res) => {
        if(res.data?.payload){
          dispath(setTotalRooms(res.data.payload))
        }
      }
    )
  }
  // ============ Get Total Invoices =============
  const getTotalInvoices = ( ) => {
    DashboardService.getTotalInvoiceInOrg(CurrentOrg.id).then(
      (res) => {
        console.log(res)
        if(res.data?.payload){
          dispath(setTotalInvoices(res.data.payload))
        }
      }
    )
  }

  
  useEffect(() => {
    DashboardService.getTotalAssetInOrg(CurrentOrg.id).then(
      (res) => {
        if(res.items?.payload){
          dispath(setTotalItems(res.items.payload))
        }
      }
    ),

    DashboardService.getTotalUserInOrg(CurrentOrg.id).then(
      (res) => {
        if(res.data?.success){
          dispath(setTotalUsers(res.data.payload));
        }
      },
    ),
    DashboardService.getTotalRoomInOrg(CurrentOrg.id).then(
      (res) => {
        if(res.rooms?.payload){
         dispath( setTotalRooms(res.rooms.payload))
        }
      }
    ),
    DashboardService.getTotalInvoiceInOrg(CurrentOrg.id).then(
      (res) => {
        if(res.invoices?.payload){
          dispath(setTotalInvoices(res.invoices.payload))
        }
      }
    )
  })
 
  useState(() => {
    getTotalUserInOrg();
    getTotalItems();
    getTotalRooms();
    getTotalInvoices()  
 
  }, [])


  return (
    <>
      <main
        className="lg:h-full md:h-[205vh] "
        style={{
          boxShadow: "rgba(149, 157, 165, 0.1) 0px 1px 4px 1px",
          height: "calc(100vh - 6rem)",
        }}
      >
        <div className="p-10 bg-white rounded-xl overflow-hidden">
          {/* header */}
          <div className="mb-5">
            <h2 className="text-2xl text-text-color font-sp-pro-text-semibold uppercase">
              Dashboard
            </h2>
          </div>

          {/* Card Box1 */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
            {/* total user */}
            <div className="  rounded-lg con-Shadow-Card relative  overflow-hidden   transition-all duration-300 ease-in-out bg-gray-50 group ">
              <span class=" absolute  bottom-0 left-0 w-full h-1 transition-all duration-300 ease-in-out bg-[#ffcb03]  group-hover:h-full"></span>
              <div class="relative p-5 w-full  transition-colors duration-300 ease-in-out  group-hover:text-white ">
                <div>
                  <h1 className="text-[#ffcb03] group-hover:text-white w-full font-sp-pro-text-bold text-md uppercase">
                    total users
                  </h1>
                </div>
                <div className="flex justify-between items-center font-sp-pro-text-regular mt-4">
                  <span className="text-lg font-sp-pro-text-bold text-text-color group-hover:text-white">
                    {totalUsers}
                  </span>
                  <span className="text-[#5ec576] group-hover:text-white flex items-center">
                    + 14% <BiDownArrowAlt className="w-6 h-6" />
                  </span>
                </div>
              </div>
            </div>

            {/* </div> */}

            {/* total asset */}
            <div className="  rounded-lg con-Shadow-Card relative  overflow-hidden   transition-all duration-300 ease-in-out p- bg-gray-50 group ">
              <span class=" absolute  bottom-0 left-0 w-full h-1 transition-all duration-300 ease-in-out bg-[#5ec576]  group-hover:h-full"></span>
              <div class="relative p-5 w-full  transition-colors duration-300 ease-in-out  ">
                <div>
                  <h1 className="text-[#5ec576] group-hover:text-white font-sp-pro-text-bold text-md uppercase">
                    total assets
                  </h1>
                </div>
                <div className="flex justify-between items-center font-sp-pro-text-regular mt-4">
                  <span className="text-lg font-sp-pro-text-bold text-text-color group-hover:text-white">
                    {totalItems}
                  </span>
                  <span className="text-[#5ec576] group-hover:text-white flex items-center">
                    + 14% <BiDownArrowAlt className="w-6 h-6" />
                  </span>
                </div>
              </div>
            </div>

            {/* total room */}
            <div className=" rounded-lg con-Shadow-Card relative  overflow-hidden   transition-all duration-300 ease-in-out p- bg-gray-50 group">
              <span class=" absolute  bottom-0 left-0 w-full h-1 transition-all duration-300 ease-in-out bg-[#ff585f]  group-hover:h-full"></span>
              <div class="relative p-5 w-full  transition-colors duration-300 ease-in-out  ">
                <div>
                  <h1 className=" text-[#ff585f] group-hover:text-white font-sp-pro-text-bold text-md uppercase">
                    total rooms
                  </h1>
                </div>
                <div className="flex justify-between items-center font-sp-pro-text-regular mt-4">
                  <span className="text-lg font-sp-pro-text-bold text-text-color  group-hover:text-white ">
                    {totalRooms}
                  </span>
                  <span className="text-[#ff585f]  group-hover:text-white   flex items-center">
                    + 36% <BiUpArrowAlt className="w-6 h-6" />
                  </span>
                </div>
              </div>
            </div>

            {/* total invoice */}
            <div className="  rounded-lg con-Shadow-Card relative  overflow-hidden   transition-all duration-300   ease-in-out p- bg-gray-50 group">
              <span class=" absolute  bottom-0 left-0 w-full h-1 transition-all duration-300 ease-in-out bg-blue-500  group-hover:h-full"></span>
              <div class="relative p-5 w-full  transition-colors duration-300 ease-in-out  ">
                {/* <div> */}
                <div>
                  <h1 className="text-blue-500 font-sp-pro-text-bold text-md  group-hover:text-white uppercase">
                    total invoices
                  </h1>
                </div>
                <div className="flex justify-between items-center font-sp-pro-text-regular mt-4">
                  <span className="text-lg font-sp-pro-text-bold text-text-color  group-hover:text-white ">
                    {totalInvoice}
                  </span>
                  <span className="text-blue-500  flex items-center ">
                    + 36% <BiUpArrowAlt className="w-6 h-6" />
                  </span>
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>

          {/* Card Box2 */}
          <div className="grid md:grid-cols-12 sm:grid-cols-2 gap-5 mt-8">
            <div className="lg:col-span-7 md:col-span-12 sm:col-span-12  border-border-gray-light  rounded-lg shadow-sm border p-4">
              {/* header */}
              <div className="flex md:justify-between md:flex-row flex-col">
                <div className="float-left flex">
                  <div>
                    <h2 className="text-text-color font-sp-pro-text-medium text-base">
                      Asset / Category
                    </h2>
                  </div>
                </div>
              </div>

              {/* Card  */}
              <div className="lg:h-[200px] xl:h-[220px] 2xl:h-[350px]">
                <Chart
                  height="100%"
                  width="100%"
                  type="bar"
                  series={[
                    {
                      data: [44, 87, 66, 76, 65, 90, 150],
                    },
                  ]}
                  options={{
                    chart: {
                      animations: {
                        enabled: true,
                        easing: "easeinout",
                        speed: 800,
                        animateGradually: {
                          enabled: true,
                          delay: 150,
                        },
                        dynamicAnimation: {
                          enabled: true,
                          speed: 350,
                        },
                      },
                    },
                    colors: [
                      "rgba(255, 99, 132, 0.5)",
                      "rgba(255, 159, 64,0.5)",
                      "rgba(255, 205, 86, 0.5)",
                      "rgba(75, 192, 192, 0.5)",
                      "rgba(54, 162, 235, 0.5)",
                      "rgba(153, 102, 255, 0.5)",
                      "rgba(201, 203, 207, 0.5)",
                    ],
                    stroke: {
                      width: 1,
                      colors: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(54, 162, 235)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                      ],
                    },
                    // theme: { mode: "light" },
                    plotOptions: {
                      bar: {
                        columnWidth: "50%",
                        distributed: true,
                      },
                    },
                    xaxis: {
                      tickPlacement: "on",
                      categories: [
                        "Furnature",
                        "Office",
                        "Kitchen",
                        "Electronic",
                        "Vihecle",
                        "Uniform",
                        "Accesories",
                      ],
                      // title: {
                      //   text: "Social Media User",
                      //   style: { color: "#f90000", fontSize: 30 },
                      // },
                    },

                    yaxis: {
                      labels: {
                        formatter: (val) => {
                          return `${val}`;
                        },
                        // style: { fontSize: "15" },
                      },
                    },

                    legend: {
                      show: false,
                      position: "right",
                    },
                    dataLabels: {
                      formatter: (val) => {
                        // return `${val}`;
                      },

                      // style: {
                      //   colors: ["#f4"],
                      //   fontSize: 15,
                      // },
                    },
                  }}
                />
              </div>
            </div>

            {/* ============= Pie Chart ============ */}
            <div className=" lg:col-span-5 md:col-span-12 sm:col-span-12 md:w-full border-border-gray-light rounded-lg shadow-sm border relative lg:p-6  2xl:p-10 ">
              <Chart
                type="donut"
                series={[43, 23, 65, 90]}
                options={{
                  responsive: [
                    {
                      breakpoint: 640,
                    },
                  ],
                  // chart:{
                  //   height:"400",
                  //   width:"300"
                  // },
                  // colors: [
                  //   "rgba(255, 99, 132, 0.5)",
                  //   "rgba(255, 159, 64,0.5)",
                  //   "rgba(255, 205, 86, 0.5)",
                  //   "rgba(75, 192, 192, 0.5)",
                  //   "rgba(54, 162, 235, 0.5)",
                  //   "rgba(153, 102, 255, 0.5)",
                  //   "rgba(201, 203, 207, 0.5)",
                  // ],
                  // stroke: {
                  //   width: 1,
                  //   colors: [
                  //     "rgb(255, 99, 132)",
                  //     "rgb(255, 159, 64)",
                  //     "rgb(255, 205, 86)",
                  //     "rgb(75, 192, 192)",
                  //     "rgb(54, 162, 235)",
                  //     "rgb(153, 102, 255)",
                  //     "rgb(201, 203, 207)",
                  //   ],
                  // },
                  labels: ["In Used", "In Stock", "Damage", "Donated"],
                  dataLabels: {
                    enabled: false,
                    style: {
                      fontSize: "10px",
                      fontFamily: "Helvetica, Arial, sans-serif",
                    },
                  },
                  legend: {
                    fontSize: "12px",
                    fontFamily: "Helvetica, Arial",
                    position: "bottom",
                  },
                }}
              />
            </div>
          </div>
          {/* Card Box2 */}

          {/* =============== Lats 3 invoice ================== */}
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-8 lg:mb-0 overflow-auto">
            <div className="border-border-gray-light rounded-lg shadow-sm border p-5 w-[295px] sm:w-auto">
              <h1 className="text-text-color font-sp-pro-text-medium text-base">
                3 lastest invoice
              </h1>
              {/* data table */}
              <div className="text-text-color  mt-3 overflow-auto ">
                <table className="table w-full z-0 ">
                  <thead>
                    <tr className="tracking-wide text-center ">
                      <th className=" text-white bg-secondary-yellow font-sp-pro-text-regular text-xs">
                        No
                      </th>
                      <th className="text-white bg-secondary-yellow font-sp-pro-text-regular text-xs">
                        Supplier
                      </th>
                      <th className="text-white bg-secondary-yellow font-sp-pro-text-regular text-xs">
                        Qty
                      </th>
                      <th className="text-white bg-secondary-yellow font-sp-pro-text-regular text-xs">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="text-text-color font-sp-pro-text-regular text-xs">
                        1
                      </td>
                      <td className="text-text-color font-sp-pro-text-regular text-xs">
                        Electronic
                      </td>
                      <td className="text-text-color font-sp-pro-text-regular text-xs">
                        100
                      </td>
                      <td className="text-text-color font-sp-pro-text-regular text-xs">
                        $220
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ============== Current Users ==============  */}
            <div className="border-border-gray-light rounded-lg shadow-sm border p-5 w-[295px] sm:w-auto">
              <div className="">
                <div>
                  <h2 className="text-base font-sp-pro-text-regular text-text-color">
                    Recent Member
                  </h2>
                  <span className="text-sm font-sp-pro-text-regular text-gray">
                    Lorem ipsum dolor sit ametis.
                  </span>
                </div>

                <div className="flex justify-between my-3">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full "
                      src="https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.6435-9/61986384_2354319471487802_278763666935906304_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeESiwUxPDjhxv_qjTN7rixloVVTAGwNJHGhVVMAbA0kcVd6in6B9L03S2MpH2w8hnAWWvwDArx_RLL-n_QA5pgs&_nc_ohc=wxZfDrNarDsAX8B3PUa&_nc_ht=scontent.fpnh8-1.fna&oh=00_AfA3GShamkHCPZVfb4PDgQ0T-uwcGiWQFS6gQ-4-mzunYQ&oe=64920173"
                      alt=""
                    />
                    <div className="pl-2 flex flex-col">
                      <span className="text-blue-500 font-sp-pro-text-medium text-sm mb-1">
                        Rotanakosal
                      </span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">
                        w.lawson@example.com
                      </span>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col">
                      <span className="text-text-color font-sp-pro-text-regular text-sm mb-1">
                        $11,234
                      </span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">
                        Austin
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between my-3">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full "
                      src="https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.6435-9/61986384_2354319471487802_278763666935906304_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeESiwUxPDjhxv_qjTN7rixloVVTAGwNJHGhVVMAbA0kcVd6in6B9L03S2MpH2w8hnAWWvwDArx_RLL-n_QA5pgs&_nc_ohc=wxZfDrNarDsAX8B3PUa&_nc_ht=scontent.fpnh8-1.fna&oh=00_AfA3GShamkHCPZVfb4PDgQ0T-uwcGiWQFS6gQ-4-mzunYQ&oe=64920173"
                      alt=""
                    />
                    <div className="pl-2 flex flex-col">
                      <span className="text-blue-500 font-sp-pro-text-medium text-sm mb-1">
                        Rotanakosal
                      </span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">
                        w.lawson@example.com
                      </span>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col">
                      <span className="text-text-color font-sp-pro-text-regular text-sm mb-1">
                        $11,234
                      </span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">
                        Austin
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between my-3">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full "
                      src="https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.6435-9/61986384_2354319471487802_278763666935906304_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeESiwUxPDjhxv_qjTN7rixloVVTAGwNJHGhVVMAbA0kcVd6in6B9L03S2MpH2w8hnAWWvwDArx_RLL-n_QA5pgs&_nc_ohc=wxZfDrNarDsAX8B3PUa&_nc_ht=scontent.fpnh8-1.fna&oh=00_AfA3GShamkHCPZVfb4PDgQ0T-uwcGiWQFS6gQ-4-mzunYQ&oe=64920173"
                      alt=""
                    />
                    <div className="pl-2 flex flex-col">
                      <span className="text-blue-500 font-sp-pro-text-medium text-sm mb-1">
                        Rotanakosal
                      </span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">
                        w.lawson@example.com
                      </span>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col">
                      <span className="text-text-color font-sp-pro-text-regular text-sm mb-1">
                        $11,234
                      </span>
                      <span className="text-xs text-gray font-sp-pro-text-regular">
                        Austin
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3">
                <p className="text-gray font-sp-pro-text-regular text-sm uppercase flex flex-row">
                  see all user <MdArrowForwardIos className="w-6 h-4 pl-3" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

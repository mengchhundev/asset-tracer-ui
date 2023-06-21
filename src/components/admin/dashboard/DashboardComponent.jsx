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
import {
  setBrokenAssets,
  setCategoryName,
  setDamageAssets,
  setDonatedAssets,
  setInStockAssets,
  setInUsedAssets,
  setLastInvoice,
  setLostAssets,
  setSuperCategory,
  setTotalInvoices,
  setTotalItems,
  setTotalRooms,
  setTotalUsers,
} from "../../../redux/slices/DashboardSlice";
import { useEffect } from "react";
import { useState } from "react";
import InvoiceService from "../../../redux/services/InvoiceService";
import moment from "moment/moment";
export default function DashboardComponent() {
  const CurrentOrg = JSON.parse(sessionStorage.getItem("organization"));

  // const itemsDetail = useSelector((state) => state.items.itemsDetail)
  const totalUsers = useSelector((state) => state.dashboard.data);
  const totalItems = useSelector((state) => state.dashboard.items);
  const totalRooms = useSelector((state) => state.dashboard.rooms);
  const totalInvoice = useSelector((state) => state.dashboard.invoices);
  const lastThreeInvoice = useSelector((state) => state.dashboard.lastInvoice);
  const [getCountData, setGetCountData] = useState([]);
  const dispath = useDispatch();

  // ============ Get Total Users =============
  const getTotalUserInOrg = () => {
    DashboardService.getTotalUserInOrg(CurrentOrg.id).then((res) => {
      if (res.data?.success) {
        dispath(setTotalUsers(res.data.payload));
      }
    });
  };

  // ============ Get Total Items =============
  const getTotalItems = () => {
    DashboardService.getTotalAssetInOrg(CurrentOrg.id).then((res) => {
      if (res.data?.success) {
        dispath(setTotalItems(res.data.payload));
      }
    });
  };
  // ============ Get Total Rooms =============
  const getTotalRooms = () => {
    DashboardService.getTotalRoomInOrg(CurrentOrg.id).then((res) => {
      if (res.data?.success) {
        dispath(setTotalRooms(res.data.payload));
      }
    });
  };
  // ============ Get Total Invoices =============
  const getTotalInvoices = () => {
    DashboardService.getTotalInvoiceInOrg(CurrentOrg.id).then((res) => {
      if (res.data?.success) {
        dispath(setTotalInvoices(res.data.payload));
      }
    });
  };
  // ============ Get last 3 Invoices =============
  const getLastThreeInvoice = () => {
    InvoiceService.getAllInvoices(CurrentOrg.id, 1, 3).then((res) => {
      if (res.data?.success) {
        dispath(setLastInvoice(res.data.payload));
      }
    });
  };

  // =====================================
  //               Pie Chart
  //======================================
  const inStockAsset = useSelector((state) => state.dashboard.inStocks);
  const inUsedAsset = useSelector((state) => state.dashboard.inUseds);
  const damageAsset = useSelector((state) => state.dashboard.damages);
  const donatedAsset = useSelector((state) => state.dashboard.donateds);
  const brokenAsset = useSelector((state) => state.dashboard.broken);
  const lostAsset = useSelector((state) => state.dashboard.lost);
  const getTotalAssetInStock = () => {
    DashboardService.getTotalAssetInStock(CurrentOrg.id).then((res) => {
      if (res.data?.success) {
        dispath(setInStockAssets(res.data.payload));
      }
    });
  };
  // ----- get total Asset in used ------
  const getTotalAssetInUsed = () => {
    DashboardService.getTotalAssetInUsed(CurrentOrg.id).then((res) => {
      if (res.data?.success) {
        dispath(setInUsedAssets(res.data.payload));
      }
    });
  };
  // ----- get total Asset damages ------
  const getTotalAssetDamage = () => {
    DashboardService.getTotalAssetDamage(CurrentOrg.id).then((res) => {
      if (res.data?.success) {
        dispath(setDamageAssets(res.data.payload));
      }
    });
  };
  // ----- get total Asset damages ------
  const getTotalAssetDonated = () => {
    DashboardService.getTotalAssetDonated(CurrentOrg.id).then((res) => {
      if (res.data?.success) {
        dispath(setDonatedAssets(res.data.payload));
      }
    });
  };
  // ----- get total Asset Broken ------
  const getTotalAssetBroken = () => {
    DashboardService.getTotalAssetBroken(CurrentOrg.id).then((res) => {
      if (res.data?.success) {
        dispath(setBrokenAssets(res.data.payload));
      }
    });
  };
  // ----- get total Asset Lost ------
  const getTotalAssetLost = () => {
    DashboardService.getTotalAssetLost(CurrentOrg.id).then((res) => {
      if (res.data?.success) {
        dispath(setLostAssets(res.data.payload));
      }
    });
  };

  // ===================================
  //           Bar Chart
  //====================================
  const assetPerSuperCategory = useSelector(
    (state) => state.dashboard.superCategory
  );
  const getSuperCategoryName = useSelector(
    (state) => state.dashboard.superCategoryName
  );

  let data = [];
  let getCategoryName = [];
  useEffect(() => {
    DashboardService.getTotalAssetPerCategory(CurrentOrg.id).then((res) => {
      if (res.data?.success) {
        res.data.payload.map((res) => {
          data.push(res.countAsset);
          getCategoryName.push(res.name);
        });
        dispath(setSuperCategory(data));
        dispath(setCategoryName(getCategoryName));
      }
    });

    DashboardService.getTotalAssetInOrg(CurrentOrg.id).then((res) => {
      if (res.items?.success) {
        dispath(setTotalItems(res.items.payload));
      }
    }),
      DashboardService.getTotalUserInOrg(CurrentOrg.id).then((res) => {
        if (res.data?.success) {
          dispath(setTotalUsers(res.data.payload));
        }
      }),
      DashboardService.getTotalRoomInOrg(CurrentOrg.id).then((res) => {
        if (res.rooms?.success) {
          dispath(setTotalRooms(res.rooms.payload));
        }
      }),
      DashboardService.getTotalInvoiceInOrg(CurrentOrg.id).then((res) => {
        if (res.invoices?.success) {
          dispath(setTotalInvoices(res.invoices.payload));
        }
      }),
      DashboardService.getTotalAssetInStock(CurrentOrg.id).then((res) => {
        if (res.inStocks?.success) {
          dispath(setInStockAssets(res.inStocks.payload));
        }
      }),
      DashboardService.getTotalAssetInUsed(CurrentOrg.id).then((res) => {
        if (res.inUseds?.success) {
          dispath(setInUsedAssets(res.inUseds.payload));
        }
      }),
      DashboardService.getTotalAssetDamage(CurrentOrg.id).then((res) => {
        if (res.damages?.success) {
          dispath(setDamageAssets(res.damages.payload));
        }
      }),
      DashboardService.getTotalAssetDonated(CurrentOrg.id).then((res) => {
        if (res.donateds?.success) {
          dispath(setDonatedAssets(res.donateds.payload));
        }
      }),
      DashboardService.getTotalAssetBroken(CurrentOrg.id).then((res) => {
        if (res.broken?.success) {
          dispath(setBrokenAssets(res.broken.payload));
        }
      }),
      DashboardService.getTotalAssetLost(CurrentOrg.id).then((res) => {
        if (res.lost?.success) {
          dispath(setLostAssets(res.lost.payload));
        }
      }),
      DashboardService.getLastThreeInvoice(CurrentOrg.id).then((res) => {
        if (res.lastInvoice?.success) {
          dispath(setLastInvoice(res.lastInvoice.payload));
        }
      });
  }, []);

  useState(() => {
    getTotalUserInOrg();
    getTotalItems();
    getTotalRooms();
    getTotalInvoices();
    getTotalAssetInStock();
    getTotalAssetInUsed();
    getTotalAssetDamage();
    getTotalAssetDonated();
    getTotalAssetBroken();
    getTotalAssetLost();
    getLastThreeInvoice();
  }, []);

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
                  <span className="text-2xl font-sp-pro-text-bold text-text-color group-hover:text-white">
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
                  <span className="text-2xl font-sp-pro-text-bold text-text-color group-hover:text-white">
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
                  <span className="text-2xl font-sp-pro-text-bold text-text-color  group-hover:text-white ">
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
                  <span className="text-2xl font-sp-pro-text-bold text-text-color  group-hover:text-white ">
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

              {/* Bar chart  */}
              <div className="lg:h-[200px] xl:h-[220px] 2xl:h-[350px]">
                {/* {assetPerSuperCategory.map((assets, index) => (
                  
                ))} */}
                <Chart
                  height="100%"
                  width="100%"
                  type="bar"
                  series={[
                    {
                      data: assetPerSuperCategory,
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
                      categories: getSuperCategoryName,
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
            <div className=" lg:col-span-5 md:col-span-12 sm:col-span-12 md:w-full border-border-gray-light rounded-lg shadow-sm border relative lg:p-4  2xl:p-10 ">
              <Chart
                type="donut"
                series={[
                  inUsedAsset,
                  inStockAsset,
                  damageAsset,
                  donatedAsset,
                  lostAsset,
                  brokenAsset,
                ]}
                options={{
                  responsive: [
                    {
                      breakpoint: 640,
                    },
                  ],
                  labels: [
                    "In Used",
                    "In Stock",
                    "Damage",
                    "Donated",
                    "Lost",
                    "Broken",
                  ],
                  dataLabels: {
                    enabled: false,
                    style: {
                      fontSize: "10px",
                      fontFamily: "Helvetica, Arial, sans-serif",
                    },
                  },
                  legend: {
                    fontSize: "11px",
                    fontFamily: "Helvetica, Arial",
                    position: "bottom",
                    // horizontalAlign: "center",
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
              <div className="text-text-color mt-3 overflow-auto ">
                <table className="table w-full ">
                  <thead>
                    <tr className="tracking-wide text-center ">
                      <th className=" text-white bg-secondary-yellow font-sp-pro-text-semibold text-xs">
                        Code
                      </th>
                      <th className="text-white bg-secondary-yellow font-sp-pro-text-semibold text-xs">
                        Supplier
                      </th>
                      <th className="text-white bg-secondary-yellow font-sp-pro-semibold text-xs">
                        Purchase By
                      </th>
                      <th className="text-white bg-secondary-yellow font-sp-pro-semibold text-xs">
                        Create Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lastThreeInvoice.map((invoiceList, index) => (
                      <tr key={index} className="text-center">
                        <td className="text-text-color font-sp-pro-text-medium text-md">
                          <span className="px-3 py-1  bg-green rounded-md  text-white">
                            {invoiceList.invoiceCode}
                          </span>
                        </td>
                        <td className="text-text-color font-sp-pro-text-medium  text-md">
                          {invoiceList.supplier == ""
                            ? "....."
                            : invoiceList.supplier}
                        </td>
                        <td className="text-text-color font-sp-pro-text-medium  text-md">
                          {invoiceList.purchaseBy}
                        </td>
                        <td className="text-text-color font-sp-pro-text-medium text-md">
                          {moment(invoiceList.createdAt).format("DD MMM yyyy")}
                        </td>
                      </tr>
                    ))}
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

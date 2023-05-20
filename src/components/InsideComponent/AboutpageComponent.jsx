import React from "react";
import Picabout from "../../assets/images/Picabout.png";
import bgsideleft from "../../assets/images/BacgroundPic/bgsideleft.png";
import bgTre from "../../assets/images/BacgroundPic/bgTre.png";
import Eclipeabout from "../../assets/images/BacgroundPic/Eclipeabout.png";
import bgsiderightb from "../../assets/images/BacgroundPic/bgsiderightb.png";
import Bgleftourteam from "../../assets/images/BacgroundPic/Bgleftourteam.png";
import Frameright from "../../assets/images/BacgroundPic/Frameright.png";
import bgrightbottom from "../../assets/images/BacgroundPic/bgrightbottom.png";
import Mony from "../../assets/images/Iconteam/Mony.png";
import menghout from "../../assets/images/Iconteam/menghout.png";
import Mnor from "../../assets/images/Iconteam/Mnor.png";
import hongmenng from "../../assets/images/Iconteam/hongmenng.png";
import senglorn from "../../assets/images/Iconteam/senglorn.png";
import vanneat from "../../assets/images/Iconteam/vanneat.png";
import Rith from "../../assets/images/Iconteam/Rith.png";
import Chhun from "../../assets/images/Iconteam/Chhun.png";
import FooterComponent from "../LandingComponent/FooterComponent";
import NavbarComponent from "../LandingComponent/NavbarComponent";
export default function AboutpageComponent() {
  return (
    <>
    <NavbarComponent/>
      <div className="bg-bgpink relative pt-[50px]">
        <div className=" ">
          <img
            src={bgsideleft}
            alt=""
            className="w-[280px] h-[350px] absolute top-0 right-0 "
          />

          <img
            src={Eclipeabout}
            alt=""
            className="w-[40px] absolute top-[120px] left-[200px] hidden md:block "
          />

          <img
            src={bgTre}
            alt=""
            className="hidden lg:block w-[25px] h-[25px] absolute top-[240px] left-16  "
          />
        </div>
        <div className="w-[90%] mx-auto ">
          <div className=" text-center text-text-color pt-10 ">
            <div className=" font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
              About <span className="text-pending ">Us</span>
            </div>
            <div className="my-3 lg:text-[18px] md:text-[18px] sm:text-[17px] text-[15px]">
              You can know about what we are and what we plan
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 ">
            <div className="grid-cols-6">
              <div className="mb-3 text-left text-text-color w-[100%] lg:text-[18px] md:text-[18px] sm:text-[17px] text-[15px] lg:pt-[60px] md:pt-[20px] sm:pt-[10px] pt-[5px] ">
              Asset Tracer is a software system service that was created in 2023 by the Korea Software HRD Center. 
              This website serves as a platform for both administrators and users to manage their organization's assets
                <div className="my-6">
                Asset Tracer allows you to use your existing asset tags and benefit from our design technology, easy-to-customize system, and friendly customer service team.
                 You can count on us for secure, affordable, and user-friendly service. 
                 We're continually improving our quality products, so you can experience a better way to organize your assets.
                </div>
                <div className="lg:pt-[40px] md:pt-[10px] sm:pt-[8px] pt-[5px]">
                  <button
                    type="button"
                    className="text-textwhite rounded-md bg-pending font-medium text-md px-14 py-2 text-center shadow-lg hover:bg-hoveryellow shadow-shadow"
                  >
                    See more
                  </button>
                </div>
              </div>
            </div>

            <div className="grid-cols-6">
              <div className="mb-3 flex justify items-end pb-24 relative z-10">
                <img src={Picabout} alt="Picture About" className="w-[600px]" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={bgsiderightb}
              alt=""
              className="w-[110px] absolute bottom-0 left-0 "
            />
            <img
              src={Eclipeabout}
              alt=""
              className="w-[20px] absolute bottom-10 left-[45%] "
            />
            <img
              src={Eclipeabout}
              alt=""
              className="w-[50px] absolute bottom-12 right-[10%]  "
            />
          </div>
        </div>
      </div>

      {/* Two Card Of Our Vision and Mission*/}

      <div className="bg-[#F4F4F4] relative">
        <div>
          <img
            src={Frameright}
            alt=""
            className="w-[170px] absolute top-0 right-0 "
          />

          <img
            src={Eclipeabout}
            alt=""
            className="w-[30px] absolute top-[55%] right-[10%]  hidden lg:block"
          />

          <img
            src={Eclipeabout}
            alt=""
            className="w-[50px] absolute top-[8%] left-[7%]"
          />
          <img
            src={Eclipeabout}
            alt=""
            className="w-[70px] absolute bottom-[10%] left-[16%] hidden lg:block"
          />
        </div>
        <div className="w-[80%] mx-auto ">
          <div className=" text-center text-text-color py-10">
            <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-pending font-bold ">
              Our Vision and Mission
            </div>
            <div className="my-3 lg:w-[65%] md:w-[65%] sm:w-[70%] w-[100%] mx-auto lg:text-[18px] md:text-[18px] sm:text-[17px] text-[15px] ">
            We developed Asset Tracer after so many of our people complained that their budget was exhausted by having to pay over $3,000 for asset tracking software
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="grid-cols-6 ">
              <div className="mb-3 mx-auto text-text-color w-[300px] shadow-2xl shadow-gray-light xl:ml-[150px] lg:ml-[80px] md:ml-[0px] sm:ml-[10px] ml-[3px] ">
                <div
                  href="#"
                  className="block text-left px-8 py-4 bg-white border border-gray-light rounded-lg shadow w-[300px] h-[270px]"
                >
                  <h5 className="mb-2 text-3xl  font-bold text-pending">Mission</h5>
                  <p className="font-normal text-text-color mt-4">
                  Our mission is to make asset tracking efficient and cost effective.
                   Our best-on-the-market tags, 
                  along with the state-of-the-art Asset
                  Tracer software make this mission possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-cols-6">
              <div className="pb-[80px]">
                <div className="mb-3 mx-auto text-text-color w-[300px] shadow-2xl shadow-gray-light xl:ml-[30px] lg:mr-[80px] md:mr-[0px] sm:mr-[10px] ml-[3px] ">
                  <div
                    href="#"
                    className="block text-left px-8 py-4 bg-white border border-gray-light rounded-lg shadow w-[300px] h-[270px]"
                  >
                    <h5 className="mb-2 text-3xl font-bold  text-pending">
                      Vision
                    </h5>
                    <p className="font-normal text-text-color mt-4">
                    Asset Tracer was created by our team to provide many useful features to users.
                     The website's goals are to help users manage their assets, 
                     To provide better work for users in Cambodia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

                                                          {/* Our Team Member */}

      <div className="bg-bgpink relative">
        <div>
          <img
            src={Bgleftourteam}
            alt=""
            className="w-[90px] absolute top-0 left-0 "
          />

          <img
            src={Eclipeabout}
            alt=""
            className="w-[20px] absolute top-[18%] right-[13%] "
          />

          <img
            src={Eclipeabout}
            alt=""
            className="w-[20px] absolute bottom-[10%] left-[2%] "
          />

          <img
            src={bgrightbottom}
            alt=""
            className="w-[50px] absolute bottom-0 right-0 "
          />
        </div>
        <div className="mx-auto">
          <div className=" text-center text-text-color py-10 mx-auto">
            <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-text-color font-bold">
              Welcome to <span className="text-pending">our team</span>
            </div>
            <div className="my-3 xl:w-[40%] lg:w-[50%] md:w-[65%] sm:w-[70%] w-[90%] mx-auto lg:text-[18px] md:text-[18px] sm:text-[17px] text-[15px]">
              We ensure that you'll embark on a perfectly planned, safe vacation
              at a price you can afford.
            </div>
          </div>

          <div className="flex justify-evenly flex-wrap md:flex-wrap ">
            <div className=" text-text-color lg:w-[500px] md:w-[500px] sm:w-[500px] w-[330px] ">
              <div href="#" className="block">
                <div>
                  <div className=" flex justify-between mb-[30px]  ">
                    <div className="w-[40%] h-[130px] ">
                      <img
                        src={hongmenng}
                        alt="Picture Hongmeng"
                        className="w-[70px] mx-auto mb-5"
                      />
                      <div className="text-sm font-sp-pro-text-regular text-text-color">
                        Leng Hongmeng
                      </div>
                      <div className="text-xs font-sp-pro-text-regular text-purple">
                        Leader and Backend Developer
                      </div>
                    </div>
                    <div className="w-[40%] h-[130px]">
                    <img
                        src={Chhun}
                        alt="Picture Mengchhun"
                        className="w-[70px] mx-auto mb-5"
                      />
                      <div className="text-sm font-sp-pro-text-regular text-text-color">
                       Chheang Mengchhun
                      </div>
                      <div className="text-xs font-sp-pro-text-regular text-purple">
                       Backend Developer
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mb-[30px]  ">
                    <div className="w-[40%] h-[130px]">
                      <img
                        src={Mnor}
                        alt="Picture Mnor"
                        className="w-[70px] mx-auto mb-5"
                      />
                      <div className="text-sm font-sp-pro-text-regular text-text-color">
                        Boeurn Mnor
                      </div>
                      <div className="text-xs font-sp-pro-text-regular text-purple">
                        Frontend Developer
                      </div>
                    </div>
                    <div className="w-[40%] h-[130px] relative right-0">
                      <img
                        src={senglorn}
                        alt="Picture Senglorn"
                        className="w-[70px] mx-auto mb-5"
                      />
                      <div className="text-sm font-sp-pro-text-regular text-text-color">
                        Ly Senglorn
                      </div>
                      <div className="text-xs font-sp-pro-text-regular text-purple">
                        Frontend Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" text-text-color lg:w-[500px] md:w-[500px] sm:w-[500px] w-[330px] ">
              <div href="#" className="block pb-10">
                <div>
                  <div className=" flex justify-between mb-[30px] ">
                    <div className="w-[40%] h-[130px]">
                      <img
                        src={Mony}
                        alt="Picture Mony"
                        className="w-[70px] mx-auto mb-5"
                      />
                      <div className="text-sm font-sp-pro-text-regular text-text-color">
                        Keo Mony
                      </div>
                      <div className="text-xs font-sp-pro-text-regular text-purple">
                        Backend Developer
                      </div>
                    </div>
                    <div className="w-[40%] h-[130px] relative right-0">
                      <img
                        src={menghout}
                        alt="Picture Menghout"
                        className="w-[70px] mx-auto mb-5"
                      />
                      <div className="text-sm font-sp-pro-text-regular text-text-color">
                        Keng Menghout
                      </div>
                      <div className="text-xs font-sp-pro-text-regular text-purple">
                        Backend Developer
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mb-[30px] ">
                    <div className="w-[40%] h-[130px]">
                      <img
                        src={vanneat}
                        alt="Picture Vanneat"
                        className="w-[70px] mx-auto mb-5"
                      />
                      <div className="text-sm font-sp-pro-text-regular text-text-color">
                        Thou Vanneat
                      </div>
                      <div className="text-xs font-sp-pro-text-regular text-purple">
                        Frontend Developer
                      </div>
                    </div>
                    <div className="w-[40%] h-[130px] relative right-0">
                      <img
                        src={Rith}
                        alt="Picture Rith"
                        className="w-[70px] mx-auto mb-5"
                      />
                      <div className="text-sm font-sp-pro-text-regular text-text-color">
                        Bun Monypanharith
                      </div>
                      <div className="text-xs font-sp-pro-text-regular text-purple">
                        Frontend Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

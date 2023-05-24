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
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

export default function AboutPageComponent() {
  return (
    <div>
      <NavbarComponent />
      <div class="bg-bg-pink relative pt-[70px] 2xl:h-[950px]">
        <div class=" ">
          <img
            src={bgsideleft}
            alt=""
            class="w-[280px] h-[350px] absolute top-0 right-0 "
          />

          <img
            src={Eclipeabout}
            alt=""
            class="w-[40px] absolute top-[120px] left-[200px] hidden md:block "
          />

          <img
            src={bgTre}
            alt=""
            class="hidden lg:block w-[25px] h-[25px] absolute 3xl:top-[320px] 2xl:top-[280px] xl:top-[240px] top-[240px] 3xl:left-24 2xl:left-20 xl:left-16 left-16 "
          />
        </div>
        <div class="w-[90%] mx-auto">
          <div class=" text-center text-text-color pt-10 ">
            <div class=" font-sp-pro-text-bold 3xl:text-6xl  2xl:text-6xl xl:text-5xl md:text-4xl sm:text-3xl text-2xl">
              About <span class="text-pending ">Us</span>
            </div>
            <div class="my-3 lg:text-[18px] md:text-[18px] sm:text-[17px] text-[15px]">
              You can know about what we are and what we plan
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6 xl:grid-cols-2 ">
            <div class="grid-cols-6">
              <div class="mb-3 text-left text-text-color w-[100%] lg:text-[18px] md:text-[18px] sm:text-[17px] text-[15px] 3xl:pt-[140px] 2xl:pt-[100px] xl:pt-[60px] md:pt-[20px] sm:pt-[10px] pt-[5px] ">
                Asset Tracer is a software system service that was created in
                2023 by the Korea Software HRD Center. This website serves as a
                platform for both administrators and users to manage their
                organization's assets
                <div class="my-6">
                  Asset Tracer allows you to use your existing asset tags and
                  benefit from our design technology, easy-to-customize system,
                  and friendly customer service team. You can count on us for
                  secure, affordable, and user-friendly service. We're
                  continually improving our quality products, so you can
                  experience a better way to organize your assets.
                </div>
                <div class=" 3xl:pt-[100px] 2xl:pt-[80px] xl:pt-[15px] sm:pt-[8px] pt-[5px]">
                  <button
                    type="button"
                    class="text-white rounded-md bg-pending font-medium text-md px-14 py-2 text-center shadow-lg hover:bg-hover-yellow shadow-shadow"
                  >
                    See more
                  </button>
                </div>
              </div>
            </div>

            <div class="grid-cols-6">
              <div class=" mb-3 pb-24 3xl:absolute 2xl:absolute xl:relative relative z-10 mt-5 3xl:ml-[80px] 2xl:ml-[45px] ml-0">
                <img
                  src={Picabout}
                  alt="Picture About"
                  class="3xl:w-[800px] 2xl:w-[650px] xl:w-[800px] w-[600px]"
                />
              </div>
            </div>
          </div>
          <div>
            <img
              src={bgsiderightb}
              alt=""
              class="w-[110px] absolute bottom-0 left-0 "
            />
            <img
              src={Eclipeabout}
              alt=""
              class="w-[20px] absolute bottom-10 left-[45%] "
            />
            <img
              src={Eclipeabout}
              alt=""
              class="w-[50px] absolute bottom-12 right-[10%]  "
            />
          </div>
        </div>
      </div>

      {/* Two Card Of Our Vision and Mission*/}

      <div class="bg-[#F4F4F4] relative">
        <div>
          <img
            src={Frameright}
            alt=""
            class="w-[170px] absolute top-0 right-0 "
          />

          <img
            src={Eclipeabout}
            alt=""
            class="w-[30px] absolute top-[55%] right-[10%]  hidden lg:block"
          />

          <img
            src={Eclipeabout}
            alt=""
            class="w-[50px] absolute top-[8%] left-[7%]"
          />
          <img
            src={Eclipeabout}
            alt=""
            class="w-[70px] absolute bottom-[10%] left-[16%] hidden lg:block"
          />
        </div>
        <div class="w-[80%] mx-auto ">
          <div class=" text-center text-text-color py-10">
            <div class="3xl:text-6xl 2xl:text-6xl xl:text-5xl md:text-4xl sm:text-3xl text-2xl text-pending font-bold ">
              Our Vision and Mission
            </div>
            <div class="my-3 3xl:w-[50%] xl:w-[65%] md:w-[65%] sm:w-[70%] w-[100%] mx-auto lg:text-[18px] md:text-[18px] sm:text-[17px] text-[15px] ">
              We developed Asset Tracer after so many of our people complained
              that their budget was exhausted by having to pay over $3,000 for
              asset tracking software
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div class="grid-cols-6 ">
              <div class="mb-3 mx-auto text-text-color w-[300px] shadow-2xl shadow-gray-light 3xl:ml-[400px] 2xl:ml-[290px] xl:ml-[150px] lg:ml-[80px] md:ml-[0px] sm:ml-[10px] ml-[3px] ">
                <div
                  href="#"
                  class="block text-left px-8 py-4 bg-white border border-gray-light rounded-lg shadow w-[300px] h-[270px]"
                >
                  <h5 class="mb-2 text-3xl  font-bold text-pending">Mission</h5>
                  <p class="font-normal text-text-color mt-4">
                    Our mission is to make asset tracking efficient and cost
                    effective. Our best-on-the-market tags, along with the
                    state-of-the-art Asset Tracer software make this mission
                    possible.
                  </p>
                </div>
              </div>
            </div>
            <div class="grid-cols-6">
              <div class="pb-[80px]">
                <div class="mb-3 mx-auto text-text-color w-[300px] shadow-2xl shadow-gray-light 3xl:ml-[60px] 2xl:ml-[50px] xl:ml-[30px] lg:mr-[80px] md:mr-[0px] sm:mr-[10px] ml-[3px] ">
                  <div
                    href="#"
                    class="block text-left px-8 py-4 bg-white border border-gray-light rounded-lg shadow w-[300px] h-[270px]"
                  >
                    <h5 class="mb-2 text-3xl font-bold  text-pending">
                      Vision
                    </h5>
                    <p class="font-normal text-text-color mt-4">
                      Asset Tracer was created by our team to provide many
                      useful features to users. The website's goals are to help
                      users manage their assets, To provide better work for
                      users in Cambodia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Member */}

      <div class="bg-bg-pink relative">
        <div>
          <img
            src={Bgleftourteam}
            alt=""
            class="w-[90px] absolute top-0 left-0 "
          />

          <img
            src={Eclipeabout}
            alt=""
            class="w-[20px] absolute top-[18%] right-[13%] "
          />

          <img
            src={Eclipeabout}
            alt=""
            class="w-[20px] absolute bottom-[10%] left-[2%] "
          />

          <img
            src={bgrightbottom}
            alt=""
            class="w-[50px] absolute bottom-0 right-0 "
          />
        </div>
        <div class="mx-auto">
          <div class=" text-center text-text-color py-10 mx-auto">
            <div class=" 3xl:text-6xl 2xl:text-6xl xl:text-5xl md:text-4xl sm:text-3xl text-2xl text-text-color font-bold">
              Welcome to <span class="text-pending">our team</span>
            </div>
            <div class="my-3 3xl:w-[35%] 2xl:w-[38%] xl:w-[40%] lg:w-[50%] md:w-[65%] sm:w-[70%] w-[90%] mx-auto lg:text-[18px] md:text-[18px] sm:text-[17px] text-[15px]">
              We ensure that you'll embark on a perfectly planned, safe vacation
              at a price you can afford.
            </div>
          </div>

          <div class="flex justify-evenly flex-wrap md:flex-wrap ">
            <div class=" text-text-color 3xl:w-[700px] 2xl:w-[600px] xl:w-[500px] md:w-[500px] sm:w-[500px] w-[330px] ">
              <div href="#" class="block">
                <div>
                  <div class=" flex justify-between mb-[30px]  ">
                    <div class="w-[40%] h-[130px] text-center ">
                      <div class="w-[80px] h-[80px] bg-bg-pink mx-auto rounded-full  mb-5">
                        <img src={hongmenng} alt="Picture Hongmeng" />
                      </div>

                      <div class="text-sm font-sp-pro-text-regular text-text-color">
                        Leng Hongmeng
                      </div>
                      <div class="text-xs font-sp-pro-text-regular text-purple">
                        Leader and Backend Developer
                      </div>
                    </div>
                    <div class="w-[40%] h-[130px] text-center">
                      <div class="w-[80px] h-[80px] bg-bg-pink mx-auto rounded-full  mb-5">
                        <img src={Chhun} alt="Picture Mengchhun" />
                      </div>

                      <div class="text-sm font-sp-pro-text-regular text-text-color">
                        Chheang Mengchhun
                      </div>
                      <div class="text-xs font-sp-pro-text-regular text-purple">
                        Backend Developer
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between mb-[30px]  ">
                    <div class="w-[40%] h-[130px] text-center">
                      <div class="w-[80px] h-[80px] bg-bg-pink mx-auto rounded-full  mb-5">
                        <img src={Mnor} alt="Picture Mnor" />
                      </div>

                      <div class="text-sm font-sp-pro-text-regular text-text-color">
                        Boeurn Mnor
                      </div>
                      <div class="text-xs font-sp-pro-text-regular text-purple">
                        Frontend Developer
                      </div>
                    </div>
                    <div class="w-[40%] h-[130px] text-center">
                      <div class="w-[80px] h-[80px] bg-bg-pink mx-auto rounded-full  mb-5">
                        <img src={senglorn} alt="Picture Senglorn" />
                      </div>

                      <div class="text-sm font-sp-pro-text-regular text-text-color">
                        Ly Senglorn
                      </div>
                      <div class="text-xs font-sp-pro-text-regular text-purple">
                        Frontend Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class=" text-text-color 3xl:w-[700px] 2xl:w-[600px] xl:w-[500px] md:w-[500px] sm:w-[500px] w-[330px] ">
              <div href="#" class="block pb-10">
                <div>
                  <div class=" flex justify-between mb-[30px] ">
                    <div class="w-[40%] h-[130px] text-center">
                      <div class="w-[80px] h-[80px] bg-bg-pink mx-auto rounded-full  mb-5">
                        <img src={Mony} alt="Picture Mony" />
                      </div>

                      <div class="text-sm font-sp-pro-text-regular text-text-color">
                        Keo Mony
                      </div>
                      <div class="text-xs font-sp-pro-text-regular text-purple">
                        Backend Developer
                      </div>
                    </div>
                    <div class="w-[40%] h-[130px] text-center">
                      <div class="w-[80px] h-[80px] bg-bg-pink mx-auto rounded-full  mb-5">
                        <img src={menghout} alt="Picture Menghout" />
                      </div>

                      <div class="text-sm font-sp-pro-text-regular text-text-color">
                        Keng Menghout
                      </div>
                      <div class="text-xs font-sp-pro-text-regular text-purple">
                        Backend Developer
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between mb-[30px] ">
                    <div class="w-[40%] h-[130px] text-center">
                      <div class="w-[80px] h-[80px] bg-bg-pink mx-auto rounded-full  mb-5">
                        <img src={vanneat} alt="Picture Vanneat" />
                      </div>

                      <div class="text-sm font-sp-pro-text-regular text-text-color">
                        Thou Vanneat
                      </div>
                      <div class="text-xs font-sp-pro-text-regular text-purple">
                        Frontend Developer
                      </div>
                    </div>
                    <div class="w-[40%] h-[130px] text-center">
                      <div class="w-[80px] h-[80px] bg-bg-pink mx-auto rounded-full  mb-5">
                        <img src={Rith} alt="Picture Rith" />
                      </div>

                      <div class="text-sm font-sp-pro-text-regular text-text-color">
                        Bun Monypanharith
                      </div>
                      <div class="text-xs font-sp-pro-text-regular text-purple">
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
    </div>
  );
}

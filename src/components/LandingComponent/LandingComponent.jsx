import React from 'react'
import Grouplanding from "../../assets/images/PictureLanding/Grouplanding.png";
import Peoplelanding from "../../assets/images/PictureLanding/Peoplelanding.png";
import Send from "../../assets/images/PictureLanding/Send.png";
import Icon from "../../assets/images/PictureLanding/Icon.png";
import Iconinline from "../../assets/images/PictureLanding/Iconinline.png";
import Outline from "../../assets/images/PictureLanding/Outline.png";
import Ellipseside from "../../assets/images/PictureLanding/Ellipseside.png";
import Ellipse from "../../assets/images/PictureLanding/Ellipse.png";
import Element from "../../assets/images/PictureLanding/Element.png";
import Frame from "../../assets/images/PictureLanding/Frame.png";
import Framecenter from "../../assets/images/PictureLanding/Framecenter.png";
import Frameright from "../../assets/images/PictureLanding/Frameright.png";
import Elementleft from "../../assets/images/PictureLanding/Elementleft.png";
import Image from "../../assets/images/PictureLanding/Image.png";
import Ellipsesidebenefit from "../../assets/images/PictureLanding/Ellipsesidebenefit.png";
import Rectangletop from "../../assets/images/PictureLanding/Rectangletop.png";
import Rectanglebuttom from "../../assets/images/PictureLanding/Rectanglebuttom.png";
import girlimage from "../../assets/images/PictureLanding/girlimage.png";
import Elementbenefit from "../../assets/images/PictureLanding/Elementbenefit.png";
import Iconuser from "../../assets/images/PictureLanding/Iconuser.png";
import Iconlist from "../../assets/images/PictureLanding/Iconlist.png";
import Iconassets from "../../assets/images/PictureLanding/Iconassets.png";
import Iconreport from "../../assets/images/PictureLanding/Iconreport.png";
import Iconbackup from "../../assets/images/PictureLanding/Iconbackup.png";
import Vector from "../../assets/images/PictureLanding/Vector.png";
import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';

export default function LandingComponent() {
  return (
    <>
      <NavbarComponent />
      <div class="bg-bg-pink pt-[90px]">
        <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 ">
          <div class="text-left md:col-span-6 3xl:mt-[55px] 2xl:mt-[60px] xl:mt-14 mt-14">
            <div class="w-[90%] 3xl:ml-[250px] 2xl:ml-[220px] xl:ml-[170px] lg:ml-[140px] md:ml-[30px] sm:ml-[40px] ml-6">
              <div class="3xl:text-[65px] 2xl:text-[55px] xl:text-5xl lg:text-4xl md:text-3xl text-3xl my-3 font-sp-pro-text-bold text-text-color">
                Make assets
                <div class="my-2">tracking</div>
                <div>
                  <div class="text-pending my-2">
                    simpler <span class="text-text-color">for your</span>
                  </div>
                </div>
                organization
              </div>
              <div class="text-text-color font-sp-pro-text-regular my-[20px] sm:w-[80%] 3xl:text-lg 2xl:text-lg xl:text-md text-md">
                Manage Assets for FREE*
                <div>Guarenteed best asset management!</div>
                <div class="text-pending">
                  *See Subcription plans For Details
                </div>
              </div>
              <div class="lg:pb-0 md:pb-10 sm:pb-10 pb-10 ">
                <button
                  type="button"
                  class=" px-7 3xl:py-2 py-3 2xl:px-14 xl:px-8 lg:px-7 text-white rounded-md bg-pending font-medium 3xl:text-lg text-md text-center mr-14 shadow-lg hover:bg-hover-yellow shadow-shadow"
                >
                  Try asset tracer free
                </button>
              </div>
            </div>
          </div>

          <div class=" col-span-6 relative sm:grid-cols-1">
            <img
              src={Send}
              alt=""
              class="hidden lg:block absolute top-[100px] lg:ml-[80px] w-[45px] md:ml-[60px] sm:ml-[50px]"
            />
            <img
              src={Icon}
              alt=""
              class="absolute 3xl:top-[360px] 2xl:top-[320px] lg:top-[273px] w-[48px] 3xl:ml-0 2xl:-ml-6 xl:-ml-5 lg:-ml-5 -ml-5"
            />

            <div
              href="#"
              class=" hidden lg:block absolute 3xl:ml-[20px] z-30 px-3 py-2 bg-white border border-white rounded-xl 3xl:top-[380px] 2xl:top-[340px] xl:top-[300px] 3xl:w-[230px] xl:w-[190px] w-[190px] 3xl:h-[120px] xl:h-[100px] h-[100px]"
            >
              <ul class=" text-text-color list-inside ">
                <li class="flex items-center">
                  <img
                    src={Outline}
                    alt=""
                    class="w-[20px] absolute ml-[5px]"
                  />
                  <img src={Iconinline} alt="" class="w-[30px] " />
                  <div class="px-3 text-sm">Counting</div>
                </li>
                <div class="font-bold 3xl:text-xl xl:text-base text-base ml-[42px] pt-1">
                  100,000+
                </div>
              </ul>
              <div class="flex font-normal 3xl:text-xs xl:text-[8px] text-[8px] text-blue-light justify-between py-1 pt-4">
                <div>Besnik graduations</div>
                <div class="pl-8">15.35%/yr</div>
              </div>
            </div>

            <img
              src={Grouplanding}
              alt=""
              class="absolute hidden sm:block 3xl:w-[670px] 2xl:w-[520px] xl:w-[455px] xl:top-[248px] lg:top-[228px]  md:top-[215px]  top-[228px] lg:ml-[40px] md:-ml-[20px] sm:-ml-[5px]"
            />
            <img
              src={Peoplelanding}
              alt=""
              class=" 3xl:w-[421px] 2xl:w-[370px] xl:w-[348px] md:w-[297px] z-10 absolute top-[10px] ml-[100px] hidden md:block 3xl:ml-[170px] xl:ml-[120px] lg:ml-[100px] md:ml-[30px] sm:-ml-[5px]"
            />
          </div>
        </div>
        {/* Card under landing page */}
        <div class="py-12 3xl:pt-12 xl:pt-16 pt-24 hidden lg:block">
          <div
            href="#"
            class=" 3xl:max-w-screen-lg 2xl:max-w-screen-lg max-w-screen-md mx-auto py-12 bg-white border border-border-gray-light rounded-lg shadow-md shadow-gray-light"
          >
            <div class="w-full flex justify-around">
              <ul class="font-medium flex ">
                <li>
                  <div class=" ">
                    <div
                      href="#"
                      class="flex text-left text-text-color text-md 3xl:text-xl 2xl:text-lg list-inside"
                    >
                      Organization{" "}
                      <img
                        src={Vector}
                        alt=""
                        class="w-[10px] h-2 ml-2 mt-[10px]"
                      />
                    </div>
                    <div class="text-[10px] 3xl:text-sm 2xl:text-sm text-left pt-3">
                      All Your organization
                    </div>
                  </div>
                </li>
                <li>
                  <div class="w-[150px] ml-16">
                    <div
                      href="#"
                      class="text-left text-md 3xl:text-xl 2xl:text-lg text-text-color flex"
                    >
                      Date{" "}
                      <img
                        src={Vector}
                        alt=""
                        class="w-[10px] h-2 ml-2 mt-[10px]"
                      />
                    </div>
                    <div class="text-[10px] 3xl:text-sm 2xl:text-sm text-left pt-3">
                      When you have join us
                    </div>
                  </div>
                </li>
                <li>
                  <div class="w-[150px] ml-16">
                    <div
                      href="#"
                      class="flex text-left text-base 3xl:text-xl 2xl:text-lg text-text-color"
                    >
                      User{" "}
                      <img
                        src={Vector}
                        alt=""
                        class="w-[10px] h-2 ml-2 mt-[10px]"
                      />
                    </div>
                    <div class="text-[10px] 3xl:text-sm 2xl:text-sm text-left pt-3">
                      Number of user
                    </div>
                  </div>
                </li>
              </ul>

              <div class="w-[150px] pt-2">
                <button
                  type="button"
                  class="text-white rounded-md bg-pending font-medium text-sm 3xl:text-md 3xl:px-14 3xl:py-3 px-10 py-2.5 text-center -ml-8 shadow-lg hover:bg-hover-yellow shadow-shadow"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FeatureComponent */}

      <div class="bg-bgsecondary py-0 relative">
        <img src={Ellipseside} alt="" class="w-[200px] absolute " />

        <img
          src={Ellipse}
          alt=""
          class="absolute top-[70px] w-[70px] ml-[250px] hidden lg:block"
        />
        <img
          src={Element}
          alt=""
          class="absolute hidden md:block 3xl:ml-[1400px] 2xl:ml-[1100px] xl:ml-[900px] lg:ml-[720px] sm:ml-[500px] top-[50px] w-[120px]"
        />
        <div class="pt-[70px]">
          <div class="3xl:text-6xl 2xl:text-[53px] xl:text-5xl text-4xl font-sp-pro-text-bold text-text-color text-center">
            This is Our
            <span class="text-pending px-3">Feature</span>
          </div>
        </div>
        <div class="3xl:text-lg 2xl:text-lg xl:text-base text-md lg:w-[30%] md:w-[50%] sm:w-[60%] w-[100%] font-medium text-text-color text-center mx-auto py-3 mb-7">
          A Team of experienced tourism professionals will provides you with the
          best advides place
        </div>

        {/* Card */}

        <div class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[70%] mx-auto ">
          <div class="mb-3 text-left text-text-color relative 3xl:ml-14 2xl:ml-5 xl:ml-0 md:-ml-[30px] sm:ml-[80px] -ml-3 ">
            <div
              href="#"
              class="block px-6 pb-6 bg-white border border-border-gray-light rounded-lg shadow-xl shadow-border-gray-light z-50 3xl:w-[350px] 2xl:w-[300px] w-[280px] h-[250px] "
            >
              <img src={Frame} alt="" class="w-[60px] py-4 " />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-text-color ">
                Asset Tracking
              </h5>
              <p class="font-normal text-text-color ">
                Focus on your company as a whole instead of individual assets.
                Use our software to keep tabs on your assets.
              </p>
            </div>
          </div>
          <div class="mb-3 text-text-color text-left 3xl:ml-8 2xl:ml-5 xl:ml-0 md:ml-[0px] sm:ml-[80px] -ml-3">
            <div
              href="#"
              class="block 3xl:w-[350px] 2xl:w-[300px] w-[280px] h-[250px] px-6 pb-6 bg-white border border-border-gray-light rounded-lg shadow "
            >
              <img src={Framecenter} alt="" class="w-[60px] py-4" />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-text-color ">
                Members
              </h5>
              <p class="font-normal text-text-color ">
                organization's owner csn be manage member such as limit scop for
                user by role and can promote those user to admin
              </p>
            </div>
          </div>
          <div class="mb-3 text-text-color text-left 2xl:ml-5 xl:ml-0 md:ml-[120px] sm:ml-[80px] -ml-3">
            <div
              href="#"
              class="block 3xl:w-[350px] 2xl:w-[300px] w-[280px] h-[250px] px-6 pb-6 bg-white border border-border-gray-light rounded-lg shadow "
            >
              <img src={Frameright} alt="" class="w-[60px] py-4 " />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-text-color">
                Asset Report
              </h5>
              <p class="font-normal text-text-color ">
                View your assets with our predefined reports that include
                statements about your assets
              </p>
            </div>
          </div>
        </div>
        {/* ++++++++++++++++++++++++++++++++++++++++   One Card  +++++++++++++++++++++++++++++++++++++++++++ */}
        <div class="grid grid-cols-1 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 py-[100px]">
          <div class="col-span-5 ">
            <img
              src={Ellipse}
              alt=""
              class="absolute top-[890px] w-[30px] ml-[12%] hidden lg:block"
            />
            <div class="w-[70%] ml-8 3xl:mx-[50%] 2xl:mx-[45%] xl:mx-[40%] lg:mx-[40%] md:mx-auto sm:mx-auto">
              <div class="text-left 3xl:text-5xl 2xl:text-5xl xl:text-4xl lg:text-3xl text-3xl font-sp-pro-text-bold text-text-color">
                What people say
                <div class="text-pending 3xl:my-2 xl:my-1 lg:my-2 my-2">about us.</div>
              </div>
              <div class="text-text-color mt-5 text-left font-sp-pro-text-regular lg:mb-0 md:mb-12 sm:mb-12 mb-12 3xl:text-lg 2xl:text-[16px] xl:text-md text-md">
                Our Clients send us bunch of smilies with our System and we love
                them.
              </div>
            </div>
          </div>

          <div class=" col-span-7 relative">
            <img
              src={Elementleft}
              alt=""
              class="absolute -top-[100px] w-[120px] ml-[480px] z-40 hidden sm:block"
            />
            <div class="relative">
              <img
                src={Image}
                alt=""
                class="absolute -top-[20px] w-[50px] 3xl:ml-[225px] 2xl:ml-[180px] ml-[130px] z-40 hidden md:block"
              />

              <div class="mb-3 text-left text-text-color 3xl:ml-[250px] 2xl:ml-[200px] xl:ml-[150px] md:ml-[150px] sm:ml-[100px]  ml-9 relative z-20 ">
                <div
                  href="#"
                  class="block px-6 py-6  lg:w-[390px] md:w-[385px] sm:w-[385px] w-[300px] lg:h-[250px] md:h-[260px] sm:h-[240px] h-[300px] bg-white border border-border-gray-light rounded-lg shadow-2xl shadow-[#cbc6c6] "
                >
                  <div class="font-sp-pro-text-medium text-text-color ">
                    “Asset Tracer can help organizations optimize their asset
                    utilization and reduce costs by improving the efficiency of
                    asset acquisition, deployment, and maintenance.”
                  </div>
                  <div class="font-sp-pro-text-medium text-text-color pt-7">
                    Kosal
                    <div>Lahorem</div>
                    <div>Cambodia</div>
                  </div>
                </div>
              </div>

              <div class="mb-3 text-left text-text-color top-[70px] ml-[190px] 3xl:ml-[295px] 2xl:ml-[240px] lg:ml-[185px] md:ml-[190px] sm:ml-[140px] absolute">
                <div
                  href="#"
                  class=" hidden sm:block px-6 py-6 bg-[#F7F8FC] w-[390px] h-[240px] border border-border-gray-light rounded-lg shadow "
                >
                  <div class="fontsp-pro-text-medium text-gray-700 ">
                    “Asset Tracer can help organizations optimize their asset
                    utilization and reduce costs by improving the efficiency of
                    asset acquisition, deployment, and maintenance.”
                  </div>
                  <div class="font-sp-pro-text-medium text-text-color pt-7">
                    Kosal
                    <div>Lahorem</div>
                    <div>Cambodia</div>
                  </div>
                </div>
                <img
                  src={Ellipse}
                  alt=""
                  class="absolute hidden sm:block top-[95px] w-[80px] ml-[310px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BenefitComponent */}

      <div class="bg-bg-pink relative py-8 3xl:h-[950px] 2xl:h-[880px] xl:h-[780px] h-[770px]">
        <div>
          <img
            src={Ellipsesidebenefit}
            alt=""
            class="w-[100px] absolute top-0 right-0"
          />
          <img
            src={Ellipse}
            alt=""
            class="w-[50px] absolute top-[410px] right-[270px] hidden md:block"
          />
          <img
            src={Ellipse}
            alt=""
            class="absolute top-[30px] w-[70px] ml-[50px] hidden md:block"
          />

          <img
            src={Elementbenefit}
            alt=""
            class="absolute top-[410px] w-[70px] ml-[45px]"
          />

          <img
            src={Ellipse}
            alt=""
            class="absolute top-[580px] w-[70px] ml-[45px]"
          />
        </div>
        <div class=" 3xl:text-6xl 2xl:text-5xl xl:text-4xl text-4xl font-sp-pro-text-bold text-text-color text-center ">
          This is our
          <span class="text-pending mx-3">benefits</span>
        </div>

        {/* ==========================================Card========================================= */}

        <div class="w-[65%] h-[650px] mx-auto mt-5 relative">
          <div class="relative">
            <div class="lg:w-[60%] md:w-[80%] sm:w-[90%] w-[80%] h-[150px] absolute z-10 m-auto left-0 right-0 xl:left-0 xl:right-0 2xl:left-[90px] top-[80px]">
              <div class="grid grid-cols-1 sm:grid-cols-12">
                <div class="col-span-6">
                  <div class="">
                    <div class="mb-2 font-semibold text-text-color ">
                      <ul class="max-w-md text-xl space-y-1 text-text-color list-inside ">
                        <li class="flex items-center">
                          <img src={Iconuser} alt="" class="w-[48px]" />
                          <div class="ml-6">Users</div>
                        </li>
                      </ul>
                    </div>
                    <ul class="max-w-lg space-y-2 px-3 text-text-color list-inside pt-3">
                      <div class="3xl:text-lg 2xl:text-[16px] xl:text-[13px] text-[13px]">
                        <li class="flex items-center">
                          <img src={Iconlist} alt="" class="w-[15px]" />
                          <div class="ml-2">Add as many users as you</div>
                        </li>
                        <li class="flex items-center ml-[24px]">
                          need for your accounts.
                        </li>

                        <li class="flex items-center mt-10">
                          <img src={Iconlist} alt="" class="w-[15px]" />
                          <div class="ml-2">one user can create and</div>
                        </li>
                        <li class="flex items-center ml-[24px]">
                          join many organization
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>

                <div class="col-span-6">
                  <div class="hidden md:block">
                    <div class="mb-2 text-lg font-semibold text-text-color ">
                      <ul class="max-w-md space-y-1 text-text-color list-inside ">
                        <li class="flex items-center">
                          <img src={Iconassets} alt="" class="w-[48px]" />
                          <div class="ml-6">Assets</div>
                        </li>
                      </ul>
                    </div>
                    <ul class="max-w-lg space-y-2 px-3 text-text-color list-inside pt-3">
                      <div class="3xl:text-lg 2xl:text-[16px] xl:text-[13px] text-[13px]">
                        <li class="flex items-center">
                          <img src={Iconlist} alt="" class="w-[15px]" />
                          <div class="ml-2">Focus on your company</div>
                        </li>
                        <li class="flex items-center ml-6">
                          as a whole instead of
                        </li>
                        <li class="flex items-center ml-6">
                          individual assets.
                        </li>

                        <div class="mt-5">
                          <li class="flex items-center">
                            <img src={Iconlist} alt="" class="w-[15px]" />
                            <div class="ml-2">Use our software to keep</div>
                          </li>
                          <li class="flex items-center ml-6">
                            tabs on your assets.
                          </li>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <img
              src={Rectangletop}
              alt=""
              class="3xl:w-[1700px] 2xl:w-[1600px] xl:w-[900px] w-[900px] 3xl:h-[500px] 2xl:h-[450px] xl:h-[400px] h-[400px] "
            />
          </div>

          <div class="">
            <div class="lg:w-[60%] md:w-[80%] sm:w-[90%] w-[80%] h-[150px] absolute z-20 m-auto left-0 right-0 xl:left-0 xl:right-0 2xl:left-[90px] 3xl:top-[470px] 2xl:top-[440px] xl:top-[380px] top-[380px]">
              <div class="grid grid-cols-1 sm:grid-cols-12">
                <div class="col-span-6">
                  <div class="mb-2 text-lg font-semibold text-text-color ">
                    <ul class="max-w-md space-y-1 text-text-color list-inside ">
                      <li class="flex items-center">
                        <img src={Iconreport} alt="" class="w-[48px]" />
                        <div class="ml-6">Report</div>
                      </li>
                    </ul>
                  </div>
                  <ul class="max-w-lg space-y-2 px-3 text-text-color list-inside pt-3">
                    <div class="3xl:text-lg 2xl:text-[16px] xl:text-[13px] text-[13px]">
                      <li class="flex items-center">
                        <img src={Iconlist} alt="" class="w-[15px]" />
                        <div class="ml-2">View predefined reports</div>
                      </li>
                      <li class="flex items-center ml-6 my-2">
                        which include statements
                      </li>
                      <li class="flex items-center ml-6 my-2">
                        about your assets to help
                      </li>
                      <li class="flex items-center ml-6 my-2">
                        clean up your workload.
                      </li>
                    </div>
                  </ul>
                </div>

                <div class="col-span-6">
                  <div class="hidden md:block">
                    <div class="mb-2 text-lg font-semibold text-text-color ">
                      <ul class="max-w-md space-y-1 text-text-color list-inside ">
                        <li class="flex items-center">
                          <img src={Iconbackup} alt="" class="w-[48px]" />
                          <div class="ml-6">Back up</div>
                        </li>
                      </ul>
                    </div>
                    <ul class="max-w-lg space-y-2 px-3 text-text-color list-inside pt-3">
                      <div class="3xl:text-lg 2xl:text-[16px] xl:text-[13px] text-[13px]">
                        <li class="flex items-center">
                          <img src={Iconlist} alt="" class="w-[15px]" />
                          <div class="ml-2">Back up your asset </div>
                        </li>

                        <li class="flex items-center mt-6">
                          <img src={Iconlist} alt="" class="w-[15px]" />
                          <div class="ml-2">Back up invoice</div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={Rectanglebuttom}
              alt=""
              class="absolute 3xl:w-[1700px] 2xl:w-[1600px] xl:w-[900px] w-[900px] 3xl:h-[500px] 2xl:h-[450px] xl:h-[400px] h-[400px] 3xl:top-[350px] 2xl:top-[330px] xl:top-[280px] top-[280px]"
            />
          </div>
        </div>
      </div>

      <div class="bg-[#F4F4F4] relative py-16 pb-24">
        <div class="grid 3xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-1 md:grid-cols-1 ">
          <div class="col-span-7 ">
            <div class="hidden lg:block 3xl:w-[75%] 2xl:w-[85%] xl:w-[95%] w-[95%] h-[315px] xl:h-[315px] 3xl:h-[375px] 2xl:h-[340px] mx-auto bg-white 3xl:ml-[160px] 2xl:ml-[120px] md:ml-[50px] relative">
              <div class="order-1 relative">
                <img
                  src={girlimage}
                  alt=""
                  class="absolute 3xl:w-[650px] 2xl:w-[600px] xl:w-[550px] w-[550px] justify top-0 right-[80px] xl:right-[80px] 3xl:right-[100px]"
                />
              </div>
            </div>
          </div>
          <div class="col-span-5 ">
            <div class=" 3xl:w-[750px] 2xl:w-[550px] xl:w-[475px] lg:w-[475px] md:w-[690px] sm:w-[570px] w-[375px] 3xl:h-[375px] 2xl:h-[340px] lg:h-[315px] md:h-[315px] sm:h-[315px] h-[400px] mx-auto 3xl:-ml-[120px] 2xl:-ml-[20px] lg:ml-0 md:ml-10 sm:ml-9 ml-0 bg-white mr-[90px] relative ">
              <div class="w-[500px] mx-auto lg:ml-0 md:ml-14 sm:ml-14 ml-10">
                <div class="3xl:text-4xl text-3xl 3xl:w-[600px] 2xl:w-[500px] xl:w-[100%] md:w-[100%] sm:w-[100%] w-[60%] text-left font-sp-pro-text-bold text-text-color 3xl:pt-[65px] 2xl:pt-[70px] xl:pt-[45px] pt-[45px] ">
                  Create your accounted today and get started for free!
                </div>
                <div class="text-text-color py-3 text-left 3xl:text-lg text-base">
                  Manage Assets for FREE*
                  <div> Guaranteed best asset management!</div>
                  <div class="text-pending">
                    {" "}
                    * See Subscription P lans for Details{" "}
                  </div>
                </div>
              </div>

              <div class="w-full flex flex-col md:flex-row py-3">
                <div class="lg:ml-0 md:ml-[55px] sm:-ml-[150px] ml-[40px]">
                  <button
                    type="button"
                    class=" py-2 rounded-md text-white bg-pending hover:bg-hover-yellow font-medium text-sm px-8 text-center mr-10 shadow-lg shadow-shadow"
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    class="py-2 rounded-md text-pending bg-white font-medium border border-pending text-sm px-8 text-center mr-10 shadow"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

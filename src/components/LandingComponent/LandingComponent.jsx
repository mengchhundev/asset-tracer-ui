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
      <div class="bg-bgpink pt-[90px]">
        <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 ">
          <div class="text-left md:col-span-6 mt-12 ">
            <div class="w-[90%] lg:ml-[140px] md:ml-[30px] sm:ml-[40px] ml-6">
              <div class="text-4xl my-3 font-sp-pro-text-bold text-text-color">
                Make assets
                <div class="-my-3">tracking</div>
                <div>
                  <div class="text-pending -my-3">simpler <span class="text-text-color">for your</span></div>
                </div>
                organization
              </div>
              <div class="text-text-color font-sp-pro-text-regular my-[20px] sm:w-[80%]">
                Manage Assets for FREE*
                <div>Guarenteed best asset management!</div>
                <div class="text-pending">*See Subcription plans For Details</div>
              </div>
              <div class="lg:pb-0 md:pb-10 sm:pb-10 pb-10 ">
                <button
                  type="button"
                  class=" px-7 py-2 text-textwhite rounded-md bg-pending font-medium text-md text-center mr-14 shadow-lg hover:bg-hoveryellow shadow-shadow"
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
            <img src={Icon} alt="" class="absolute top-[273px] w-[48px] -ml-8" />

            <div
              href="#"
              class=" hidden md:block absolute -ml-[10px] z-30 px-3 py-2 bg-white border border-white rounded-xl top-[300px] w-[170px] h-[90px]"
            >
              <ul class=" text-text-color list-inside ">
                <li class="flex items-center">
                  <img
                    src={Outline}
                    alt=""
                    class="w-[20px] absolute ml-[5px]"
                  />
                  <img src={Iconinline} alt="" class="w-[30px] " />
                  <div class="px-3 text-xs">Counting</div>
                </li>
                <div class="font-bold text-md text-center">100,000+</div>
              </ul>
              <div class="flex font-normal text-[8px] text-blue justify-between py-1">
                <div>Besnik graduations</div>
                <div class="pl-8">15.35%/yr</div>
              </div>
            </div>

            <img
              src={Grouplanding}
              alt=""
              class="absolute hidden sm:block w-[450px] lg:top-[228px]  md:top-[255px]  top-[228px] lg:ml-[40px] md:-ml-[20px] sm:-ml-[5px]"
            />
            <img
              src={Peoplelanding}
              alt=""
              class="w-[330px] z-10 absolute top-[10px] ml-[100px] hidden md:block lg:ml-[100px] md:ml-[30px] sm:-ml-[5px]"
            />
          </div>
        </div>

        <div class="py-8 hidden lg:block">
          <div
            href="#"
            class=" w-[50%] mx-auto py-8 bg-white border border-gray-200 rounded-lg shadow-md shadow-gray-light"
          >
            <div class="w-full flex justify-evenly">
              <ul class="font-medium flex ">
                <li>
                  <div class="w-[150px] ml-4">
                    <div href="#" class="flex text-left text-text-color list-inside">
                      Organization  <img src={Vector} alt="" class="w-[10px] h-2 ml-2 mt-[10px]" />
                    </div>
                    <div class="text-[10px] text-left pt-3">All Your organization</div>
                  </div>
                </li>
                <li>
                  <div class="w-[130px] ml-5">
                    <div href="#" class="text-left text-text-color flex">
                      Date  <img src={Vector} alt="" class="w-[10px] h-2 ml-2 mt-[10px]" />
                    </div>
                    <div class="text-[10px] text-left pt-3">When you have join us</div>
                  </div>
                </li>
                <li>
                  <div class="w-[150px] ml-10">
                    <div href="#" class="flex text-left text-text-color">
                      User <img src={Vector} alt="" class="w-[10px] h-2 ml-2 mt-[10px]" />
                    </div>
                    <div class="text-[10px] text-left pt-3">Number of user</div>
                  </div>
                </li>
              </ul>

              <div class="w-[150px] pt-2">
                <button
                  type="button"
                  class="text-textwhite rounded-md bg-pending font-medium text-sm px-10 py-2.5 text-center -ml-8 shadow-lg hover:bg-hoveryellow shadow-shadow"
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
          class="absolute hidden md:block 2xl:ml-[1100px] xl:ml-[900px] lg:ml-[720px] sm:ml-[500px] top-[50px] w-[120px]"
        />
        <div class="pt-[70px]">
          <div class="text-4xl font-sp-pro-text-bold text-text-color text-center">
            This is Our
            <span class="text-pending px-3">Feature</span>
          </div>
        </div>
        <div class="text-md lg:w-[30%] md:w-[50%] sm:w-[60%] w-[100%] font-medium text-text-color text-center mx-auto py-3 mb-7">
          A Team of experienced tourism professionals will provides you with the
          best advides place
        </div>

        {/* Card */}

        <div class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[70%] mx-auto ">
          <div class="mb-3 text-left text-text-color relative lg:ml-0 md:-ml-[30px] sm:ml-[80px] -ml-3 ">
            <div
              href="#"
              class="block px-6 pb-6 bg-white border border-gray-200 rounded-lg shadow-xl shadow-gray-200 z-50 w-[280px] h-[250px] "
            >
              <img src={Frame} alt="" class="w-[60px] py-4 " />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-text-color ">
                Asset Tracking
              </h5>
              <p class="font-normal text-text-color ">
                Focus on your company as a whole instead of individual assets. Use our software to keep tabs on your assets.
              </p>
            </div>
          </div>
          <div class="mb-3 text-text-color text-left lg:ml-0 md:ml-[0px] sm:ml-[80px] -ml-3">
            <div
              href="#"
              class="block w-[280px] h-[250px] px-6 pb-6 bg-white border border-gray-200 rounded-lg shadow "
            >
              <img src={Framecenter} alt="" class="w-[60px] py-4" />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-text-color ">
                Members
              </h5>
              <p class="font-normal text-text-color ">
                organization's owner csn be manage member such as limit scop for user by role and can promote those user to admin
              </p>
            </div>
          </div>
          <div class="mb-3 text-text-color text-left lg:ml-0 md:ml-[120px] sm:ml-[80px] -ml-3">
            <div
              href="#"
              class="block w-[280px] h-[250px] px-6 pb-6 bg-white border border-gray-200 rounded-lg shadow "
            >
              <img src={Frameright} alt="" class="w-[60px] py-4 " />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-text-color ">
                Asset Report
              </h5>
              <p class="font-normal text-text-color ">
                View your assets with our predefined reports that include statements about your assets
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
            <div class="w-[70%] ml-8 xl:mx-[40%] lg:mx-[40%] md:mx-auto sm:mx-auto">
              <div class="text-left text-4xl font-sp-pro-text-bold text-text-color">
                What people say
                <div class="text-pending -my-3">about us.</div>
              </div>
              <div class="text-text-color mt-5 text-left sp-pro-text-regular lg:mb-0 md:mb-12 sm:mb-12 mb-12">
                Our Clients send us bunch of smilies with our System and we love them.
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
                class="absolute -top-[20px] w-[50px] ml-[130px] z-40 hidden md:block"
              />

              <div class="mb-3 text-left text-text-color lg:ml-[150px] md:ml-[150px] sm:ml-[100px]  ml-9 relative z-20 ">

                <div
                  href="#"
                  class="block px-6 py-6  lg:w-[390px] md:w-[385px] sm:w-[385px] w-[300px] lg:h-[250px] md:h-[260px] sm:h-[240px] h-[300px] bg-white border border-gray-200 rounded-lg shadow-2xl shadow-[#cbc6c6] "
                >
                  <div class="font-sp-pro-text-medium text-text-color ">
                    “Asset Tracer can help organizations optimize their asset utilization and reduce costs by
                    improving the efficiency of asset acquisition, deployment, and maintenance.”
                  </div>
                  <div class="font-sp-pro-text-medium text-text-color pt-7">
                    Kosal
                    <div>Lahorem</div>
                    <div>Cambodia</div>
                  </div>
                </div>
              </div>

              <div class="mb-3 text-left text-text-color top-[70px] ml-[190px] lg:ml-[185px] md:ml-[190px] sm:ml-[140px] absolute">
                <div
                  href="#"
                  class=" hidden sm:block px-6 py-6 bg-[#F7F8FC] w-[390px] h-[240px] border border-gray-200 rounded-lg shadow "
                >
                  <div class="fontsp-pro-text-medium text-gray-700 ">
                    “Asset Tracer can help organizations optimize their asset utilization and reduce costs by
                    improving the efficiency of asset acquisition, deployment, and maintenance.”
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

      <div class="bg-bgpink relative py-8">
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
        <div class="text-4xl  font-sp-pro-text-bold text-text-color text-center ">
          This is our
          <span class="text-pending mx-3">benefits</span>
        </div>

        {/* ==========================================Card========================================= */}

        <div class="w-[65%] h-[650px] mx-auto mt-5 relative">
          <div class="relative">
            <div class="lg:w-[60%] md:w-[80%] sm:w-[90%] w-[80%] h-[150px] absolute z-10 m-auto left-0 right-0 top-[80px]">
              <div class="grid grid-cols-1 sm:grid-cols-12">
                <div class="col-span-6">
                  <div class="">
                    <div class="mb-2 font-semibold text-text-color ">
                      <ul class="max-w-md text-xl space-y-1 text-text-color list-inside ">
                        <li class="flex items-center">
                          <img src={Iconuser} alt="" class="w-[48px]" />
                          <div class="ml-6">
                            Users
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul class="max-w-lg space-y-2 px-3 text-text-color list-inside pt-3">
                      <div class="text-[13px]">
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
                          <div class="ml-6">
                            Assets
                          </div>

                        </li>
                      </ul>
                    </div>
                    <ul class="max-w-lg space-y-2 px-3 text-text-color list-inside pt-3">
                      <div class="text-[13px]">
                        <li class="flex items-center">
                          <img src={Iconlist} alt="" class="w-[15px]" />
                          <div class="ml-2">
                            Focus on your company
                          </div>

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
                            <div class="ml-2">
                              Use our software to keep
                            </div>
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

            <img src={Rectangletop} alt="" class=" w-[900px] h-[400px] " />
          </div>

          <div class="">
            <div class="lg:w-[60%] md:w-[80%] sm:w-[90%] w-[80%] h-[150px] absolute z-20 m-auto left-0 right-0 top-[380px]">
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
                    <div class="text-[13px]">
                      <li class="flex items-center">
                        <img src={Iconlist} alt="" class="w-[15px]" />
                        <div class="ml-2">
                          View predefined reports
                        </div>
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
                      <div class="text-[13px]">
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
              class="absolute w-[900px] h-[400px] top-[280px]"
            />
          </div>
        </div>
      </div>

      <div class="bg-[#F4F4F4] relative py-16 pb-24">
        <div class="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-1 md:grid-cols-1 ">
          <div class="col-span-7 ">
            <div class="hidden lg:block w-[95%] h-[315px] mx-auto bg-white md:ml-[50px] relative">
              <div class="order-1 relative">
                <img
                  src={girlimage}
                  alt=""
                  class="absolute w-[550px] justify top-0 right-[80px]"
                />
              </div>
            </div>
          </div>
          <div class="col-span-5 ">
            <div class="lg:w-[475px] md:w-[690px] sm:w-[570px] w-[375px] lg:h-[315px] md:h-[315px] sm:h-[315px] h-[400px] mx-auto lg:ml-0 md:ml-10 sm:ml-9 ml-0 bg-white mr-[90px] relative ">
              <div class="w-[500px] mx-auto lg:ml-0 md:ml-14 sm:ml-14 ml-10">
                <div class=" text-3xl lg:w-[100%] md:w-[100%] sm:w-[100%] w-[60%] text-left font-sp-pro-text-bold text-text-color pt-[45px] ">
                  Create your accounted today and get started for free!
                </div>
                <div class="text-text-color py-3 text-left">
                  Manage Assets for FREE*
                  <div> Guaranteed best asset management!</div>
                  <div class="text-pending"> * See Subscription P lans for Details </div>
                </div>
              </div>

              <div class="w-full flex flex-col md:flex-row py-3">
                <div class="lg:ml-0 md:ml-[55px] sm:-ml-[150px] ml-[40px]">
                  <button
                    type="button"
                    class=" py-2 rounded-md text-textwhite bg-pending hover:bg-hoveryellow font-medium text-sm px-8 text-center mr-10 shadow-lg shadow-shadow"
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

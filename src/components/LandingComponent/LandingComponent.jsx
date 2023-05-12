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
import FooterComponent from './FooterComponent';

export default function LandingComponent() {
  return (
    <>
    <div class="bg-bgpink">
        <div class="grid lg:grid-cols-12 sm:grid-cols-1 gap-1">
          <div class="col-span-2"></div>
          <div class="lg:text-left lg:ml-0 col-span-4 mt-20 sm:text-left sm:ml-16">
            <div class="text-5xl font-bold text-textmediem">
              Get started
              <div>your exciting</div>
              <div class="text-pending py-3">journey</div>
              with us.
            </div>
            <div class="text-textmediem my-10 sm:w-[80%]">
              A Team of experienced tourism professionals will provides you with
              the best advides and tips for your desires place
            </div>
            <div class=" ">
            <button
              type="button"
              class="px-7 py-2 text-textwhite rounded-md bg-pending font-medium text-md text-center mr-14 shadow-lg hover:bg-hoveryellow shadow-shadow"
            >
              Try asset tracer free
            </button>
            </div>
          </div>


          <img
              src={Send}
              alt=""
              class="absolute top-[100px] 2xl:ml-[840px] xl:ml-[700px] lg:ml-[600px] w-[55px] md:ml-[600px] sm:ml-[500px]"
            />
          <div class=" col-span-6 relative sm:grid-cols-1">
            <img src={Icon} alt="" class="absolute top-[365px] w-[48px]" />

            <div
              href="#"
              class="absolute ml-[20px] z-50 block px-3 py-2 bg-white border border-white rounded-xl top-[390px] w-[170px] h-[90px]"
            >
              <ul class=" text-textmediem list-inside ">
                <li class="flex items-center">
                  <img
                    src={Outline}
                    alt=""
                    class="w-[20px] absolute z-50 ml-[5px]"
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
              class="w-[490px] pt-[300px] ml-[60px]"
            />
            <img
              src={Peoplelanding}
              alt=""
              class="w-[380px] z-40 absolute top-[37px] ml-[120px]"
            />
          </div>
        </div>
        <div class="py-16">
          <div
            href="#"
            class=" w-[50%] mx-auto py-10 bg-white border border-gray-200 rounded-lg shadow-md shadow-gray-light"
          >
            <div class="w-full flex flex-col md:flex-row justify-between">
              <ul class="font-medium flex flex-col md:flex-row ">
                <li>
                  <div href="#" class="block py-2 px-8 text-textmediem ">
                    Our team
                  </div>
                </li>
                <li>
                  <div href="#" class="block py-2 px-8 text-textmediem ">
                    About us
                  </div>
                </li>
                <li>
                  <div href="#" class="block py-2 px-8 text-textmediem ">
                    Contact us
                  </div>
                </li>
              </ul>
              <button
                type="button"
                class="text-textwhite rounded-md bg-pending font-medium text-sm px-8 text-center mr-10 shadow-lg hover:bg-hoveryellow shadow-shadow"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      

      <div class="bg-bgsecondary py-0 relative">
        <img src={Ellipseside} alt="" class="w-[200px] absolute" />
        <img
          src={Ellipse}
          alt=""
          class="absolute top-[70px] w-[70px] ml-[250px]"
        />
           <img
          src={Element}
          alt=""
          class="absolute 2xl:ml-[1100px] xl:ml-[900px] lg:ml-[720px] sm:ml-[500px] top-[50px] w-[120px]"
        />
        <div class="pt-[150px]">
          <div class="text-4xl font-bold text-text-color text-center">
            This is Our
            <span class="text-pending px-3">Feature</span>
          </div>
        </div>
        <div class="text-md w-[30%] font-medium text-[#4f6b7c] text-center mx-auto py-7 ">
          A Team of experienced tourism professionals will provides you with the
          best advides place
        </div>

        {/* Card */}

        <div class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[70%] mx-auto ">
          <div class="mb-3 text-text-color relative ">
            <div
              href="#"
              class="block px-6 pb-6 bg-white border border-gray-200 rounded-lg shadow-xl shadow-gray-200 z-50 "
            >
              <img src={Frame} alt="" class="w-[60px] py-4" />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-text-color ">
                Noteworthy
              </h5>
              <p class="font-normal text-text-color ">
                Here are the biggest enterprise technology
              </p>
            </div>
          </div>
          <div class="mb-3 text-text-color ">
            <div
              href="#"
              class="block px-6 pb-6 bg-white border border-gray-200 rounded-lg shadow "
            >
              <img src={Framecenter} alt="" class="w-[60px] py-4" />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-text-color ">
                Noteworthy
              </h5>
              <p class="font-normal text-text-color ">
                Here are the biggest enterprise technology
              </p>
            </div>
          </div>
          <div class="mb-3 text-text-color">
            <div
              href="#"
              class="block px-6 pb-6 bg-white border border-gray-200 rounded-lg shadow "
            >
              <img src={Frameright} alt="" class="w-[60px] py-4 " />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-text-color ">
                Noteworthy
              </h5>
              <p class="font-normal text-text-color ">
                Here are the biggest enterprise technology
              </p>
            </div>
          </div>
        </div>
        {/* ++++++++++++++++++++++++++++++++++++++++   One Card  +++++++++++++++++++++++++++++++++++++++++++ */}
        <div class="grid grid-cols-12 xl:grid-cols-12 sm:grid-cols-1 py-[130px]">

          <div class="col-span-5 ">
          <img
              src={Ellipse}
              alt=""
              class="absolute top-[890px] w-[30px] ml-[12%]"
            />
            <div class="w-[60%] xl:mx-[50%] lg:mx-auto md:mx-auto sm:mx-auto">
            <div class="text-4xl font-bold text-text-color">
              What people say
              <div class="text-pending">about us.</div>
            </div>
            <div class="text-text-color my-7">
              A Team of experienced tourism professionals the best advides and
              tips for your desires place
            </div>
            </div>
          </div>

          <div class=" col-span-7 relative">
              <img
                src={Elementleft}
                alt=""
                class="absolute -top-[100px] w-[120px] ml-[480px] z-50"
              />
            <div class="relative">
            <img
                src={Image}
                alt=""
                class="absolute -top-[20px] w-[50px] ml-[130px] z-50"
              />

              <div class="mb-3 text-text-color w-[380px] ml-[150px] absolute z-20 ">
              
                <div
                  href="#"
                  class="block px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-[#cbc6c6] "
                >
                  <div class="font-normal text-text-color ">
                    Here are the biggest enterprise technology here are the
                    biggest enterprise technology
                  </div>
                  <div class="font-normal text-text-color pt-7">
                    Mike Tayler
                    <div>Lahorem</div>
                    <div>Cambodia</div>
                  </div>
                </div>
              </div>

              <div class="mb-3 text-text-color w-[380px] top-[70px] ml-[190px] relative">
                <div
                  href="#"
                  class="block px-6 py-6 bg-[#F7F8FC] border border-gray-200 rounded-lg shadow "
                >
                  <div class="font-normal text-gray-700 ">
                    Here are the biggest enterprise technology here are the
                    biggest enterprise technology
                  </div>
                  <div class="font-normal text-text-color pt-7">
                    Mike Tayler
                    <div>Lahorem</div>
                    <div>Cambodia</div>
                  </div>
                </div>
                <img
                  src={Ellipse}
                  alt=""
                  class="absolute top-[95px] w-[80px] ml-[310px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

                                                        {/* FeatureComponent */}
                                                        
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
            class="w-[50px] absolute top-[410px] right-[270px]"
          />
          <img
            src={Ellipse}
            alt=""
            class="absolute top-[30px] w-[70px] ml-[50px]"
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
        <div class="text-4xl font-bold text-text-color text-center ">
          This is our
          <span class="text-pending mx-3">benefits</span>
        </div>

        {/* ==========================================Card========================================= */}

        <div class="w-[65%] h-[550px] mx-auto mt-5 relative">
          <div class="relative">
            <div class="w-[60%] h-[150px] absolute z-10 m-auto left-0 right-0 top-[80px]">
              <div class="grid grid-cols-1 sm:grid-cols-12">
                <div class="col-span-6">
                  <div class="mb-2 text-lg font-semibold text-text-color ">
                    <ul class="max-w-md space-y-1 text-text-color list-inside ">
                      <li class="flex items-center">
                        <img src={Iconuser} alt="" class="w-[48px]" />
                        At least 10
                      </li>
                    </ul>
                  </div>
                  <ul class="max-w-lg space-y-2 px-3 text-text-color list-inside">
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                  </ul>
                </div>

                <div class="col-span-6">
                  <div class="mb-2 text-lg font-semibold text-text-color ">
                    <ul class="max-w-md space-y-1 text-text-color list-inside ">
                      <li class="flex items-center">
                        <img src={Iconassets} alt="" class="w-[48px]" />
                        At least 10
                      </li>
                    </ul>
                  </div>
                  <ul class="max-w-lg space-y-2 px-3 text-text-color list-inside">
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <img src={Rectangletop} alt="" class=" w-[900px] h-[350px] " />
          </div>

          <div class="">
            <div class="w-[60%] h-[150px] absolute z-20 m-auto left-0 right-0 top-[340px]">
              <div class="grid grid-cols-1 sm:grid-cols-12">
                <div class="col-span-6">
                  <div class="mb-2 text-lg font-semibold text-text-color ">
                    <ul class="max-w-md space-y-1 text-text-color list-inside ">
                      <li class="flex items-center">
                        <img src={Iconreport} alt="" class="w-[48px]" />
                        At least 10
                      </li>
                    </ul>
                  </div>
                  <ul class="max-w-lg space-y-2 px-3 text-text-color list-inside">
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                  </ul>
                </div>

                <div class="col-span-6">
                  <div class="mb-2 text-lg font-semibold text-text-color ">
                    <ul class="max-w-md space-y-1 text-text-color list-inside ">
                      <li class="flex items-center">
                        <img src={Iconbackup} alt="" class="w-[48px]" />
                        At least 10
                      </li>
                    </ul>
                  </div>
                  <ul class="max-w-lg space-y-2 px-3 text-text-color list-inside">
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                    <li class="flex items-center">
                      <img src={Iconlist} alt="" class="w-[15px]" />
                      At least one
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <img
              src={Rectanglebuttom}
              alt=""
              class="absolute w-[900px] h-[330px] top-[250px]"
            />
          </div>
        </div>
      </div>
                                                      {/* BenefitComponent */}

      <div class="bg-[#F4F4F4] relative py-16 pb-24">
          <div class="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-1 md:grid-cols-1 ">
            <div class="col-span-7 ">
            <div class="w-[95%] h-[300px] mx-auto bg-primarywhite md:ml-[50px] relative">
              <div class="order-1">
              <img
                src={girlimage}
                alt=""
                class="absolute w-[550px] justify top-0 right-[80px]"
              />
              </div>
              </div>
            </div>
            <div class="col-span-5 ">
            <div class="w-[90%] h-[300px] mx-auto bg-primarywhite mr-[90px] relative ">
              <div class="w-[450px] order-2">
                <div class="text-3xl font-bold text-text-color pt-[50px] ">
                  Create your accounted today and get started for free!
                </div>
                <div class="text-[#9795B5] py-7">
                  Hello everyone! you can sign up here and use it free you can
                  sign up here and use it free
                </div>
              </div>

              <div class="w-full flex flex-col md:flex-row py-3">
                <div class="">
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
   <FooterComponent/>
    </>
  )
}

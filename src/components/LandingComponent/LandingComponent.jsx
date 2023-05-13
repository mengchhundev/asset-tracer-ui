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
          <div class="text-left col-span-6 mt-12 ">
            <div class="w-[85%] ml-[180px] ">
            <div class="text-4xl my-3 font-sp-pro-text-bold text-text-color">
              Make assets
              <div class="-my-2">tracking</div>
              <div>
              <div class="text-pending -my-2">simpler <span class="text-text-color">for your</span></div>
              </div>
              organization
            </div>
            <div class="text-text-color font-sp-pro-text-regular my-[20px] sm:w-[80%]">
             Manage Assets for FREE*
             <div>Guarenteed best asset management!</div>
             <div class="text-pending">*See Subcription plans For Details</div>
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
          </div>


          <img
              src={Send}
              alt=""
              class="absolute top-[100px] 2xl:ml-[840px] xl:ml-[700px] lg:ml-[600px] w-[45px] md:ml-[600px] sm:ml-[500px]"
            />
          <div class=" col-span-6 relative sm:grid-cols-1">
            <img src={Icon} alt="" class="absolute top-[273px] w-[48px]" />

            <div
              href="#"
              class="absolute ml-[20px] z-50 block px-3 py-2 bg-white border border-white rounded-xl top-[300px] w-[170px] h-[90px]"
            >
              <ul class=" text-text-color list-inside ">
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
              class="absolute w-[450px] top-[228px] ml-[60px]"
            />
            <img
              src={Peoplelanding}
              alt=""
              class="w-[330px] z-40 absolute top-[10px] ml-[120px]"
            />
          </div>
        </div>
        <div class="py-8">
          <div
            href="#"
            class=" w-[50%] mx-auto py-8 bg-white border border-gray-200 rounded-lg shadow-md shadow-gray-light"
          >
            <div class="w-full flex justify-evenly">
              <ul class="font-medium flex ">
                <li>
                  <div class="w-[150px] ml-4">
                  <div href="#" class="block text-left text-text-color">
                   Organization
                  </div>
                  <div class="text-[10px] text-left">All <div>Your organization</div></div>
                  </div>
                </li>
                <li>
                <div class="w-[100px]">
                  <div href="#" class="block text-left text-text-color">
                  Date
                  </div>
                  <div class="text-[10px] text-left">When you have join us</div>
                  </div>
                </li>
                <li>
                <div class="w-[150px] ml-10">
                  <div href="#" class="block text-left text-text-color">
                   User
                  </div>
                  <div class="text-[10px] text-left">Number of user</div>
                  </div>
                </li>
              </ul>

                <div class="w-[150px] pt-3.5">
                <button
                type="button"
                class="text-textwhite rounded-md bg-pending font-medium text-sm px-8 py-2.5 text-center mr-10 shadow-lg hover:bg-hoveryellow shadow-shadow"
              >
                Sign Up
              </button>
                  </div>
               
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
        <div class="pt-[70px]">
          <div class="text-4xl font-sp-pro-text-bold text-text-color text-center">
            This is Our
            <span class="text-pending px-3">Feature</span>
          </div>
        </div>
        <div class="text-md w-[30%] font-medium text-text-color text-center mx-auto py-3 mb-7">
          A Team of experienced tourism professionals will provides you with the
          best advides place
        </div>

        {/* Card */}

        <div class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[70%] mx-auto ">
          <div class="mb-3 text-left text-text-color relative ">
            <div
              href="#"
              class="block px-6 pb-6 bg-white border border-gray-200 rounded-lg shadow-xl shadow-gray-200 z-50 w-[280px] h-[250px] "
            >
              <img src={Frame} alt="" class="w-[60px] py-4" />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-text-color ">
              Asset Tracking
              </h5>
              <p class="font-normal text-text-color ">
              Focus on your company as a whole instead of individual assets. Use our software to keep tabs on your assets.
              </p>
            </div>
          </div>
          <div class="mb-3 text-text-color text-left">
            <div
              href="#"
              class="block w-[280px] h-[250px] px-6 pb-6 bg-white border border-gray-200 rounded-lg shadow "
            >
              <img src={Framecenter} alt="" class="w-[60px] py-4" />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-text-color ">
                Members
              </h5>
              <p class="font-normal text-text-color ">
              organization’s owner csn be manage member such as limit scop for user by role and can promote those user to admin 
              </p>
            </div>
          </div>
          <div class="mb-3 text-text-color text-left">
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
        <div class="grid grid-cols-12 xl:grid-cols-12 sm:grid-cols-1 py-[100px]">

          <div class="col-span-5 ">
          <img
              src={Ellipse}
              alt=""
              class="absolute top-[890px] w-[30px] ml-[12%]"
            />
            <div class="w-[70%] xl:mx-[40%] lg:mx-auto md:mx-auto sm:mx-auto">
            <div class="text-left text-4xl font-sp-pro-text-bold text-text-color">
              What people say
              <div class="text-pending">about us.</div>
            </div>
            <div class="text-text-color mt-5 text-left sp-pro-text-regular">
             Our Clients send us bunch of smilies with our System and we love them.
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

              <div class="mb-3 text-left text-text-color w-[380px] ml-[150px] absolute z-20 ">
              
                <div
                  href="#"
                  class="block px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-[#cbc6c6] "
                >
                  <div class="font-normal text-text-color ">
                  “Asset Tracer can help organizations optimize their asset utilization and reduce costs by
                   improving the efficiency of asset acquisition, deployment, and maintenance.”
                  </div>
                  <div class="font-normal text-text-color pt-7">
                    Kosal
                    <div>Lahorem</div>
                    <div>Cambodia</div>
                  </div>
                </div>
              </div>

              <div class="mb-3  text-left text-text-color w-[380px] top-[70px] ml-[190px] relative">
                <div
                  href="#"
                  class="block px-6 py-6 bg-[#F7F8FC] border border-gray-200 rounded-lg shadow "
                >
                  <div class="font-normal text-gray-700 ">
                  “Asset Tracer can help organizations optimize their asset utilization and reduce costs by 
                  improving the efficiency of asset acquisition, deployment, and maintenance.”
                  </div>
                  <div class="font-normal text-text-color pt-7">
                    Kosal
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
        <div class="text-4xl  font-sp-pro-text-bold text-text-color text-center ">
          This is our
          <span class="text-pending mx-3">benefits</span>
        </div>

        {/* ==========================================Card========================================= */}

        <div class="w-[65%] h-[650px] mx-auto mt-5 relative">
          <div class="relative">
            <div class="w-[60%] h-[150px] absolute z-10 m-auto left-0 right-0 top-[80px]">
              <div class="grid grid-cols-1 sm:grid-cols-12">
                <div class="col-span-6">
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

                <div class="col-span-6">
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

            <img src={Rectangletop} alt="" class=" w-[900px] h-[400px] " />
          </div>

          <div class="">
            <div class="w-[60%] h-[150px] absolute z-20 m-auto left-0 right-0 top-[380px]">
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
            <img
              src={Rectanglebuttom}
              alt=""
              class="absolute w-[900px] h-[400px] top-[280px]"
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
              <div class="w-[500px] order-2">
                <div class="text-3xl text-left font-sp-pro-text-bold text-text-color pt-[50px] ">
                  Create your accounted today and get started for free!
                </div>
                <div class="text-text-color py-5 text-left">
                Manage Assets for FREE*
               <div> Guaranteed best asset management!</div>
              <div class="text-pending"> * See Subscription P lans for Details </div>
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

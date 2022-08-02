import React from "react";

import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter, AiOutlineMenu } from "react-icons/ai";
import { IoBasketballOutline, IoLocationSharp } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { FiDownload, FiMoon } from "react-icons/fi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GoCalendar } from "react-icons/go";

function Profile() {
  return (
    <>
    <div className=" w-full dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px] aos-init aos-animate">
      <div className=" mb-6 lg:mb-0  mx-auto   relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
        <div>
          <img
            className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
            src="./profile.jpg"
            alt="loading...."
          />
        </div>

        <div className="pt-[100px] pb-8">
          <h1 className="font-[ 'Roboto', sans-serif] mt-6 mb-1 text-4xl font-semibold  dark:text-white">
            Akshara Mishra
          </h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]  ">
            {" "}
            Ui/Ux Designer
          </h3>
          <div className=" flex justify-center space-x-3">
            <div className=" text-4xl  rounded-[5px] text-blue-600 hover:text-white  bg-[#F3F6F6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
              <RiFacebookFill className="px-2" />
            </div>
            <div className=" text-4xl  rounded-[5px] text-sky-500 hover:text-white  bg-[#F3F6F6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
              <AiOutlineTwitter className="px-2" />
            </div>
            <div className=" text-4xl  rounded-[5px] text-pink-600 hover:text-white  bg-[#F3F6F6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
              <IoBasketballOutline className="px-2" />
            </div>
            <div className=" text-4xl  rounded-[5px] text-cyan-600 hover:text-white  bg-[#F3F6F6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
              <ImLinkedin2 className="px-2" />
            </div>
          </div>

          <div className="p-7 rounded-2xl mt-7  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div className=" flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5 gap-5 ">
              <div className="drop-shadow-xl ml-4 text-4xl  rounded-[5px] text-pink-600 hover:text-white  bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
                <MdOutlinePhoneIphone className="px-2" />
              </div>
              <div className="">
                <h5 className="text-gray-400 text-xs"> Phone </h5>
                <h2>+919696535808</h2>
              </div>
              <hr className="text-gray-500"></hr>
            </div>

            <div className=" flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5 gap-5 mt-4">
              <div className="drop-shadow-xl  ml-4 text-4xl  rounded-[5px] text-teal-500 hover:text-white  bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
                <HiOutlineMailOpen className="px-2 " />
              </div>
              <div className="">
                <h5 className="text-gray-400 text-xs"> email </h5>
                <h2>ak@gmail.com</h2>
              </div>
              <hr></hr>
            </div>

            <div className=" flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5 gap-5 mt-4">
              <div className=" drop-shadow-xl  ml-4 text-4xl  rounded-[5px] text-pink-600 hover:text-white  bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
                <IoLocationSharp className="px-2 " />
              </div>
              <div className="">
                <h5 className="text-gray-400 text-xs"> Location </h5>
                <h2>Lucknow,UP</h2>
              </div>
              <hr></hr>
            </div>

            <div className=" flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5 gap-5 mt-4">
              <div className="drop-shadow-xl  ml-4 text-4xl  rounded-[5px] text-fuchsia-400 hover:text-white  bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
                <GoCalendar className="px-2 " />
              </div>
              <div className="">
                <h5 className="text-gray-400 text-xs"> Birthday </h5>
                <h2>Nov 28, 2002</h2>
              </div>
              <hr></hr>
            </div>
          </div>

          <button className="flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6">
            <FiDownload /> Download CV
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Profile;

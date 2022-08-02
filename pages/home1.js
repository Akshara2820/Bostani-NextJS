import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { CgList } from "react-icons/cg";
import { GiPerspectiveDiceOne } from "react-icons/gi";
import { ImBlogger2 } from "react-icons/im";
import { RiContactsBookLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter, AiOutlineMenu } from "react-icons/ai";
import { IoBasketballOutline, IoLocationSharp } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { FiDownload, FiMoon } from "react-icons/fi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GoCalendar } from "react-icons/go";

import Card from "./components/card";

const Items = [
  { icon: <FaRegUser />, name: "About", path: "/about" },
  { icon: <CgList />, name: "Resume", path: "/resume" },
  { icon: <GiPerspectiveDiceOne />, name: "Works", path: "/works" },
  { icon: <ImBlogger2 />, name: "Blogs", path: "/blog" },
  { icon: <RiContactsBookLine />, name: "Contact", path: "/contact" },
];

function Home1() {
  return (
    <>
      {/**************Header bar *********************/}
      <section className="bg-homeBg  bg-center bg-fixed  md:pb-16">
        <div className="flex justify-between py-5 lg:px-0 lg:pt-[50px] ">
          <div className=" flex justify-between  px-4">
            <h1 className="font-[Nunito] text-pink-600 text-3xl ">
              𝕭𝖔𝖘𝖙𝖆𝖒𝖎
            </h1>

            <div className="flex item-center ml-4">
              <span
                className="bg-white lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#ef4060] text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer  ">
                <FiMoon />
              </span>
              <span className="lg:hidden   bg-[#ef4060] rounded-full flex justify-center items-center text-white dark:text-white text-3xl ml-3 ">
                <AiOutlineMenu />
              </span>
            </div>
          </div>
        </div>

        {/****************** Profile bar*************/}
        <div className="profile flex gap-10 ml-[200px] ">
          <div className="flex p-[80px] rounded-[16px] bg-white mt-32 ">
            <div>
              <img
                className="absolute -ml-2 h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
                src="./profile.jpg"
                alt="loading...."
              />
            </div>

            <div>
              <h1 className="font-[ 'Roboto', sans-serif] text-2xl mt-32 ml-12 font-bold">
                Akshara Mishra
              </h1>
              <h3 className="text-gray-500 ml-16"> Ui/Ux Designer</h3>
              <div className=" flex gap-2 justify-center mt-6">
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

              <div className="rounded-[5px] bg-[#F3F6F6] p-2 mt-4">
                <div className=" flex gap-5 justify-between ">
                  <div className="drop-shadow-xl ml-4 text-4xl  rounded-[5px] text-pink-600 hover:text-white  bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
                    <MdOutlinePhoneIphone className="px-2" />
                  </div>
                  <div className="">
                    <h5 className="text-gray-400 text-xs"> Phone </h5>
                    <h2>+919696535808</h2>
                  </div>
                  <hr className="text-gray-500"></hr>
                </div>

                <div className=" flex gap-5 justify-between mt-4">
                  <div className="drop-shadow-xl  ml-4 text-4xl  rounded-[5px] text-teal-500 hover:text-white  bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
                    <HiOutlineMailOpen className="px-2 " />
                  </div>
                  <div className="">
                    <h5 className="text-gray-400 text-xs"> email </h5>
                    <h2>ak@gmail.com</h2>
                  </div>
                  <hr></hr>
                </div>

                <div className=" flex gap-5 justify-between mt-4">
                  <div className=" drop-shadow-xl  ml-4 text-4xl  rounded-[5px] text-pink-600 hover:text-white  bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
                    <IoLocationSharp className="px-2 " />
                  </div>
                  <div className="">
                    <h5 className="text-gray-400 text-xs"> Location </h5>
                    <h2>Lucknow,UP</h2>
                  </div>
                  <hr></hr>
                </div>

                <div className=" flex gap-5 justify-between mt-4">
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
          <div>
            {/************** Navbar ****************************/}

            <div className="navbar flex items-center justify-between gap-5 mt-32 ml-96  h-[144px] rounded-[16px] bg-white px-[25px]">
              {Items.map((item) => {
                return (
                  <Link href={item.path} key={item.path}>
                    <a>
                      <div
                        className="rounded-[10px] p-[12px] cursor-pointer text-gray-500
                       bg-[#F3F6F6] 
                          justify-center flex flex-col items-center   transition-all duration-300 ease-in-out 
                         hover:text-white  
                       hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  "
                      >
                        {item.icon}
                        <div className="">{item.name}</div>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>

            {/********************  main contain ************************ */}
            
           
          </div>
        </div>
      </section>
    </>
  );
}

export default Home1;

import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { CgList } from "react-icons/cg";
import { GiPerspectiveDiceOne } from "react-icons/gi";
import { ImBlogger2 } from "react-icons/im";
import { RiContactsBookLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoBasketballOutline , IoLocationSharp} from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { FiDownload , FiMoon} from "react-icons/fi";
import {MdOutlinePhoneIphone} from "react-icons/md";
import {HiOutlineMailOpen} from "react-icons/hi";
import {GoCalendar} from 'react-icons/go'

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
      <div className="w-full flex justify-between  mt-24 px-4">
        <h1 className="font-[Nunito] text-pink-600 text-3xl ml-[200px] ">
          𝕭𝖔𝖘𝖙𝖆𝖒𝖎
        </h1>
        <div className="flex item-center ml-4">
          <span className="bg-white w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center 
          items-center hover:bg-[#ef4060] text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer  ">
            <FiMoon/>

          </span>

        </div>

      </div>

      <div className="flex gap-10 ml-[200px] ">
        <div className="flex ml-4  p-[30px] rounded-[16px] bg-white mt-60 ">
          <div>
            <img
              className="w-[240px] absolute  ml-2 h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
              src="./profile.jpg"
              alt="loading...."
            />
          </div>

          <div>
            <h1 className="font-[Nunito] text-2xl mt-32 ml-12 font-bold">
              Akshara Mishra
            </h1>
            <h3 className="text-gray-500 ml-16"> Ui/Ux Designer</h3>
            <div className=" flex gap-5 justify-between mt-6">
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

            <div className="rounded-[5px] bg-[#F3F6F6] mt-10 ml-6 p-2 ">
              <div className=" flex gap-5 justify-between mt-4">
                <div className=" ml-4 text-4xl  rounded-[5px] text-pink-600 hover:text-white  bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
                  <MdOutlinePhoneIphone className="px-2" />
                </div>
                <div className="">
                  <h5 className="text-gray-400 text-xs"> Phone </h5>
                  <h2>+919696535808</h2>
                  
                </div>
                <hr className="text-gray-500"></hr>
              </div>
              
              
              <div className=" flex gap-5 justify-between mt-4">
                <div className=" ml-4 text-4xl  rounded-[5px] text-teal-500 hover:text-white  bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
                  <HiOutlineMailOpen className="px-2 " />
                </div>
                <div className="">
                  <h5 className="text-gray-400 text-xs"> email </h5>
                  <h2>ak@gmail.com</h2>
                  
                </div>
                <hr></hr>
              </div>
              
              
              <div className=" flex gap-5 justify-between mt-4">
                <div className=" ml-4 text-4xl  rounded-[5px] text-pink-600 hover:text-white  bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
                  <IoLocationSharp className="px-2 " />
                </div>
                <div className="">
                  <h5 className="text-gray-400 text-xs"> Location </h5>
                  <h2>Lucknow,UP</h2>
                  
                </div>
                <hr></hr>
              </div>
              
              
              <div className=" flex gap-5 justify-between mt-4">
                <div className=" ml-4 text-4xl  rounded-[5px] text-fuchsia-400 hover:text-white  bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] ">
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
          <div className="flex items-center justify-around gap-5 mt-56 h-[144px] rounded-[16px] bg-white ">
            {Items.map((item) => {
              return (
                <Link href={item.path} key={item.path}>
                  <a>
                    <div
                      className="w-20 h-20 rounded-[10px] bg-[#F3F6F6]  font-medium mx-2.5 text-gray-lite 
                  justify-center flex flex-col items-center hover:text-white 
                  hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  "
                    >
                      {item.icon}
                      <div>{item.name}</div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="p-[30px] rounded-[16px] bg-white">
            <h1>
              he;;ncshfhwajd nasnuyedhajcbsjc SkSMQIFNRI2URQNSV
              SAS2I438HKWJSNSBSEHQ1IE WBFSJNAJBSJDQA
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home1;

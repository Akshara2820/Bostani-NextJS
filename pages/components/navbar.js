import React from 'react'

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

import Card from "./card";

const Items = [
  { icon: <FaRegUser />, name: "About", path: "/" },
  { icon: <CgList />, name: "Resume", path: "/resume" },
  { icon: <GiPerspectiveDiceOne />, name: "Works", path: "/works" },
  { icon: <ImBlogger2 />, name: "Blogs", path: "/blog" },
  { icon: <RiContactsBookLine />, name: "Contact", path: "/contact" },
];


function Navbar() {
  return (
   <>
   <div className="navbar flex items-center justify-between gap-5 -mt-12 ml-96  h-[144px] rounded-[16px] bg-white px-[25px]">
   {Items.map((item) => {
     return (
       <Link href={item.path} key={item.path}>
         <a>
           <div
             className="   w-20 h-20 rounded-[10px]  cursor-pointer  transition-all duration-300 ease-in-out    font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite text-gray-600   justify-center flex flex-col items-center  hover:text-white  hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] linked"
           >
             {item.icon}
             <div className="">{item.name}</div>
           </div>
         </a>
       </Link>
     );
   })}
 </div>

   </>
  )
}

export default Navbar
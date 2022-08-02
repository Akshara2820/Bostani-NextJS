import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
function Header() {
  return (
   <>
   <div className=" w-full  dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px] aos-init aos-animate">
          <div className="items-center w-full flex justify-between  px-4 " >
            <h1 className=" font-[Nunito] text-pink-600 text-4xl ">
              𝕭𝖔𝖘𝖙𝖆𝖒𝖎
            </h1>

            <div className="flex items-center">
              <span
                className="bg-white lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#ef4060] text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer  ">
                <FiMoon />
              </span>
              <span className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 ">
                <AiOutlineMenu />
              </span>
            </div>
          </div>
        </div>
   </>
  )
}

export default Header
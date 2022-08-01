import React from "react";
import { IoTimeSharp } from "react-icons/io5";
const Items = [
  { type: "Ui/Ux", name: "Chul urina", image: "./work-img.jpg" },
  { type: "Web Design", name: "Aura Dione", image: "./work-img-2.jpg" },
  { type: "Logo", name: "Chul urina", image: "./work-img-3.jpg" },
  { type: "Video", name: "Chul urina", image: "./work-img-4.jpg" },
  { type: "Graphic Design", name: "Chul urina", image: "./work-img-5.jpg" },
];
function Works() {
  return (
    <>
      <div className="p-[30px] px-[45px] py-[5px] w-[50%] ml-[550px] -mt-[500px] rounded-[16px] bg-white">
        <div className="py-12">
          <h1 className="font-['Roboto', sans-serif] font-bold text-4xl after-effect after:left-52">
            Portfolio
            <hr className="bg-[#FA5252] w-[180px] h-1 ml-52 -mt-4 "></hr>
          </h1>
          <ul className="mt-[30px]  flex w-full justify-start md:justify-end  flex-wrap   font-medium">
            <li className="text-[#FA5252] mr-4 md:mx-4">All</li>
            <li className="fillter-btn mr-4 md:mx-4 hover:text-[#FA5252]">
              Video
            </li>
            <li className="fillter-btn mr-4 md:mx-4 hover:text-[#FA5252]">
              Web Design
            </li>
            <li className="fillter-btn mr-4 md:mx-4 hover:text-[#FA5252]">
              Logo
            </li>
            <li className="fillter-btn mr-4 md:mx-4 hover:text-[#FA5252]">
              Graphic Design
            </li>
          </ul>
        </div>
        <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  mt-[30px] grid  gap-x-10 gap-y-7  mb-6">
          {Items.map((item) => {
            return (
              <div className="rounded-lg bg-pink-50 p-[20px]">
                <div className="">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      className="  transition duration-200 ease-in-out transform hover:scale-110 rounded-lg  "
                      src={item.image}
                      alt="Loading..."
                    />
                  </div>
                  <span className=" ">{item.type}</span>
                  <h3 className=" text-2xl font-['Roboto', sans-serif] font-bold hover:text-[#FA5252]">
                    {item.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <h4 className="mt-10 text-gray-600 text-center">
          © 2022 All Rights Reserved by ib-themes.
        </h4>
      </div>
    </>
  );
}

export default Works;

import React from "react";
import { IoTimeSharp } from "react-icons/io5";

import Card from "./components/card";
const Items = [
  { type: "Ui/Ux", name: "Chul urina", image: "./work-img.jpg" },
  { type: "Web Design", name: "Aura Dione", image: "./work-img-2.jpg" },
  { type: "Logo", name: "Chul urina", image: "./work-img-3.jpg" },
  { type: "Video", name: "Chul urina", image: "./work-img-4.jpg" },
 
];
function Works() {
  return (
    <>
      <Card title="Portfolio">
        <div className="works">
          <div className="py-12">
            <ul className="-mt-6 flex w-full justify-start md:justify-end  flex-wrap font-medium">
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
          <div className="p-[30px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  grid  gap-x-10 gap-y-7  mb-6">
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
        </div>
      </Card>
    </>
  );
}

export default Works;

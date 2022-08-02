import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import Card from "./components/card";

const Data = [
  {
    name: "Education",
    icon: <FaGraduationCap />,
    items: [
      {
        date: "2021-2023",
        title: "Ph.D in Horriblensess",
        disc: "ABC University, Los Angeles, CA",
        color: "bg-rose-50",
      },
      {
        date: "2021-2023",
        title: "Sr. Software Testery",
        disc: "AGoogle Inc.",
        color: "bg-pink-50",
      },
      {
        date: "2021-2023",
        title: "Best Developerr",
        disc: "University Of Melbourne, NA",
        color: "bg-rose-50",
      },
    ],
  },
  {
    name: "Experience",
    icon: <MdWork />,
    items: [
      {
        date: "2021-2023",
        title: "Computer Science",
        disc: "Imperialize Technical Institute",
        color: "bg-sky-50",
      },
      {
        date: "2021-2023",
        title: "Cr. Web Developer",
        disc: "ib-themes ltd.",
        color: "bg-purple-50",
      },
      {
        date: "2021-2023",
        title: "Best Writter",
        disc: "Online Typodev Soluation Ltd.",
        color: "bg-sky-50",
      },
    ],
  },
];

function Resume() {
  return (
    <>
      <Card title="Resume">
        <div className="resume pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
          <div className="mt-6 pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  mt-[30px] grid   gap-x-10 gap-y-7  mb-6">
              {Data.map((i) => {
                return (
                  <>
                    <div key={i.name}>
                      <div className="flex gap-2 items-center mx-2">
                        <div className="text-red-400 text-2xl ">{i.icon}</div>
                        <div className="text-3xl">{i.name}</div>
                      </div>
                      <div>
                        {i.items.map((itm) => {
                          return (
                            <div
                              className={`${itm.color} p-6 gap-6  lg:rounded-2xl  rounded-2xl my-4`}
                            >
                              <div className="py-2 text-gray-500">
                                {itm.date}
                              </div>
                              <div className="space-y-2">
                                <div className="text-2xl ">{itm.tittle}</div>
                                <div className="leading-8 ">{itm.disc}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="mt-10 grid grid-cols-1  md:grid-cols-2 gap-8 bg-[#F8FBFB] dark:bg-[#0D0D0D]    py-10 rounded-xl">
              <div className="col-span-1">
                <div className="">
                  <h2 className="ml-[60px] dark:text-white text-2xl mb-3 font-semibold ">
                    Working Skills
                  </h2>
                </div>
                <div className="ml-16 ">
                  <div className="flex ">
                    <h5>Web Design </h5>
                    <h5 className=" text-base font-semibold text-gray-lite pr-5 ml-40">
                      80%
                    </h5>
                  </div>
                  <hr className="bg-[#FA5252] w-[230px] h-1"></hr>

                  <div className="flex mt-4">
                    <h5>Mobile App </h5>
                    <h5 className=" text-base font-semibold text-gray-lite pr-5 ml-40">
                      95%
                    </h5>
                  </div>
                  <hr className="bg-violet-500 w-[250px] h-1"></hr>

                  <div className="flex mt-4">
                    <h5>ILLustrator </h5>
                    <h5 className=" text-base font-semibold text-gray-lite pr-5 ml-40">
                      65%
                    </h5>
                  </div>
                  <hr className="bg-sky-500 w-[180px] h-1"></hr>

                  <div className="flex mt-4">
                    <h5>Photoshop </h5>
                    <h5 className=" text-base font-semibold text-gray-lite pr-5 ml-40">
                      75%
                    </h5>
                  </div>
                  <hr className="bg-purple-400 w-[200px] h-1"></hr>
                </div>
              </div>

              <div className="col-span-1">
                <div className="">
                  <h2 className="ml-[60px] dark:text-white text-2xl mb-3 font-semibold ">
                    Knowladges
                  </h2>
                  <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                    <button className="resume-btn">Digital Design</button>
                    <button className="resume-btn">Marketing</button>
                    <button className="resume-btn">Social Media</button>
                    <button className="resume-btn">Print</button>
                    <button className="resume-btn">Time Management</button>
                    <button className="resume-btn">Flexbility</button>
                    <button className="resume-btn">Print</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Resume;

import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";



const Items = [
  {tittle: "Ph.D in Horriblensess",     name:"ABC University, Los Angeles, CA", date:"2021-2023"},
  {tittle: "Computer Science",name:"Imperialize Technical Institute",  date:"2017-2021"  },
  {tittle: "Sr. Software Tester",    name:"Google Inc.",  date:"2019 - Present" },
  {tittle: "Cr. Web Developer", name:"ib-themes ltd." ,  date:"2015-2017" },
  {tittle: "Best Developer",  name:"University Of Melbourne, NA" ,  date:"2021"},
  {tittle: "Best Writter", name:"Online Typodev Soluation Ltd." ,  date:"2008"},
];


function Resume() {
  return (
    <>
      <div className="p-[30px] px-[0px] py-[45px] w-[50%] ml-[550px] -mt-[500px] rounded-[16px] bg-white">
        <div className="  pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
          <h1 className="font-['Roboto', sans-serif] font-bold text-4xl after-effect after:left-52">
            Resume
            <hr className="bg-[#FA5252] w-[180px] h-1 ml-52 -mt-4 "></hr>
          </h1>
        </div>

        <div className="mt-6 pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
          <div className="flex  gap-5">
            <h5 className="text-3xl text-[#FA5252]">
              <FaGraduationCap />
            </h5>
            <h5 className="font-['Roboto', sans-serif] font-bold text-2xl"> Education</h5>
            <h5 className="text-3xl text-[#FA5252] ml-[200px]">
              <MdWork />
            </h5>
            <h5 className="font-['Roboto', sans-serif] font-bold text-2xl ">Expirence</h5>
          </div>


          <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  mt-[30px] grid   gap-x-10 gap-y-7  mb-6">

          {Items.map((item) => {
               return (
           <div className="rounded-lg bg-pink-50 p-[20px]">
                 <div className="">
                   
                     <p>{item.date}</p>
      
                   <h5 className="text-xl font-['Roboto', sans-serif]">{item.tittle}</h5>
                  
                   <p className="">{item.name}</p>
                  
                 </div>
              
           </div> );
             })}
             </div>

          
          
           
        </div>
        <div className="mt-10 grid grid-cols-1  md:grid-cols-2 gap-8 bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto   py-10 rounded-xl">
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
        <h4 className=" mt-10 text-gray-600 text-center">
            © 2022 All Rights Reserved by ib-themes.
          </h4>
      </div>
    </>
  );
}

export default Resume;

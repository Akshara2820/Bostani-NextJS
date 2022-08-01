import React from "react";

function Contact() {
  return (
    <>
      <div className="p-[30px] px-[30px] py-[30px] w-[50%] ml-[550px] -mt-[500px] rounded-[16px] bg-white">
        <h1 className="font-['Roboto', sans-serif] font-bold text-4xl ml-6 mt-6">
          Contact
          <hr className="bg-[#FA5252] w-[180px] h-1 ml-44 -mt-4 "></hr>
        </h1>
        <div className=" mt-10 mx-4 bg-[#F8FBFB]  p-10 rounded-xl ">
          <h3 className="text-3xl  ">I'm always open to discussing product</h3>
          <h3 className="text-3xl  font-['Roboto', sans-serif] font-bold">
            design work or partnerships.
          </h3>
          <form>
            <div className="relative  z-0 w-full mt-[40px] mb-8 group">
              <label className="text-sm text-gray-500">Name *</label>
              <input
                type="text"
                name="name"
                className="block w-full text-m text-gray-600 bg-transparent border-0 border-b-[2px] focus:outline-none  focus:border-[#FF6464] " required/>
            </div>

            <div className="relative  z-0 w-full mt-[40px] mb-8 group">
              <label className="text-sm text-gray-500">Email *</label>
              <input
                type="text"
                name="name"
                className="block w-full text-m text-gray-600 bg-transparent border-0 border-b-[2px] focus:outline-none  focus:border-blue-600 " required/>
            </div>

            <div className="relative  z-0 w-full mt-[40px] mb-8 group">
              <label className="text-sm text-gray-500">Message *</label>
              <input
                type="text"
                name="name"
                className="block w-full text-m text-gray-600 bg-transparent border-0 border-b-[2px] focus:outline-none  focus:border-fuchsia-400 " required/>
            </div>
            <button className=" font-semibold border-color-910 px-6  py-2 rounded-lg border-[2px]  hover:text-white hover:bg-[#FF6464]">Submit </button>
          </form>
        </div>
        <h4 className=" mt-10 text-gray-600 text-center">
            © 2022 All Rights Reserved by ib-themes.
          </h4>
      </div>
    </>
  );
}

export default Contact;

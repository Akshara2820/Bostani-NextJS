import React from "react";

function Card(props) {
  return (
    <>
      <div className="p-[20px] mt-6 ml-24 rounded-[16px] bg-white max-w-[900px]">
        <div className=" pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
          <h1 className="heading font-[ 'Roboto', sans-serif] font-bold text-4xl">
            {props.title}
          </h1>

        </div>

        <div></div>

        <div>{props.children}</div>
        <div className="">
       
        </div>
      </div>
    </>
  );
}

export default Card;

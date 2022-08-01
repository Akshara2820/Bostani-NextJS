import React from "react";

const Items = [
  {tittle: "Ui/Ux Design",   image:"./about-img.svg" ,  name:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."},
  {tittle: "App Development", image:"./about-img-2.svg" , name:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."  },
  {tittle: "Photography",  image:"./about-img-3.svg" ,  name:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." },
  {tittle: "Photography", image:"./about-img-4.svg",  name:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."  },
  {tittle: "Management",image:"./about-img-5.svg" ,  name:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." },
  {tittle: "Web Development", image:"./about-img-6.svg" ,  name:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat." },
];

function About() {
  return (
    <>
      <div className="p-[30px] px-[0px] py-[45px] w-[50%] ml-[550px] -mt-[500px] rounded-[16px] bg-white">
        <div className="  pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
          <h1 className="font-[ 'Roboto', sans-serif] font-bold text-4xl after-effect after:left-52">
            About Me
            <hr className="bg-[#FA5252] w-[180px] h-1 ml-52 -mt-4 "></hr>
          </h1>
          <div>
            <p className="mt-10 text-gray-500 font-[Poppins, sans-serif]">
              I'm Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development and print media. I enjoy turning
              complex problems into simple, beautiful and intuitive designs. My
              aim is to bring across your message and identity in the most
              creative way. I created web design for many famous brand
              companies.
            </p>
          </div>
        </div>

        <div className="mt-4 pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
          <h1 className="font-[ 'Roboto', sans-serif] font-bold text-4xl after-effect after:left-52">What I Do!</h1>
          
          <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  mt-[30px] grid   gap-x-10 gap-y-7  mb-6">

          {Items.map((item) => {
               return (
           <div className="rounded-lg bg-pink-50 p-[20px]">
                 <div className="">
                   <div className="flex overflow-hidden rounded-lg">
                     <img className="" src={item.image} alt="Loading..."/>
                     <h5 className=" ml-4 text-2xl font-[ 'Roboto', sans-serif] font-bold">{item.tittle}</h5>
                   </div>
                  
                   <p className="mt-4">{item.name}</p>
                  
                 </div>
              
           </div> );
             })}
             </div>

          <div className="px-2 sm:px-5 md:px-10 lg:px-14 mt-10">
          <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto   py-10 rounded-xl">
          <h2 className="text-center dark:text-white text-2xl mb-3 font-semibold "> Clients</h2>
          <div className="slick-slider slick-initialized flex gap-5 justify-around">
          <img className="w-[80px]" src="about-footer-5.png" alt="Loading...."/>
          <img className="w-[80px]" src="about-footer-4.png" alt="Loading...."/>
          <img className="w-[80px]" src="about-footer-2.png" alt="Loading...."/>
          <img className="w-[80px]" src="about-footer-3.png" alt="Loading...."/>
          <img className="w-[80px]" src="about-footer.png" alt="Loading...."/>
          
          </div>
          </div>
          <h4 className=" mt-10 text-gray-600 text-center">© 2022 All Rights Reserved by ib-themes.</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

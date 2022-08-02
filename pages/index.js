import React from "react";
import Card from "./components/card";
import Home1 from "./home1";

const Items = [
  {
    tittle: "Ui/Ux Design",
    image: "./about-img-1.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
  },
  {
    tittle: "App Development",
    image: "./about-img-2.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
  },
  {
    tittle: "Photography",
    image: "./about-img-3.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
  },
  {
    tittle: "Photography",
    image: "./about-img-4.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
  },
  {
    tittle: "Management",
    image: "./about-img-5.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
  },
  {
    tittle: "Web Development",
    image: "./about-img-6.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
  },
];

function About() {
  return (
    <>
      <Card title="About">
        
          <div>
            <p className="about-paragraph mt-10 text-gray-500 font-[Poppins, sans-serif]">
              I'm Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development and print media. I enjoy turning
              complex problems into simple, beautiful and intuitive designs. My
              aim is to bring across your message and identity in the most
              creative way. I created web design for many famous brand
              companies.
            </p>
          </div>
    

        <div className="about-card pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
          <h1 className=" about-head font-[ 'Roboto', sans-serif] font-bold text-4xl">
            What I Do!
          </h1>

          <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  mt-[30px] grid gap-x-10 gap-y-7  mb-6">
            {Items.map((item) => {
              return (
                <div className="rounded-lg bg-pink-50 p-[20px]">
                  <div className="">
                    <div className="flex overflow-hidden rounded-lg">
                      <img className="" src={item.image} alt="Loading..." />
                      <h5 className=" ml-4 text-2xl font-[ 'Roboto', sans-serif] font-bold">
                        {item.tittle}
                      </h5>
                    </div>

                    <p className="mt-4">{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="px-2 sm:px-5 md:px-10 lg:px-14 mt-10">
            <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D]  h-auto   py-10 rounded-xl">
              <h2 className="text-center dark:text-white text-2xl mb-3 font-semibold ">
           
                Clients
              </h2>
              <div className="slick-slider slick-initialized flex gap-5 justify-around">
                <img
                  className="w-[80px]"
                  src="about-footer-5.png"
                  alt="Loading...."
                />
                <img
                  className="w-[80px]"
                  src="about-footer-4.png"
                  alt="Loading...."
                />
                <img
                  className="w-[80px]"
                  src="about-footer-2.png"
                  alt="Loading...."
                />
                <img
                  className="w-[80px]"
                  src="about-footer-3.png"
                  alt="Loading...."
                />
                <img
                  className="w-[80px]"
                  src="about-footer.png"
                  alt="Loading...."
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default About;

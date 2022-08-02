import React from "react";
import Card from "./components/card";

const Items = [
  { name: "How to Own Your Audience by Creating an Email List.", date:"177 April", catagory:"Inspiration", image:"./blog-img.jpg"  },
  { name: "Everything You Need to Know About Web Accessibility.", date:"000 April",catagory:"Inspiration", image:"./blog-img-2.jpg"   },
  { name: "The window know to say beside you", date:"21 April",catagory:"Web Design", image:"./blog-img-3.jpg"  },
  { name: "Top 10 Toolkits for Deep Learning in 2021.",date:'27 Apil',catagory:"Inspiration", image:"./blog-img-4.jpg"  },
];

function Blog() {
  return (
    <>
    <Card title="Blogs">
        <div className="blog px-4 sm:px-5 md:px-10 lg:px-[60px]">
          <div className="py-12">
           
            <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  -mt-4 grid   gap-x-10 gap-y-7  mb-6">

         {Items.map((item) => {
              return (
          <div className="rounded-lg bg-pink-50 p-[20px]"  key={item.catagory}>
                <div className="">
                  <div className="overflow-hidden rounded-lg ">
                    <img className="  transition duration-200 ease-in-out transform hover:scale-110 rounded-lg  " src={item.image} alt="Loading..."/>
                  </div>
                  <span className="">{item.catagory}</span>
                  <h3 className="text-xl font-['Roboto', sans-serif] font-bold hover:text-[#FA5252]">{item.name}</h3>
                 
                </div>
             
          </div> );
            })}

        </div>
            
          </div>
        </div>
     
      </Card>
    </>
  );
}

export default Blog;

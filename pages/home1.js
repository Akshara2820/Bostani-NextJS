import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { CgList } from "react-icons/cg";
import { GiPerspectiveDiceOne } from "react-icons/gi";
import { ImBlogger2 } from "react-icons/im";
import { RiContactsBookLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import {AiOutlineTwitter} from 'react-icons/ai';
import {IoBasketballOutline} from 'react-icons/io5'
import {ImLinkedin2} from 'react-icons/im'

const Items = [
  { icon: <FaRegUser />, name: "About", path: "/about" },
  { icon: <CgList />, name: "Resume", path: "/resume" },
  { icon: <GiPerspectiveDiceOne />, name: "Works", path: "/works" },
  { icon: <ImBlogger2 />, name: "Blogs", path: "/blog" },
  { icon: <RiContactsBookLine />, name: "Contact", path: "/contact" },
];

function Home1() {
  return (
    <>
      <div>
        <h1 className="font-[Nunito] text-pink-600 text-3xl ml-[200px] mt-24">
          𝕭𝖔𝖘𝖙𝖆𝖒𝖎
        </h1>
      </div>

      <div className="flex gap-10 mt-14 ml-[200px] ">
        <div className="flex  w-[20%] p-[30px] rounded-[16px] bg-white mt-60 ">
          <div>
            <img
              className="w-[240px] absolute  h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
              src="./profile.jpg"
              alt="loading...."
            />
          </div>

          <div>
            <h1 className="font-[Nunito] text-2xl mt-32 ml-12 font-bold">
              Akshara Mishra
            </h1>
            <h3 className="text-gray-500 ml-16"> Ui/Ux Designer</h3>
            <div
              className=" flex gap-5 justify-between mt-4">

              <div className=" text-4xl  rounded-[5px] text-blue-600 hover:text-white  bg-[#F3F6F6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "><RiFacebookFill className="px-2"/></div>
              <div className=" text-4xl  rounded-[5px] text-sky-500 hover:text-white  bg-[#F3F6F6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "><AiOutlineTwitter className="px-2"/></div>
              <div className=" text-4xl  rounded-[5px] text-pink-600 hover:text-white  bg-[#F3F6F6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "><IoBasketballOutline className="px-2"/> </div>
              <div className=" text-4xl  rounded-[5px] text-cyan-600 hover:text-white  bg-[#F3F6F6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "><ImLinkedin2 className="px-2"/></div>
            
            </div>

            <div className="rounded-[5px] bg-[#d1d4d4] mt-10">
            <h2>phone</h2>
            <h2>phone</h2>
            <h2>phone</h2>
            <h2>phone</h2>

            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5 mt-56 h-[144px] rounded-[16px] bg-white ">
            {Items.map((item) => {
              return (
                <Link href={item.path} key={item.path}>
                  <a>
                    <div
                      className="w-20 h-20 rounded-[10px] bg-[#F3F6F6]  font-medium mx-2.5 text-gray-lite 
                  justify-center flex flex-col items-center hover:text-white 
                  hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  "
                    >
                      {item.icon}
                      <div>{item.name}</div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="p-[30px] rounded-[16px] bg-white">
            <h1>
              he;;ncshfhwajd nasnuyedhajcbsjc SkSMQIFNRI2URQNSV
              SAS2I438HKWJSNSBSEHQ1IE WBFSJNAJBSJDQA
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home1;

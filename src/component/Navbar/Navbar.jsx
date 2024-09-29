import { useState } from "react";

function Navbar() {
  const [isShow, setIsShow] = useState(false);
  const handelSideBar = () => {
    setIsShow(!isShow);
  };
  return (
    <div className={`h-[60px] bg-pink-300 flex mt-2 relative`}>
      <div
        className={`h-screen w-[40%] absolute z-10 bg-blue-300 transition-transform duration-6000 ease-in-out transform ${
          isShow ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-end text-[26px] mt-4 mr-4 ">
            <i className="fa-solid fa-xmark" onClick={handelSideBar}></i>
          </div>
          <div className=" mt-8">
            <div onClick={handelSideBar}>
              <ul className="flex justify-start items-center flex-col gap-6 font-anton ">
                <li className=" cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-pink-800 after:transition-all after:duration-300 hover:after:w-full ">
                  {" "}
                  Home
                </li>
                <li className=" cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-pink-800 after:transition-all after:duration-300 hover:after:w-full ">
                  About
                </li>
                <li className=" cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-pink-800 after:transition-all after:duration-300 hover:after:w-full ">
                  Services
                </li>
                <li className=" cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-pink-800 after:transition-all after:duration-300 hover:after:w-full ">
                  Content Us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[15%]  flex justify-center relative z-0">
        <div className="w-[150px] h-[100%] ">
          <img
            src="./WebLogo/webLogo.png"
            alt="Product Logo"
            className=" h-[100%] w-[100%] "
          />
        </div>
      </div>
      <div className=" w-[50%] md:w-[70%] hidden md:block">
        <ul className="h-[100%] flex justify-center items-center gap-2 md:gap-14  font-anton ">
          <li className=" cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-pink-800 after:transition-all after:duration-300 hover:after:w-full ">
            <a>Home</a>
          </li>
          <li className=" cursor-pointer  relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-pink-800 after:transition-all after:duration-300 hover:after:w-full  ">
            <a>About</a>
          </li>
          <li className=" cursor-pointer  relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-pink-800 after:transition-all after:duration-300 hover:after:w-full ">
            <a>Services</a>
          </li>
          <li className=" cursor-pointer  relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-pink-800 after:transition-all after:duration-300 hover:after:w-full ">
            <a>Content Us</a>
          </li>
        </ul>
      </div>
      <div className=" w-[30%] md:w-[15%]  flex justify-end md:justify-center   items-center gap-6 md:gap-3 lg:gap-10 ml-[50%] md:ml-[-15px]">
        <div>
          <button className="font-bold bg-green-200  rounded-[10px] w-[70px] md:w-[80px] ">
            Log out
          </button>
        </div>
        <div>
          <i className="fa-solid fa-bars md:hidden" onClick={handelSideBar}></i>
          <i className="fa-regular fa-user text-[22px] hidden md:inline-block "></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

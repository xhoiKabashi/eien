"use client";
import { Menu, Search, Tally1} from "lucide-react";
import Image from "next/image";

export const Navbar = () => {

  return (
    <nav
      className={`flex flex-col  justify-around items-center  py-3 px-4 md:py-4 md:px-10 w-full  fixed bg-white `}
    >
      {/* Left Section - Menu + Links */}
      <div className="flex w-full items-center justify-between relative">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <Menu size={22} strokeWidth={3} className=" text-black md:hidden" />
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-base font-semibold tracking-widest  text-black">
          <p className=" md:hidden">eien</p>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-6">
          <Search size={20} strokeWidth={3} className=" text-black md:hidden" />
          <Image
            src="/grocery-store.png"
            alt="Grocery Store"
            width={20}
            height={20}
            className="text-black"
          />
        </div>
      </div>
      <div className=" hidden  md:block">
      <div className="flex flex-col justify-center items-center text-[14px]  pt-4 pb-14">
        <p className="text-5xl  text-black tracking-widest">eien</p>
        <p className="text-black text-xs tracking-widest uppercase">handmade</p>
      </div>
      <div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 text-black text-[14px] tracking-wide  items-center">
          <Tally1 strokeWidth={1} />
            <a href="#" className="flex items-center py-4 pr-2">
              <span className="font-semibold ">HOME</span>
            </a>
            <Tally1 strokeWidth={1} />
            <a href="#" className="flex items-center py-4 pr-2">
              <span className="font-semibold  ">ABOUT</span>
            </a>
            <Tally1 strokeWidth={1} />

            <a href="#" className="flex items-center py-4 pr-2">
              <span className="font-semibold  ">CATEGORY</span>
            </a>
            <Tally1 strokeWidth={1} />

            <a href="#" className="flex items-center py-4 pr-2">
              <span className="font-semibold  ">CONTACT</span>
            </a>
            <Tally1 strokeWidth={1} />

            <a href="#" className="flex items-center py-4 pr-2">
              <span className="font-semibold  ">FAQ</span>
            </a>
            <Tally1 strokeWidth={1} />

            <a href="#" className="flex items-center py-4 pr-2">
              <span className="font-semibold  ">GUIDE</span>
            </a>
            <Tally1 strokeWidth={1.25} />

         <div className="flex justify-center items-center gap-2">
         <input type="text" placeholder="Search..." className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

          <Search size={20} strokeWidth={3} className=" text-black relative right-10"  />

         </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </nav>

  );
};

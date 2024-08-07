import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 p-3 ">
      <Link href="/">
        <FaXTwitter
          className="w-16 h-16 cursor-pointer p-3
         hover:bg-gray-100 rounded-full transition-all duration-200 "
        />
      </Link>

      <Link
        href="/"
        className="flex items-center p-3 hover:bg-gray-100 rounded-full tra nsition-all duration-200"
      >
        <HiHome className="w-9 h-9 " />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>
      <button
        className="bg-blue-500 text-white 
      rounded-full px-4 py-2 mt-4 w-48 h-9
       hover:brightness-95 transition-all duration-200 shadow-md hidden xl:inline"
      >
        Sign In
      </button>
    </div>
  );
};

export default Sidebar;

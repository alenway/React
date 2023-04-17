import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#DADBF1" }} className="px-8 pt-20 pb-28">
      <div className="flex items-center flex-col max-w-screen-md mx-auto">
        <h1 className="text-7xl text-black font-normal mb-3">
          How can we help?
        </h1>
        <form className="w-full relative">
          <input
            className=" w-full p-4 border border-black rounded hover:border-blue-700 active:border-blue-700 active:border"
            placeholder="Search"
            type="text"
          />
          <HiArrowRight className="absolute top-1/3 right-5 text-xl" />
        </form>
      </div>
    </header>
  );
};

export default Header;

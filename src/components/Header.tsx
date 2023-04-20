import React from "react";
import { AiFillApple } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-black px-7 ">
      <div className="pt-5 pb-5 px-16 text-white flex justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <AiFillApple className="text-4xl" />
            <span className="text-2xl px-2">Abstract</span>
          </div>

          <h2 className="text-2xl">| Helpe center</h2>
        </div>

        <div className="flex items-center">
          <button className="bg-transparent border border-white p-3 rounded-xl mr-5 py-1.5 px-5 text-2xl font-normal">
            Submit a request
          </button>
          <button className="bg-indigo-500 text-white py-3 px-6 rounded-xl hover:bg-white hover:text-black  ease-in-out delay-75 transition duration-300 ">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

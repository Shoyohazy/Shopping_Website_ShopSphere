import React from "react";
import logo from "../assets/web_logo.png";

function Navbar() {
  return (
    <div className="w-screen bg-[#ffff] h-16 border-b-2 flex justify-between">
      <img className="ml-6" src={logo} alt="logo" />
      <div className="flex justify-center items-center w-[25%] ml-[5%] max-w-md ">
        <ul className="list-none border-2 rounded-full p-1 flex text-base  w-[70%] text-black font-semibold">
          <li className="border-1 hover:cursor-pointer rounded-full bg-black w-[45%] flex justify-center text-white text-sm p-2">
            Login
          </li>
          <li className="flex hover:cursor-pointer justify-center w-[45%] text-sm p-2">
            Products
          </li>
        </ul>
      </div>
      <div className="text-black flex items-center justify-center w-[25%] max-w-md font-semibold text-base">
        Cart
      </div>
    </div>
  );
}

export default Navbar;

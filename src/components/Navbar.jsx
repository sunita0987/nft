import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between  px-6 py-4 shadow-md bg-white">
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/images/logo.png"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold text-blue-500 font-poppins">
            Events<span className="text-cyan-400">Free</span>
          </span>
        </div>
        <div className="flex items-center space-x-10 text-sm font-semibold text-black font-regular font-poppins">
          <Link to="/">HOME</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/feed ">FEED </Link>
          <Link to="/user">USER NAME</Link>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 hover:text-cyan-400 cursor-pointer font-semibold">
            Log Out
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

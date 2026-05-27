import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black backdrop-blur-md border-b border-zinc-800 text-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          React <span className="text-blue-500">Task</span>.
        </h1>

        {/* Center Links */}
        <div className="hidden md:flex gap-8 items-center">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all duration-300 hover:text-blue-400 ${
                isActive ? "text-blue-500" : "text-gray-300"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `transition-all duration-300 hover:text-blue-400 ${
                isActive ? "text-blue-500" : "text-gray-300"
              }`
            }
          >
            Products
          </NavLink>

        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          <NavLink
            to="/login"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-5 py-2 rounded-full font-medium"
          >
            Sign Up
          </NavLink>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
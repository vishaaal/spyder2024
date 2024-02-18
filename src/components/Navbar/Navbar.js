import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex h-16 p-6 justify-between ">
      <div className="text-3xl logo">magnifico</div>
      <div className="flex">
        <div className="px-3">
          Products <i class='bx bx-chevron-down'></i>
        </div>
        <div className="px-3">Solutions <i class='bx bx-chevron-down'></i></div>
        <div className="px-3">Services <i class='bx bx-chevron-down'></i></div>
        <div className="px-3">Help Center <i class='bx bx-chevron-down'></i></div>
        <div className="px-3">
          <Link to="/pricing">Pricing</Link>
        </div>
      </div>
      <div className="flex">
        <div className="px-3">Log In</div>
        <div className="px-3">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign Up Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

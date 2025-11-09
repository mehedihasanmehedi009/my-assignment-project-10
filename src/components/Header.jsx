 import React, { useContext } from "react";
import { Link } from "react-router";
import { IoLogOut, IoLogIn } from "react-icons/io5";
import { AuthContext } from "../context/Authprovider";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><a>Home</a></li>
            <li><a>Services</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">My App</a>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Services</a></li>
          <li><a>About</a></li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end flex items-center gap-3 md:mr-5">
        {user ? (
          <div className="relative group">
            {/* Profile Image */}
            <img
              src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-pink-500 cursor-pointer"
            />

            {/* Hover dropdown (Name + Logout) */}
            <div
              className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg p-3 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-all duration-300 z-50"
            >
              <p className="text-center font-semibold text-gray-700">
               
                {user.displayName || "User"}
              </p>
              <button
                onClick={signOutUser}
                className="mt-2 w-full flex items-center justify-center gap-2 
                bg-gradient-to-r from-pink-500 to-green-400 text-white py-1 rounded"
              >
                <IoLogOut /> Logout
              </button>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm bg-gradient-to-r from-pink-500 to-green-400 text-white"
          >
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

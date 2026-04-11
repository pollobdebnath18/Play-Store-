import React from "react";
import { Link, NavLink } from "react-router";
import LogoImg from "../../assets/images/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const links = [
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-semibold ${isActive ? " bg-success " : ""}`
        }
      >
        Home
      </NavLink>
    </li>,
    <li>
      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `font-semibold ${isActive ? " bg-success " : ""}`
        }
      >
        Apps
      </NavLink>
    </li>,
    <li>
      <NavLink
        to="/installApps"
        className={({ isActive }) =>
          `font-semibold ${isActive ? " bg-success " : ""}`
        }
      >
        Installation
      </NavLink>
    </li>,
  ];
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1100px] mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex justify-between items-center gap-2">
            <img  src={LogoImg} alt="logo" className="hidden md:flex w-[40px]  h-[40px]" />
            <a className="btn btn-ghost text-xl">Play Store</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">
            <FaGithub></FaGithub> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

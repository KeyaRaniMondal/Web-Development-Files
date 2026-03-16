import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-purple-600 font-semibold'
      : 'text-base-content hover:text-purple-600 transition-colors';

  const links = (
    <div className="flex flex-col lg:flex-row gap-4" >
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/apps" className={navLinkClass}>
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink to="/installation" className={navLinkClass}>
          Installation
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar flex justify-between items-center bg-base-100 shadow-sm px-10 py-3">
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-bold text-lg">HERO.IO</span>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

 
        <button className="btn btn-outline btn-primary bg-gradient-to-r from-purple-600 to-purple-400 text-white flex items-center gap-2 p-2 rounded-md">
          <FaGithub />
          Contribute
        </button>


      <div className="navbar-end lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

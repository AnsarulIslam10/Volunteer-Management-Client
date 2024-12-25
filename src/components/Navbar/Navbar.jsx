import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaBars, FaHands } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.body.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
    document.body.className = updatedTheme;
  };

  const handleLogOut = () => {
    signOutUser();
    navigate("/");
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `btn btn-sm btn-ghost rounded-none ${
              isActive
                ? "border-green-500 border-b-4 border-t-0 border-l-0 border-r-0 text-green-500"
                : ""
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/all-volunteer-need-posts"}
          className={({ isActive }) =>
            `btn btn-sm btn-ghost rounded-none ${
              isActive
                ? "border-green-500 border-b-4 border-t-0 border-l-0 border-r-0 text-green-500"
                : ""
            }`
          }
        >
          All Volunteer Need Posts
        </NavLink>
      </li>
      <li>
        <details>
          <summary className="w-[80%] md:w-auto btn btn-sm btn-ghost rounded-none">My Profile</summary>
          <ul className="p-2 w-24 sm:w-44 lg:w-52 relative right-5 z-10 rounded-md dark:bg-[#181818] dark:text-[#e0e0e0] text-black backdrop-blur-sm">
            <li className="hover:dark:bg-[#222222]">
              <NavLink
                to={"/add-volunteer-need-post"}
                className={({ isActive }) =>
                  `btn btn-sm btn-ghost rounded-none ${
                    isActive
                      ? "border-green-500 border-b-4 border-t-0 border-l-0 border-r-0 text-green-500"
                      : ""
                  }`
                }
              >
                Add Volunteer Need Post
              </NavLink>
            </li>
            <li className="hover:dark:bg-[#222222]">
              <NavLink
                to={"/manage-my-posts"}
                className={({ isActive }) =>
                  `btn btn-sm btn-ghost rounded-none ${
                    isActive
                      ? "border-green-500 border-b-4 border-t-0 border-l-0 border-r-0 text-green-500"
                      : ""
                  }`
                }
              >
                Manage My Posts
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <nav className="max-w-7xl px-2 mx-auto sticky top-0 z-50">
      <div className="navbar bg-base-100 backdrop-blur-md dark:bg-black/5 bg-white/5 px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden mr-2 text-xl">
             <FaBars/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white dark:bg-[#181818] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="cursor-pointer text-3xl tracking-widest text-green-500 font-bold flex items-center gap-2 uppercase "
          >
            {<FaHands className="text-4xl block md:hidden"/>}
             <span className="hidden md:block">Volunary</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="mt-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                checked={theme === "dark"}
                onChange={toggleTheme}
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-7 w-7 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-7 w-7 fill-current text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {user && user?.email ? (
            <div className="flex items-center">
              <div
                className="flex items-center cursor-pointer px-1"
                data-tooltip-id="my-tooltip"
                data-tooltip-place="bottom"
                data-tooltip-content={user.displayName}
              >
                <img
                  className="sm:w-10 sm:h-10 w-7 h-7 border-2 border-green-500 rounded-full ml-1"
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <button
                onClick={handleLogOut}
                className="btn btn-sm md:btn-md border-none rounded-full bg-green-500 text-white font-semibold text-lg"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn border-none rounded-full bg-green-500 text-white font-semibold text-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

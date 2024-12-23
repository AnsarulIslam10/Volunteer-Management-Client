import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOutUser();
    navigate("/");
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-volunteer-need-posts"}>
          All volunteer Need posts
        </NavLink>
      </li>
      <li>
        <details>
          <summary>Profile</summary>
          <ul className="p-2 w-52 z-10 rounded-md bg-gray-200 backdrop-blur-sm">
            <li>
              <NavLink to={"/add-volunteer-need-post"}>
                Add Volunteer need Post
              </NavLink>
            </li>
            <li>
              <NavLink to={"/manage-my-posts"}>Manage My Posts</NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div className="navbar">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className="cursor-pointer text-3xl tracking-widest text-green-500 font-bold uppercase "
        >
          Vollify
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex items-center">
          <div
            className="flex items-center cursor-pointer px-1"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content={user.displayName}
          >
            <img
              className="sm:w-10 sm:h-10 w-7 h-7 border-2 border-cyan-500 rounded-full ml-1"
              referrerPolicy="no-referrer"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <button
            onClick={handleLogOut}
            className="btn bg-green-500 text-white font-semibold text-lg"
          >
            Log Out
          </button>
        </div>
        ) : (
          <Link
            to={"/login"}
            className="btn bg-green-500 text-white font-semibold text-lg"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

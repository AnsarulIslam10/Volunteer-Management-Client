import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const MainLayout = () => {
  return (
    <div className="dark:bg-[#181818] dark:text-[#e0e0e0] mx-auto">
      <Tooltip id="my-tooltip" className="z-10" />
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

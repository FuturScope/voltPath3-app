import React from "react";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DashBoardLayout = () => {
  return (
    <div className="flex flex-col h-screen  bg-[#13162E]">
      
      <div className="flex flex-1 bg-[#13162E]">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1 p-6 bg-[#13162E] text-[#4DA1FF]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;

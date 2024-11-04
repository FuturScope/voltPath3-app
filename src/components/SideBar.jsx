import { Link } from "react-router-dom";
import React from "react";
import user1 from "../assets/images/user1.jpg";
import {
  FaHome,
  FaBookmark,
  FaInbox,
  FaCog,
  FaCar,
  FaSignOutAlt,
  FaMap,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-80 bg-[#1A1C2C] h-screen p-4 border-gray-200 shadow-lg rounded-lg">
      <div className="mb-3">
        <h1 className="text-2xl font-bold text-[#4DA1FF]">Welcome!</h1>
      </div>
      <div className="mt-auto pt-1">
        <div className="flex justify-center">
          <img
            className="w-[10vw] h-[30vh] rounded-full border-4 border-[#4DA1FF]" // Added border for effect
            src={user1}
            alt="User profile"
          />
        </div>

        <div className="mt-[5%]">
          <h1 className="text-md font-medium text-[#4DA1FF]">Erica</h1>
          <h1 className="text-xs text-[#4DA1FF]">erica@example.com</h1>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <Link
          to="/dashboard" // Link to Overview (index route)
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaHome className="mr-3" />
          Overview
        </Link>

        <Link
          to="/dashboard/maps" 
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaMap className="mr-3 "/>
          Maps
        </Link>

        <Link
          to="/dashboard/bookmarks" 
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaBookmark className="mr-3 "/>
          Bookmarks
        </Link>

        <Link
          to="/dashboard/inbox" 
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaInbox className="mr-3" />
          Inbox
        </Link>

        <Link
          to="/dashboard/trips" 
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaCar className="mr-3" />
          Trips
        </Link>

        <Link
          to="/dashboard/settings" 
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaCog className="mr-3" />
          Settings
        </Link>
      </div>
      <Link
        to="/" // Placeholder for logout route
        className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
      >
        <FaSignOutAlt className="mr-3" />
        Logout
      </Link>
    </aside>
  );
};

export default Sidebar;

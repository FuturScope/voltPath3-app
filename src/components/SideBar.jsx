import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaBookmark,
  FaCog,
  FaCar,
  FaSignOutAlt,
  FaMap,
  FaCalendarCheck,
  FaUserCircle,
} from "react-icons/fa";
import LogoutPopup from "./LogoutPopup";
import axios from "axios";
import { baseUrl } from "../services/config";

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSingleUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("No token found, redirecting to login.");
        return;
      }

      const response = await axios.get(`${baseUrl}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <aside className="w-80 bg-[#1A1C2C] h-screen p-4 border-gray-200 shadow-lg rounded-lg">
      <Link to="/">
        <div className="mb-1">
          <h1 className="text-xl font-bold text-[#4DA1FF]">Welcome!</h1>
        </div>
      </Link>
      <div className="pt-1">
        <div className="flex justify-center relative">
          <FaUserCircle
            className="w-24 h-24 text-[#4DA1FF] border-4 border-[#4DA1FF] rounded-full"
            aria-label="Default User Icon"
          />
        </div>
        <div className="mt-4 text-center">
          {loading ? (
            <p className="text-[#4DA1FF]">Loading user info...</p>
          ) : user ? (
            <>
              <h1 className="text-md font-medium text-[#4DA1FF]">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-xs text-[#4DA1FF]">{user.email}</p>
            </>
          ) : (
            <p className="text-[#4DA1FF]">User not found</p>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-6">
        <Link
          to="/dashboard"
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaHome className="mr-3" />
          Overview
        </Link>
        <Link
          to="/dashboard/booked-slots"
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaCalendarCheck className="mr-3" />
          Booked Slots
        </Link>
        <Link
          to="/dashboard/bookmarks"
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaBookmark className="mr-3" />
          Bookmarks
        </Link>
        <Link
          to="/dashboard/trips"
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaCar className="mr-3" />
          Trips
        </Link>
        <Link
          to="/dashboard/maps"
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaMap className="mr-3" />
          Maps
        </Link>
        <Link
          to="/dashboard/settings"
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaCog className="mr-3" />
          Settings
        </Link>
        <Link
          to="/"
          className="flex items-center text-[#4DA1FF] p-1 hover:bg-[#66ccff10] active:bg-[#66CCFF] focus:outline-none focus:ring focus:ring-[#66CCFF] rounded-md"
        >
          <FaSignOutAlt className="mr-3" />
          <LogoutPopup />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

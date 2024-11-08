import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png"; 
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const navigate = useNavigate();
  const menuRef = useRef(null); 

  const handleLoginAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "warning",
      title: "You need to login first to access this page.",
      text: "Please login to access this page.",
      showCancelButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  }; 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#0A1A35] text-white shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="voltPath Logo" className="h-10 w-10 mr-2" />
          <Link to="/">
            <div className="text-2xl font-bold text-[#4DA1FF] tracking-wider">
              voltPath
            </div>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-[#4DA1FF]"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <ul
          ref={menuRef}
          className={`flex-col md:flex-row md:flex md:space-x-6 space-y-2 md:space-y-0 absolute md:static bg-[#0A1A35] w-full md:w-auto transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:translate-y-0`}
        >
          <li className="relative text-[#4DA1FF] hover:text-[#66CCFF] transition-colors duration-300 cursor-pointer px-2 py-1 rounded">
            <Link
              to="/maps"
              className="before:absolute before:inset-0 before:rounded before:blur-md before:bg-[#4DA1FF] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
            >
              Maps
            </Link>
          </li>
          <li className="relative text-[#4DA1FF] hover:text-[#66CCFF] transition-colors duration-300 cursor-pointer px-2 py-1 rounded">
            <Link
              to="/dashboard/trips"
              onClick={handleLoginAlert}
              className="before:absolute before:inset-0 before:rounded before:blur-md before:bg-[#4DA1FF] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
            >
              Trips
            </Link>
          </li>
          <li className="relative text-[#4DA1FF] hover:text-[#66CCFF] transition-colors duration-300 cursor-pointer px-2 py-1 rounded">
            <button
              onClick={handleLoginAlert}
              className="before:absolute before:inset-0 before:rounded before:blur-md before:bg-[#4DA1FF] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
            >
              Bookmarks
            </button>
          </li>
        </ul>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <button className="relative bg-[#1E3A8A] hover:bg-[#2563EB] px-4 py-2 rounded text-white transition duration-300 ease-in-out shadow-lg">
            <span className="absolute inset-0 bg-blue-600 opacity-20 blur-lg rounded-lg"></span>
            <Link to="/signup">
              <span className="relative z-10">Sign Up</span>
            </Link>
          </button>
          <button className="relative border border-[#4DA1FF] px-4 py-2 rounded text-[#4DA1FF] transition duration-300 ease-in-out hover:bg-[#4DA1FF] hover:text-[#0A1A35] shadow-lg">
            <span className="absolute inset-0 bg-[#4DA1FF] opacity-20 blur-lg rounded-lg"></span>
            <Link to="/login">
              <span className="relative z-10">Login</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

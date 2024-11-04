import React from "react";
import { FaSearch } from "react-icons/fa"; // Importing the search icon

const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg shadow-md max-w-md w-[80%]">
      {" "}
      {/* Set max width and full width */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 p-2" // Padding for better UX
      />
      <button className="text-gray-700 p-2">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;

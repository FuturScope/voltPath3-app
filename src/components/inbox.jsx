import React from "react";
import { FaInbox } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Inbox = () => {
  return (
    <div>
      <div>
        <SearchBar/>
      </div>
      <div className="absolute top-1/4 w-[70%] text-center text-white px-4 mt-[10%] md:px-0 z-10">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-3xl mb-4 opacity-90 flex items-center justify-center">
          <FaInbox className="mr-2 text-yellow-400" /> {/* Use the car icon */}
          No messages received yet
        </h1>
      
          
       
      </div>
    </div>
  );
};

export default Inbox;

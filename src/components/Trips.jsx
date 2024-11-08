import React from "react";
import { FaCar } from "react-icons/fa"; 


const Trips = () => {
  return (
    <div>
      
      <div className="absolute top-1/4 w-[70%] text-center text-white px-4 mt-[10%] md:px-0 z-10">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-3xl mb-4 opacity-90 flex items-center justify-center">
          <FaCar className="mr-2 text-yellow-400" /> 
          No trips added yet
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto opacity-75">
          Your trips planned on www.voltpath.com will appear here
        </p>
      </div>
    </div>
  );
};

export default Trips;

import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import StarRating from "../components/StarRating";

const StationCard = ({ station }) => {
  const navigate = useNavigate();

  const handleReserve = () => {
    Swal.fire({
      title: "You need to login before you make a reservation",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      }
    });
  };

  return (
   
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between text-sm duration-300 max-w-md mx-auto sm:m-4">
        <div>
          <img
            src={`https://savefiles.org/${station.image}?shareable_link=475`}
            alt={`company logo`}
            className="h-40 w-full object-cover rounded-md"
          />
          <h3 className="mt-4 font-semibold text-gray-800">{station.name}</h3>
          <div className="flex items-center text-gray-600 font-bold mt-2 mb-2">
            <span>Reviews:</span>
            <StarRating rating={station.rating} />
          </div>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Location:</span> {station.location}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Charger Type:</span>{" "}
            {station.chargerType}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Charging Speed:</span>{" "}
            {station.chargingSpeed} kW
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Power Output:</span>{" "}
            {station.powerOutput}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Price:</span> GHC{station.price}
          </p>
        </div>
        <button
          onClick={handleReserve}
          className="mt-4 w-full bg-[#6DD8FF] text-white py-2 rounded-md font-bold transition duration-300 hover:bg-[#5cc1e6]"
        >
          Reserve
        </button>
      </div>
    
  );
};

export default StationCard;


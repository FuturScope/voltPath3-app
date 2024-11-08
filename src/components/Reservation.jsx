import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiReserve } from "../services/reserve";
import Swal from "sweetalert2";

const Reservation = () => {
  const navigate = useNavigate();

  // State to handle selected station, locations, and charger type
  const [selectedStation, setSelectedStation] = useState("");
  const [locations, setLocations] = useState([]);
  const [availableChargerType, setAvailableChargerType] = useState("");

  // Mapping of stations to their corresponding locations and charger types
  const stationLocationsMap = {
    "Thunder Volt": {
      locations: ["East Legon", "Madina", "Airport City"],
      chargerType: "Level 1 Charger (Standard 120V AC)",
    },
    "Safe Charge": {
      locations: ["Osu", "Tema", "Spintex"],
      chargerType: "Level 2 Charger (240V AC)",
    },
    "Green EV": {
      locations: ["Accra Mall", "Labone", "Dansoman"],
      chargerType: "DC Fast Charger (DCFC)",
    },
    Clowgehob: {
      locations: ["Kanda", "Ridge", "Kokomlemle"],
      chargerType: "Tesla Supercharger",
    },
    "Everyone CS": {
      locations: ["Cantonments", "Achimota", "Circle"],
      chargerType: "Ultra-Fast Charge",
    },
  };

  // Handle station selection change
  const handleStationChange = (event) => {
    const station = event.target.value;
    setSelectedStation(station);

    // Update locations and charger type based on the selected station
    const stationInfo = stationLocationsMap[station] || {
      locations: [],
      chargerType: "",
    };
    setLocations(stationInfo.locations);
    setAvailableChargerType(stationInfo.chargerType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const location = formData.get("location");
      const chargerType = formData.get("chargerType");
      const reservationDate = formData.get("reservationDate");
      const reservationTime = formData.get("reservationTime");

      const response = await apiReserve({
        name,
        location,
        chargerType,
        reservationDate,
        reservationTime,
      });

      if (response.status === 200) {
       
        
      }
       Swal.fire({
         icon: "success",
         title: "Station booked successfully",
         showConfirmButton: false,
         timer: 1500,
       });

      navigate("/dashboard/booked-slots");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed to book station",
        text: "An error occurred while booking the station. Please try again.",
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-[100%] mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="font-bold mb-2 text-gray-700">
          Reserve a charging slot
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Station Selection */}
          <div className="mb-2">
            <label className="text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <select
              name="name"
              id="name"
              className="w-full p-1 border rounded"
              onChange={handleStationChange}
              required
            >
              <option value="">Select a station</option>
              {Object.keys(stationLocationsMap).map((station) => (
                <option key={station} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </div>

          {/* Location Selection */}
          <div className="mb-2">
            <label className="text-gray-700 font-bold mb-2" htmlFor="location">
              Location
            </label>
            <select
              name="location"
              id="location"
              className="w-full p-1 border rounded"
              required
              disabled={!selectedStation}
            >
              <option value="">
                {selectedStation
                  ? "Select a location"
                  : "Select a station first"}
              </option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Charger Type (Auto-populated based on station) */}
          <div className="mb-2">
            <label
              className="text-gray-700 font-bold mb-2"
              htmlFor="chargerType"
            >
              Charger Type
            </label>
            <input
              type="text"
              name="chargerType"
              id="chargerType"
              className="w-full p-1 border rounded"
              value={availableChargerType}
              readOnly
              required
            />
            <div>
              <p className="flex items-center mt-4 text-gray-700 font-bold">
                <span className="w-2 h-2 rounded-full bg-green-600 mr-2"></span>
                Available
              </p>
            </div>
          </div>

          {/* Date and Time Selection */}
          <div className="mt-4 col-span-2">
            <h2 className="text-xl">Choose a date and time</h2>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="reservationDate"
            >
              Reservation Date
            </label>
            <input
              type="date"
              id="reservationDate"
              name="reservationDate"
              className="w-full p-1 border rounded mb-2"
              required
            />
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="reservationTime"
            >
              Time Slot
            </label>
            <select
              id="reservationTime"
              name="reservationTime"
              className="w-full p-1 border rounded mb-2"
              required
            >
              <option value="">Select a time slot</option>
              {[
                "09:00 AM",
                "10:00 AM",
                "11:00 AM",
                "12:00 PM",
                "01:00 PM",
                "02:00 PM",
                "03:00 PM",
                "04:00 PM",
                "05:00 PM",
              ].map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
            >
              Book slot
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reservation;


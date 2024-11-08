import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiReserve } from "../services/reserve";
import Swal from "sweetalert2";

const Reservation = () => {
  const navigate = useNavigate();

  // State to handle selected station and its corresponding locations
  const [selectedStation, setSelectedStation] = useState("");
  const [locations, setLocations] = useState([]);

  // Mapping of stations to their corresponding locations
  const stationLocationsMap = {
    "Thunder Volt": ["East Legon", "Madina", "Airport City"],
    "Safe Charge": ["Osu", "Tema", "Spintex"],
    "Green EV": ["Accra Mall", "Labone", "Dansoman"],
    "Clowgehob": ["Kanda", "Ridge", "Kokomlemle"],
    "Everyone CS": ["Cantonments", "Achimota", "Circle"],
  };

  const handleStationChange = (event) => {
    const station = event.target.value;
    setSelectedStation(station);

    // Update the locations based on the selected station
    setLocations(stationLocationsMap[station] || []);
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

      console.log(response);

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Station booked successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      
      }
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

          <div className="mb-2">
            <label
              className="text-gray-700 font-bold mb-2"
              htmlFor="chargerType"
            >
              Charger Type
            </label>
            <select
              name="chargerType"
              id="chargerType"
              className="w-full p-1 border rounded"
              required
            >
              <option value="">Select a charger type</option>
              <option value="Level 1 Charger (120V AC)">
                Level 1 Charger (Standard 120V AC)
              </option>
              <option value="Level 2 Charger (240V AC)">
                Level 2 Charger (240V AC)
              </option>
              <option value="DC Fast Charger">DC Fast Charger</option>
            </select>
            <div>
              <p className="flex items-center mt-4 text-gray-700 font-bold">
                <span className="w-2 h-2 rounded-full bg-green-600 mr-2"></span>
                Available
              </p>
            </div>
          </div>

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
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
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

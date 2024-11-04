import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Reservation = () => {
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [reservationTime, setReservationTime] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [timeSlot, setTimeSlot] = useState(""); // State for time slot

  // Mock data for charging stations
  const mockStationsData = [
    { id: 1, name: "Station A", price: 1.5, speed: "50 kW", available: true },
    { id: 2, name: "Station B", price: 1.2, speed: "75 kW", available: false },
    { id: 3, name: "Station C", price: 2.0, speed: "100 kW", available: true },
  ];

  useEffect(() => {
    // Fetch nearby charging stations
    setStations(mockStationsData);
  }, []);

  const handleReserve = (station) => {
    setSelectedStation(station);
    setNotificationEnabled(true);
    console.log(
      `Reserved slot at ${station.name} on ${reservationDate} at ${timeSlot}`
    );
  };

  const handleNotify = () => {
    if (notificationEnabled) {
      alert(`Notification set for ${reservationTime}`);
    }
  };

  return (
    <div>
      <div className="charging-stations-container p-6 bg-[#1A1C2C] rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">
          Nearby EV Charging Stations
        </h1>

        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className=" py-2 px-4 text-left">Name</th>
              <th className=" py-2 px-4 text-left">Price (ghc/kWh)</th>
              <th className=" py-2 px-4 text-left">Charging Speed</th>
              <th className=" py-2 px-4 text-left">Availability</th>
              <th className=" py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stations.map((station) => (
              <tr key={station.id}>
                <td className="py-2 px-4">{station.name}</td>
                <td className="py-2 px-4">{station.price}</td>
                <td className="py-2 px-4">{station.speed}</td>
                <td className="py-2 px-4 flex items-center">
                  {station.available ? (
                    <>
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Available
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      Unavailable
                    </>
                  )}
                </td>
                <td className=" py-2 px-4">
                  {station.available && (
                    <button
                      onClick={() => handleReserve(station)}
                      className="bg-blue-600 text-white px-2 py-1 rounded"
                    >
                      Reserve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
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
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
            className="w-full p-1 border rounded mb-2"
            required
          />
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="timeSlot"
          >
            Time Slot
          </label>
          <select
            id="timeSlot"
            name="timeSlot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
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
            onClick={() => handleNotify()}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Book slot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

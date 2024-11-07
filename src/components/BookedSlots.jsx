import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const BookedSlots = () => {
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const fetchBookedSlots = async () => {
      try {
        const response = await axios.get(
          "https://voltpath-api.onrender.com/reservations"
        );

        if (response.status === 200) {
          setBookedSlots(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching booked slots:", error);
        Swal.fire({
          icon: "error",
          title: "Failed to load booked slots",
          text: "An error occurred while fetching the booked slots data. Please try again.",
        });
        setLoading(false);
      }
    };

    fetchBookedSlots();
  }, []);

  if (loading) {
    return <p>Loading booked slots...</p>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="font-bold text-xl text-gray-700 mb-4">
        Booked Charging Slots
      </h2>

      {bookedSlots.length === 0 ? (
        <p>No booked slots available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookedSlots.map((slot, index) => (
            <div
              key={index}
              className="p-4 bg-blue-100 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {slot.name}
              </h3>
              <p className="text-gray-600">
                <strong>Location:</strong> {slot.location}
              </p>
              <p className="text-gray-600">
                <strong>Charger Type:</strong> {slot.chargerType}
              </p>
              <p className="text-gray-600">
                <strong>Reservation Date:</strong> {slot.reservationDate}
              </p>
              <p className="text-gray-600">
                <strong>Reservation Time:</strong> {slot.reservationTime}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedSlots;

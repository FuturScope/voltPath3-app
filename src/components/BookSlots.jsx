import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookedSlots = () => {
  const [reservation, setReservation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(
          `https://voltpath-api.onrender.com/reservations/${id}`
        );
        setReservation(response.data);
      } catch (error) {
        console.error("Error fetching reservation:", error);
      }
    };

    if (id) {
      fetchReservation();
    }
  }, [id]);

  if (!reservation) {
    return <div>Loading...</div>;
  }

  return (
      <div>
      <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Booked Slot Details
        </h2>
        <p>
          <strong>Name:</strong> {reservation.name}
        </p>
        <p>
          <strong>Location:</strong> {reservation.location}
        </p>
        <p>
          <strong>Charger Type:</strong> {reservation.chargerType}
        </p>
        <p>
          <strong>Reservation Date:</strong> {reservation.reservationDate}
        </p>
        <p>
          <strong>Time Slot:</strong> {reservation.timeSlot}
        </p>
      </div>
    </div>
  );
};

export default BookedSlots;

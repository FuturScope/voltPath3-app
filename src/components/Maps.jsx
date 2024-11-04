

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

// Custom marker icon URL
const customMarkerIcon =
  "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png"; // Replace with your image URL

// Create a custom icon
const customIcon = L.icon({
  iconUrl: customMarkerIcon,
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

const Maps = () => {
  const [position, setPosition] = useState([5.6037, -0.187]); // Default center position
  const [searchTerm, setSearchTerm] = useState("");
  const [markers, setMarkers] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    const apiKey =
      "pk.eyJ1IjoibmF2aWdhdGUtbmluamEiLCJhIjoiY20zMXU5bnZiMTA0dzJrc2h4Z3E5MTViYSJ9.1ufVYNvTw1oqLfGG29tqmQ"; // Replace with your actual Mapbox public access token
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      searchTerm
      )}.json?access_token=${apiKey}`;
      //api.mapbox.com/search/geocode/v6/batch
      //api.mapbox.com / geocoding / v5 / mapbox.places;

      https: try {
        const response = await axios.get(url);
        const results = response.data.features;

        if (results.length > 0) {
          const { center } = results[0]; // center contains [lng, lat]
          const newPosition = [center[1], center[0]]; // Switch to [lat, lng]

          // Update the position of the map
          setPosition(newPosition);

          // Update markers to show the searched location
          setMarkers([{ lat: center[1], lng: center[0] }]);
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
  };

  return (
    <div className="bg-[#0A1A35] h-[10%]">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search here"
          className="   "
        />
        <button
          className="relative bg- bg-[#2563EB] hover:bg-[#1E3A8A] px-4 py-2 rounded text-white transition duration-300 ease-in-out shadow-lg"
          type="submit"
        >
          Search
        </button>
      </form>

      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF2aWdhdGUtbmluamEiLCJhIjoiY20zMXU5bnZiMTA0dzJrc2h4Z3E5MTViYSJ9.1ufVYNvTw1oqLfGG29tqmQ"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>You are here.</Popup>
        </Marker>

        {/* Render markers for charging stations if available */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.lat, marker.lng]}
            icon={customIcon}
          >
            <Popup>EV Charging Station</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Maps;


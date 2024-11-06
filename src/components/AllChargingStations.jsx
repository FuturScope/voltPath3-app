import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../services/config";
import loadingGif from "../assets/images/loading.gif";
import StationCard from "./StationCard";

const AllChargingStations = () => {
  const [chargingStations, setChargingStations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getChargingStation = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseUrl}/chargingstations`);
      setChargingStations(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getChargingStation();
  }, []);

  return (
    <section>
      <div
        id="alignment-container"
        className="w-full mx-auto flex flex-col gap-y-8 py-12 bg-[#050E2D]"
      >
        <h4 className="relative text-white text-3xl font-extrabold flex justify-center pt-8 mb-20 transition-all duration-300 ease-in-out transform hover:text-[#6DD8FF] hover:scale-110">
          Charging Stations
        </h4>
        {loading ? (
          <div className="h-72 w-full flex items-center justify-center">
            <img src={loadingGif} alt="loading gif" className="h-16" />
          </div>
        ) : (
          <div
            id="chargingstation-cards"
            className=" w-[55%] mx-auto my-auto grid grid-cols-3 grid-rows-2 gap-x-[1rem] gap-y-[1.5rem]"
            // className=" w-[50%] grid grid-cols-3 gap-x-4 gap-y-6"
          >
            {chargingStations.map((station) => (
              <StationCard key={station.id} station={station} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllChargingStations;

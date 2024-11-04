

import { useEffect, useState } from 'react';
import { baseUrl } from '../services/config';
import loadingGif from '../assets/images/loading.gif'

const AllChargingStations = () => {
    const [chargingStations, setChargingStations] = useState([]);
    const [loading, setLoading] = useState(false);

    const getChargingStation = async () => {

        try {
            setLoading(true);
            const response = await axios.get(`${baseUrl}/endpoint for get all stations`);
            console.log(response);
            console.log(loading);
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
          className="w-[100%] mx-auto flex flex-col gap-y-[2rem] py-[3rem] bg-[#050E2D]"
        >
          <h4 className="relative text-white text-3xl font-extrabold flex justify-center pt-[2%] mb-[5%] transition-all duration-300 ease-in-out transform hover:text-[#6DD8FF] hover:scale-110">
            Charging Stations
          </h4>
          {loading ? (
            <div className="h-[300px] w-[100%] flex items-center justify-center">
              <img src={loadingGif} alt="loading gif" className="h-[70px]" />
            </div>
          ) : (
            <div
              id="chargingstation-cards"
              className="grid grid-cols-3 grid-rows-2 gap-x-[1rem] gap-y-[1.5rem]"
            >
              {/* card */}
              {chargingStations.map((item) => {
                console.log(item);
                return (
                  <StationCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
    
    
};

export default AllChargingStations;
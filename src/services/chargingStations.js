import { apiClient } from "./config";



export const apiGetChargingStations = async () => await apiClient.get("/charging_stations");

export const apiGetSingleChargingStation = async (id) => await apiClient.get(`/charging_station/${id}`);



export const apiSearchChargingStation = async (searchTerm) =>
  apiClient.get(
    `/adverts?filter={"title":{"$regex":"${searchTerm}","$options":"i"}}`
    );
  
    //replace the search url when Rodney gives it to you
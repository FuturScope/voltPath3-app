import { apiClient, baseUrl } from "./config";


export const apiReserve = async (payload) => apiClient.post(`${baseUrl}/reservations`,payload)
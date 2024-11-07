import { apiClient} from "./config";
 
export const apiSignup = async (payload) => {
    return await apiClient.post("/users/register", payload);
};


export const apiLogin = async (payload) => apiClient.post("/users/login", payload);

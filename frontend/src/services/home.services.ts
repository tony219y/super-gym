import api from "../lib/axios";

export const getHelloAPI = async () => {
    try {
        const response = await api.get("/hello");
        return response.data;
    }
    catch (error) {
        console.error("Error fetching data from API:", error);
        throw error;
    }
}
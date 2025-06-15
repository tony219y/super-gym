import axios from "axios";

export const getHelloAPI = async () => {
    try {
        const response = await axios.get("http://localhost:3000/hello");
        return response.data;
    }
    catch (error) {
        console.error("Error fetching data from API:", error);
        throw error; // Re-throw the error for further handling if needed
    }
}
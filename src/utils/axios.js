import axios from "axios";
export const ACCESS_TOKEN = "ACCESS_TOKEN"
const baseURL = process.env.NODE_ENV === 'development' ? "http://localhost:5000" : "https://nameless-escarpment-48784.herokuapp.com/";
const access_token = localStorage.getItem(ACCESS_TOKEN);

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": access_token ? `Bearer ${access_token}` : undefined
    },
});

export default axiosInstance;
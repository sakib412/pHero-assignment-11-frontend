import axios from "axios";
export const ACCESS_TOKEN = "ACCESS_TOKEN"
const baseURL = process.env.REACT_APP_SERVER_URL || `${window.location.protocol}//${window.location.hostname}:5000/`;
const access_token = localStorage.getItem(ACCESS_TOKEN);

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": access_token ? `Bearer ${access_token}` : undefined
    },
});

export default axiosInstance;
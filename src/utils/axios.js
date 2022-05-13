import axios from "axios";

export const ACCESS_TOKEN = "ACCESS_TOKEN"

const baseURL = `${window.location.protocol}//${window.location.hostname}:5000/`;
const access_token = localStorage.getItem(ACCESS_TOKEN);

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": access_token ? `Bearer ${access_token}` : undefined
    },
});

console.log(axiosInstance.headers)


export default axiosInstance;
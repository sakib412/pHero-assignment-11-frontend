import axios from "axios";

export const ACCESS_TOKEN = "ACCESS_TOKEN"

const baseURL = `${window.location.protocol}//${window.location.hostname}:5000/`;
const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

const access_token = localStorage.getItem(ACCESS_TOKEN);
if (access_token) {
    axiosInstance.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${access_token}`;
} else {
    delete axiosInstance.defaults.headers.common["Authorization"];
}


export default axiosInstance;
import axiosInstance, { ACCESS_TOKEN } from "./axios";

const assignJWT = async (email) => {
    axiosInstance.post('/login', {
        email
    }).then(({ data }) => {
        localStorage.setItem(ACCESS_TOKEN, data.results.accessToken)
    }).catch((e) => {
        console.log(e)
    })
}

export default assignJWT;
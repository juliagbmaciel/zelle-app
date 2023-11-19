import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.144:8000/api/v1/',
})
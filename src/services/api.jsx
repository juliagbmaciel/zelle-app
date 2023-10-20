import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: 'http://10.109.71.4:8000/api/v1/',
})
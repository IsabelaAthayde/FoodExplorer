import axios from "axios";

export const api = axios.create({
    baseURL: 'https://foodexplorer-api-bj8p.onrender.com',
});
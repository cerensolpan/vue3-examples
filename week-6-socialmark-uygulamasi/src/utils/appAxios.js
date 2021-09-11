import axios from "axios";
export const appAxios = axios.create({
    baseUrl : "http://localhost:3000"
});
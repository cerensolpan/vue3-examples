import axios from "axios";
export const appAxios = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials:false,
    header :{
        "tokenX":"myToken",
        "Content-Type":"application/json"
    }
})
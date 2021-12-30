import axios from "axios";

export const axiosInstance =axios.create({
    baseURL : "https://amazon-pt.herokuapp.com"
})
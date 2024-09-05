import axios from "axios";

const BASE_URL = "https://dummyjson.com";


export async function user2(data){
    return axios.post(`${BASE_URL}/auth/login`, data);
}
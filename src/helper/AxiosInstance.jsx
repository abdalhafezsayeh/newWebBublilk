
import axios from "axios";

let dataFromLocalSt;
let convertToDataFromLocalSt;
if (typeof window !== "undefined") {
  dataFromLocalSt = window.localStorage.getItem("KiroTravel_User");
  convertToDataFromLocalSt = JSON.parse(dataFromLocalSt);
}

const AxiosInstance = axios.create({
  baseURL: "https://kiro-public.herokuapp.com/",
});

AxiosInstance.interceptors.request.use((config)=>{
  convertToDataFromLocalSt ? config.headers.Authorization = `Bearer ${convertToDataFromLocalSt}` : null

  return config
})
export default AxiosInstance
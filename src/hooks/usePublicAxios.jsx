import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "http://localhost:3000/api"
})
const usePublicAxios = () => {
    return axiosPublic
};

export default usePublicAxios;
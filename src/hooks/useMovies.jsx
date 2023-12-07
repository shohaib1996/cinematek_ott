"use client"

import { useQuery } from "@tanstack/react-query";

import usePublicAxios from "./usePublicAxios";


const useMovies = () => {
    const axiosPublic = usePublicAxios()
    const { data: movies = [] } = useQuery({
        queryKey: ["movies"],
        queryFn: async () => {
            const res = await axiosPublic.get('/movies')
            const data = await res.data
            return data
        }

    })
    return [movies]
};

export default useMovies;

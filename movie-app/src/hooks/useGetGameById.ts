import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Games } from "./UseGames";


const apiClient = new APIClient<Games>("/games");

const useGetGameById = (id: number | string) =>
    useQuery({
        queryKey: ["games", id],
        queryFn: () => apiClient.getById(id),
        staleTime: 24 * 60 * 60 * 1000,
    });
    

export default useGetGameById;
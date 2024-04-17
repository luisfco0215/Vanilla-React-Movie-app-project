import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./UseGames";

const useGetGameById = (id: number | string) =>
    useQuery({
        queryKey: ["games", id],
        queryFn: () => apiClient.getById(id),
        staleTime: 24 * 60 * 60 * 1000,
    });
    

export default useGetGameById;
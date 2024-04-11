import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useData = <T>(endpoint: string, deps?: {}, staleTime = 24) => {
  const apiClient = new APIClient<T>(endpoint);

  return useQuery<T, Error>({
    queryKey: ["genres", deps],
    queryFn: apiClient.getAll,
    staleTime: staleTime * 60 * 60 * 1000,
  });
};

export default useData;

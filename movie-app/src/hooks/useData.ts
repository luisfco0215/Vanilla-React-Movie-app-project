import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useData = <T>(endpoint: string, deps?: []) => {
  const apiClient = new APIClient<T>(endpoint);

  return useQuery<T, Error>({
    queryKey: ["genres", deps],
    queryFn: apiClient.getAll,
  });
};

export default useData;

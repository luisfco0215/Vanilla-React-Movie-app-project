import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platforms } from "./usePlatforms";
import APIClient from "../services/api-client";


const apiClient = new APIClient<Games>("/games");

export interface Games {
  id: number;
  name: string;
  description: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

const UseGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.getAll(
      {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      })
  });

export default UseGames;

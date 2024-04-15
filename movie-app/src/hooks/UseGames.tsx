import { useInfiniteQuery } from "@tanstack/react-query";
import { Platforms } from "./usePlatforms";
import APIClient, { FetchReponse } from "../services/api-client";
import { GameQuery } from "../store/gameStore";

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
  useInfiniteQuery<FetchReponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll(
      {
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000
  });

export default UseGames;

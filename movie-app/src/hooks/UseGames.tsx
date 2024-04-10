import { GameQuery } from "../App";
import useData from "./useData";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  description: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

interface FetchReponse<T> {
  count: number;
  results: T[];
}

const UseGames = (gameQuery: GameQuery) =>
  useData<FetchReponse<Games>>(
    "/games",
    // {
    //   params: {
    //     genres: gameQuery.genre?.id,
    //     platforms: gameQuery.platform?.id,
    //     ordering: gameQuery.sortOrder,
    //     search: gameQuery.searchText,
    //   },
    // },
    // [gameQuery]
  );

export default UseGames;

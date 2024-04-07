import useData from "./useData";
import { Genres } from "./useGenre";
import { Platform } from "./usePlatforms";

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

const UseGames = (genre: Genres | null, selectedPlatform: Platform | null) =>
  useData<Games>(
    "/games",
    { params: { genres: genre?.id, platforms: selectedPlatform?.id } },
    [genre?.id, selectedPlatform?.id]
  );

export default UseGames;

import { FetchReponse } from "./UseGames";
import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => useData<FetchReponse<Genres>>("genres/", undefined, 24);

export default useGenre;

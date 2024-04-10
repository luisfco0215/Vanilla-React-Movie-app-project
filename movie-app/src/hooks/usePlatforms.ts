import { Platforms } from "./UseGames";
import useData from "./useData";

interface FetchReponse<T> {
  count: number;
  results: T[];
}

const usePlatforms = () =>
  useData<FetchReponse<Platforms>>("/platforms/lists/parents");

export default usePlatforms;

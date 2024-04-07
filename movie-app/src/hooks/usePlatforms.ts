import { Platforms } from "./UseGames";
import useData from "./useData";

const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatforms;

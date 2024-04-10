import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

interface FetchReponse<T> {
  count: number;
  results: T[];
}

const useGenre = () => useData<FetchReponse<Genres>>('genres/');

export default useGenre;

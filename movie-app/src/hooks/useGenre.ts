import useData from "./useData";

interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => useData<Genres>("/genres");

export default useGenre;

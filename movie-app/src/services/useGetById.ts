import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";

const useGetById = (platformId: number, genreId: number) => { 
    const { data: platform } = usePlatforms();
    const { data: genre } = useGenre();

    const selectedPlatform = platform?.results?.find((platform) => platform.id === platformId);
    const selectedGenre = genre?.results?.find((genre) => genre.id === genreId);

    return { selectedPlatform, selectedGenre };
}

export default useGetById;
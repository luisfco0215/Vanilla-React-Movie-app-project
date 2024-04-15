import { Heading } from "@chakra-ui/react";
import useGetById from "../services/useGetById";
import useGameStore from "../store/gameStore";


const GameHeading = () => {
  const gameQuery = useGameStore((state) => state.gameQuery);
  const results = useGetById(gameQuery.platformId ?? 0, gameQuery.genreId ?? 0);

  const heading = `${results.selectedPlatform?.name || ""} ${results.selectedGenre?.name || ""
    } Games`;

  return (
    <Heading as="h1" fontSize={45}>
      {heading}
    </Heading>
  );
};

export default GameHeading;

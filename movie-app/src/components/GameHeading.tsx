import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGetById from "../services/useGetById";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
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

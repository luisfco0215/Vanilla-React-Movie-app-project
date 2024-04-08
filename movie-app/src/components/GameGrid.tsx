import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = UseGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={3}
    >
      {isLoading && skeleton.map((card) => <GameCardSkeleton key={card} />)}
      {data.map((game) => (
        <GameCard key={game.id} games={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

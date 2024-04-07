import { SimpleGrid } from "@chakra-ui/react";
import UseGames from "./UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = UseGames();

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h3>Game Grid</h3>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={8}
      >
        {isLoading && skeleton.map((card) => <GameCardSkeleton key={card} />)}
        {games.map((game) => (
          <GameCard key={game.id} games={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

import { SimpleGrid } from "@chakra-ui/react";
import UseGames from "./UseGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = UseGames();

  return (
    <>
      <h3>Game Grid</h3>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={8}
      >
        {games.map((game) => (
          <GameCard key={game.id} games={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

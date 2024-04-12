import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error, isFetching, hasNextPage, fetchNextPage } = UseGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading && skeleton.map((card) => <GameCardSkeleton key={card} />)}
        {data?.pages.map((page) =>
          page?.results.map((game, index) =>
            <React.Fragment key={index}>
              <GameCard key={game.id} games={game} />
            </React.Fragment>
          ))}
      </SimpleGrid>
      {hasNextPage && <Button
        onClick={() => fetchNextPage()}
        marginLeft={3} marginY={2} colorScheme='teal' variant='outline'>
        {isFetching ? "Loading..." : "Load More..."}
      </Button>}

    </>
  );
};

export default GameGrid;

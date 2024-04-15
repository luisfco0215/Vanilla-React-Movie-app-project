import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
<<<<<<< HEAD
import InfiniteScroll from 'react-infinite-scroll-component';
import useGameStore from "../store/gameStore";

=======
import InfiniteScroll from "react-infinite-scroll-component";
>>>>>>> 62519f248ffd628c0a62b3a3cd427ba5a3845fa4


<<<<<<< HEAD
const GameGrid = () => {
  const gameQuery = useGameStore((state) => state.gameQuery);
  const { data, isLoading, error, hasNextPage, fetchNextPage } = UseGames(gameQuery);
=======
const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error, hasNextPage, fetchNextPage } =
    UseGames(gameQuery);
>>>>>>> 62519f248ffd628c0a62b3a3cd427ba5a3845fa4
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<Spinner textAlign="center" />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading && skeleton.map((card) => <GameCardSkeleton key={card} />)}
        {data?.pages.map((page) =>
          page?.results.map((game, index) => (
            <React.Fragment key={index}>
              <GameCard key={game.id} games={game} />
            </React.Fragment>
          ))
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;

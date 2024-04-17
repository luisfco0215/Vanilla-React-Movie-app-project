import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useNavigate } from "react-router-dom";


const GameGrid = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage } = UseGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  useNavigate();

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
        spacing={5}
      >
        {isLoading && skeleton.map((card) => <GameCardSkeleton key={card} />)}
        {data?.pages.map((page) =>
          page?.results.map((game, index) => (
            <React.Fragment key={index}>
              <Link to={"/Games/" + game.slug}>
                <GameCard key={game.id} games={game} />
              </Link>
            </React.Fragment>
          ))
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;

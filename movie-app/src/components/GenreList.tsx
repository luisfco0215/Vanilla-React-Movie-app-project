import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
// import SideBarSkeleton from "./SideBarSkeleton";
import getCroppedImageUrl from "../services/CroppedImageUrl";
import { Genres } from "../hooks/useGenre";
import React from "react";
// import SideBarSkeleton from "./SideBarSkeleton";

interface Props {
  onClick: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({ onClick, selectedGenre }: Props) => {
  const { data } = useGenre();
  console.log(data?.results);

  return (
    <>
      <Heading marginTop={3} fontSize="2xl">
        Genres
      </Heading>
      {/* {isLoading && data?.map((item) => <SideBarSkeleton key={item.id} />)} */}

      <List paddingY="10px">
        {data?.results?.map((genre) => (
          <React.Fragment>
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize="32px"
                  objectFit="cover"
                />
                <Button
                  onClick={() => onClick(genre)}
                  whiteSpace="normal"
                  textAlign="left"
                  variant={genre.id === selectedGenre?.id ? "outline" : "ghost"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

export default GenreList;

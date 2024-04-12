import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/CroppedImageUrl";
import { Genres } from "../hooks/useGenre";

interface Props {
  onClick: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({ onClick, selectedGenre }: Props) => {
  const { data, isLoading } = useGenre();
  console.log(data?.results.map((test) => getCroppedImageUrl(test.image_background)));

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginTop={3} fontSize="2xl">
        Genres
      </Heading>
      <List paddingY="10px">
        {data?.results.map((genre) => (
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
        ))}
      </List>
    </>
  );
};

export default GenreList;

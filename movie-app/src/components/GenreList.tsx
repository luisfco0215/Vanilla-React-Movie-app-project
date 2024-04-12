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
  selectedGenreId?: number;
}

const GenreList = ({ onClick, selectedGenreId }: Props) => {
  const { data, isLoading } = useGenre();
  const selectorId = data?.results?.find((genre) => genre.id === selectedGenreId);

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
                variant={genre.id === selectorId?.id ? "outline" : "ghost"}
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

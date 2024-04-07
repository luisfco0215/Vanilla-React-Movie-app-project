import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import SideBarSkeleton from "./SideBarSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;

  return (
    <>
      {isLoading &&
        data.map((item) => {
          <SideBarSkeleton key={item.id} />;
        })}

      <List paddingY="10px">
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius={8}
                src={genre.image_background}
                boxSize="32px"
              />
              <Text fontSize={"large"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

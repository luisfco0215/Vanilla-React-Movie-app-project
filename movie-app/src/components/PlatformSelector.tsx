import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameStore from "../store/gameStore";


const PlatformSelector = () => {
  const gameQuery = useGameStore((state) => state.gameQuery);
  const onSelectPlatform = useGameStore((state) => state.setPlatformId);
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatform = data?.results?.find((platform) => platform.id === gameQuery.platformId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
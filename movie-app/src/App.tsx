import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import Sorting from "./components/Sorting";
import GameHeading from "./components/GameHeading";
import useGameStore from "./store/gameStore";

function App() {
  const { setPlatformId } = useGameStore();

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem padding="12px" area={"main"}>
          <Box marginX={2} marginBottom={5}>
            <GameHeading />
          </Box>
          <HStack marginLeft={2} marginBottom={3}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setPlatformId(platform.id)
              }
            />
            <Sorting />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

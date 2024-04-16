import { Box, Grid, Show, GridItem, HStack } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import Sorting from '../components/Sorting'

const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
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
                    <PlatformSelector />
                    <Sorting />
                </HStack>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default HomePage
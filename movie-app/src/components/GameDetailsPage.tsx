import { useParams } from "react-router-dom";
import { Heading, Box, Text } from "@chakra-ui/react";
import useGetGameById from "../hooks/useGetGameById";
import PlatformsGamesIcons from "./PlatformsGamesIcons";

const GameDetailsPage = () => {
    const { slug } = useParams();
    const { data } = useGetGameById(slug!);

    console.log(data);

    return (
        <>
            <Box display='flex' flexDirection='column' justifyContent='Center' alignItems='center' fontSize='xl' margin={5}>
                <PlatformsGamesIcons platforms={data?.parent_platforms?.map((p) => p.platform)} />
                <Heading fontSize='xxx-large' key={data?.id}>{data?.name}</Heading>
                <Box>
                    <Heading fontSize='xx-large' margin={3} key={data?.id}>About</Heading>
                    <Text> {data?.description}</Text>
                </Box>
            </Box>

        </>
    )
}

export default GameDetailsPage
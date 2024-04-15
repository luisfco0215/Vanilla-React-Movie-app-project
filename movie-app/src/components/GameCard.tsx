import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/UseGames";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/CroppedImageUrl";
import PlatformsGamesIcons from "./PlatformsGamesIcons";

interface Props {
  games: Games;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card key={games.id} borderRadius={10} overflow="hidden">
      <Image
        src={getCroppedImageUrl(games.background_image)}
        alt={games.name}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformsGamesIcons
            platforms={games.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={games.metacritic} />
        </HStack>
        <Heading size="md">{games.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

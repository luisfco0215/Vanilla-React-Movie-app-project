import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Games } from "./UseGames";
import PlatformsGamesIcons from "./PlatformsGamesIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/CroppedImageUrl";

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
        <Heading size="md">{games.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformsGamesIcons
            platforms={games.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={games.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

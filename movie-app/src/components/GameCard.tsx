import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Games } from "./UseGames";
import logo from "../assets/Crytek_Logo.svg";
import PlatformsGamesIcons from "./PlatformsGamesIcons";

interface Props {
  games: Games;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card key={games.id} borderRadius={10} overflow="hidden">
      <Image src={logo} alt={games.name} />
      <CardBody>
        <Heading size="md">{games.name}</Heading>
        <PlatformsGamesIcons
          platforms={games.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;

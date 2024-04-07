import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "Yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX="6px"
      paddingY="2px"
      borderRadius={3}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;

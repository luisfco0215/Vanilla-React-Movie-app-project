import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

interface Games {
  id: number;
  name: string;
}

interface FetchGames {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGame] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGames>("/games")
      .then((res) => setGame(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      <h3>Game Grid</h3>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

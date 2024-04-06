import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  description: string;
  image_background: string;
  parent_platforms: { platform: Platforms }[];
}

interface FetchGames {
  count: number;
  results: Games[];
}

const UseGames = () => {
  const [games, setGame] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGames>("/games", { signal: controller.signal })
      .then((res) => setGame(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default UseGames;

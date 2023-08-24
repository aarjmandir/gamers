import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controler = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games", { signal: controler.signal })
      .then(({ data: { results } }) => {
        setGames(results);
        setError("");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controler.abort();
  });

  return { games, error };
};

export default useGames;

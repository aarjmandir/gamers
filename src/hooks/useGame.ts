import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const gameApiClient = new APIClient<Game>("games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["gameDetail", slug],
    queryFn: () => gameApiClient.getDetail(slug),
  });
};

export default useGame;

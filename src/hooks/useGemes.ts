import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { useGameQueryStore } from "../stores";
import { Game } from "../entities/Game";

const gamesApiClient = new APIClient<Game>("/games");

const useGames = () => {
  const { gameQuery } = useGameQueryStore();

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gamesApiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: 30 * 60 * 1000, // 30min
    getNextPageParam: (lastpage, allPages) => {
      return lastpage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;

import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const platformsApiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platformsApiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms,
  });
};

export default usePlatforms;

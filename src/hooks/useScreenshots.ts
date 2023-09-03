import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (id: number) => {
  const screenshotApiClient = new APIClient<Screenshot>(
    `/games/${id}/screenshots`
  );
  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: screenshotApiClient.getAll,
  });
};

export default useScreenshots;

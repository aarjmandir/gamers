import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Trailer from "../entities/Trailer";

const useTrailers = (id: number) => {
  const trailerApiClient = new APIClient<Trailer>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ["trailer", id],
    queryFn: trailerApiClient.getAll,
  });
};

export default useTrailers;

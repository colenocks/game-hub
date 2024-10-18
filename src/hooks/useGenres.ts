import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

export interface IGenre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description?: string;
}

const apiClient = new APIClient<IGenre>("/genres")

const useGenres = () => useQuery<FetchResponse<IGenre>, Error>({
  queryKey: ["genres"],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24hrs
  initialData: genres,
})

export default useGenres;
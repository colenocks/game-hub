import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APICLient, { FetchResponse } from "../services/api-client";

export interface IGenre {
  id: number;
  name: string;
  slug: string;
  games_count: number
  image_background: string;
  description?: string;
}

const apiClient = new APICLient<IGenre>("/genres")

const useGenres = () => useQuery<FetchResponse<IGenre>, Error>({
  queryKey: ["genres"],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24hrs
  initialData: { count: genres.length, results: genres },
})

export default useGenres;
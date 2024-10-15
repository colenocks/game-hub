import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import GenreService, { IGenre } from '../services/genre'
import { FetchResponse } from "./useData";

const genreService = new GenreService()

const useGenres = () => useQuery<FetchResponse<IGenre>, Error>({
  queryKey: ["genres"],
  queryFn: genreService.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24hrs
  initialData: { count: genres.length, results: genres },
})

export default useGenres;
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { IPlatform } from "./usePlatforms";

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: IPlatform, released_at: string, requirements: {
      minimum: string,
      recommended: string
    }
  }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<IGame>("/games")

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return !!lastPage.next ? allPages.length + 1 : undefined
    }
  })
}

export default useGames;

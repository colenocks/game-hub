import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { IGameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
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

const useGames = (gameQuery: IGameQuery) => useInfiniteQuery<FetchResponse<IGame>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: ({ pageParam = 1 }) => apiClient.getAll({
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
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

export default useGames;

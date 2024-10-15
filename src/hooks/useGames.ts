import { useQuery } from "@tanstack/react-query";
import { IGameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import GameService, { IGame } from "../services/games";

const gameService = new GameService()

const useGames = (gameQuery: IGameQuery) => useQuery<FetchResponse<IGame>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: () => gameService.getAll(gameQuery),
  staleTime: 1 * 60 * 1000,
})

export default useGames;

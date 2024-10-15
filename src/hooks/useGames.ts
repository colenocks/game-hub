import { useQuery } from "@tanstack/react-query";
import { IGameQuery } from "../App";
import { IGame } from "../services/games";
import { FetchResponse } from "./useData";
import GameService from "../services/games"

const gameService = new GameService()



const useGames = (gameQuery: IGameQuery) => useQuery<FetchResponse<IGame>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: () => gameService.getAll(gameQuery),
  staleTime: 1 * 60 * 1000,
})

export default useGames;

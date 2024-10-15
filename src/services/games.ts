import { IGameQuery } from '../App';
import { FetchResponse } from '../hooks/useData';
import axiosInstance from './api-client';
import { IPlatform } from './platform';

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

class Game {
    private endpoint: string

    constructor() {
        this.endpoint = "/games"
    }

    getAll = async (gameQuery: IGameQuery) => {
        return axiosInstance.get<FetchResponse<IGame>>(this.endpoint, {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
            }
        }).then((res) => res.data)
    }
}

export default Game
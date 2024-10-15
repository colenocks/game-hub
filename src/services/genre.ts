import axiosInstance from './api-client'
import { FetchResponse } from '../hooks/useData';

export interface IGenre {
    id: number;
    name: string;
    slug: string;
    games_count: number
    image_background: string;
    description?: string;
}

class Genre {
    private endpoint: string

    constructor() {
        this.endpoint = "/genres"
    }

    getAll = async () => {
        return axiosInstance.get<FetchResponse<IGenre>>(this.endpoint).then((res) => res.data)
    }
}

export default Genre
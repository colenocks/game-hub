import axiosInstance from './api-client'

export interface IGenre {
    id: number;
    name: string;
    slug: string;
    games_count: number
    image_background: string;
    description?: string;
}

export interface IGenreList {
    count: number
    next?: string
    previous?: string
    results: IGenre[]
}

class Genre {
    private endpoint: string

    constructor() {
        this.endpoint = "/genres"
    }

    getAll = async () => {
        return axiosInstance.get<IGenreList>(this.endpoint).then((res) => res.data)
    }
}

export default Genre
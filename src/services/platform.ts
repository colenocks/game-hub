import { FetchResponse } from '../hooks/useData';
import axiosInstance from './api-client'

export interface IPlatform {
    id: number;
    name: string;
    slug: string;
}

class Platform {
    private endpoint: string

    constructor() {
        this.endpoint = "/platforms/lists/parents"
    }

    getAll = async () => {
        return axiosInstance.get<FetchResponse<IPlatform>>(this.endpoint).then((res) => res.data)
    }
}

export default Platform
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<IPlatform>("/platforms/lists/parents")

const usePlatforms = () => useQuery<FetchResponse<IPlatform>, Error>({
  queryKey: ["platforms"],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24hrs
  initialData: { count: platforms.length, results: platforms },
})

export default usePlatforms;

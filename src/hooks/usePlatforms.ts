import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";

import PlatformService, { IPlatform } from '../services/platform';

const platformService = new PlatformService()

const usePlatforms = () => useQuery<FetchResponse<IPlatform>, Error>({
  queryKey: ["platforms"],
  queryFn: platformService.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24hrs
  initialData: { count: platforms.length, results: platforms },
})

export default usePlatforms;

import { useQuery } from "@tanstack/react-query";
import APIClient from "src/services/api-client";
import platforms from "src/data/platforms";
import ms from "ms";
import Platform from "src/entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
})

export default usePlatforms;
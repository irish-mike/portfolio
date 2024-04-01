import { useQuery } from "@tanstack/react-query";
import APIClient  from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APIClient('/platforms/lists/parent');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {count: platforms.length, results: platforms, next: null}
})


//useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
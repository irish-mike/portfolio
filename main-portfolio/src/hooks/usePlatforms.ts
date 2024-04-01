import { useQuery } from "@tanstack/react-query";
import apiClient, {FetchResponse}  from "../services/api-client";
import platforms from "../data/platforms";


interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => 
    apiClient.get<FetchResponse<Platform>>('/platforms/lists/parent')
    .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {count: platforms.length, results: platforms}
})


//useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
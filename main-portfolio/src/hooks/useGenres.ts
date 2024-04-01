import { useQuery } from "@tanstack/react-query";
import apiClient, {FetchResponse}  from "../services/api-client";
import genres from '../data/genres'

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => 
    apiClient.get<FetchResponse<Genre>>('/genres')
    .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {count: genres.length, results: genres}
})

//useData<Genre>('/genres')

export default useGenres;
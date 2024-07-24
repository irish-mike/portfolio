import { useQuery } from "@tanstack/react-query";
import Video from "../entities/Video";
import APIClient from "../services/api-client";



const useVideos = (projectId: number) => {

    const apiCLient = new APIClient<Video>(`/games/${projectId}/movies`);

    return useQuery({
        queryKey: ['trailers', projectId],
        queryFn: apiCLient.getAll
    })
}

export default useVideos;

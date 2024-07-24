import { useQuery } from "@tanstack/react-query";
import Project from "../entities/Project";
import APIClient from "../services/api-client";


const apiClient = new APIClient<Project>('/games');

const useProject = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
});

export default useProject;
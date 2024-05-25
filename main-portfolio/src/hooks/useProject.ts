import { useQuery } from "@tanstack/react-query";
import APIClient from "src/services/api-client";
import Project from 'src/entities/Project';

const apiClient = new APIClient<Project>('/games');

const useProject = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
});

export default useProject;
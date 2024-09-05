import { Project } from "@entities";
import { APIClient } from "@services";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Project>('/games');

const useProject = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
});

export default useProject;
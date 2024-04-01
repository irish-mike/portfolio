import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from "../App";
import APIClient, {FetchResponse} from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Project {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} [];
    metacritic: number;
  }

const apiClient = new APIClient<Project>('/games');

  
  
const useProjects = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Project>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({pageParam = 1}) => 
    apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id, 
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      },
    }),
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  },
  initialPageParam: 1 
});


export default useProjects;
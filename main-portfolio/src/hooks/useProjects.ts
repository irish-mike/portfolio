import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "src/App";
import apiClient, {FetchResponse} from "../services/api-client";
import {  } from "./useData";

export interface Platform{
  id: number;
  name: string;
  slug: string;
}

export interface Project {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} [];
    metacritic: number;
  }
  
  
const useProjects = (gameQuery: GameQuery) => useQuery<FetchResponse<Project>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => 
  apiClient.get<FetchResponse<Project>>('/games', {
    params: {
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  })
  .then(response => response.data),
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
});

export default useProjects;
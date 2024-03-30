import { GameQuery } from "src/App";
import useData from "./useData";

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
  
  
const useProjects = (gameQuery: GameQuery) => 
  useData<Project>('/games', 
  {
    params: {
      genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id
    }
  }, 
  [gameQuery]);

export default useProjects;
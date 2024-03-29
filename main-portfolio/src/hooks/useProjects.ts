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
  
  
const useProjects = () => useData<Project>('/games');

export default useProjects;
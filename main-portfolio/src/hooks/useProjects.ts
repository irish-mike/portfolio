import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

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
  
  interface FetchProjectsResponse {
    count: number;
    results: Project[];
  }

  
const useProjects = () =>{
    const [projects, setProjects] = useState<Project[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);

      apiClient
        .get<FetchProjectsResponse>("/games", {signal: controller.signal})
        .then((res) => setProjects(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
        } )
        .finally(() => setLoading(false));

        return () => controller.abort();
    }, []);

    return {projects, error, isLoading}; 
}

export default useProjects;
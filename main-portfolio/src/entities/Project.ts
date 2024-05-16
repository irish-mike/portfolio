import { Platform } from "src/entities/Platform";


export interface Project {
    id: number;
    name: string;
    slug: string;
    description: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
}

import Platform from "./Platform";


export default interface Project {
    id: number;
    name: string;
    slug: string;
    description: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
}

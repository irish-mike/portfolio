type postStatus = "draft" | "published" | "scheduled" | "deleted";

interface BasePost {
  id: number;
  status: postStatus;
  title: string;
  date: string;
  tags: string[];
}

export interface ThumbnailPost extends BasePost {
  description: string;
  thumbnail: string;
}

export interface FullPost extends BasePost {
  subtitle: string;
  content_md: string;
  author: string;
}

export interface Post {
  id: string;
  status: string;
  title: string;
  subtitle: string;
  description: string;
  content_md: string;
  tags: string[];
  thumbnail: string;
  date_updated: string;
}
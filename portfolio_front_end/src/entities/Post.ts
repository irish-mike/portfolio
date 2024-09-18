type postStatus = "draft" | "published" | "scheduled" | "deleted";

export interface Post {
  id: string;
  status: postStatus;
  title: string;
  subtitle: string;
  description: string;
  content_md: string;
  tags: string[];
  thumbnail: string;
  date_updated: string;
}

export interface Posts{
  posts: Post[];
}

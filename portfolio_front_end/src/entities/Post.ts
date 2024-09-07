type postStatus = "draft" | "published" | "scheduled" | "deleted";

export default interface Post {
  id: number;
  status: postStatus;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  tags: string[];
}
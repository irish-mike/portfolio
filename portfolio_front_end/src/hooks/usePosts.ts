import { createDirectus, readItem, readItems, rest } from "@directus/sdk";
import { Post, Posts } from "@entities";
import { useCallback, useState } from "react";

const backendUrl = import.meta.env.VITE_BACK_END_URL || window.location.origin;
const client = createDirectus<Posts>(backendUrl).with(rest());

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post>();

  const getPosts = useCallback(async () => {
    try {
      const result = await client.request(readItems("posts"));
      setPosts(Array.isArray(result) ? result : []);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  }, []);

  const getPost = useCallback(async (slug: string) => {
    try {
      const result = await client.request(readItem('posts', slug));
      setPost(result && typeof result === "object" && !Array.isArray(result) ? result : undefined);
  } catch (error) {
      console.error("Error fetching post: ", error);
  }
  }, []);


  return { post, posts, getPost, getPosts };
};

export default usePosts;

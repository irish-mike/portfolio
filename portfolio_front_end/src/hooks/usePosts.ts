import { createDirectus, readItem, readItems, rest } from "@directus/sdk";
import { Post, Posts } from "@entities";
import { useState } from "react";

const client = createDirectus<Posts>(import.meta.env.VITE_BACK_END_URL).with(rest());

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post>();

  const getPosts = async () => {
    try {
      const result = await client.request(readItems("posts"));
      setPosts(result);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  const getPost = async (slug: string) => {
    try {
      const result = await client.request(readItem('posts', slug));
      setPost(result);
  } catch (error) {
      console.error("Error fetching post: ", error);
  }
  };


  return { post, posts, getPost, getPosts };
};

export default usePosts;
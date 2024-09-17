import { createDirectus, readItems, rest } from "@directus/sdk";
import { Post } from "@entities";
import { useEffect, useState } from "react";

interface Schema {
  articles: Post[];
}

const client = createDirectus<Schema>("http://localhost:8055/").with(rest());

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await client.request(readItems("articles"));
        setPosts(result);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  return posts;
};

export default usePosts;
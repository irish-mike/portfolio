import { createDirectus, readItem, readItems, rest } from "@directus/sdk";
import { Post, Posts } from "@entities";
import { useCallback, useRef, useState } from "react";

const backendUrl = import.meta.env.VITE_BACK_END_URL || window.location.origin;
const client = createDirectus<Posts>(backendUrl).with(rest());

type PostsRequest =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; posts: Post[] }
  | { status: "error" };

type PostRequest =
  | { id: string; status: "loading" }
  | { id: string; status: "success"; post: Post }
  | { id: string; status: "error" };

type UsePostsResult = {
  postsRequest: PostsRequest;
  postRequest?: PostRequest;
  getPosts: () => Promise<void>;
  getPost: (id: string) => Promise<void>;
};

const usePosts = (): UsePostsResult => {
  const [postsRequest, setPostsRequest] = useState<PostsRequest>({ status: "idle" });
  const [postRequest, setPostRequest] = useState<PostRequest>();
  const latestPostsRequest = useRef(0);
  const latestPostRequest = useRef(0);

  const getPosts = useCallback(async () => {
    const requestId = ++latestPostsRequest.current;
    setPostsRequest({ status: "loading" });
    try {
      const result = await client.request(readItems("posts"));
      if (!Array.isArray(result)) {
        throw new Error("Posts response was not a list.");
      }
      if (requestId === latestPostsRequest.current) {
        setPostsRequest({ status: "success", posts: result });
      }
    } catch (error) {
      if (requestId === latestPostsRequest.current) {
        console.error("Error fetching posts:", error);
        setPostsRequest({ status: "error" });
      }
    }
  }, []);

  const getPost = useCallback(async (id: string) => {
    const requestId = ++latestPostRequest.current;
    setPostRequest({ id, status: "loading" });

    try {
      const result = await client.request(readItem("posts", id));
      if (!result || typeof result !== "object" || Array.isArray(result)) {
        throw new Error("Post response was invalid.");
      }
      if (requestId === latestPostRequest.current) {
        setPostRequest({ id, status: "success", post: result });
      }
    } catch (error) {
      if (requestId === latestPostRequest.current) {
        console.error("Error fetching post:", error);
        setPostRequest({ id, status: "error" });
      }
    }
  }, []);

  return { postsRequest, postRequest, getPosts, getPost };
};

export default usePosts;

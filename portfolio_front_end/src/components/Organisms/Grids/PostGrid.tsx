import { PostCard, PostLoadError } from "@components";
import { usePosts } from "@hooks";
import { useEffect, type ReactElement } from "react";
import { Col, Row } from "react-bootstrap";

const PostGrid = (): ReactElement => {
  const { postsRequest, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (postsRequest.status === "idle" || postsRequest.status === "loading") {
    return <p role="status">Loading posts...</p>;
  }

  if (postsRequest.status === "error") {
    return <PostLoadError message="Posts could not be loaded right now." />;
  }

  if (postsRequest.posts.length === 0) {
    return <p>No posts yet.</p>;
  }

  return (
    <Row s={1} md={2} className="g-4">
      {postsRequest.posts.map((post) => (
        <Col key={post.id}>
          <PostCard post={post} cardType="post" />
        </Col>
      ))}
    </Row>
  );
};

export default PostGrid;

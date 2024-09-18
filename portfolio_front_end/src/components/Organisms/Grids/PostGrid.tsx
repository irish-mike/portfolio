import { PostCard } from "@components";
import { usePosts } from "@hooks";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const PostGrid = () => {
  const { posts, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Row s={1} md={2} className="g-4">
      {posts.map((post) => (
        <Col key={post.id}>
          <PostCard post={post} cardType="post" />
        </Col>
      ))}
    </Row>
  );
};

export default PostGrid;

import { PostCard } from "@components";
import { posts } from "@data";
import { Post } from "@entities";
import { Col, Row } from "react-bootstrap";

const PostGrid = () => {
  return (
    <Row s={1} md={2} className="g-4">
      {posts.results.map((post) => (
        <Col key={post.id}>
          <PostCard post={post as Post} />
        </Col>
      ))}
    </Row>
  );
};

export default PostGrid;

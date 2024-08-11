import { Row, Col } from "react-bootstrap";
import { posts } from "@data";
import { PostCard } from "@components";

const PostGrid = () => {
  return (
    <Row s={1} md={2} className="g-4">
      {posts.results.map((post) => (
        <Col key={post.id}>
          <PostCard project={post} />
        </Col>
      ))}
    </Row>
  );
};

export default PostGrid;

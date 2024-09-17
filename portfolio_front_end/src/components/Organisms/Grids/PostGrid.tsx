import { PostCard } from "@components";
import { usePosts } from "@hooks";
import { Col, Row } from "react-bootstrap";

const PostGrid = () => {
  const posts = usePosts();
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

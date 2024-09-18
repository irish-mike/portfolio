import { PostCard } from "@components";
import { Posts } from "@entities";
import { Col, Row } from "react-bootstrap";

const ThumbnailCardGrid = ({ posts }: Posts) => {
  return (
    <div className="thumbnail-card-grid">
      <Row className="d-flex justify-content-center">
        {posts.map((post) => (
          <Col key={post.id} className="d-flex justify-content-center featured-card-col">
            <PostCard post={post} cardType="featured" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ThumbnailCardGrid;

import { Row, Col } from "react-bootstrap";
import { posts } from "@data";
import { ProjectCard } from "@components";

const PostGrid = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {posts.results.map((post) => (
        <Col key={post.id}>
          <div className="project-card-container">
            <ProjectCard project={post} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default PostGrid;

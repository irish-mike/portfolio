import { Row, Col } from "react-bootstrap";
import { projects } from "@data";
import { ProjectCard } from "@components";

const ProjectGrid = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {projects.results.map((project) => (
        <Col key={project.id}>
          <div className="project-card-container">
            <ProjectCard project={project} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectGrid;

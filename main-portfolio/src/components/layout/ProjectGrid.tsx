import { Col, Row } from "react-bootstrap";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

export const ProjectGrid = () => {
  const { projects, error, isLoading } = useProjects();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Row xs={1} md={2} className="g-4">
      {error && <p className="text-danger">{error}</p>}

      {isLoading &&
        skeletons.map((skeleton) => (
          <Col md={6} key={`skeleton-${skeleton}`}>
            <ProjectCardSkeleton />
          </Col>
        ))}

      {projects &&
        projects.map((project) => (
          <Col md={6} key={project.id || project.name}>
            <ProjectCard project={project}></ProjectCard>
          </Col>
        ))}
    </Row>
  );
};

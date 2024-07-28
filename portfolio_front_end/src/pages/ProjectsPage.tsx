import { Row } from "react-bootstrap";
import { ProjectGrid, TagSearch } from "@components";

const ProjectsPage = () => {
  return (
    <>
      <Row className="m-2">
        <TagSearch options={["C++", "Python", "Web Development"]}></TagSearch>
      </Row>
      <Row className="m-2">
        <ProjectGrid />
      </Row>
    </>
  );
};

export default ProjectsPage;

import { Project } from "../../hooks/useProjects";
import { Card, Stack } from "react-bootstrap";
import TagIconList from "./TagIconList";
import CriticScore from "../ui/CriticScore";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card>
      <Card.Img variant="top" src={project.background_image} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>

        <Stack direction="horizontal" gap={2}>
          <TagIconList
            platforms={project.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={project.metacritic} />
        </Stack>

        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

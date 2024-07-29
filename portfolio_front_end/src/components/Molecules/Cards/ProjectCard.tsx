import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Project } from "@entities";
import { TagBadgeList } from "@components";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { id, thumbnail, title, description, date, tags } = project;

  return (
    <Link to={`/project/${id}`} className="text-decoration-none">
      <Card className="mb-4 shadow-sm h-100">
        <div className="cardImageContainer">
          <div className="cardImage">
            <Card.Img variant="top" src={thumbnail} alt={title} className="cardImg" loading="lazy" />
          </div>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-dark">{title}</Card.Title>
          <Card.Text className="flex-grow-1">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center text-muted border-0 ">
          <small>{date ? new Date(date).toLocaleDateString() : "No date available"}</small>
          <Stack direction="horizontal" gap={2}>
            <TagBadgeList tags={tags} />
          </Stack>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default ProjectCard;

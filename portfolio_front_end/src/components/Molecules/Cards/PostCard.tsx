import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Project } from "@entities";
import { TagBadgeList } from "@components";

interface Props {
  project: Project;
}

const PostCard: React.FC<Props> = ({ project }) => {
  const { id, thumbnail, title, description, date, tags } = project;

  return (
    <Link to={`/post/${id}`} className="text-decoration-none" aria-label={`View details of ${title}`}>
      <Card className="post-card h-100">
        <div className="card-image-outer-container">
          <div className="card-image-inner-container p-1">
            <Card.Img src={thumbnail} alt={title} className="card-image" loading="lazy" />
          </div>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="post-card-title px-1">{title}</Card.Title>
          <Card.Text className="post-card-text flex-grow-1 px-1 pb-2">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center text-muted border-0">
          <small>{date ? new Date(date).toLocaleDateString() : "No date available"}</small>
          <Stack direction="horizontal" gap={2}>
            <TagBadgeList tags={tags} />
          </Stack>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default PostCard;

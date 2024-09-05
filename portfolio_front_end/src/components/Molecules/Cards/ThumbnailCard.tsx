import { PostCardProps } from "@entities";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ThumbnailCard = ({ id, title, description, thumbnail, date }: PostCardProps) => {
  return (
    <Link to={`/post/${id}`} className="thumbnail-card-link" aria-label={`View details of ${title}`}>
      <Card className="thumbnail-card d-flex h-100 text-background border-0">
        <div className="thumbnail-card-image-outer-container">
          <div className="thumbnail-card-image-inner-container">
            <Card.Img variant="top" src={thumbnail} alt={title} className="thumbnail-card-image" loading="lazy" />
          </div>
        </div>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className=" thumbnail-card-text">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 text-muted text-end thumbnail-card-footer">{date}</Card.Footer>
      </Card>
    </Link>
  );
};

export default ThumbnailCard;

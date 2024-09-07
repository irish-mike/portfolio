import { ThumbnailPost } from "@entities";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  card: ThumbnailPost;
}

const ThumbnailCard = ({ card }: Props) => {
  const { id, status, title, description, thumbnail, date } = card;

  const isPublished = status === "published";
  const thumbnailClass = isPublished ? "" : "thumbnail-coming-soon";
  const overlayText = isPublished ? null : <div className="thumbnail-text-overlay">Coming Soon</div>;
  const footerContent = isPublished ? date : "Coming Soon";

  return (
    <Link to={`/post/${id}`} className="thumbnail-card-link" aria-label={`View details of ${title}`}>
      <Card className="thumbnail-card d-flex h-100 text-background border-0">
        <div className="thumbnail-card-image-outer-container">
          <div className="thumbnail-card-image-inner-container">
            <Card.Img variant="top" src={thumbnail} alt={title} className={`thumbnail-card-image ${thumbnailClass}`} loading="lazy" />
            {overlayText}
          </div>
        </div>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="thumbnail-card-text">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 text-muted text-end thumbnail-card-footer">{footerContent}</Card.Footer>
      </Card>
    </Link>
  );
};

export default ThumbnailCard;

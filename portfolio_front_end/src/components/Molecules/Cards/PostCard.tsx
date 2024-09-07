import { TagBadgeList } from "@components";
import { ThumbnailPost } from "@entities";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  post: ThumbnailPost;
  cardType: "post" | "featured";
}

const PostCard = ({ post, cardType }: Props) => {
  const { id, status, title, description, thumbnail, date, tags } = post;

  const prefix = cardType;

  const isPublished = status === "published";
  const postLink = `/post/${id}`;
  const footerContent = isPublished ? date : "Coming Soon";
  const postStatusClass = isPublished ? "" : "card-coming-soon";
  const overlayText = isPublished ? null : <div className="card-text-overlay">Coming Soon</div>;

  const cardContent = (
    <Card className={`custom-card ${prefix}-card`}>
      <div className={`custom-card-image-outer-container ${prefix}-card-image-outer-container`}>
        <div className={`custom-card-image-inner-container p-1`}>
          <Card.Img variant="top" src={thumbnail} alt={title} className={`custom-card-image ${prefix}-card-image ${postStatusClass}`} loading="lazy" />
          {overlayText}
        </div>
      </div>
      <Card.Body>
        <Card.Title className={`${prefix}-card-title`}>{title}</Card.Title>
        <Card.Text className="custom-card-text">{description}</Card.Text>
      </Card.Body>
      <Card.Footer className={`${prefix}-card-footer d-flex justify-content-between align-items-center`}>
        {footerContent}
        {cardType === "post" && (
          <Stack direction="horizontal" gap={2}>
            <TagBadgeList tags={tags} />
          </Stack>
        )}
      </Card.Footer>
    </Card>
  );

  return isPublished ? (
    <Link to={postLink} className="text-decoration-none" aria-label={`View details of ${title}`}>
      {cardContent}
    </Link>
  ) : (
    <div className="text-decoration-none cursor-not-allowed" aria-label={`Post is not available`}>
      {cardContent}
    </div>
  );
};

export default PostCard;

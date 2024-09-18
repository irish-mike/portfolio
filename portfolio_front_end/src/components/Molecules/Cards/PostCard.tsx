import { TagBadgeList } from "@components";
import { Post } from "@entities";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  post: Post;
  cardType: "post" | "featured";
}

const PostCard = ({ post, cardType }: Props) => {
  const { id, status, title, description, thumbnail, date_updated, tags } = post;

  const prefix = cardType;

  const isPublished = status === "published";
  const postLink = `/post/${id}`;
  const footerContent = isPublished ? date_updated : "Coming Soon";
  const postStatusClass = isPublished ? "" : "card-coming-soon";
  const overlayText = isPublished ? null : <div className="card-text-overlay">Coming Soon</div>;

  const cardContent = (
    <Card className={`custom-card ${prefix}-card h-100 d-flex flex-column`}>
      <div className={`custom-card-image-outer-container ${prefix}-card-image-outer-container`}>
        <div className={`custom-card-image-inner-container p-1`}>
          <Card.Img variant="top" src={`${import.meta.env.VITE_BACK_END_URL}/assets/${thumbnail}`} alt={title} className={`custom-card-image ${prefix}-card-image ${postStatusClass}`} loading="lazy" />
          {overlayText}
        </div>
      </div>
      <Card.Body className="flex-fill">
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
    <Link to={postLink} className="text-decoration-none h-100 d-flex" aria-label={`View details of ${title}`}>
      {cardContent}
    </Link>
  ) : (
    <div className="text-decoration-none cursor-not-allowed h-100 d-flex" aria-label={`Post is not available`}>
      {cardContent}
    </div>
  );
};

export default PostCard;

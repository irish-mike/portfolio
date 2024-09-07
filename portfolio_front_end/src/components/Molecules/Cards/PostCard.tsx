import { TagBadgeList } from "@components";
import { Post } from "@entities"; // Assuming Post is the interface representing a post object
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

// Define props interface that expects a "post" prop
interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  const { id, status, title, description, thumbnail, date, tags } = post;

  // Logic assigned to variables for readability
  const isPublished = status === "published";
  const postLink = `/post/${id}`;
  const formattedDate = isPublished ? (date ? new Date(date).toLocaleDateString() : "No date available") : "Coming Soon";
  const thumbnailClass = isPublished ? "" : "thumbnail-coming-soon";
  const overlayText = isPublished ? null : <div className="thumbnail-text-overlay">Coming Soon</div>;

  return (
    <Link to={postLink} className="text-decoration-none" aria-label={`View details of ${title}`}>
      <Card className="post-card h-100">
        <div className="card-image-outer-container">
          <div className="card-image-inner-container p-1">
            <Card.Img src={thumbnail} alt={title} className={`card-image ${thumbnailClass}`} loading="lazy" />
            {overlayText}
          </div>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="post-card-title px-1">{title}</Card.Title>
          <Card.Text className="post-card-text flex-grow-1 px-1 pb-2">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center text-muted border-0">
          <small>{formattedDate}</small>
          <Stack direction="horizontal" gap={2}>
            <TagBadgeList tags={tags} />
          </Stack>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default PostCard;

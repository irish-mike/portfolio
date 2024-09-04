import { Card } from "react-bootstrap";

export interface ThumbnailCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

const ThumbnailCard = ({ title, description, date, image, link }: ThumbnailCardProps) => {
  return (
    <a href={link} className="thumbnail-card-link ">
      <Card className="thumbnail-card d-flex h-100 text-background border-0">
        <div className="thumbnail-card-image-outer-container">
          <div className="thumbnail-card-image-inner-container">
            <Card.Img variant="top" src={image} alt={title} className="thumbnail-card-image" loading="lazy" />
          </div>
        </div>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className=" thumbnail-card-text">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 text-muted text-end thumbnail-card-footer">{date}</Card.Footer>
      </Card>
    </a>
  );
};

export default ThumbnailCard;

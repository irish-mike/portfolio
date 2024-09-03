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
    <a href={link} className="thumbnail-card-link">
      <Card className="thumbnail-card border-0 p-3 d-flex h-100 text-background">
        <Card.Img variant="top" src={image} className="rounded" />
        <Card.Body className="text-start px-0 flex-grow-1">
          <Card.Title>{title}</Card.Title>
          <Card.Text className=" thumbnail-card-text">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 text-muted text-end px-0 thumbnail-card-footer">{date}</Card.Footer>
      </Card>
    </a>
  );
};

export default ThumbnailCard;

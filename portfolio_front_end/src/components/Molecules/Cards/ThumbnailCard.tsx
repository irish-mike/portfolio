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
            <Card className="thumbnail-card border-0 rounded-0 bg-transparent m-2 p-2 d-flex flex-column h-100">
                <Card.Img variant="top" src={image} className="border-0 rounded-0" />
                <Card.Body className="border-0 text-start px-0 flex-grow-1">
                    <Card.Title className="border-0">{title}</Card.Title>
                    <Card.Text className="border-0 thumbnail-card-text">{description}</Card.Text>
                </Card.Body>
                <Card.Footer className="border-0 text-muted text-end thumbnail-card-footer mt-auto">{date}</Card.Footer>
            </Card>
        </a>
    );
};

export default ThumbnailCard;

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
        <a href={link}>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{date}</Card.Footer>
            </Card>
        </a>
    );
}

export default ThumbnailCard;
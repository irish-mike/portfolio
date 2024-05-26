import { Row, Col } from "react-bootstrap";
import ThumbnailCard, { ThumbnailCardProps } from "src/components/Molecules/Cards/ThumbnailCard";

interface ThumbnailCardGridProps {
    cards: ThumbnailCardProps[];
}

const ThumbnailCardGrid = ({ cards }: ThumbnailCardGridProps) => {

    return (
        <div className="thumbnail-card-grid">
            <Row className="d-flex justify-content-center ">
                {cards.map((card, index) => (
                    <Col key={index} className="d-flex justify-content-center card-col m-0">
                        <ThumbnailCard
                            title={card.title}
                            description={card.description}
                            date={card.date}
                            image={card.image}
                            link={card.link}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ThumbnailCardGrid;


import { Container, Row, Col } from "react-bootstrap";
import ThumbnailCard, { ThumbnailCardProps } from "src/components/Molecules/Cards/ThumbnailCard";

interface ThumbnailCardGridProps {
    cards: ThumbnailCardProps[];
}

const ThumbnailCardGrid = ({ cards }: ThumbnailCardGridProps) => {
    return (
        <Container>
            <Row>
                {cards.map((card, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={2}>
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
        </Container>
    );
}

export default ThumbnailCardGrid;

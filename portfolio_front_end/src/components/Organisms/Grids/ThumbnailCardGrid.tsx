import { Row, Col } from "react-bootstrap";
import { ThumbnailCard, ThumbnailCardProps } from "@components";

interface ThumbnailCardGridProps {
  cards: ThumbnailCardProps[];
}

const ThumbnailCardGrid = ({ cards }: ThumbnailCardGridProps) => {
  return (
    <div className="thumbnail-card-grid">
      <Row className="d-flex justify-content-center ">
        {cards.map((card, index) => (
          <Col key={index} className="d-flex justify-content-center card-col">
            <ThumbnailCard title={card.title} description={card.description} date={card.date} image={card.image} link={card.link} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ThumbnailCardGrid;

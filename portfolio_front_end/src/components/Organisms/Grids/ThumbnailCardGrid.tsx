import { Row, Col } from "react-bootstrap";
import { ThumbnailCard } from "@components";
import { PostCardProps } from "@entities";

interface ThumbnailCardGridProps {
  cards: PostCardProps[];
}

const ThumbnailCardGrid = ({ cards }: ThumbnailCardGridProps) => {
  return (
    <div className="thumbnail-card-grid">
      <Row className="d-flex justify-content-center ">
        {cards.map((card, index) => (
          <Col key={index} className="d-flex justify-content-center card-col">
            <ThumbnailCard id={card.id} title={card.title} description={card.description} thumbnail={card.thumbnail} date={card.date} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ThumbnailCardGrid;

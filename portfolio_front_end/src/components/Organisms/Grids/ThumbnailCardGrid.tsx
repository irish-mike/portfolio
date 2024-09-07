import { ThumbnailCard } from "@components";
import { Post } from "@entities";
import { Col, Row } from "react-bootstrap";

interface Props {
  cards: Post[];
}

const ThumbnailCardGrid = ({ cards }: Props) => {
  return (
    <div className="thumbnail-card-grid">
      <Row className="d-flex justify-content-center">
        {cards.map((card) => (
          <Col key={card.id} className="d-flex justify-content-center card-col">
            <ThumbnailCard card={card} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ThumbnailCardGrid;

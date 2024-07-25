import { Col, Row } from "react-bootstrap";
import { GiGraduateCap } from "react-icons/gi";

const TimelineItem = () => {
  return (
    <Col sm={12} className="list-inline-item items-list">
      <div className="p-3 timeline-item-content ">
        <p className="event-date ">2015</p>

        <GiGraduateCap size={45} className="" />
        <h5 className="pt-3">BSc Computing in Games Development</h5>
        <p className="text-muted mt-3">Graduated with a First Class Honours and won the Presidents Prize for Academic Excellence</p>
      </div>
    </Col>
  );
};

const Timeline = () => {
  return (
    <div className="horizontal-timeline">
      <Row className="list-inline items d-block">
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
      </Row>
    </div>
  );
};

export default Timeline;

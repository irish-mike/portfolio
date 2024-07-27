import { Col, Container, Row } from "react-bootstrap";
import { IconType } from "react-icons";
import { timelineItems } from "@data";

interface TimelineItemProps {
  icon: IconType;
  date: string;
  title: string;
  location: string;
  description: string;
}

const TimelineItem = ({ icon: Icon, date, title, location, description }: TimelineItemProps) => {
  return (
    <Col md={12} className="list-inline-item items-list flex-fill">
      <div>
        <p className="event-date">{date}</p>
        <Icon size={45} />
        <h4 className="pt-3">{title}</h4>
        <h6>{location}</h6>
        <p className="text-muted mt-3 m-auto">{description}</p>
      </div>
    </Col>
  );
};

const Timeline = () => {
  const rowSize = 4;

  const items = timelineItems;
  const rows = [];

  for (let i = 0; i < items.length; i += rowSize) {
    rows.push(items.slice(i, i + rowSize));
  }

  return (
    <Container className="horizontal-timeline pt-5 mt-4">
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} className="list-inline items d-flex mb-5 pb-5">
          {row.map((item) => (
            <TimelineItem icon={item.icon} date={item.date} title={item.title} location={item.location} description={item.description} />
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Timeline;

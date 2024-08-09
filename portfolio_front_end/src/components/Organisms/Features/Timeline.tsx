import { Col, Container, Row } from "react-bootstrap";
import { IconType } from "react-icons";
import { timelineItems } from "@data";

interface TimelineItemProps {
  icon: IconType;
  date: string;
  title: string;
  location: string;
  description: string;
  link: string;
}

const TimelineItem = ({ icon: Icon, date, title, location, description, link }: TimelineItemProps) => {
  return (
    <Col md={12} className="list-inline-item items-list flex-fill timeline-item">
      <p className="event-date">{date}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-reset timeline-link">
        <div className="timeline-content d-flex flex-column h-100">
          <div>
            <div className="timeline-icon">
              <Icon size={45} />
            </div>
            <h4 className="event-title px-4">{title}</h4>
            <h6 className="event-location">{location}</h6>
          </div>
          <p className="text-muted event-description px-0 mt-auto">{description}</p>
        </div>
      </a>
    </Col>
  );
};

const Timeline = () => {
  const rowSize = 3;

  const items = timelineItems;
  const rows = [];

  for (let i = 0; i < items.length; i += rowSize) {
    rows.push(items.slice(i, i + rowSize));
  }

  return (
    <Container className="horizontal-timeline pt-5 mt-4">
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} className="list-inline items d-flex mb-5 pb-5">
          {row.map((item, itemIndex) => (
            <TimelineItem key={itemIndex} {...item} />
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Timeline;

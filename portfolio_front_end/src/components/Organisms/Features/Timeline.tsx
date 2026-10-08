import { timelineItems } from "@data";
import { Col, Container, Row } from "react-bootstrap";
import { IconType } from "react-icons";

interface TimelineItemProps {
  icon: IconType;
  date: string;
  title: string;
  location: string;
  description?: string;
  link?: string;
}

const TimelineItem = ({ icon: Icon, date, title, location, description, link }: TimelineItemProps) => {
  const content = (
    <div className="timeline-content d-flex flex-column h-100 px-0">
      <div>
        <div className="timeline-icon">
          <Icon size={45} />
        </div>
        <h4 className="event-title px-4">{title}</h4>
        <h6 className="event-location">{location}</h6>
      </div>
      {description && <p className="text-muted event-description px-0 mt-4">{description}</p>}
    </div>
  );

  return (
    <Col md={12} className="list-inline-item items-list flex-fill timeline-item">
      <p className="event-date z-3">{date}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-reset timeline-link">
          {content}
        </a>
      ) : content}
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
    <Container className="horizontal-timeline pt-3 pt-lg-5 mt-3 mt-lg-5">
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} className="list-inline items d-flex mb-5 pb-5">
          {row.map((item) => (
            <TimelineItem key={`${item.date}-${item.title}`} {...item} />
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Timeline;

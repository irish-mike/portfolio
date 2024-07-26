import { Col, Row } from "react-bootstrap";
import { IconType } from "react-icons";
import { GiGraduateCap } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";

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
    <div className="horizontal-timeline">
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} className="list-inline items d-flex my-5">
          {row.map((item) => (
            <TimelineItem icon={item.icon} date={item.date} title={item.title} location={item.location} description={item.description} />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Timeline;

const timelineItems = [
  {
    icon: GiGraduateCap,
    date: "2015 - 2019",
    title: "BSc Computing in Games Development",
    location: "DKIT, Dundalk",
    description: "Graduated with a First Class Honours and won the Presidents Prize for Academic Excellence."
  },
  {
    icon: FaComputer,
    date: "2018 - 2019",
    title: "Software Developer",
    location: "TEKenable, Dublin",
    description: "A forward-thinking software solutions company specializing in digital transformation."
  },
  {
    icon: TbWorldWww,
    date: "2019 - 2020",
    title: "Web Developer",
    location: "Phever Media, Dublin",
    description: "A forward-thinking software solutions company specializing in digital transformation."
  },
  {
    icon: GiGraduateCap,
    date: "2019 - 2021",
    title: "MSc Computing in Music Technology",
    location: "DKIT, Dundalk",
    description: "Graduated with a First Class Honours and won the Presidents Prize for Academic Excellence."
  },
  {
    icon: FaLaptopCode,
    date: "2020 - Now",
    title: "Full Stack Software Developer",
    location: "Provident CRM, Dublin",
    description: "A leading software solutions company specializing in customer relationship management."
  },
  {
    icon: GiGraduateCap,
    date: "2024 - Now",
    title: "MSc in Artificial Intelligence",
    location: "Munster Technological University",
    description: "Currently enrolled and expecting to graduate with a First Class Honours."
  }
];

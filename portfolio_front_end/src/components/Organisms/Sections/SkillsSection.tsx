import { Col, Row } from "react-bootstrap";
import { skills } from "@data";
import Section from "../Layouts/Section";

interface SkillProps {
  thumbnail: string;
  title: string;
}

const SkillBadge = ({ thumbnail, title }: SkillProps) => {
  return (
    <Col xs={6} sm={6} md={4} lg={2} className="d-flex justify-content-center mb-4">
      <div className="skill-badge-container text-center">
        <div className="skill-badge p-2 border rounded shadow-sm">
          <img src={thumbnail} alt={title} className="img-fluid" />
        </div>
        <p className="skill-badge-title fs-5 mt-2">{title}</p>
      </div>
    </Col>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <Section title="Skills">
      <Row className="justify-content-center px-2">
        {skills.map((skill, index) => (
          <SkillBadge key={index} thumbnail={skill.thumbnail} title={skill.title} />
        ))}
      </Row>
    </Section>
  );
};

export default SkillsSection;

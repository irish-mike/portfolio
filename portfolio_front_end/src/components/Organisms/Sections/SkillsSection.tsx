import { Col, Container, Row } from "react-bootstrap";
import C_icon from "../../../assets/images/Logos/c++.png";

interface SkillProps {
  thumbnail: string;
  title: string;
}

const SkillBadge = ({ thumbnail, title }: SkillProps) => {
  return (
    <Col xs={12} sm={6} md={4} lg={2} className="d-flex justify-content-center mb-4 p-4">
      <div className="skill-badge p-3 border rounded shadow text-center bg-light">
        <img src={thumbnail} alt={title} className="img-fluid rounded-circle mb-3" />
        <p className="skill-badge-title fs-5 py-2">{title}</p>
      </div>
    </Col>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="display-4 text-center mb-4">Skills</h2>
        <hr className="my-4" />
        <Row className="justify-content-center p-4">
          <SkillBadge thumbnail={C_icon} title="C++" />
          <SkillBadge thumbnail={C_icon} title="C++" />
          <SkillBadge thumbnail={C_icon} title="C++" />
          <SkillBadge thumbnail={C_icon} title="C++" />
          <SkillBadge thumbnail={C_icon} title="C++" />
          <SkillBadge thumbnail={C_icon} title="C++" />
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;

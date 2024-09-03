import { Container, Button, Row, Col } from "react-bootstrap";
import { ContactFormModal } from "@components";

interface Props {
  title: string;
  description: string;
}

const TextContentSection = ({ title, description }: Props) => {
  return (
    <Container className="text-content-section my-5 text-center">
      <Row className="justify-content-center">
        <Col>
          <h1 className="display-1 text-background">{title}</h1>
          <p className="lead mx-auto text-background">{description}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="hr-theme-slash-2 d-flex">
            <div className="hr-line"></div>
            <div className="hr-icon">
              <div className="scroll-indicator">
                <span className="arrow-down"></span>
              </div>
            </div>
            <div className="hr-line"></div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={3}>
          <ContactFormModal trigger={<Button className="w-100 p-2 call-to-action-button">Get in touch</Button>} />
        </Col>
      </Row>
    </Container>
  );
};

export default TextContentSection;

import { ReactNode } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { SocialIconGroup } from "@components";
import profile from "@assets/images/michael_profile.png";

interface Props {
  title: string;
  children: ReactNode;
}

const AboutSection = ({ title, children }: Props) => (
  <Container className="mb-5">
    <Row>
      <Col lg={6} className="d-flex justify-content-center align-items-center pb-2">
        <Image src={profile} roundedCircle fluid className="profile-image w-75" />
      </Col>
      <Col lg={6} className="d-flex flex-column justify-content-center mt-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h2 className="mb-3 mb-md-0 text-background">{title}</h2>
          <SocialIconGroup />
        </div>
        <hr />
        {children}
      </Col>
    </Row>
  </Container>
);

export default AboutSection;

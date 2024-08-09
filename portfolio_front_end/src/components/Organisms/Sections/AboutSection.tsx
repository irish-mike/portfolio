import { ReactNode } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { SocialIconGroup } from "@components";
import profile from "@assets/images/profile.png";

interface Props {
  title: string;
  children: ReactNode;
}

const AboutSection = ({ title, children }: Props) => {
  return (
    <Container className="mb-5">
      <Row>
        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center ">
          <Image src={profile} roundedCircle fluid className="profile-image w-75" />
        </Col>

        <Col lg={6} md={12} sm={12} className="d-flex flex-column justify-content-center ">
          <div className="d-flex justify-content-between align-items-center ">
            <h2 className="m-auto ">{title}</h2>
            <SocialIconGroup />
          </div>
          <hr />
          <div>{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;

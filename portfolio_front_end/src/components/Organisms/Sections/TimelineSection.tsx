import React from "react";
import { Container } from "react-bootstrap";
import { Timeline } from "@components";

const TimelineSection: React.FC = () => {
  return (
    <Container className={`mb-5 text-center d-block`}>
      <h2 className="display-5">History </h2>
      <hr />
      <Timeline />
    </Container>
  );
};

export default TimelineSection;

import React from "react";
import { Container } from "react-bootstrap";
import Timeline from "../Features/Timeline";

const TimelineSection: React.FC = () => {
  return (
    <section className={`text-center py-4 my-4 d-block`}>
      <h2 className="display-5">History </h2>
      <Container fluid className="py-3 my-5">
        <Timeline />
      </Container>
    </section>
  );
};

export default TimelineSection;

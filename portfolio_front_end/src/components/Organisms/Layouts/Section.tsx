import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <Container className="mb-5">
      <div className="hr-theme-slash-2">
        <hr className="w-100 section-title-hr" />
        <h2 className="display-5 text-center mb-5 w-100">{title}</h2>
        <hr className="w-100 section-title-hr" />
      </div>
      {children}
    </Container>
  );
};

export default Section;

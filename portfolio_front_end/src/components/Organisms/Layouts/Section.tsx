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
        <hr className="mx-3" />
        <h2 className="display-4 text-center mb-5 w-100">{title}</h2>
        <hr className="mx-3" />
      </div>
      {children}
    </Container>
  );
};

export default Section;

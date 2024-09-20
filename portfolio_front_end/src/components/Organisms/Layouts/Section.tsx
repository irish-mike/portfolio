import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <Container fluid className="mb-5 mb-md-5 px-0">
      <div className="hr-theme-slash-2 d-sm-block d-md-flex mb-4">
        <hr className="w-100 section-title-hr d-none d-sm-none d-md-block" />
        <h2 className="text-center w-100 text-background">{title}</h2>
        <hr className="w-100 section-title-hr " />
      </div>
      {children}
    </Container>
  );
};

export default Section;

import React from "react";
import { Row, Col, Stack } from "react-bootstrap";

interface FooterProps {
  copyright: string;
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ copyright, children }) => {
  return (
    <footer className="my-4">
      <Row className="align-items-center">
        <Col className="text-start py-3">
          <small>{copyright}</small>
        </Col>
        <Col className="text-end py-3">
          <Stack direction="horizontal" gap={3} className="justify-content-end">
            {children}
          </Stack>
        </Col>
        <hr className="w-100" />
      </Row>
    </footer>
  );
};

export default Footer;

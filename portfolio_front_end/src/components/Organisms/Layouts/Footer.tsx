import { ContactFormModal } from "@components";
import React from "react";
import { Row, Col, Stack, Button } from "react-bootstrap";
import { IoMailOutline } from "react-icons/io5";
import { TbLock } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="m-4">
      <Row className="align-items-center">
        <Col sm={12} md={6} className="text-center text-md-start py-2 text-background">
          <small>© Michael Grinnell 2024</small>
        </Col>
        <Col sm={12} md={6} className="text-center text-md-end py-2">
          <Stack direction="horizontal" gap={2} className="justify-content-md-end justify-content-center">
            <ContactFormModal
              trigger={
                <Button variant="link" className="nav-link p-0 text-background">
                  Contact <IoMailOutline className="ms-1" />
                </Button>
              }
            />
            <span className="mx-1">|</span>
            <Link to="/privacy" className="nav-link p-0 text-background">
              Privacy <TbLock className="ms-1" />
            </Link>
          </Stack>
        </Col>
        <Col xs={12}>
          <hr className="w-100 my-3" />
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

import { ContactFormModal } from "@components";
import React from "react";
import { Row, Col, Stack, Button } from "react-bootstrap";
import { IoMailOutline } from "react-icons/io5";
import { TbLock } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="my-4">
      <Row className="align-items-center">
        <Col className="text-start py-3">
          <small>© Michael Grinnell 2024</small>
        </Col>
        <Col className="text-end py-3">
          <Stack direction="horizontal" gap={3} className="justify-content-end">
            <ContactFormModal
              trigger={
                <Button variant="link" className="nav-link p-0">
                  Contact <IoMailOutline className="m-1" />
                </Button>
              }
            />{" "}
            |
            <Link to="/privacy" className="nav-link">
              Privacy <TbLock className="mb-1 mx-1" />
            </Link>{" "}
          </Stack>
        </Col>
        <hr className="w-100" />
      </Row>
    </footer>
  );
};

export default Footer;

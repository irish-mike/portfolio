import React from "react";
import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import ColorModeSwitch from "../../../features/ColorModeSwitch";

interface NavbarMainProps {
  logo: string;
  children: React.ReactNode;
}

const NavbarMain: React.FC<NavbarMainProps> = ({ logo, children }) => {
  return (
    <Navbar expand="lg" className="mt-3">
      <Container className="mb-4 ">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} width="60" height="60" className="d-inline-block align-top" alt="React Bootstrap logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">{children}</Nav>

          <Form>
            <Row>
              <Col xs="auto">
                <ColorModeSwitch label="Theme"></ColorModeSwitch>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;

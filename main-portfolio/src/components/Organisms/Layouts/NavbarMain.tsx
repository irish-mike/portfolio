import React from 'react';
import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import ColorModeSwitch from "src/features/ColorModeSwitch";
import { Link } from "react-router-dom";

interface NavbarMainProps {
  logo: string;
  children: React.ReactNode;
}

const NavbarMain: React.FC<NavbarMainProps> = ({ logo, children }) => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {children}
          </Nav>

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

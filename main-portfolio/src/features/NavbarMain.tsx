import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import { BsHouse } from "react-icons/bs";
import { CgPacman } from "react-icons/cg";
import {
  IoBuildOutline,
  IoGameControllerOutline,
  IoMailOutline,
} from "react-icons/io5";

import logo from "@images/logo.png"; // Using the alias defined in tsconfig.json
import { SlBubbles } from "react-icons/sl";
import ColorModeSwitch from "./ColorModeSwitch";

const NavbarMain = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">
              Home
              <BsHouse className="m-1" />{" "}
            </Nav.Link>
            <Nav.Link href="#link">
              Portfolio
              <IoGameControllerOutline className="m-1" />
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              Blog
              <SlBubbles className="m-1" />
            </Nav.Link>
            <Nav.Link href="#link">
              Services
              <IoBuildOutline className="m-1" />
            </Nav.Link>
            <Nav.Link href="#link">
              About
              <CgPacman className="m-1" />
            </Nav.Link>
            <Nav.Link href="#link">
              Contact
              <IoMailOutline className="m-1" />
            </Nav.Link>
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

import { Navbar, Nav } from "react-bootstrap";
import { BsHouse } from "react-icons/bs";
import { CgPacman } from "react-icons/cg";
import {
  IoBuildOutline,
  IoGameControllerOutline,
  IoMailOutline,
} from "react-icons/io5";

import { SlBubbles } from "react-icons/sl";

const NavbarMain = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Mike</Navbar.Brand>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMain;

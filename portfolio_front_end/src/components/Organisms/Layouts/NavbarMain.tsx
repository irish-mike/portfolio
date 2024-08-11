import React from "react";
import { BsHouse } from "react-icons/bs";
import { CgPacman } from "react-icons/cg";
import { IoGameControllerOutline, IoMailOutline } from "react-icons/io5";
import { SlBubbles } from "react-icons/sl";
import { Link } from "react-router-dom";
import logo from "@assets/images/logo.png";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import ColorModeSwitch from "../../../features/ColorModeSwitch";
import { ContactFormModal } from "@components";

const NavbarMain = () => {
  return (
    <Navbar expand="md" className="justify-content-center">
      <Navbar.Brand href="/" className="fixed-width m-0">
        <img src={logo} width="60" height="60" className="d-inline-block align-top" alt="React Bootstrap logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="w-100">
        <Nav className="w-100 justify-content-center">
          <NavItem to="/" label="Home" icon={<BsHouse className="m-1" />} />
          <NavItem to="/posts/portfolio" label="Portfolio" icon={<IoGameControllerOutline className="m-1" />} />
          <NavItem to="/posts/blog" label="Blog" icon={<SlBubbles className="m-1" />} />
          <NavItem to="/about" label="About" icon={<CgPacman className="m-1" />} />
          <ContactFormModal
            trigger={
              <Button variant="link" className="nav-link p-3 border-bottom-mobile">
                Contact <IoMailOutline className="m-1" />
              </Button>
            }
          />
        </Nav>

        <Form className="fixed-width p-3">
          <ColorModeSwitch label="Developer Mode" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMain;

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
}

const NavItem = ({ to, label, icon }: NavItemProps) => (
  <Link to={to} className="nav-link p-3 border-bottom-mobile">
    {label} {icon}
  </Link>
);

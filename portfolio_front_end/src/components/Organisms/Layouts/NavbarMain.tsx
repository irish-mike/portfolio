import React, { useState } from "react";
import { BsHouse } from "react-icons/bs";
import { CgPacman } from "react-icons/cg";
import { IoGameControllerOutline, IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "@assets/images/logo_dark.png";
import { Button, Nav, Navbar } from "react-bootstrap";
import { ColorModeSwitch } from "@features";
import { ContactFormModal } from "@components";

const NavbarMain = () => {
  // State to control the collapse of the Navbar
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleNavLinkClick = () => setExpanded(false); // Close on Nav.Link click

  return (
    <Navbar expand="lg" expanded={expanded} onToggle={handleToggle} className="px-3 d-flex justify-content-between align-items-center">
      <div className="fixed-width">
        <ColorModeSwitch label="Dev Mode" />
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="mx-auto text-center">
          <NavItem to="/" label="Home" icon={<BsHouse className="m-1" />} onClick={handleNavLinkClick} />
          <NavItem to="/posts" label="Projects" icon={<IoGameControllerOutline className="m-1" />} onClick={handleNavLinkClick} />
          <NavItem to="/about" label="About" icon={<CgPacman className="m-1" />} onClick={handleNavLinkClick} />
          <ContactFormModal
            trigger={
              <Button variant="link" className="p-2 d-flex align-items-center justify-content-center nav-link p-3 border-bottom-mobile ">
                <div className="text-background">
                  Contact <IoMailOutline className="m-1" />
                </div>
              </Button>
            }
          />
        </Nav>
      </Navbar.Collapse>

      <div className="d-none d-lg-block fixed-width">
        <Navbar.Brand href="/" style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <div className="logo-container">
            <img src={logo} width="60" height="60" alt="React Bootstrap logo" />{" "}
          </div>
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default NavbarMain;

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void; // Add onClick prop to handle click events
}

const NavItem = ({ to, label, icon, onClick }: NavItemProps) => (
  <Nav.Link as={Link} to={to} onClick={onClick} className="p-2 d-flex align-items-center justify-content-center nav-link p-3 border-bottom-mobile ">
    <div className="text-background">
      {label} {icon}
    </div>
  </Nav.Link>
);

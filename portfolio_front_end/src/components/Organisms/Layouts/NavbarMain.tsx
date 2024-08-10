import { BsHouse } from "react-icons/bs";
import { CgPacman } from "react-icons/cg";
import { IoGameControllerOutline, IoMailOutline } from "react-icons/io5";
import { SlBubbles } from "react-icons/sl";
import { Link } from "react-router-dom";

import { NavbarContainer, ContactFormModal } from "@components";
import logo from "@assets/images/logo.png";
import { Button } from "react-bootstrap";

const NavbarMain = () => {
  return (
    <NavbarContainer logo={logo}>
      <NavItem to="/" label="Home" icon={<BsHouse className="m-1" />} />
      <NavItem to="/posts/portfolio" label="Portfolio" icon={<IoGameControllerOutline className="m-1" />} />
      <NavItem to="/posts/blog" label="Blog" icon={<SlBubbles className="m-1" />} />
      <NavItem to="/about" label="About" icon={<CgPacman className="m-1" />} />

      <ContactFormModal
        trigger={
          <Button variant="link" className="nav-link p-0">
            Contact <IoMailOutline className="m-1" />
          </Button>
        }
      />
    </NavbarContainer>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
}

const NavItem = ({ to, label, icon }: NavItemProps) => (
  <Link to={to} className="nav-link">
    {label} {icon}
  </Link>
);

export default NavbarMain;

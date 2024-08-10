import { Button, Container } from "react-bootstrap";
import { BsHouse } from "react-icons/bs";
import { CgPacman } from "react-icons/cg";
import { IoGameControllerOutline, IoMailOutline } from "react-icons/io5";
import { SlBubbles } from "react-icons/sl";
import { Link } from "react-router-dom";
import { TbLock } from "react-icons/tb";
import { BsPinMap } from "react-icons/bs";

import { ContactFormModal, Footer, NavbarMain, TransitionWrapper } from "@components";

import logo from "../assets/images/logo.png";
// import ParticleBackground from "../features/ParticleBackground";

const Layout = () => {
  return (
    <>
      <Container>
        {/* <ParticleBackground /> */}
        <NavbarMain logo={logo}>
          <Link to="/" className="nav-link">
            Home <BsHouse className="m-1" />
          </Link>
          <Link to="/posts/portfolio" className="nav-link">
            Portfolio <IoGameControllerOutline className="m-1" />
          </Link>
          <Link to="/posts/blog" className="nav-link">
            Blog <SlBubbles className="m-1" />
          </Link>
          <Link to="/about" className="nav-link">
            About <CgPacman className="m-1" />
          </Link>

          <ContactFormModal
            trigger={
              <a href="#" className="nav-link">
                Contact <IoMailOutline className="m-1" />
              </a>
            }
          />
        </NavbarMain>

        <TransitionWrapper />
        <Footer copyright="© Michael Grinnell 2024">
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
          |
          <Link to="/privacy" className="nav-link">
            Site Map <BsPinMap className="mb-1 mx-1" />
          </Link>{" "}
        </Footer>
      </Container>
    </>
  );
};

export default Layout;

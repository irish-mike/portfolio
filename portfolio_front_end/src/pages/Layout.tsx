import { Container } from "react-bootstrap";
import { BsHouse } from "react-icons/bs";
import { CgPacman } from "react-icons/cg";
import { IoGameControllerOutline, IoMailOutline } from "react-icons/io5";
import { SlBubbles } from "react-icons/sl";
import { Link } from "react-router-dom";

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
          <a href="#" className="text-reset">
            Contact
          </a>
          <a href="#" className="text-reset">
            Privacy
          </a>
          <a href="#" className="text-reset">
            Site Map
          </a>
        </Footer>
      </Container>
    </>
  );
};

export default Layout;

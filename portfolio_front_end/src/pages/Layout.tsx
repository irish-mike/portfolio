import { Container } from "react-bootstrap";

import { Footer, TransitionWrapper, NavbarMain } from "@components";

// import ParticleBackground from "../features/ParticleBackground";

const Layout = () => {
  return (
    <Container fluid className="p-0">
      {/* <ParticleBackground /> */}
      <NavbarMain />
      <TransitionWrapper />
      <Footer />
    </Container>
  );
};

export default Layout;

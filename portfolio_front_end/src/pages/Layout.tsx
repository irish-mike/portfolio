import { Container } from "react-bootstrap";

import { Footer, NavbarMain, TransitionWrapper } from "@components";

// import ParticleBackground from "../features/ParticleBackground";

const Layout = () => {
  return (
    <>
      <Container>
        {/* <ParticleBackground /> */}
        <NavbarMain />
        <TransitionWrapper />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

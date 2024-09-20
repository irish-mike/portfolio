// Layout.tsx
import { Footer, NavbarMain, TransitionWrapper } from "@components";
import { ParticleBackground } from "@features";
import { useThemeStore } from "@state";
import React from "react";
import { Container } from "react-bootstrap";

const Layout: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      {theme === "dark" && <ParticleBackground />}
      <Container style={{ position: "relative", zIndex: 1 }}>
        <NavbarMain />
        <TransitionWrapper />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

// Layout.tsx
import React from "react";
import { Container } from "react-bootstrap";
import { Footer, NavbarMain, TransitionWrapper } from "@components";
import ParticleBackground from "../features/ParticleBackground";
import useThemeStore from "../state/themeStore";

const Layout: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <Container style={{ position: "relative", zIndex: 1 }}>
        <NavbarMain />
        <TransitionWrapper />
        <Footer />
      </Container>
      {theme === "dark" && <ParticleBackground />}
    </>
  );
};

export default Layout;

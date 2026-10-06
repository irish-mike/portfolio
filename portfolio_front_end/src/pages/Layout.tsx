// Layout.tsx
import { Footer, NavbarMain, TransitionWrapper } from "@components";
import { useThemeStore } from "@state";
import React, { lazy, Suspense } from "react";
import { Container } from "react-bootstrap";

const ParticleBackground = lazy(() => import("../features/ParticleBackground"));

const Layout: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      {theme === "dark" && (
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      )}
      <Container style={{ position: "relative", zIndex: 1 }}>
        <NavbarMain />
        <TransitionWrapper />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

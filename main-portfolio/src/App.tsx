import { Col, Container, Row } from "react-bootstrap";
import NavbarMain from "./components/NavbarMain";
import ParticleBackground from "./components/features/ParticleBackground";
import TextContentSection from "./components/TextContentSection";

function App() {
  return (
    <Container>
      {/* <ParticleBackground /> */}
      <Row>
        <NavbarMain></NavbarMain>
      </Row>
      <Row>
        <Col>
          <TextContentSection
            title={"Michael Grinnell"}
            description={
              "Software Engineer with emphasis on games and audio programming, at the intersection of creativity and technical skills."
            }
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

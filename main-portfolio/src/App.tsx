import { Col, Container, Row } from "react-bootstrap";
import NavbarMain from "./components/NavbarMain";
import ParticleBackground from "./components/features/ParticleBackground";

function App() {
  return (
    <Container>
      {/* <ParticleBackground /> */}
      <Row>
        <NavbarMain></NavbarMain>
      </Row>
      <Row>
        <Col className="dev-2">Col 2</Col>
        <Col className="dev-3">Col 3</Col>
      </Row>
    </Container>
  );
}

export default App;

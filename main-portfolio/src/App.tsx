import { Col, Container, Row } from "react-bootstrap";
import NavbarMain from "./features/NavbarMain";
import TextContentSection from "./components/layout/TextContentSection";
import ImageComponent from "./components/ui/ImageComponent";

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
      {/* <Tags options={["C++", "Python", "Web Development"]}></Tags> */}

      <Row>
        <ImageComponent name="koala" />
      </Row>
    </Container>
  );
}

export default App;

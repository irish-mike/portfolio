import { Col, Container, Row } from "react-bootstrap";
import NavbarMain from "./components/NavbarMain";
import TextContentSection from "./components/TextContentSection";
import BentoBox from "./components/BentoBox";
import BentoGridItem from "./components/BentoGirdItem";

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
        <BentoBox>
          <BentoGridItem content="Item 1" rowSpan={1} colSpan={2} />
          <BentoGridItem content="Item 2" rowSpan={2} colSpan={4} />
          <BentoGridItem content="Item 3" rowSpan={1} colSpan={2} />
          <BentoGridItem
            content="Item 4"
            rowSpan={1}
            colSpan={2}
            offset={true}
          />
          <BentoGridItem content="Item 4" rowSpan={1} colSpan={4} />
          <BentoGridItem content="Item 5" rowSpan={1} colSpan={8} />
          {/* Add more items as needed */}
        </BentoBox>
      </Row>
    </Container>
  );
}

export default App;

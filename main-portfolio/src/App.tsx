import { Button, Card, Col, Container, Row } from "react-bootstrap";
import NavbarMain from "./features/NavbarMain";
import TextContentSection from "./components/layout/TextContentSection";
import BentoBox from "./components/layout/BentoBox";
import BentoGridItem from "./components/layout/BentoGirdItem";
import logo from "@images/logo.png";
import c_logo from "@images/Logos/c++.png";
import git_logo from "@images/Logos/git.png";
import php_logo from "@images/Logos/php.png";
import python_logo from "@images/Logos/python.png";
import react_logo from "@images/Logos/react_js.png";

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
          <BentoGridItem rowSpan={1} colSpan={8}>
            <img
              src={php_logo}
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </BentoGridItem>
          <BentoGridItem rowSpan={1} colSpan={2}>
            <img
              src={c_logo}
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </BentoGridItem>
          <BentoGridItem rowSpan={2} colSpan={4}>
            <Row>
              <Card
                style={{ width: "100%", maxWidth: "18rem", margin: "auto" }}
              >
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>
          </BentoGridItem>
          <BentoGridItem rowSpan={1} colSpan={2}>
            <img
              src={git_logo}
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </BentoGridItem>
          <BentoGridItem rowSpan={1} colSpan={2} offset={true}>
            {" "}
          </BentoGridItem>
          <BentoGridItem rowSpan={1} colSpan={4}>
            <img
              src={python_logo}
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </BentoGridItem>
          <BentoGridItem rowSpan={1} colSpan={4}>
            <img
              src={react_logo}
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </BentoGridItem>
          {/* Add more items as needed */}
        </BentoBox>
      </Row>
    </Container>
  );
}

export default App;

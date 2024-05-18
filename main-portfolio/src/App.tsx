import { Col, Container, Row, Stack } from "react-bootstrap";
import SearchInput from "./components/form/SearchInput";
import SortSelector from "./components/form/SortSelector";
import Tags from "./components/form/Tags";
import { ProjectGrid } from "./components/layout/ProjectGrid";
import TitleSection from "./components/layout/TextContentSection";
import GenreList from "./components/ui/GenreList";
import PlatformSelector from "./components/ui/PlatformSelector";
import NavbarMain from "./features/NavbarMain";
// import ParticleBackground from "./features/ParticleBackground";



function App() {

  return (
    <Container>
      {/* <ParticleBackground /> */}
      <Row>
        <NavbarMain></NavbarMain>
      </Row>
      <Row>
        <Col>
          <TitleSection
            title={"Michael Grinnell"}
            description={
              "Software Engineer with emphasis on games and audio programming, at the intersection of creativity and technical skills."
            }
          />
        </Col>
      </Row>
      <Tags options={["C++", "Python", "Web Development"]}></Tags>

      <Row>
        <Col>
          <SearchInput />
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <PlatformSelector />
            </div>
            <div className="p-2">
              <SortSelector />
            </div>
            <div className="p-2">
              <GenreList />
            </div>
          </Stack>
        </Col>
        <ProjectGrid />
      </Row>
    </Container>
  );
}

export default App;

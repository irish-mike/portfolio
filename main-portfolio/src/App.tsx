import { Col, Container, Row } from "react-bootstrap";
import NavbarMain from "./features/NavbarMain";
import TextContentSection from "./components/layout/TextContentSection";
import { ProjectGrid } from "./components/layout/ProjectGrid";
import GenreList from "./components/ui/GenreList";
import ParticleBackground from "./features/ParticleBackground";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/ui/PlatformSelector";
import { Platform } from "./hooks/useProjects";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Container>
      <ParticleBackground />
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
        <Col>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </Col>
        <ProjectGrid gameQuery={gameQuery}></ProjectGrid>
      </Row>
    </Container>
  );
}

export default App;

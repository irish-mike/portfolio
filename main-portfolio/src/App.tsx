import { Col, Container, Row, Stack } from "react-bootstrap";
import NavbarMain from "./features/NavbarMain";
import TextContentSection from "./components/layout/TextContentSection";
import { ProjectGrid } from "./components/layout/ProjectGrid";
import GenreList from "./components/ui/GenreList";
import ParticleBackground from "./features/ParticleBackground";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/ui/PlatformSelector";
import { Platform } from "./hooks/useProjects";
import SortSelector from "./components/form/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
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
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              {" "}
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </div>
            <div className="p-2">
              <SortSelector
                onSelectSort={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
                sortOrder={gameQuery.sortOrder}
              ></SortSelector>
            </div>
            <div className="p-2">
              {" "}
              <GenreList
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              />
            </div>
          </Stack>
        </Col>
        <ProjectGrid gameQuery={gameQuery}></ProjectGrid>
      </Row>
    </Container>
  );
}

export default App;

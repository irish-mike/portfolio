import { Container } from "react-bootstrap";
import { ProjectGrid, Section } from "@components";

const PostsPage = () => {
  return (
    <Container className="pt-4">
      <Section title="Articles">
        <ProjectGrid />
      </Section>
    </Container>
  );
};

export default PostsPage;

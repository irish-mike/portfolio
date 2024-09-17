import { PostGrid, Section } from "@components";
import { Container } from "react-bootstrap";

const PostsPage = () => {
  return (
    <Container className="pt-4">
      <Section title="Posts">
        <PostGrid />
      </Section>
    </Container>
  );
};

export default PostsPage;

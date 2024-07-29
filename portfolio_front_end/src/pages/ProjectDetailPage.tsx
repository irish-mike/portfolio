import { Container, Stack, Badge } from "react-bootstrap";
import post from "../data/post";

//TODO, Replace html content with markdown content

const ProjectDetailPage = () => {
  return (
    <Container fluid className="p-5 mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mb-0 me-3">{post.title}</h1>
        <Stack direction="horizontal" gap={2} className="align-items-end mx-3">
          {post.tags.map((tag, index) => (
            <Badge bg="secondary" key={index}>
              {tag}
            </Badge>
          ))}
        </Stack>
      </div>
      <hr className="my-1 w-100" />

      <h2 className="h5 text-muted py-3">{post.subtitle}</h2>

      <div dangerouslySetInnerHTML={{ __html: post.description_html }}></div>

      <div className="ratio ratio-16x9 w-75 mx-auto mb-5 shadow" style={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden" }}>
        <iframe className="embed-responsive-item" src={post.featured_media.url} allowFullScreen title="Demo Video"></iframe>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content_html }}></div>

      <footer className="mt-5 text-end">
        <p className="fst-italic text-muted">
          Posted on <time>{post.date}</time> by {post.author}.
        </p>
      </footer>
    </Container>
  );
};

export default ProjectDetailPage;

import { SocialShareIcons, TagBadgeList } from "@components";
import { Post } from "@entities";
import { usePosts } from "@hooks";
import { useEffect } from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";

const PostPage = () => {
  const { post, getPost } = usePosts();

  useEffect(() => {
    getPost("portfolio-overview");
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid className="mt-5 px-0 px-md-5">
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostFooter post={post} />
    </Container>
  );
};

export default PostPage;

const PostHeader = ({ post }: { post: Post }) => {
  return (
    <>
      <Row className="mb-3">
        <Col>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end">
            <h1 className="mb-2 mb-md-0 me-md-3 text-background">{post.title}</h1>
            <TagBadgeList tags={post.tags} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr className="my-1 w-100" />
        </Col>
      </Row>
      <Row className="py-3">
        <Col className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center text-muted">
          <h2 className="h6 fw-light mb-2 mb-md-0 text-background">{post.subtitle}</h2>
          <p className="fst-italic mb-0 fw-light text-start text-md-end text-background">
            Posted on <time>{post.date_updated}</time> by Michael Grinnell.
          </p>
        </Col>
      </Row>
    </>
  );
};

const PostBody = ({ post }: { post: Post }) => {
  return (
    <Row>
      <Col className="mx-auto text-background">
        <ReactMarkdown
          components={{
            img: ({ alt, ...props }) => (
              <MediaWrapper>
                <Figure className="text-center">
                  <Figure.Image {...props} className="img-fluid" />
                  {alt && <Figure.Caption>{alt}</Figure.Caption>}
                </Figure>
              </MediaWrapper>
            ),
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                {children}
              </a>
            ),
            p: ({ children }) => <p className="my-3">{children}</p>,
            iframe: ({ src, title }) => (
              <MediaWrapper>
                <div className="ratio ratio-16x9 w-75 mx-auto mb-3 shadow border rounded">
                  <iframe className="embed-responsive-item" src={src} allowFullScreen title={title}></iframe>
                </div>
              </MediaWrapper>
            )
          }}
          remarkPlugins={[remarkGfm]}
        >
          {post.content_md}
        </ReactMarkdown>
      </Col>
    </Row>
  );
};

const MediaWrapper = ({ children }: { children: React.ReactNode }) => (
  <Row className="justify-content-center my-4">
    <Col className="d-flex justify-content-center">{children}</Col>
  </Row>
);

const PostFooter = ({ post }: { post: Post }) => {
  return (
    <Row className="mt-5 text-background">
      <Col>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top pt-3">
          <div className="mb-3 mb-md-0">
            You can read more posts like this <Link to="/posts?tags=abc">here</Link>.
          </div>
          <SocialShareIcons title={post.title} url={window.location.href} text="Share this post &rarr;" />
        </div>
      </Col>
    </Row>
  );
};

import { Container, Row, Col } from "react-bootstrap";
import { post } from "@data";
import { FeaturedMedia, SocialShareIcons, TagBadgeList } from "@components";
import { MediaTypes } from "@entities";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const PostPage = () => {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid className="mt-5">
      <PostHeader />
      <PostBody />
      <PostFooter />
    </Container>
  );
};

export default PostPage;

const PostHeader = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="mb-0 me-3">{post.title}</h1>
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
        <Col className="d-flex justify-content-between align-items-center text-muted">
          <h2 className="h5 fw-light">{post.subtitle}</h2>
          <p className="fst-italic mb-0 fw-light">
            Posted on <time>{post.date}</time> by {post.author}.
          </p>
        </Col>
      </Row>
    </>
  );
};

const PostBody = () => {
  return (
    <>
      <Row>
        <Col>
          <ReactMarkdown>{post.description_md}</ReactMarkdown>
        </Col>
      </Row>
      <Row className="justify-content-center m-4">
        <Col className="text-center">
          <FeaturedMedia title={post.featured_media.title} type={post.featured_media.type as MediaTypes} url={post.featured_media.url} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ReactMarkdown>{post.content_md}</ReactMarkdown>
        </Col>
      </Row>
    </>
  );
};

const PostFooter = () => {
  return (
    <Row className="mt-5">
      <Col>
        <div className="d-flex justify-content-between align-items-center border-top pt-3">
          <div>
            You can read more posts like this <Link to="/posts?tags=abc">here</Link>.
          </div>
          <SocialShareIcons title={post.title} url={window.location.href} text="Share this post &rarr; " />
        </div>
      </Col>
    </Row>
  );
};

import { FeaturedMedia, SocialShareIcons, TagBadgeList } from "@components";
import { post } from "@data";
import { MediaTypes } from "@entities";
import { Col, Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const PostPage = () => {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid className="mt-5 px-3 px-md-5">
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
      <Row className="mb-3">
        <Col>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
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
          <p className="fst-italic mb-0 fw-light text-end text-md-start text-background">
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
        <Col className="text-background">
          <ReactMarkdown>{post.description_md}</ReactMarkdown>
        </Col>
      </Row>
      <Row className="justify-content-center my-4 ">
        <Col className="text-center text-background">
          <FeaturedMedia title={post.featured_media.title} type={post.featured_media.type as MediaTypes} url={post.featured_media.url} />
        </Col>
      </Row>
      <Row>
        <Col className="text-background">
          <ReactMarkdown>{post.content_md}</ReactMarkdown>
        </Col>
      </Row>
    </>
  );
};

const PostFooter = () => {
  return (
    <Row className="mt-5 text-background">
      <Col>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top pt-3">
          <div className="mb-3 mb-md-0">
            You can read more posts like this <Link to="/posts?tags=abc">here</Link>.
          </div>
          <SocialShareIcons title={post.title} url={window.location.href} text="Share this post &rarr; " />
        </div>
      </Col>
    </Row>
  );
};

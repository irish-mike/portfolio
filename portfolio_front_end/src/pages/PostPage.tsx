import { Container, Row, Col } from "react-bootstrap";
import { post } from "@data";
import { FeaturedMedia, TagBadgeList } from "@components";
import { MediaTypes } from "@entities";

// TODO - Related Articles Component
// TODO - Render html content with markdown

const PostPage = () => {
  return (
    <Container fluid className="mt-5">
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
      <Row className="pt-3">
        <Col>
          <h2 className="h5 text-muted">{post.subtitle}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{ __html: post.description_html }}></div>
        </Col>
      </Row>
      <Row className="justify-content-center m-4">
        <Col className="text-center">
          <FeaturedMedia title={post.featured_media.title} type={post.featured_media.type as MediaTypes} url={post.featured_media.url} />
        </Col>
      </Row>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{ __html: post.content_html }}></div>
        </Col>
      </Row>
      <Row className="mt-5 text-end">
        <Col>
          <p className="fst-italic text-muted">
            Posted on <time>{post.date}</time> by {post.author}.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PostPage;

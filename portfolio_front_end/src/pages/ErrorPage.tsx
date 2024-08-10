import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Footer, NavbarMain } from "@components";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Container className="d-flex flex-column min-vh-100">
      <NavbarMain />
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center text-center">
        <Col>
          {isRouteErrorResponse(error) ? (
            <>
              <h1 className="display-1 text-danger">404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
            </>
          ) : (
            <>
              <h1 className="display-1 text-danger">Oops!</h1>
              <h2 className="mb-4">Something Went Wrong</h2>
              <p className="mb-4">An unexpected error has occurred. Please try again later.</p>
            </>
          )}
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default ErrorPage;

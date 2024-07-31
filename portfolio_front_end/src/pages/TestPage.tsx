import { Container, Row, Col, Button, ButtonGroup, Alert, Badge, Card } from "react-bootstrap";

const TestPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Test Page</h1>
          <p>
            This is a paragraph of text to demonstrate the styling of text elements. guild navigator prana-bindu prana-bindu prescience axlotl Shai-Hulud CHOAM Harkonnen desert sardaukar worm CHOAM desert mentat CHOAM Bene crysknife spice Harkonnen spice Shaitan abomination awareness Shaitan
            gesserit guild navigator prana-bindu prana-bindu prescience axlotl Shai-Hulud CHOAM Harkonnen desert sardaukar worm CHOAM desert mentat CHOAM Bene crysknife spice Harkonnen spice Shaitan abomination awareness Shaitan gesserit
          </p>
          <hr />
          <h2>Buttons</h2>
          <Button variant="primary" className="m-2">
            Primary
          </Button>
          <Button variant="secondary" className="m-2">
            Secondary
          </Button>
          <Button variant="success" className="m-2">
            Success
          </Button>
          <Button variant="danger" className="m-2">
            Danger
          </Button>
          <Button variant="warning" className="m-2">
            Warning
          </Button>
          <Button variant="info" className="m-2">
            Info
          </Button>
          <Button variant="light" className="m-2">
            Light
          </Button>
          <Button variant="dark" className="m-2">
            Dark
          </Button>
          <ButtonGroup aria-label="Basic example" className="my-3">
            <Button variant="primary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="primary">Right</Button>
          </ButtonGroup>
          <hr />
          <h2>Links</h2>
          <a href="#" className="m-2">
            Default Link
          </a>
          <a href="#" className="m-2 text-primary">
            Primary Link
          </a>
          <a href="#" className="m-2 text-secondary">
            Secondary Link
          </a>
          <a href="#" className="m-2 text-success">
            Success Link
          </a>
          <a href="#" className="m-2 text-danger">
            Danger Link
          </a>
          <a href="#" className="m-2 text-warning">
            Warning Link
          </a>
          <a href="#" className="m-2 text-info">
            Info Link
          </a>
          <a href="#" className="m-2 text-light bg-dark">
            Light Link
          </a>
          <a href="#" className="m-2 text-dark">
            Dark Link
          </a>
          <hr />
          <h2>Badges</h2>
          <h3>
            Example heading <Badge variant="secondary">New</Badge>
          </h3>
          <Button variant="primary">
            Notifications <Badge variant="light">4</Badge>
          </Button>
          <hr />
          <h2>Alerts</h2>
          <Alert variant="primary">This is a primary alert—check it out!</Alert>
          <Alert variant="secondary">This is a secondary alert—check it out!</Alert>
          <Alert variant="success">This is a success alert—check it out!</Alert>
          <Alert variant="danger">This is a danger alert—check it out!</Alert>
          <Alert variant="warning">This is a warning alert—check it out!</Alert>
          <Alert variant="info">This is an info alert—check it out!</Alert>
          <Alert variant="light">This is a light alert—check it out!</Alert>
          <Alert variant="dark">This is a dark alert—check it out!</Alert>
          <hr />
          <h2>Card</h2>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TestPage;

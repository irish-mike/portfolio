import { Card, Placeholder } from "react-bootstrap";
import placeholder from "../../../assets/images/placeholders/600x400.svg"; // Using the alias defined in tsconfig.json

const ProjectCardSkeleton = () => {
  return (
    <Card>
      <Card.Img variant="top" src={placeholder} />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};

export default ProjectCardSkeleton;

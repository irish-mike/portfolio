import { Card, Placeholder } from "react-bootstrap";
import placeholder from "@images/placeholders/600x400.svg";

const PostCardSkeleton = () => {
  return (
    <Card>
      <Card.Img variant="top" src={placeholder} />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};

export default PostCardSkeleton;

import { Badge } from "react-bootstrap";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge className="ms-auto" bg="secondary">
      {score}
    </Badge>
  );
};

export default CriticScore;

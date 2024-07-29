import { Badge, Stack } from "react-bootstrap";

interface Props {
  tags: string[];
}

const TagBadgeList = ({ tags }: Props) => {
  return (
    <Stack direction="horizontal" gap={2} className="align-items-end mx-3">
      {tags.map((tag, index) => (
        <Badge bg="secondary" key={index}>
          {tag}
        </Badge>
      ))}
    </Stack>
  );
};

export default TagBadgeList;

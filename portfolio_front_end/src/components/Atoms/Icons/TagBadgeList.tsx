import { Badge, Stack } from "react-bootstrap";

interface Props {
  tags: string[];
}

const TagBadgeList = ({ tags }: Props) => {
  return (
    <Stack direction="horizontal" gap={2} className="align-items-end">
      {tags.map((tag, index) => (
        <Badge key={index}>{tag}</Badge>
      ))}
    </Stack>
  );
};

export default TagBadgeList;

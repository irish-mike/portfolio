import { Badge } from "react-bootstrap";

interface Props {
  tags: string[];
}

const TagBadgeList = ({ tags }: Props) => {
  return (
    <div className="d-flex flex-wrap gap-2 tag-badge-list justify-content-end">
      {tags.map((tag, index) => (
        <Badge key={index} className="tag-badge">
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default TagBadgeList;

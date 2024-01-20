import { useState } from "react";

interface Props {
  children: string;
  charCount: number;
}

const ExpandableText = ({ children, charCount = 100 }: Props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const shouldDisplayButton = children.length > charCount;

  const displayText = showMore
    ? children
    : `${children.substring(0, charCount)}...`;

  return (
    <div>
      {displayText}
      {shouldDisplayButton && (
        <button className="btn btn-link" onClick={toggleShowMore}>
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;

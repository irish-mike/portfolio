import React from "react";

interface Props {
  children: React.ReactNode; // Use children prop
  rowSpan: number;
  colSpan: number;
  offset?: boolean;
}

const BentoGridItem = ({
  children,
  rowSpan,
  colSpan,
  offset = false,
}: Props) => {
  const style = {
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
  };

  let css = "bento-box-item " + (offset ? "offset-item" : "");

  return (
    <div className={css} style={style}>
      {children} {/* Render children here */}
    </div>
  );
};

export default BentoGridItem;

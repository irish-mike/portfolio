interface Props {
  content: string;
  rowSpan: number;
  colSpan: number;
  offset?: boolean;
}

const BentoGridItem = ({
  content,
  rowSpan,
  colSpan,
  offset = false,
}: Props) => {
  const baseHeight = 50; // Base height for a single row
  const style = {
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
    height: `${baseHeight * rowSpan}px`, // Calculate height based on rowSpan
  };

  let css = "bento-box-item " + (offset ? "offset-item" : "");

  return (
    <div className={css} style={style}>
      {content}
    </div>
  );
};

export default BentoGridItem;

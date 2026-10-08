import { useState, type ReactElement } from "react";

type Props = {
  message: string;
};

const PostLoadError = ({ message }: Props): ReactElement => {
  const [date] = useState(() => new Date());

  return (
    <p className="post-load-error" role="alert">
      <span className="post-load-error-label" aria-hidden="true">[ERROR]</span>
      <time className="post-load-error-date" dateTime={date.toISOString()}>
        {date.toLocaleString("sv-SE", { hour12: false })}
      </time>
      <span>{message}</span>
    </p>
  );
};

export default PostLoadError;

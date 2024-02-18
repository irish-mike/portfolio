import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BentoBox = ({ children }: Props) => {
  return <div className="bento-box">{children}</div>;
};

export default BentoBox;

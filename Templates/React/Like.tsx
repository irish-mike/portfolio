import { useState } from "react";
import { RiAliensFill, RiAliensLine } from "react-icons/ri";

interface Props {
  colour: string;
  onClick: () => void;
}

const Like = ({ colour, onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return status ? (
    <div onClick={() => toggle()}>
      <RiAliensFill color={colour} size={128} />
    </div>
  ) : (
    <div onClick={() => toggle()}>
      <RiAliensLine color={colour} size={128} />
    </div>
  );
};

export default Like;

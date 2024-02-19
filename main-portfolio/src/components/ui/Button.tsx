interface Props {
  children: string;
  colour?: string;
  onClick: () => void;
}

const Button = ({ children, colour = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

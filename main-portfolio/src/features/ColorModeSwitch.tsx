import { Form } from "react-bootstrap";
import useThemeSwitcher from "src/hooks/useThemeSwitcher";

interface Props {
  label: string;
}

const ColorModeSwitch = ({ label }: Props) => {
  const { theme, toggleTheme } = useThemeSwitcher();

  return (
    <Form.Check
      type="switch"
      id="color-mode-switch"
      label={label}
      onChange={toggleTheme}
      checked={theme === "dark"}
    />
  );
};

export default ColorModeSwitch;

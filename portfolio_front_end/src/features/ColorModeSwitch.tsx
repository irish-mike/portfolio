// ColorModeSwitch.tsx
import { useThemeStore } from "@state";
import { Form } from "react-bootstrap";

interface Props {
  label: string;
}

const ColorModeSwitch: React.FC<Props> = ({ label }) => {
  const { theme, toggleTheme } = useThemeStore();

  return <Form.Check type="switch" id="color-mode-switch" label={label} onChange={toggleTheme} checked={theme === "dark"} />;
};

export default ColorModeSwitch;

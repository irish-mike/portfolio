import { Container, Button } from "react-bootstrap";
import { useThemeSwitcher } from "@hooks";
import { ContactFormModal } from "@components";

interface Props {
  title: string;
  description: string;
}

const TextContentSection = ({ title, description }: Props) => {
  const { theme } = useThemeSwitcher();

  return (
    <Container className={`my-5 text-center ${theme}`}>
      <h1 className="display-3 mb-4">{title}</h1>
      <p className="lead mx-auto mt-4" style={{ maxWidth: "600px" }}>
        {description}
      </p>
      <div className="hr-theme-slash-2">
        <div className="hr-line"></div>
        <div className="hr-icon">
          <div className="scroll-indicator">
            <span className="arrow-down"></span>
          </div>
        </div>
        <div className="hr-line"></div>
      </div>
      <ContactFormModal trigger={<Button className="w-25 p-2 rounded call-to-action-button">Get in touch</Button>} />
    </Container>
  );
};

export default TextContentSection;

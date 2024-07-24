import { Container, Button } from "react-bootstrap";
import useThemeSwitcher from "../../../hooks/useThemeSwitcher";
import ContactFormModal from "../../Molecules/Forms/ContactFromModel";


interface Props {
  title: string;
  description: string;
}

const TextContentSection = ({ title, description }: Props) => {
  const { theme } = useThemeSwitcher();

  return (
    <section className={`text-center ${theme}`}>
      <Container>
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
        <ContactFormModal trigger={<Button variant="outline-dark" className="w-25 p-2 m-4 call-to-action-button">Get in touch</Button>} />
      </Container>
    </section>
  );
};

export default TextContentSection;

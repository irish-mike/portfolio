import React from "react";
import { Container } from "react-bootstrap";
import useThemeSwitcher from "../hooks/useThemeSwitcher"; // Adjust the import path as necessary

interface Props {
  title: string;
  description: string;
}

const TextContentSection = ({ title, description }: Props) => {
  const { theme } = useThemeSwitcher(); // Get the current theme

  // Optionally, you can apply different classes based on the theme
  // const sectionClass = theme === 'dark' ? 'section-dark' : 'section-light';

  return (
    <section className={`text-center ${theme}`}>
      <Container>
        <h1 className="display-3 mb-4">{title}</h1>
        <div className="hr-theme-slash-2">
          <div className="hr-line"></div>
          <div className="hr-icon">
            <div className="scroll-indicator">
              <span className="arrow-down"></span>
            </div>
          </div>
          <div className="hr-line"></div>
        </div>
        <p className="lead mx-auto mt-4" style={{ maxWidth: "600px" }}>
          {description}
        </p>
      </Container>
    </section>
  );
};

export default TextContentSection;

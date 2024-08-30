import React, { useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { BsEnvelopeAt, BsPersonVcard, BsChatLeftText } from "react-icons/bs";

const ContactForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height to auto to shrink on delete
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust height based on scrollHeight
    }
  };

  return (
    <Form>
      <Row className="g-4 mb-3">
        <Col sm={12} md={6}>
          <Form.Group controlId="formName" className="position-relative input-with-icon mt-2">
            <Form.Label className="d-none">Name</Form.Label>
            <Form.Control type="text" placeholder="Name" required className="border-0 w-100" />
            <BsPersonVcard className="icon" />
            <div className="custom-bottom-border"></div>
          </Form.Group>
        </Col>
        <Col sm={12} md={6}>
          <Form.Group controlId="formEmail" className="position-relative input-with-icon my-3">
            <Form.Label className="d-none">E-mail</Form.Label>
            <Form.Control type="email" placeholder="E-mail" required className="border-0 w-100" />
            <BsEnvelopeAt className="icon" />
            <div className="custom-bottom-border"></div>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formMessage" className="position-relative input-with-icon my-3">
        <Form.Label className="d-none">Message</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder="Message" required className="border-0 w-100" ref={textareaRef} onInput={handleInput} />
        <BsChatLeftText className="icon" />
        <div className="custom-bottom-border"></div>
      </Form.Group>
      <div className="text-center">
        <Button className="button-aligned border-0 my-4" type="submit" onClick={onSubmit}>
          SUBMIT
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;

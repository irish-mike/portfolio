import axios from "axios"; // Import Axios
import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsChatLeftText, BsEnvelopeAt, BsPersonVcard } from "react-icons/bs";

const ContactForm: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<string | null>(null); // To track the submission status

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height to auto to shrink on delete
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust height based on scrollHeight
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://yourdomain.com/contact.php", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        transformRequest: [(data) => new URLSearchParams(data).toString()]
      });

      if (response.status === 200) {
        setFormStatus("Message sent successfully!");
      } else {
        setFormStatus("Error sending message. Please try again later.");
      }
    } catch (error) {
      setFormStatus("Error sending message. Please check your connection and try again.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="g-4 mb-3">
        <Col sm={12} md={6}>
          <Form.Group controlId="formName" className="position-relative input-with-icon mb-3">
            <Form.Label className="d-none">Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required className="border-0 w-100" />
            <BsPersonVcard className="icon" />
            <div className="custom-bottom-border"></div>
          </Form.Group>
        </Col>
        <Col sm={12} md={6}>
          <Form.Group controlId="formEmail" className="position-relative input-with-icon mb-3">
            <Form.Label className="d-none">E-mail</Form.Label>
            <Form.Control type="email" placeholder="E-mail" name="email" value={formData.email} onChange={handleChange} required className="border-0 w-100" />
            <BsEnvelopeAt className="icon" />
            <div className="custom-bottom-border"></div>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formMessage" className="position-relative input-with-icon mb-3">
        <Form.Label className="d-none">Message</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder="Message" name="message" value={formData.message} onChange={handleChange} required className="border-0 w-100" ref={textareaRef} onInput={handleInput} />
        <BsChatLeftText className="icon" />
        <div className="custom-bottom-border"></div>
      </Form.Group>
      <div className="text-center">
        <Button className="button-aligned border-0 my-4" type="submit">
          SUBMIT
        </Button>
        {formStatus && <p>{formStatus}</p>} {/* Display form status */}
      </div>
    </Form>
  );
};

export default ContactForm;

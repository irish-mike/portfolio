import { useContactForm } from "@hooks";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsChatLeftText, BsEnvelopeAt, BsPersonVcard } from "react-icons/bs";

const ContactForm = () => {
  const { formData, validated, formStatus, isError, pending, textareaRef, handleInputChange, handleResizeTextArea, handleSubmit } = useContactForm();

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="g-4 mb-3">
        <Col sm={12} md={6}>
          <Form.Group controlId="formName" className="position-relative input-with-icon mb-3">
            <Form.Label className="d-none">Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} required className={`border-0 w-100 ${validated && !formData.name ? "is-invalid" : ""}`} />
            <BsPersonVcard className={`icon ${validated && !formData.name ? "text-danger" : ""}`} />
            <div className="custom-bottom-border"></div>
          </Form.Group>
        </Col>
        <Col sm={12} md={6}>
          <Form.Group controlId="formEmail" className="position-relative input-with-icon mb-3">
            <Form.Label className="d-none">E-mail</Form.Label>
            <Form.Control type="email" placeholder="E-mail" name="email" value={formData.email} onChange={handleInputChange} required className={`border-0 w-100 ${validated && !formData.email ? "is-invalid" : ""}`} />
            <BsEnvelopeAt className={`icon ${validated && !formData.email ? "text-danger" : ""}`} />
            <div className="custom-bottom-border"></div>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formMessage" className="position-relative input-with-icon mb-3">
        <Form.Label className="d-none">Message</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder="Message" name="message" value={formData.message} onChange={handleInputChange} required className={`border-0 w-100 ${validated && !formData.message ? "is-invalid" : ""}`} ref={textareaRef} onInput={handleResizeTextArea} />
        <BsChatLeftText className={`icon ${validated && !formData.message ? "text-danger" : ""}`} />
        <div className="custom-bottom-border"></div>
      </Form.Group>
      <div className="text-center">
        <Button className="button-aligned border-0 my-4" type="submit" disabled={pending}>
          {pending ? "SUBMITTING..." : "SUBMIT"}
        </Button>
        {formStatus && <p className={isError ? "text-danger" : "text-success"}>{formStatus}</p>}
      </div>
    </Form>
  );
};

export default ContactForm;

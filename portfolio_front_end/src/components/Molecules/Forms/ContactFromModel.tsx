import React, { ReactElement, useState } from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "./ContactForm";

interface ContactFormModalProps {
  trigger: ReactElement;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ trigger }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const triggerWithProps = React.cloneElement(trigger, {
    onClick: handleShow
  });

  return (
    <>
      {triggerWithProps}

      <Modal size={"lg"} show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">
            <strong>GET IN TOUCH</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm onSubmit={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactFormModal;

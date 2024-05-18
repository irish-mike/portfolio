// ContactFormModal.tsx
import React, { ReactElement, useState } from 'react';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { BsEnvelopeAt, BsPersonVcard, BsChatLeftText } from "react-icons/bs";

interface ContactFormModalProps {
    trigger: ReactElement;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ trigger }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const triggerWithProps = React.cloneElement(trigger, {
        onClick: handleShow,
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
                    <Form>
                        <Row className="mb-4 mt-4">
                            <Col>
                                <Form.Group controlId="formName" className="position-relative input-with-icon mb-3">
                                    <Form.Label className="d-none">Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        required
                                        className="border-0"
                                    />
                                    <BsPersonVcard className="icon" />
                                    <div className="custom-bottom-border"></div>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formEmail" className="position-relative input-with-icon mb-3">
                                    <Form.Label className="d-none">E-mail</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="E-mail"
                                        required
                                        className="border-0"
                                    />
                                    <BsEnvelopeAt className="icon" />
                                    <div className="custom-bottom-border"></div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formMessage" className="position-relative input-with-icon mb-4">
                            <Form.Label className="d-none">Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Message"
                                required
                                className="border-0"
                            />
                            <BsChatLeftText className="icon" />
                            <div className="custom-bottom-border"></div>
                        </Form.Group>
                        <div className="text-center">
                            <Button className="w-75 mt-4 mb-4" variant="success" type="submit" onClick={handleClose}>
                                SUBMIT
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ContactFormModal;

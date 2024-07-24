import React from 'react';
import { Row, Col, Stack } from 'react-bootstrap';


interface FooterProps {
    copyright: string;
    children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ copyright, children }) => {
    return (
        <footer className="mt-4">
            <Row className="align-items-center">
                <Col className="text-start py-3">
                    <small>{copyright}</small>
                </Col>
                <Col className="text-end py-3">
                    <Stack direction="horizontal" gap={3} className="justify-content-end">
                        {children}
                    </Stack>
                </Col>
            </Row>
            <hr />
        </footer>
    );
}

export default Footer;

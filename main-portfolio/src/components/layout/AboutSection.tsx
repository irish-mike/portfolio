import { Col, Row, Image, Button } from "react-bootstrap";
import developer_image from "@images/Developer.jpg"; // Using the alias defined in tsconfig.json
import SocialIconGroup from "../ui/SocialIconGroup";
import { ReactNode } from "react";
import ContactFormModal from "../form/ContactFromModel";

interface Props {
    title: string;
    children: ReactNode;
}

const AboutSection = ({ title, children }: Props) => {
    return (
        <section className="mt-5 p-4">
            <Row>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <Image src={developer_image} rounded fluid />
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="m-auto">{title}</h2>
                        <SocialIconGroup />
                    </div>
                    <hr />
                    <div className="mb-5">
                        {children}
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default AboutSection;

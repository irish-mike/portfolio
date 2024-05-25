import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
    return (
        <Row>
            <Col>
                <h1>{term}</h1>
            </Col>
            <Col>
                {children}
            </Col>
        </Row>
    )
}

export default DefinitionItem;